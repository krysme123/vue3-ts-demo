/* eslint-disable @typescript-eslint/no-empty-function */
import { createRouter, createWebHistory } from 'vue-router'
import useStore from '../store';
const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
  {
    path: '/',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import( '../views/MyHome.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/MyLogin.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import( '../views/SignUp.vue')
  }
]
})
router.beforeEach( (to, from, next) => {
  const { user } = useStore();
  const store = user()
  const hasToken = store.token;
  if (hasToken) {
    //判断是否有token
    next();
  } else {
    //在没有token的前提下，to下面的path是否为/login，如果不是则页面跳转到登录页面
    if (to.path == "/login") {
      next();
    } else {
      next({ path: "/login" }); //跳转页面到login页
    }
  }
})
export default router
