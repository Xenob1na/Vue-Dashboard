import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/DashboardView.vue'
import Inbox from '../views/Inbox.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Inbox',
      name: 'inbox',
      component: Inbox
    },
  ]
})

export default router
