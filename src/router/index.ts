import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import Career from '@/components/CareerVue.vue'
// import MedievalThings from '@/components/MedievalThings.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MainView
    },
    {
      path: '/career',
      name: 'Career',
      component: Career
    },
    // {
    //   path:'/medievalthings',
    //   name: 'Medieval',
    //   component: MedievalThings
    // },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("@/components/NotFound.vue"),
    },
  ]
})

export default router
