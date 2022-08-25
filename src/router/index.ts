import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/satellite-imagery',
    name: 'satellite-imagery',
    component: () => import(/* webpackChunkName: "satellite-imagery" */ '../views/Satellite.vue'),
  },
  {
    path: '/tracking-data',
    name: 'tracking-data',
    component: () => import(/* webpackChunkName: "tracking-data" */ '../views/TrackingData.vue'),
  },
  {
    path: '/hurricanes',
    name: 'hurricanes',
    component: () => import(/* webpackChunkName: "hurricanes" */ '../views/Hurricanes.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router