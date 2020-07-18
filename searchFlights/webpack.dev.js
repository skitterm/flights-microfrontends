const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    publicPath: "http://localhost:3003/",
  },
  devServer: {
    port: 3003,
  },
});
