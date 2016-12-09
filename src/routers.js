import Vue from 'vue'

import VueRouter from 'vue-router'


import NiIndex from './components/NiIndex'


Vue.use(VueRouter)

const routes = [
  {
    path:'/home',
    component:NiIndex
  },
  {
    path:'/index',
    component:NiIndex
  }
]

const router = new VueRouter({
  routes
})

export default router