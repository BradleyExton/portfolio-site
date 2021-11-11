const config = require("./src/config");
const { metadata } = config;
module.exports = {
  siteMetadata: {
    ...metadata,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
  ],
};
