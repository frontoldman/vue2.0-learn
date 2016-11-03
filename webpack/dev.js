/**
 * Created by zhangran on 16/11/2.
 */

var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseConfig = require('./base')

module.exports = merge(baseConfig, {
  devtool: 'source-map',
  entry: [
    ...baseConfig.entry,
    `webpack-dev-server/client?http://${config.address}:${config.port}`,
    'webpack/hot/only-dev-server',
  ],
  plugins: [
    ...baseConfig.plugins
  ]
})
