import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/Start.vue'
import TutorialView from '../views/Tutorial.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: StartView
  },
  {
    path: '/Tutorial',
    name: 'tutorial',
    component: TutorialView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
