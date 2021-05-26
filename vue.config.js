module.exports = {
  productionSourceMap: true,
  devServer: {
    // webpack-dev-server 相关配置
    port: 3333, // 端口号
    // host: 'localhost',
    // https: false, // https:{type:Boolean}
    // open: true, // 配置自动启动浏览器
    // hotOnly: false
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    proxy: {
      '/CORS': {
        target: 'https://192.168.0.3',
        changeOrigin: true,
        pathRewrite: {
          '^/CORS': ''
        }
      }
    }
  },
  configureWebpack: config => {
    config.performance = {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
  },
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: ['./src/styles/*.scss']
        })
        .end()
    })
  },
  pwa: {
    iconPaths: {
      favicon32: './favicon.ico',
      favicon16: './favicon.ico'
    },
    manifestOptions: {
      icons: [
        {
          src: './favicon.ico',
          sizes: '32x32',
          type: 'image/png'
        }
      ]
    }
  }
}
