<template>
  <div class="websocket-page p-8">
    <h1 class="text-3xl font-bold mb-6">Crypto Price Tracker</h1>

    <!-- Bitcoin -->
    <div class="bg-neutral p-4 mb-4 border">
      <h2 class="text-lg font-semibold">Bitcoin (BTC)</h2>
      <p class="text-2xl font-bold" data-test-id="btc-price">
        {{ btcPrice ? btcPrice + ' USD' : 'waiting for data' }}
      </p>
    </div>

    <!-- Ethereum -->
    <div class="bg-neutral p-4 border">
      <h2 class="text-lg font-semibold">Ethereum (ETH)</h2>
      <p class="text-2xl font-bold" data-test-id="eth-price">
        {{ ethPrice ? ethPrice + ' USD' : 'waiting for data' }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const btcPrice = ref<string | null>(null)
const ethPrice = ref<string | null>(null)

let websocket: WebSocket | null = null

const initWebSocket = () => {
  if (websocket) {
    websocket.close()
  }

  // Connect to the CoinCap WebSocket API for BTC and ETH
  websocket = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum')

  websocket.onopen = () => {
    console.log('WebSocket connected to CoinCap')
  }

  websocket.onmessage = (event) => {
    const data = JSON.parse(event.data)
    // console.log(data)

    btcPrice.value = data.bitcoin ? data.bitcoin.toLocaleString() : btcPrice.value
    ethPrice.value = data.ethereum ? data.ethereum.toLocaleString() : ethPrice.value
  }

  websocket.onerror = (error) => {
    console.error('WebSocket error:', error)
  }

  websocket.onclose = () => {
    console.log('WebSocket connection closed')
  }
}

onMounted(() => {
  initWebSocket()
})

onBeforeUnmount(() => {
  if (websocket) {
    websocket.close()
  }
})
</script>
