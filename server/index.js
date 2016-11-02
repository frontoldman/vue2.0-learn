/**
 * Created by zhangran on 16/11/2.
 */

var webpackDevServer = require('webpack-dev-server');
var webpack = require("webpack");
var webpackConfig = require('../webpack/dev');
var config = require('../config')

var compiler = webpack(webpackConfig);

var server = new webpackDevServer(compiler, {
  stats: {
    colors: true  // 控制台输出带颜色
  },
  historyApiFallback: {
    index: '/index.html'  // history api 会定位到的页面
  },
  publicPath: webpackConfig.output.publicPath,  // 编译文件的前缀
  proxy: {    // http代理

  }
});

server.listen(config.port, err => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`Listening at http://${config.address}:${config.port}\n`)
});

module.exports = server