const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const historyFallback = require('connect-history-api-fallback');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const baseConfig = require('./webpack.base');

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
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.module\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
          MiniCssExtractPlugin.loader,
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
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
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
