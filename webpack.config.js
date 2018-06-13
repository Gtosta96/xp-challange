const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');

const config = {
  entry: path.join(__dirname, '/app/index.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: { failOnWarning: false, failOnError: false },
      }, {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      }, {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              minimize: true,
            },
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(__dirname, '/app/index.html'),
      filename: './index.html',
    }),
  ],
};

module.exports = config;
