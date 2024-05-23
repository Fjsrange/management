const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint
  lintOnSave: false,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // 直接覆盖变量
          "primary-color": "#1DA57A",
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
        },
        javascriptEnabled: true,
      },
    },
  },
});
