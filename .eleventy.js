// Eleventy Config file
// For more on Eleventy see https://www.11ty.dev/

module.exports = function(eleventyConfig) {
    // Output directory: _site
  
    // Copy `images/` to `_site/images`
    eleventyConfig.addPassthroughCopy("src/images");
    // Watch for changes
    eleventyConfig.addWatchTarget("src/images");

    // Copy `css/` to `_site/css`
    eleventyConfig.addPassthroughCopy("src/css");
    // Watch for changes
    eleventyConfig.addWatchTarget("src/css");

    return {
		dir: {
			input: "src",
			output: "_site",
		},
	};
  
  };