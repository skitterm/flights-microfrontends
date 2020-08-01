const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "shell",
      library: {
        type: "var",
        name: "shell",
      },
      filename: "remoteEntry.js",
      remotes: {
        header: "header",
        viewFlights: "viewFlights",
        searchFlights: "searchFlights",
        design: "design",
      },
      shared: ["react", "react-dom", "styled-components"],
    }),
  ],
};
