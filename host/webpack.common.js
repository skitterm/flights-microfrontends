const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      library: {
        type: "var",
        name: "host",
      },
      filename: "remoteEntry.js",
      remotes: {
        remote: "remote",
      },
      shared: ["react", "react-dom", "styled-components"],
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};