import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Buy from '../views/Buy.vue'
import Land from '../views/Land.vue'
import Rent from '../views/Rent.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/buy', component: Buy },
  { path: '/land', component: Land },
  { path: '/rent', component: Rent },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
