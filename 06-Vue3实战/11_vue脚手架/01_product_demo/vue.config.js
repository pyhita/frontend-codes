const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    // 配置路径别名
    resolve: {
      //@ 是配置好的路径别名，代表src
      alias: {
        "utils": "@/utils"
      }
    }
  }
})
