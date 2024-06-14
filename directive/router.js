const { createRouter, createWebHistory } = VueRouter;

import forView from './for.js'
import ifView from './if.js'
import eventView from './event.js'

const routes = [
  { path: '/for', component: forView },
  { path: '/if', component: ifView },
  { path: '/event', component: eventView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;