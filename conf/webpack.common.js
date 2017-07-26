/**
 * @description - webpack common configuration
 * @author - bornkiller <hjj491229492@hotmail.com>
 */
'use strict';

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  resolve: {
    alias: {},
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.html', '.scss', '.css'],
    modules: [
      path.resolve(process.cwd(), 'node_modules'),
      path.resolve(process.cwd(), 'src')
    ]
  },

  module: {
    noParse: [/\.min\.js$/],
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'awesome-typescript-loader'
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        exclude: path.resolve(process.cwd(), 'src'),
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                root: path.resolve(process.cwd(), 'src')
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              root: path.resolve(process.cwd(), 'src'),
              importLoaders: 2
            }
          },
          { loader: 'postcss-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: []
            }
          }
        ]
      },
      {
        test: /\.html$/,
        exclude: path.resolve(process.cwd(), 'browser', 'index.html'),
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src'],
              root: path.resolve(process.cwd(), 'src')
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|mp3|woff|woff2|ttf|eot|svg)(\?.*)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'asset/[name].[ext]'
            }
          }
        ]
      }
    ]
  },

  devtool: 'source-map'
};
