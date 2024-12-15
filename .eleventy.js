const { execSync } = require('child_process');
const axios = require('axios')
const dotenv = require('dotenv');
const { eventNames } = require('process');

dotenv.config()

const GLOBAL_USER_AGENT = "11ty/trentwiles.com (+https://www.trentwiles.com)"

// city -> country flag
const LOCATION_MAP = {
  "london": `<img class="flag flag-gb" src="/img/blank.gif">`,
  "mumbai":`<img class="flag flag-in" src="/img/blank.gif">`,
  "new york": `<img class="flag flag-us" src="/img/blank.gif">`,
  "sydney": `<img class="flag flag-au" src="/img/blank.gif">`,
  "frankfurt": `<img class="flag flag-de" src="/img/blank.gif">`,
  "sao paulo": `<img class="flag flag-br" src="/img/blank.gif">`,
  "singapore": `<img class="flag flag-sg" src="/img/blank.gif">`,
  "amsterdam": `<img class="flag flag-nl" src="/img/blank.gif">`,
  "tokyo": `<img class="flag flag-jp" src="/img/blank.gif">`,
  "san fransisco": `<img class="flag flag-us" src="/img/blank.gif">`,
  "warsaw": `<img class="flag flag-pl" src="/img/blank.gif">`,
}

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
        // Status From Each Monitor
        var cityText = ""
        for (const [city, data] of Object.entries(element["locations"])) {
          cityText += `${LOCATION_MAP[city]} ${city.toUpperCase()} - ${data["response_time"]}ms<br>`
        }

        // Status Text
        var statusHTML = ""
        if (element["uptime_status"] == "up") {
          statusHTML = `<span style="color: green;">Online</span>`
        }else {
          statusHTML = `<span style="color: red;">Offline</span>`
        }

        // Table Itself
        table += `<tr><td>${element["name"]}</td><td>${element["resolve_address_info"]["Region"]}, ${element["resolve_address_info"]["Country"]} <a href="https://radar.cloudflare.com/${element["resolve_address_info"]["ASN"]}" _target="blank">(${element["resolve_address_info"]["ASN"]})</a></td><td>${statusHTML} <br><br> ${cityText}</td></tr>`
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