const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.js',
	mode: "development",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_module)/,
				loader: 'babel-loader',
				options: { presets: ["@babel/env"] }
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	resolve: { extensions: ['*', '.js', '.jsx'] },
	output: {
		path: path.resolve(__dirname, 'dist/'),
		publicPath: '/dist/',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname, 'public/'),
		port: 4040,
		publicPath: 'http://localhost:4040/dist',
		hotOnly: true
	},
	plugins: [new webpack.HotModuleReplacementPlugin()]
};