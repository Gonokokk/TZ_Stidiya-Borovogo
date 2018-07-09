const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	context: path.resolve(__dirname, './src'),
	entry: {
		app: './app.js'
	},
	output: {
		path: path.resolve(__dirname, './build'),
		filename: '[name].bundle.js'
},
	module: {
	  rules: [
	    {
	      test: /\.scss$/,
	      use: [ 'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
	      ]
	    },
	    { test: /\.(png|jpg|otf|ttf)$/, 
	      loader: 'url-loader?limit=100000' }
	  ]
	},
	plugins: [
	    new MiniCssExtractPlugin({
	    	filename: 'style.css'
	    })
	]
};