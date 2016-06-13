var webpack = require('webpack');

module.exports = {
  entry: {
    app: './app/index.js'
  },

  output: {
    publicPath:'/dist/',
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {
        test: /\.html$/, loader: ''
      },
      {
        test: /\.scss$/, loaders: []
      },
      {
        test: /\.jsx?$/, exclude: /(node_modules)/, loader: '', query: {}
      }
    ]
  },

  externals: {
    // External modules
  },

  resolve: {
  },

  plugins: [
    // Plugins
  ]
};
