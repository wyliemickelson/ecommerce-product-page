const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: '/src/js/index.js',
	output: {
		path: path.resolve(__dirname, '../dist'),
		assetModuleFilename: 'assets/[name][ext]',
		clean: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/template.html'
		}),
		new CopyPlugin({
			patterns: [
				{ from: 'src/images', to: 'assets' }
			]
		})
	],
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ['html-loader']
			}
		]
	}
};