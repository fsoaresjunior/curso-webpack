const path = require('path');
const webpack = require('webpack');

const PATHS = {
	src: path.join(__dirname, '../src'),
	build: path.resolve(__dirname, '../dist')
}

module.exports = {
	entry: {
		bundle: `${PATHS.src}/index.js`,
		app: `${PATHS.src}/index2.js`
	},
	output: {
		//filename: '[name].[chunkhash:5].js',
		filename: '[name].js',
		path: PATHS.build
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					}
				]
			},
			{
				test: /\.(png|jpg|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
				        /*minimize: true,
				        removeComments: false,
				        collapseWhitespace: false*/
				    }
				}
			}
		]
	}
}