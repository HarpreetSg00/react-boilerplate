const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const historyFallback = require('connect-history-api-fallback');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base');

const config = {
  // Building for node not browser
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  context: path.resolve('./src'),
  // entry file
  entry: './server/index.js',
  // output
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new webpack.DefinePlugin({
      IS_SERVER: true,
      IS_CLIENT: false,
      __VERSION__: new Date().getTime(),
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
  externals: [
    // in order to ignore all modules in node_modules folder
    nodeExternals({
      // we still want imported css from external files to be bundled otherwise 3rd party packages
      // which require us to include their own css would not work properly
      whitelist: /\.css$/,
    }),
  ],
};

module.exports = merge(baseConfig, config);
