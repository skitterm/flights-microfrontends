const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  output: {
    publicPath: "http://localhost:3001/",
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  devServer: {
    port: 3001,
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
      name: "remote",
      library: {
        type: "var",
        name: "remote",
      },
      filename: "remoteEntry.js",
      exposes: {
        "./CoolButton": "./src/CoolButton",
      },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
