const withMDX = require("@next/mdx")({ extension: /\.mdx$/ });

module.exports = withMDX({
    i18n: {
        locales: ["en", "es"],
        defaultLocale: "en",
        localeDetection: true,
    },
    pageExtenstions: ["js", "jsx", "mdx"]
});

// i18n: {
//   locales: ["en", "es"],
//   defaultLocale: "en",
//   localeDetection: true,
// },
