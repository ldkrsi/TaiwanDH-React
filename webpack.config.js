var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin('./css/main.css');

module.exports = {
	entry: './src/root.js',
	output: {
		filename: 'bundle.js',
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: {
				loader: "babel-loader",
				options: {
					presets: ['es2015', 'react']
				}
			}
		},{
			test: /\.(scss|sass)$/,
			use: extractSass.extract({
				use: [{
					loader: "css-loader"
				},{
					loader: "postcss-loader"
				},{
					loader: "sass-loader",
					options: {
						outputStyle: 'compressed'
					}
				}],
			})
		}]
	},
	externals: {
		'react': 'React',
		'react-dom': 'ReactDOM',
		'react-chartjs-2': 'reactChartjs2'
	},
	plugins: [
		extractSass,
	]
};
