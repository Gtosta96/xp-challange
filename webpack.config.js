const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');

const config = {
  devtool: 'inline-source-map',
  entry: path.join(__dirname, '/app/index.js'),
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
