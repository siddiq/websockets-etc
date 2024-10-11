<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <aside class="w-64 bg-indigo-600 text-white flex-shrink-0 shadow-lg">
    <div class="p-4 text-2xl font-bold">
      <h1>My App</h1>
    </div>
    <nav class="px-4 py-2">
      <ul>
        <li class="mb-2">
          <RouterLink
            to="/"
            class="flex items-center px-4 py-2 rounded hover:bg-indigo-500 transition"
          >
            Home
          </RouterLink>
        </li>
        <li class="mb-2">
          <RouterLink
            to="/websockets-coincap"
            class="flex items-center px-4 py-2 rounded hover:bg-indigo-500 transition"
          >
            WebSockets Crypto
          </RouterLink>
        </li>
        <li class="mb-2">
          <RouterLink
            to="/websockets-echo"
            class="flex items-center px-4 py-2 rounded hover:bg-indigo-500 transition"
          >
            WebSockets Echo
          </RouterLink>
        </li>
        <li class="mb-2">
          <RouterLink
            to="/webrtc"
            class="flex items-center px-4 py-2 rounded hover:bg-indigo-500 transition"
          >
            WebRTC
          </RouterLink>
        </li>
        <li class="mb-2">
          <RouterLink
            to="/about"
            class="flex items-center px-4 py-2 rounded hover:bg-indigo-500 transition"
          >
            About
          </RouterLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>
