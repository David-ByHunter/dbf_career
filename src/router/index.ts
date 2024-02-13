import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import Estiem from '@/components/EstiemVue.vue'
import Career from '@/components/CareerVue.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MainView
    },
    {
      path:'/ESTIEM',
      name: 'ESTIEM',
      component: Estiem
    },
    {
      path: '/Career',
      name: 'Career',
      component: Career
    }
  ]
})

export default router
