var webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './src/root.js'
  },
  output: {
    filename: '[name].js',
  },
  module: {
    loaders: [
      {
      	test: /\.js$/, 
      	exclude: /node_modules/, 
      	loader: "babel-loader",
      	query: {
      		presets: ['es2015', 'react']
      	}
      }
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-chartjs-2': 'reactChartjs2'
  },
  plugins: [
    /*new webpack.optimize.UglifyJsPlugin()*/
  ]
};
