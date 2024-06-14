const { defineConfig } = require('@vue/cli-service')
const target = 'http://localhost:81/myserver'
module.exports = defineConfig({
  // chainWebpack: config => {
  //   config.plugins.delete('prefetch'); // prefetch 삭제
  // },
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/': {
        target,
        changeOrigin: true,
        ws: false
      }
    }
  }
})
