<template>
  <div class="websocket-page p-8">
    <h1 class="text-3xl font-bold mb-4">WebSocket Demo</h1>

    <!-- All messages -->
    <div class="bg-gray-100 p-4 mb-6">
      <h2 class="text-lg font-semibold">Received Messages:</h2>
      <ul class="list-disc pl-6">
        <li v-for="(message, index) in messages" :key="index">{{ message }}</li>
      </ul>
    </div>

    <!-- Textbox  -->
    <form @submit.prevent="sendMessage" class="flex mb-6">
      <input
        type="text"
        v-model="messageInput"
        placeholder="Type your message"
        class="border rounded px-4 py-2 flex-grow"
      />
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 ml-2 rounded">Send</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

// WebSocket state
const messages = ref<string[]>([])
const messageInput = ref<string>('')

let websocket: WebSocket | null = null

const sendMessage = () => {
  const str = messageInput.value
  if (str && websocket && websocket.readyState === WebSocket.OPEN) {
    messages.value.push(`Sent: ${str}`)

    websocket.send(str)
    messageInput.value = ''
  }
}

// Init
onMounted(() => {
  websocket = new WebSocket('wss://echo.websocket.org')

  websocket.onopen = () => {
    console.log('WebSocket connected')
  }

  websocket.onmessage = (event) => {
    messages.value.push(`Recieved: ${event.data}`)
  }

  websocket.onerror = (error) => {
    console.error('WebSocket error:', error)
  }

  websocket.onclose = () => {
    console.log('WebSocket connection closed')
  }
})

// Clean up
onBeforeUnmount(() => {
  if (websocket) {
    websocket.close()
  }
})
</script>
