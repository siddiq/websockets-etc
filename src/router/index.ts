import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WebRTCView from '@/views/WebRTCView.vue'
import WebSocketsCoinCapView from '@/views/WebSocketsCoinCapView.vue'
import WebSocketsEchoView from '@/views/WebSocketsEchoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/websockets-coincap',
    name: 'websockets-coincap',
    component: WebSocketsCoinCapView
  },
  {
    path: '/websockets-echo',
    name: 'websockets-echo',
    component: WebSocketsEchoView
  },
  {
    path: '/webrtc',
    name: 'webrtc',
    component: WebRTCView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export { routes }
export default router
