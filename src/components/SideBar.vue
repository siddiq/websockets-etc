// i want to use this color #eb3b5a as trhe background color

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'WebSockets Crypto', path: '/websockets-coincap' },
  { name: 'WebSockets Echo', path: '/websockets-echo' },
  { name: 'WebRTC', path: '/webrtc' },
  { name: 'About', path: '/about' }
]
</script>

<template>
  <aside class="w-64 bg-primary text-white flex-shrink-0 shadow-lg">
    <div class="p-4 text-2xl font-bold">
      <h1>My App</h1>
    </div>
    <nav class="px-4 py-2">
      <ul>
        <li v-for="link in navLinks" :key="link.path" class="mb-2">
          <RouterLink
            :to="link.path"
            class="flex items-center px-4 py-2 rounded hover:bg-primary100 transition"
          >
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>
