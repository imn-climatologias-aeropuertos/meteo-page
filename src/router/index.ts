import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/satellite',
    name: 'satellite',
    component: () => import(/* webpackChunkName: "satellite" */ '../views/Satellite.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router