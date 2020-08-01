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
      name: "viewFlights",
      library: {
        type: "var",
        name: "viewFlights",
      },
      filename: "remoteEntry.js",
      exposes: {
        "./ViewFlights": "./src/ViewFlights",
      },
      remotes: {
        design: "design",
      },
      shared: ["react", "react-dom", "styled-components"],
    }),
  ],
};
