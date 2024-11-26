module.exports = function (eleventyConfig) {
    return {
      dir: {
        input: "content", // markdown / liquid path
        output: "_site",    // build path
      },
    };
  };