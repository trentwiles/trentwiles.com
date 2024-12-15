const { execSync } = require('child_process');
const axios = require('axios')
const dotenv = require('dotenv');
const { eventNames } = require('process');

dotenv.config()

const GLOBAL_USER_AGENT = "11ty/trentwiles.com (+https://www.trentwiles.com)"

function helperMakeLinkHTML() {
  const fullHash = execSync('git rev-parse HEAD').toString().trim()
  return `<a href="https://github.com/trentwiles/trentwiles.com/commit/${fullHash}" target="_blank" id="commitHash">${fullHash.substring(0,5)}</a>`
}

async function pullStars() {
  const githubAPI = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 1000,
    headers: {'Authorization': 'Bearer ' + process.env.GITHUB_API, "User-agent": GLOBAL_USER_AGENT}
  });
  var stars = -1;
  await githubAPI.get("/repos/trentwiles/trentwiles.com")
    .then(function (response) {
      stars = response.data.stargazers_count;
    })
    .catch(function (error) {
      console.log(error)
    })

  return stars
}

async function pullLastComMessage() {
  const githubAPI = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 1000,
    headers: {'Authorization': 'Bearer ' + process.env.GITHUB_API, "User-agent": GLOBAL_USER_AGENT}
  });
  var msg = "unable to connect to github API";
  await githubAPI.get("/repos/trentwiles/trentwiles.com/commits/" + execSync('git rev-parse HEAD').toString().trim())
    .then(function (response) {
      msg = response.data.commit.message;
    })
    .catch(function (error) {
      console.log(error)
    })

  return msg
}

async function pullUptimeStatus() {
  const hetrix = axios.create({
    baseURL: 'https://api.hetrixtools.com',
    timeout: 3000,
    headers: {Authorization: 'Bearer ' + process.env.HETRIX_API, "User-agent": GLOBAL_USER_AGENT}
  })

  var msg = ""
  var withErrors = 0

  await hetrix.get("/v3/uptime-monitors")
    .then(function (response) {
      response.data["monitors"].forEach(element => {
        console.log(element["uptime_status"])
        if (element["uptime_status"] != "up") {
          withErrors++
        }
      });
    })
    .catch(function (error) {
      msg = "Unable to connect to Hetrix Uptime API"
      console.log(error)
    })

  if (withErrors > 0) {
    return `<span style="color: red;">${withErrors} Service(s) Are Offline</span>`
  }else {
    if (msg == "") {
      return `<span style="color: green;">All Services Online</span>`
    } else {
      return `<code>Unable to Connect to Hetrix API</code>`
    }
  }
}

async function pullVerboseUptimeStatus() {
  // creates a table to display on the status page
  const hetrix = axios.create({
    baseURL: 'https://api.hetrixtools.com',
    timeout: 3000,
    headers: {Authorization: 'Bearer ' + process.env.HETRIX_API, "User-agent": GLOBAL_USER_AGENT}
  })

  var table = `
  <section>
    <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Server Location</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
  `

  await hetrix.get("/v3/uptime-monitors")
    .then(function (response) {
      response.data["monitors"].forEach(element => {
        table += `
        <tr>
            <td>${element["name"]}></td>
            <td>${element["resolve_address_info"]["Region"]}, ${element["resolve_address_info"]["Country"]} <a href="https://radar.cloudflare.com/${element["resolve_address_info"]["ASN"]}" _target="blank">(${element["resolve_address_info"]["ASN"]})</a></td>
            <td></td>
          </tr>
        `
      });
    })
    .catch(function (error) {
      table += "<code>Unable to connect to Hetrix Uptime API</code>"
      console.log(error)
    })

    table += `
          </tbody>
        </table>
    </section>
    `

    return table
}

module.exports = async function (eleventyConfig) {
  eleventyConfig.addGlobalData("commit", helperMakeLinkHTML());
  eleventyConfig.addGlobalData("commitName", await pullLastComMessage())
  eleventyConfig.addGlobalData("buildTimestamp", Math.floor(Date.now()));
  eleventyConfig.addGlobalData("starCount", await pullStars())
  eleventyConfig.addGlobalData("uptime", await pullUptimeStatus())
  eleventyConfig.addGlobalData("uptimeTable", await pullVerboseUptimeStatus())
  // fix sorting error in "blog" sections
  eleventyConfig.addFilter("sortByDateDesc", (items) => {
      return items.slice().sort((a, b) => b.date - a.date);
  });
  return {
    dir: {
      input: "content", // markdown / liquid path
      output: "_site", // build path
    },
  };
};