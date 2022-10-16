const path = require("path");
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@utils": path.resolve(__dirname, "src/utils"),
        "@components": path.resolve(__dirname, "src/components"),
        "@config": path.resolve(__dirname, "src/config"),
        "@styles": path.resolve(__dirname, "src/styles"),
      },
    },
  });
};
