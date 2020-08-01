const HtmlWebPackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    publicPath: "http://localhost:3001/",
  },
  devServer: {
    port: 3001,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      templateParameters: {
        designSystemUrl: "http://localhost:3004/remoteEntry.js",
      },
    }),
  ],
});
