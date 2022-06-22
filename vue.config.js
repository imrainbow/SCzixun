const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/app': {
        target: 'http://haozhiyuan.ltd',
        changeOrigin: true
      }
    }
  }
})
