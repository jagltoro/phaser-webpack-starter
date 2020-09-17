const webpack = require('webpack');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: {
    app: './src/index.js',
    vendor: [
      'phaser',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/'),
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'index.html'),
          to: path.resolve(__dirname, 'build')
        },
        {
          from: path.resolve(__dirname, 'src/assets', '**', '*'),
          to: path.resolve(__dirname, 'build')
        }
      ],
    }),
    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true)
    }),
  ],
}
