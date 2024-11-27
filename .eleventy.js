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

module.exports = async function (eleventyConfig) {
  eleventyConfig.addGlobalData("commit", helperMakeLinkHTML());
  eleventyConfig.addGlobalData("commitName", await pullLastComMessage())
  eleventyConfig.addGlobalData("buildTimestamp", Math.floor(Date.now()));
  eleventyConfig.addGlobalData("starCount", await pullStars())
  return {
    dir: {
      input: "content", // markdown / liquid path
      output: "_site", // build path
    },
  };
};