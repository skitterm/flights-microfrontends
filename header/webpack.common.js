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
      name: "header",
      library: {
        type: "var",
        name: "header",
      },
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/Header",
      },
      remotes: {
        design: "design",
      },
      shared: ["react", "react-dom", "styled-components"],
    }),
  ],
};
