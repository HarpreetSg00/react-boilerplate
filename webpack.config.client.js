const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const baseConfig = require('./webpack.base');

require('dotenv').config();

const config = {
  target: 'web',
  node: {
    fs: 'empty',
  },
  context: path.resolve('./src'),
  // entry file
  entry: './client/index.js',
  // output
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all',
  //       },
  //     },
  //   },
  // },
  plugins: [
    new webpack.DefinePlugin({
      IS_SERVER: false,
      IS_CLIENT: true,
      __VERSION__: new Date().getTime(),
    }),
    new CleanWebpackPlugin(['public']),
    new CopyWebpackPlugin([
      {
        from: './client/assets',
        to: './',
      },
    ]),
    new ExtractTextPlugin({
      filename: 'css/style.css',
      allChunks: true,
    }),
    new Dotenv(),
    new CompressionPlugin(),
  ],
};

module.exports = merge(baseConfig, config);
