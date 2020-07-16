const { DefinePlugin } = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");

module.exports = merge(common, {
  mode: "production",
  output: {
    publicPath: "http://18.219.3.164:32778/",
  },
  plugins: [
    new DefinePlugin({
      REMOTE_URL: JSON.stringify("http://18.219.3.164:32781"),
    }),
  ],
});
