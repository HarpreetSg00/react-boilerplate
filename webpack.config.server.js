const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const historyFallback = require('connect-history-api-fallback');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const nodeExternals = require("webpack-node-externals");

const config = {
  // Building for node not broser
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  context: path.resolve('./src'),
  // entry file
  entry: './server/index.js',
  //output
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_SERVER: true,
      IS_CLIENT: false,
    }),
    new BrowserSyncPlugin({
      server: {
        baseDir: ['build'],
        middleware: [historyFallback()],
      },
      port: 3000,
      host: 'localhost',
      open: false,
    }),
    new CleanWebpackPlugin(['build']),
    new ExtractTextPlugin({
      filename: 'css/style.css',
      allChunks: true,
    }),
    new Dotenv(),
    new CompressionPlugin(),
  ],
  externals: [nodeExternals()] // in order to ignore all modules in node_modules folder
};

module.exports = merge(baseConfig, config);
