import { createRouter, createWebHistory } from 'vue-router'
import HomePanel from '../components/HomePanel.vue'
import ProductPanel from '../components/ProductPanel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/panel/',
      name: 'cpanel',
      component: HomePanel
    },
    {
      path : '/panel/product',
      name : 'product-panel',
      component : ProductPanel
    }
  ]
})

export default router
