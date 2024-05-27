import Vue from "vue";
import VueRouter from "vue-router";
import { getRouters } from "@/api";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "mainLayout",
    component: () => import("@/views/layout/mainLayout"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView"),
  },
  {
    path: "/login",
    name: "userLogin",
    component: () => import("@/views/login/login"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem("token");
  // 管理系统常见的两个逻辑
  // 1、如果用户访问登陆页面，但是token已存在，跳转到首页
  if (token && to.path === "/login") {
    next("/");
    return;
  }
  // 2、如果用户访问其他页面，但是token不存在，跳转到登陆页面
  if (!token && to.path !== "/login") {
    next("/login");
    return;
  }

  // 获取导航栏数据
  if (token && store.state.userMenu.menuData.length === 0) {
    /* getRouters().then((res) => {
      console.log(res);
    }); */
    let res = await getRouters();
    console.log("res", res);
    if (res.code === 200) {
    }
  }
  next();
});

export default router;
