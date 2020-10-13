import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '@/layouts'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: '404',
    component: () => import('@/pages/exception/404')
  },
  {
    path: '/',
    redirect: '/home',
    component: layout.FooterBar,
    children: [
      {
        path: '/home',
        title: '首页',
        name: 'home',
        component: () => import('@/pages/home')
      },
      {
        path: '/about',
        title: '关于',
        name: 'about',
        component: () => import('@/pages/about')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
