import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Work',
    name: 'Work',
    component: () => import('../views/Work.vue'),
  },
  {
    path: '/Work/:id',
    name: 'Page',
    component: () => import('../views/Work_detail.vue'),
  },
  {
    path: '/Mail',
    name: 'Mail',
    component: () => import('../views/Mail.vue')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
