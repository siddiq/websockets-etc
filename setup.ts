// setup.ts
import { createRouter, createWebHistory } from 'vue-router'

// Define your routes
const routes = [
  { path: '/', component: { template: '<div>Home</div>' } },
  { path: '/websockets-coincap', component: { template: '<div>WebSockets / Crypto</div>' } },
  { path: '/websockets-echo', component: { template: '<div>WebSockets / Echo</div>' } },
  { path: '/webrtc', component: { template: '<div>WebRTC</div>' } },
  { path: '/about', component: { template: '<div>About</div>' } }
]

// Create a router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Export the router for use in tests
export { router }
