const { DefinePlugin } = require("webpack");
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
    new DefinePlugin({
      HEADER_URL: JSON.stringify("http://localhost:3001"),
      VIEW_FLIGHTS_URL: JSON.stringify("http://localhost:3002"),
      SEARCH_FLIGHTS_URL: JSON.stringify("http://localhost:3003"),
    }),
  ],
});
