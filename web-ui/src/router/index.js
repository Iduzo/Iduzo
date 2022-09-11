import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/Start.vue'
import TutorialView from '../views/Tutorial.vue'
import LoginView from '../views/Login.vue'
import ToolView from '../views/Tool.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: StartView
  },
  {
    path: '/tutorial',
    name: 'tutorial',
    component: TutorialView
  },
  {
    path: '/tool',
    name: 'tool',
    component: ToolView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
