const path = require('path');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

require('dotenv').config();

const styleConfig = [
	{
		// Module Styles
		test: /\.s[ac]ss$/i,
		use: [
			"isomorphic-style-loader",
			{
				loader: "css-loader",
				options: {
					importLoaders: 1,
					modules: true,
					localIdentName: "[local]--[hash:base64:5]"
				}
			},
			{
				loader: 'postcss-loader',
				options: {
					plugins: () => [autoprefixer(), cssnano()]
				}
			},
			{
				loader: 'sass-loader'
			}
		],
		exclude: [/src\/client\/assets\/scss/, /node_modules/]
	},
	{
		// Global Styles
		test: /\.s[ac]ss$/i,
		use: [
			"isomorphic-style-loader",
			{
				loader: "css-loader",
				options: {
					importLoaders: 1,
					modules: {
						localIdentName: "[local]"
					}
				}
			},
			{
				loader: 'postcss-loader',
				options: {
					plugins: () => [autoprefixer(), cssnano()]
				}
			},
			{
				loader: 'sass-loader'
			}
		],
		include: path.join(__dirname, "src/client/assets/scss/style.scss")
	}
];

module.exports = {
	//run babel on everyfile
	mode: process.env.MODE,
	module: {
		rules: [
			{
				test: /\.js?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['react', 'es2015', 'stage-0']
				}
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['react', 'es2015', 'stage-0']
				}
			},
			...styleConfig,
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 10000,
							mimetype: 'application/font-woff',
							name: 'fonts/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(ttf|eot|svg|ttc)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'fonts/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(jpe?g|png|gif)$/,
				use: [
					{
						loader: 'file-loader',

						options: {
							name: 'images/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.(mp4|ogg|webm)$/,
				use: [
					{
						loader: 'file-loader',

						options: {
							name: 'videos/[name].[ext]'
						}
					}
				]
			},
			{
				test: /\.modernizrrc.js$/,
				use: ['modernizr-loader']
			},
			{
				test: /\.modernizrrc(\.json)?$/,
				use: ['modernizr-loader', 'json-loader']
			}
		]
	},
	resolve: {
		alias: {
			modernizr$: path.resolve(__dirname, '.modernizrrc'),
			containers: path.resolve(__dirname, 'src/client/components/containers/'),
			general: path.resolve(__dirname, 'src/client/components/general/'),
			views: path.resolve(__dirname, 'src/client/components/views/'),
			utils: path.resolve(__dirname, 'src/client/utils/'),
			store: path.resolve(__dirname, 'src/client/store/'),
			"style-loader": "isomorphic-style-loader/useStyles"
		}
	}
};
