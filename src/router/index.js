import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/DashboardView.vue'
import Inbox from '../views/Inbox.vue'
import InboxDetails from '../views/InboxDetails.vue'
import Setting from '../views/Setting.vue'
import error from '../views/404.vue'

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
    {
      path: '/Inbox/:id',
      name: 'inboxpages',
      component: InboxDetails
    },
    {
      path: '/Setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/404',
      name: 'error',
      component: error
    },
  ]
})

export default router
