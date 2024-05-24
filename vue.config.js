const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // 如果使用 less-loader@6，则用 lessOptions
          modifyVars: {
            // 自定义你的变量
            'primary-color': '#1DA57A',
            'link-color': '#1DA57A'
            // 更多...
          },
          javascriptEnabled: true // 允许 Less 文件中使用 JavaScript
        }
      }
    }
  }
})
