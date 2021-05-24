const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const baseConfig = require('./webpack.base');

require('dotenv').config();

// css loaders
const commonCssLoader = [
  {
    loader: 'postcss-loader',
    options: {
      plugins: () => [autoprefixer(), cssnano()],
    },
  },
  {
    loader: 'sass-loader',
  },
];

// dev mode
const devMode = process.env.MODE === 'development';

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
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.module\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: 'global',
              importLoaders: 2,
              camelCase: true,
              sourceMap: false, // turned off as causes delay
            },
          },
          ...commonCssLoader,
        ],
      },
      {
        test: /\.module\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]_[local]_[hash:base64:5]',
              importLoaders: 2,
              camelCase: true,
              sourceMap: false, // turned off as causes delay
            },
          },
          ...commonCssLoader,
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new webpack.DefinePlugin({
      IS_SERVER: false,
      IS_CLIENT: true,
      __VERSION__: new Date().getTime(),
    }),
    new CopyWebpackPlugin([
      {
        from: './client/assets',
        to: './',
        ignore: ['*.scss'],
      },
    ]),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
    new Dotenv(),
    new CompressionPlugin(),
  ],
};

module.exports = merge(baseConfig, config);
