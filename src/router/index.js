import { createRouter, createWebHistory } from 'vue-router'
import Product from '@/views/ProductPage.vue'
import Homepage from '@/views/HomePage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name : 'main-homepage',
      component : Homepage,
    },
    {
      path : '/product',
      name : 'product',
      component : Product,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
