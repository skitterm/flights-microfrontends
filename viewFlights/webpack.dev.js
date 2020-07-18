const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    publicPath: "http://localhost:3002/",
  },
  devServer: {
    port: 3002,
  },
});
