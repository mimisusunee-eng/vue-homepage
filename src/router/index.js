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
  meta: {
    layout: 'main',
    title: 'Big Housekeeper | บ้าน คอนโด ทำเลดี',
    description: 'รวมบ้าน คอนโด และที่ดินคุณภาพดี ราคาน่าอยู่'
  },
},


   {
    path: '/property/:id',
    name: 'PropertyDetail',
    component: () => import('@/views/PropertyDetail.vue'),
    meta: {
      title: 'รายละเอียดอสังหาริมทรัพย์ | Big Housekeeper',
      description: 'ดูรายละเอียดบ้าน คอนโด และที่ดิน',
    },
    beforeEnter: (to) => {
      const id = Number(to.params.id)
      if (!id) return '/404'
    },
  },

  {
    path: '/buy',
    name: 'Buy',
    component: () => import('@/views/Buy.vue'),
    meta: { 
    title: 'ซื้อบ้าน | Big Housekeeper',
    description: 'รวมบ้านและคอนโดสำหรับซื้อ'
    }
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
},

{
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      title: '404 | ไม่พบหน้านี้ - Big Housekeeper',
      description:
        'ไม่พบหน้าที่คุณต้องการ บ้าน คอนโด และอสังหาริมทรัพย์อื่น ๆ ยังรอคุณอยู่',
    },
  },

  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },



]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  const userStore = useUserStore()

  if (to.meta.auth && !userStore.token) {
    return '/login'
  }

  if (to.meta.title) {
    document.title = to.meta.title
  }
})



export default router
