const path = require('path');

const webpack = require('webpack');

const Config = require('webpack-chain');

/** 定义 resolve 方法 */

function resolve (dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // 基本路径
  baseUrl: './',
  devServer: {
    port: 8888,
    open: true
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery'
      })
    ]
  },
  productionSourceMap: false,
  lintOnSave: false,
  chainWebpack: config => {
    config.entry.app = ["babel-polyfill", resolve('src/main.js')],
    config.resolve.alias
      .set('@', resolve('src'))
      .set('./@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@store', resolve('src/store'))
      .set('@utils', resolve('src/utils'))
      .set('@serviceSupervision', resolve('src/components/pages/serviceSupervision'))
      .set('@onlineRevision', resolve('src/components/pages/onlineRevision'))
      .set('@evaluate', resolve('src/components/pages/evaluate'))
      .set('@TablesAndChairs', resolve('src/components/pages/TablesAndChairs'))
      .set('@font', resolve('src/font'));
  }
}
