const path = require('path');

const distFileName = 'ngBrowserInfo.dev';

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'demo'),
    filename: `${distFileName}.js`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          'babel-loader',
        ],
      },
    ],
  },

  resolve: {
    modules: [
      path.resolve(__dirname, './'),
      'node_modules',
    ],
  },
};
