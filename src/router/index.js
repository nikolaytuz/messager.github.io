import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Report',
    component: () => import('../views/Report.vue')
  },
  {
    path: '/planets',
    name: 'Planets',
    component: () => import('../views/Planets.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
