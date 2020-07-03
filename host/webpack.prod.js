const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  output: {
    publicPath: "http://localhost:9000/",
  },
  devServer: {
    port: 9000,
  },
});
