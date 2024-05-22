import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "reset-css"; // 引入重置样式

Vue.config.productionTip = false;
// 引入
Vue.use(ElementUI);

new Vue({
  router,
  // store,
  render: (h) => h(App),
}).$mount("#app");
