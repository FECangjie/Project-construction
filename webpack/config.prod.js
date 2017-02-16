/**
 * @file 开发环境配置
 */

var webpack = require('webpack')
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')
var pageConf = require('./pageConf')

var wpConfig = function () {
  return {
    entry: pageConf.getEntry('dev'),
    watch: true,
    debug: true,
    devtool: 'source-map',
    output: {
      path: '/',
      publicPath: '/asset/',
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
    // chunkFilename: 'entry.biz.[hash].js'
    },
    module: {
      preLoaders: [
        {test: /\.json$/, loader: 'json'}
      ],
      loaders: [
        {
          test: /\.rt/,
          loader: ['babel', 'react-templates?modules=amd']
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style',
            loader: 'css'
          }),
          exclude: path.resolve(__dirname, '../node_modules')
        },
        {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract(['css', 'less'])
        },
        {
          test: /\.jsx$/,
          loader: ['babel'],
          exclude: path.resolve(__dirname, '../node_modules')
        },
        {
          test: /\.js$/,
          loaders: ['babel'],
          exclude: path.resolve(__dirname, '../node_modules')
        },
        {
          test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
          loader: 'url-loader?limit=50000&name=[name].[hash].[ext]'
        }
      // {test: /\.png$/, loader: 'url?mimetype=image/png'},
      // {test: /\.jpg/, loader: 'url?mimetype=image/jpg'},
      // {test: /\.jpeg/, loader: 'url?mimetype=image/jpeg'}
      ]
    },
    loader: {
      configEnvironment: 'dev'
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.css', '.rt'],
      alias: {
        bizComponent: path.resolve(__dirname, '../src/client/bizComponent'),
        common: path.resolve(__dirname, '../src/client/common'),
        commonStyle: path.resolve(__dirname, '../src/client/commonStyle'),
        component: path.resolve(__dirname, '../src/client/component'),
        flagConf: path.resolve(__dirname, '../src/client/flagConf')
      }
    },
    plugins: [
      new CommonsChunkPlugin({
        name: 'common',
        filename: 'common.js',
        minChunks: Infinity
      }),
      new ExtractTextPlugin({
        filename: '[name].css',
        allChunks: true
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  }
}

module.exports = wpConfig
