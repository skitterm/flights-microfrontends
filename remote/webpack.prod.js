const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  output: {
    publicPath: "http://localhost:9001/",
  },
  devServer: {
    port: 9001,
  },
});
