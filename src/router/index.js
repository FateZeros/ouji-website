import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import HomeLand from '@/views/land'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/home/land',
    component: Home,
    children: [
      {
        path: '/home/land',
        name: 'home-land',
        component: HomeLand
      },
      {
        path: '/company',
        name: 'company',
        component: () => import('@/views/company/index.vue')
      },
      {
        path: '/service',
        name: 'service',
        component: () => import('@/views/service/index.vue')
      },
      {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/contact/index.vue')
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
