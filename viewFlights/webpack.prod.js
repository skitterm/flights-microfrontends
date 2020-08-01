const HtmlWebPackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "production",
  output: {
    publicPath: "http://18.219.3.164:32780/",
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      templateParameters: {
        designSystemUrl: "http://3.22.68.240:32769/remoteEntry.js",
      },
    }),
  ],
});
