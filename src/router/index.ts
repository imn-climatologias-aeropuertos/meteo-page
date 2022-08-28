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
  {
    path: '/oscillations',
    name: 'oscillations',
    component: () => import(/* webpackChunkName: "oscillations" */ '../views/Oscillations.vue'),
  },
  {
    path: '/models-imn',
    name: 'models-imn',
    component: () => import(/* webpackChunkName: "models-imn" */ '../views/ModelsIMN.vue'),
  },
  {
    path: '/global-models',
    name: 'global-models',
    component: () => import(/* webpackChunkName: "global-models" */ '../views/GlobalModels.vue'),
  },
  {
    path: '/climate-models',
    name: 'climate-models',
    component: () => import(/* webpackChunkName: "climate-models" */ '../views/ClimateModels.vue'),
  },
  {
    path: '/time-series',
    name: 'time-series',
    component: () => import(/* webpackChunkName: "time-series" */ '../views/TimeSeries.vue'),
  },
  {
    path: '/reanalisys',
    name: 'reanalisys',
    component: () => import(/* webpackChunkName: "reanalisys" */ '../views/Reanalisys.vue'),
  },
  {
    path: '/aeronautics',
    name: 'aeronautics',
    component: () => import(/* webpackChunkName: "aeronautics" */ '../views/Aeronautics.vue'),
  },
  {
    path: '/marine',
    name: 'marine',
    component: () => import(/* webpackChunkName: "marine" */ '../views/Marine.vue'),
  },
  {
    path: '/fires',
    name: 'fires',
    component: () => import(/* webpackChunkName: "fires" */ '../views/Fires.vue'),
  },
  {
    path: '/volcanic-ash',
    name: 'volcanic-ash',
    component: () => import(/* webpackChunkName: "volcanic-ash" */ '../views/VolcanicAsh.vue'),
  },
  {
    path: '/several-data',
    name: 'several-data',
    component: () => import(/* webpackChunkName: "several-data" */ '../views/SeveralData.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router