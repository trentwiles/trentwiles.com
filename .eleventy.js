const { execSync } = require('child_process');
const axios = require('axios')
const dotenv = require('dotenv');
const { eventNames } = require('process');

dotenv.config()

function helperMakeLinkHTML() {
  const fullHash = execSync('git rev-parse HEAD').toString().trim()
  return `<a href="https://github.com/trentwiles/trentwiles.com/commit/${fullHash}" target="_blank" id="commitHash">${fullHash.substring(0,5)}</a>`
}

async function pullStars() {
  const githubAPI = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 1000,
    headers: {'Authorization': 'Bearer ' + process.env.GITHUB_API, "User-agent": "trentwiles.com build"}
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
    headers: {'Authorization': 'Bearer ' + process.env.GITHUB_API, "User-agent": "trentwiles.com build"}
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
    headers: {'Authorization': 'Bearer ' + process.env.HETRIX_API}
  })

  var msg = ""
  var withErrors = 0

  await githubAPI.get("/v3/uptime-monitors/")
    .then(function (response) {
      response.data["monitors"].forEach(element => {
        if (element["uptime_status"] != "up") {
          withErrors++
        }
      });
    })
    .catch(function (error) {
      var msg = "Unable to connect to Hetrix Uptime API"
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

module.exports = async function (eleventyConfig) {
  eleventyConfig.addGlobalData("commit", helperMakeLinkHTML());
  eleventyConfig.addGlobalData("commitName", await pullLastComMessage())
  eleventyConfig.addGlobalData("buildTimestamp", Math.floor(Date.now()));
  eleventyConfig.addGlobalData("starCount", await pullStars())
  eleventyConfig.addGlobalData("uptime", await pullUptimeStatus())
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