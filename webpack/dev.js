/**
 * Created by zhangran on 16/11/2.
 */
var path = require('path')

module.exports = {
  // 项目根目录
  context: path.join(__dirname, '../'),
  devtool: 'source-map',
  // 项目入口
  entry: [
    './src/main.js'
  ],
  // 打包编译生成文件配置
  output: {
    path: path.join(__dirname, '../build'),  // 编译文件存储目录
    filename: 'index.js',   // 编译后的入口文件
    publicPath: '/build/',   // devServer访问的路径前缀
    chunkFilename: '[name]-[chunkhash:8].js'  // 编译的分块代码可以使用文件hash作为文件名,按需加载的时候会产生
  },
  resolve: {
    extensions: ['', '.js', '.vue'],   // 引入文件的默认扩展名
    alias: {
      vue: 'vue/dist/vue.js'    // 解决vue template 警告bug
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style!css",
        include: __dirname
      },
      {
        test: /\.less$/,
        loader: "style!css!less",
        include: __dirname
      }
    ]
  }
}
