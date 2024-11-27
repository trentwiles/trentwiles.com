const { execSync } = require('child_process');

function helperMakeLinkHTML() {
  const fullHash = execSync('git rev-parse HEAD').toString().trim()
  return `<a href="https://github.com/trentwiles/trentwiles.com/commit/${fullHash}">${fullHash.substring(0,5)}</a>`
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addGlobalData("commit", helperMakeLinkHTML());
  eleventyConfig.addGlobalData("buildTimestamp", Math.floor(Date.now()));
  return {
    dir: {
      input: "content", // markdown / liquid path
      output: "_site", // build path
    },
  };
};