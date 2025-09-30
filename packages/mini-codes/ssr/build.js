const path = require('path');
const webpack = require("webpack");

const buildForServer = () => webpack({
  mode: 'none',
  target: 'node',
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: 'server.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
})

const buildForClient = () => webpack({
  mode: 'development',
  target: 'web',
  entry: './client.js',
  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: 'client.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
})

Promise.all([buildForServer().run(), buildForClient().run()]).then(() => {
  console.log("build done 📦📦📦")
  console.log("node server start at 3000 🚀🚀🚀")
})