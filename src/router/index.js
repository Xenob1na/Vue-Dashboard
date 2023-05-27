import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/DashboardView.vue'
import Inbox from '../views/Inbox.vue'
import InboxDetails from '../views/InboxDetails.vue'
import Setting from '../views/Setting.vue'

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
  ]
})

export default router
