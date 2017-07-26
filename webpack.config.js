/**
 * @description - webpack develop mode
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
'use strict';

// dependencies
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');
const {
  DefinePlugin,
  HotModuleReplacementPlugin,
} = require('webpack');

// Webpack common configuration
const WebpackCommonConfig = require('./conf/webpack.common');
const WebpackDevConfig = {
  entry: {
    application: ['webpack-dev-server/client?http://localhost:8100', 'webpack/hot/dev-server', './browser/main.ts']
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'browser', 'index.html'),
      title: 'typescript-lib-starter',
      chunksSortMode: 'dependency',
      favicon: path.join(process.cwd(), 'browser', 'favicon.ico')
    }),
    new CheckerPlugin(),
    new HotModuleReplacementPlugin()
  ],

  devServer: {
    contentBase: './dist/',
    quiet: false,
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8100,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    stats: 'minimal',
    proxy: {}
  }
};

module.exports = Object.assign({}, WebpackCommonConfig, WebpackDevConfig);
