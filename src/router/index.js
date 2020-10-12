import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/layouts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: layout.Blank,
    children: [
      {
        path: '/home',
        name: '首页',
        component: () => import('@/pages/home')
      },
      {
        path: '/about',
        name: '关于',
        component: () => import('@/pages/about')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
