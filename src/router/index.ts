import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Selectors from '@/views/Features/Selectors.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Selectors',
      name: 'Selectors',
      component: Selectors
    }
  ]
})

export default router
