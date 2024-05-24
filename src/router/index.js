import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mainLayout',
    component: () => import('@/views/layout/mainLayout')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'userLogin',
    component: () => import('@/views/login/login')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  // 管理系统常见的两个逻辑
  // 1、如果用户访问登陆页面，但是token已存在，跳转到首页
  if (token && to.path === '/login') {
    next('/')
    return
  }
  // 2、如果用户访问其他页面，但是token不存在，跳转到登陆页面
  if (!token && to.path !== '/login') {
    next('/login')
    return
  }
  next()
})

export default router
