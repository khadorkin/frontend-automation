var webpack = require('webpack');

module.exports = {
  entry: {
    app: './app/index.js'
  },

  output: {
    publicPath:'/',
    path: 'dist',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      // Module loaders
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
