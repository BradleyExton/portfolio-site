const config = require("./src/config");
const { metadata, manifest } = config;
module.exports = {
  siteMetadata: {
    ...metadata,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        ...manifest,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`poppins\:300,400,500, 600,700`, `caveat`],
        display: "swap",
      },
    },
  ],
};
