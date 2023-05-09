import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NocolorView from '../views/NocolorView.vue'
import SsaflingView from '../views/SsaflingView.vue'
import SsaflowerView from '../views/SsaflowerView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/happeed',
    name: 'NocolorView',
    component: NocolorView
  },
  {
    path: '/happling',
    name: 'SsaflingView',
    component: SsaflingView
  },
  {
    path: '/happlower',
    name: 'SsaflowerView',
    component: SsaflowerView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
