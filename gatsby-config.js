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
  ],
};
