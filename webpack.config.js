const path = require('path');
module.exports = {
	entry: ['babel-polyfill', './src/index.js'],
	output: {
		path: path.resolve(__dirname, 'www/js'),
		filename: 'main.js'
	}
};
module: {
	rules: [
	{
		test: /\.js$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader"
		}
	},
	]
}
