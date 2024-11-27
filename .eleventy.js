const { execSync } = require('child_process');
const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config()

function helperMakeLinkHTML() {
  const fullHash = execSync('git rev-parse HEAD').toString().trim()
  return `<a href="https://github.com/trentwiles/trentwiles.com/commit/${fullHash}" target="_blank">${fullHash.substring(0,5)}</a>`
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

module.exports = async function (eleventyConfig) {
  eleventyConfig.addGlobalData("commit", helperMakeLinkHTML());
  eleventyConfig.addGlobalData("buildTimestamp", Math.floor(Date.now()));
  eleventyConfig.addGlobalData("starCount", await pullStars())
  return {
    dir: {
      input: "content", // markdown / liquid path
      output: "_site", // build path
    },
  };
};