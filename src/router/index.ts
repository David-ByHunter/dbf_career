import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import Estiem from '@/components/Estiem.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path:'/ESTIEM',
      name: 'ESTIEM',
      component: Estiem
    }
  ]
})

export default router
