const path = require("path")
const webpack = require("webpack")
// const FlowStatusWebpackPlugin = require("flow-status-webpack-plugin")

module.exports = {
  devtool: "cheap-module-eval-source-map",
  entry: [
    "webpack-hot-middleware/client",
    "./index",
  ],
  node: {
    fs: 'empty'
  },
  externals: [
    {
      './cptable': 'var cptable',
      './jszip': 'jszip'
    }
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/",
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
//    new FlowStatusWebpackPlugin()
  ],
  resolve: {
    alias: {
      "ag-grid-root" : __dirname + "/node_modules/ag-grid"
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ["babel"],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.css$/,
        loaders: ["style", "css"],
      },
    ],
  }
};
