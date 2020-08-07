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
      name: "searchFlights",
      library: {
        type: "var",
        name: "searchFlights",
      },
      filename: "remoteEntry.js",
      exposes: {
        "./SearchFlights": "./src/SearchFlights",
      },
      remotes: {
        design: "design",
      },
      shared: ["react", "react-dom", "styled-components"],
    }),
  ],
};
