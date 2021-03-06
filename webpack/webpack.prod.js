const ExtractTextPlugin = require('extract-text-webpack-plugin');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');

const { PATHS } = require('./webpack.common.js');

const prodConfig = {
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							/*options: {
								modules: true,
								sourceMap: true
							}*/
						}
					]
				})
			},
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use : {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style-bundle.[hash].css'),
		new PurifyCSSPlugin({
			paths: glob.sync(`${PATHS.src}/*.html`)
		})
	]
};

module.exports = prodConfig;