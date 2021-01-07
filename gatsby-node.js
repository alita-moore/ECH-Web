const path = require("path");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "app": path.resolve(__dirname, "src")
      }
    }
  });
}