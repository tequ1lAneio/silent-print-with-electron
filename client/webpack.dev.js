const path = require('path')
const webpack = require('webpack')

module.exports = {
	mode: 'development',
	entry: './index.html',
	output: {
		path: path.resolve(__dirname, 'dist')
		filename: 'bundle.js'
	},
	plugins: [

	]
} 