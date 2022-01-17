import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/photo-modal/:id',
    name: 'Photo Modal',
    component: () => import(/* webpackChunkName: "Photo Midal" */ '../views/PhotoModal.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
