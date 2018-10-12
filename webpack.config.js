const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');

const config = {
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, 'app/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: { emitWarning: true },
      }, {
        test: /\.(js|jsx)$/,
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
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'app-config': path.resolve(__dirname, 'app/src/config'),
      'app-core': path.resolve(__dirname, 'app/src/core'),
      'app-redux': path.resolve(__dirname, 'app/src/redux'),
    },
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, 'app/index.html'),
      filename: 'index.html',
    }),
  ],
};

module.exports = config;
