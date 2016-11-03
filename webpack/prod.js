/**
 * Created by zhangran on 16/11/2.
 */

var merge = require('webpack-merge')
var baseConfig = require('./base')
var fs = require('fs')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var scriptReg = /<script.*src\="\.\/build\/index\.js">.*<\/script>/mgi
var template = fs.readFileSync('./index.dev.html', 'utf8')
if(!template){
  throw '获取模版失败'
}
var templateContent = template.replace(scriptReg, '')

module.exports = merge(baseConfig, {
  plugins: [
    ...baseConfig.plugins,
    new HtmlWebpackPlugin({
      filename: './index.html',
      hash: true,
      templateContent: templateContent,
      minify: false,
      inject: true
    })
  ]
})
