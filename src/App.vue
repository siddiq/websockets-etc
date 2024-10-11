<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <SideBar />

    <!-- Main content -->
    <div class="flex-grow bg-gray-100">
      <header class="bg-white shadow py-4 px-6">
        <h1 class="text-xl font-bold">Demo</h1>
      </header>

      <!-- Router View -->
      <main class="p-6">
        <RouterView></RouterView>
      </main>
    </div>
  </div>
</template>
