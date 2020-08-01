const HtmlWebPackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    publicPath: "http://localhost:3000/",
  },
  devServer: {
    port: 3000,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      templateParameters: {
        designSystemUrl: "http://localhost:3004/remoteEntry.js",
        headerUrl: "http://localhost:3001/remoteEntry.js",
        viewFlightsUrl: "http://localhost:3002/remoteEntry.js",
        searchFlightsUrl: "http://localhost:3003/remoteEntry.js",
      },
    }),
  ],
});
