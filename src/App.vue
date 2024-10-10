<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-800 text-white flex-shrink-0">
      <div class="p-4 text-2xl font-bold">
        <h1>My App</h1>
      </div>
      <nav class="px-4 py-2">
        <ul>
          <li class="mb-2">
            <router-link to="/" class="block px-4 py-2 rounded hover:bg-gray-700">
              Home
            </router-link>
          </li>
          <li class="mb-2">
            <router-link to="/websockets" class="block px-4 py-2 rounded hover:bg-gray-700">
              WebSockets
            </router-link>
          </li>
          <li class="mb-2">
            <router-link to="/webrtc" class="block px-4 py-2 rounded hover:bg-gray-700">
              WebRTC
            </router-link>
          </li>
          <li class="mb-2">
            <router-link to="/about" class="block px-4 py-2 rounded hover:bg-gray-700">
              About
            </router-link>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main content -->
    <div class="flex-grow bg-gray-100">
      <!-- Optional App Bar -->
      <header class="bg-white shadow py-4 px-6">
        <h1 class="text-xl font-bold">Demo2</h1>
      </header>

      <!-- Router View -->
      <main class="p-6">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
