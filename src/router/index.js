import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/store/user'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/login.vue'),
    meta: { layout: 'auth' },
  },

  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
    meta: { layout: 'main' },
  },

  {
    path: '/buy',
    name: 'Buy',
    component: () => import('@/views/Buy.vue'),
  },

  {
    path: '/land',
    name: 'Land',
    component: () => import('@/views/Land.vue'),
  },

  {
    path: '/rent',
    name: 'Rent',
    component: () => import('@/views/Rent.vue'),
  },

{
  path: '/todo/:id',
  name: 'TodoDetail',
  component: () => import('@/pages/TodoDetail.vue'),
},

{
  path: '/learn/todo',
  name: 'LearnTodo',
  component: () => import('@/pages/LearnTodo.vue'),
}

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

//router.beforeEach((to) => {
//  const userStore = useUserStore()

//  if (to.meta.auth && !userStore.token) {
//    return '/login'
//  }

  
//})

export default router
