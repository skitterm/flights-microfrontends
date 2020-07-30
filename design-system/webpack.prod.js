const { DefinePlugin } = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "production",
  output: {
    publicPath: "http://3.22.68.240:32769/",
  },
});
