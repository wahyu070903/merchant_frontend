import { createRouter, createWebHistory } from 'vue-router'
import ControlPanel from '../views/ControlPanel.vue'
import Product from '../views/Product.vue'

import HomePanel from '../layouts/HomePanel.vue'
import ProductPanel from '../layouts/ProductPanel.vue'
import EditPanel from '../layouts/EditPanel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/panel',
      name: 'cpanel',
      component: ControlPanel,
      children : [
        {
          path : '/panel/',
          name : 'cpanel-home',
          component : HomePanel
        },
        {
          path : '/panel/product',
          name : 'cpanel-product',
          component : ProductPanel
        },
        {
          path : '/edit/:id',
          name : 'cpanel-edit',
          component : EditPanel
        }
      ]
    },
    {
     path : '/product',
     name : 'product',
     component : Product,
     children : [
      
     ] 
    }
  ]
})

export default router
