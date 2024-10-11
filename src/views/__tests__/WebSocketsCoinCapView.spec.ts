import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import WebSocketsCoinCapView from '@/views/WebSocketsCoinCapView.vue'

// Mock WebSocket
class WebSocketMock {
  onopen: Function = vi.fn()
  onmessage: Function = vi.fn()
  onerror: Function = vi.fn()
  onclose: Function = vi.fn()
  close = vi.fn()
  url: string

  constructor(url: string) {
    this.url = url
  }

  send() {}
}

// Spy on the WebSocket constructor
const WebSocketSpy = vi.fn((url: string) => new WebSocketMock(url))

global.WebSocket = WebSocketSpy as any

describe('WebSocketsCoinCapView.vue', () => {
  let wrapper: any

  beforeEach(() => {
    // Spy on console.error
    vi.spyOn(console, 'error').mockImplementation(() => {})

    wrapper = mount(WebSocketsCoinCapView)
  })

  afterEach(() => {
    wrapper.unmount()

    // Restore the console.error after each test
    vi.restoreAllMocks()
  })

  it('should initialize WebSocket on mount', () => {
    expect(WebSocketSpy).toHaveBeenCalledWith('wss://ws.coincap.io/prices?assets=bitcoin,ethereum')
  })

  it('should update BTC and ETH prices when WebSocket message is received', async () => {
    const mockMessage = {
      data: JSON.stringify({
        bitcoin: 60000,
        ethereum: 2400
      })
    }

    // Simulate WebSocket message event
    wrapper.vm.websocket.onmessage(mockMessage)

    // Wait for reactivity to update the DOM
    await wrapper.vm.$nextTick()

    // Check if the elements are present
    const btcPriceElement = wrapper.find('[data-test-id="btc-price"]')
    const ethPriceElement = wrapper.find('[data-test-id="eth-price"]')

    // Check that BTC and ETH prices are updated in the DOM
    expect(btcPriceElement.text()).toContain('60,000')
    expect(ethPriceElement.text()).toContain('2,400')
  })

  it('should handle WebSocket errors', () => {
    const mockError = new Error('asdasd')
    wrapper.vm.websocket.onerror(mockError)

    // Check if console.error was called with the expected error message
    expect(console.error).toHaveBeenCalledWith('WebSocket error:', mockError)
  })

  it('should close WebSocket on unmount', () => {
    wrapper.unmount()

    expect(wrapper.vm.websocket.close).toHaveBeenCalled()
  })

  it('should display default values when prices are not available', async () => {
    const mockMessage = {
      data: JSON.stringify({})
    }

    // Simulate WebSocket message event with no data
    wrapper.vm.websocket.onmessage(mockMessage)

    await wrapper.vm.$nextTick()

    // Find the elements using data-test-id
    const btcPriceElement = wrapper.find('[data-test-id="btc-price"]')
    const ethPriceElement = wrapper.find('[data-test-id="eth-price"]')

    expect(btcPriceElement.text()).toContain('waiting for data')
    expect(ethPriceElement.text()).toContain('waiting for data')
  })
})
