import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'portfolio' }
  },
  {
    path: '/Work',
    name: 'Work',
    component: () => import('../views/Work.vue'),
    meta: { title: 'Work - portfolio' }
  },
  {
    path: '/Work/:id',
    name: 'Page',
    component: () => import('../views/Work_detail.vue'),
    meta: { title: 'Work Detail - work' }

  },
  {
    path: '/Mail',
    name: 'Mail',
    component: () => import('../views/Mail.vue'),
    meta: { title: 'Mail' }
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 페이지 타이틀 변경
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
