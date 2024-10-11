// tests/unit/App.spec.ts

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import SideBar from '@/components/SideBar.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

// Mock components inm a route
const mockRoutes = [
  {
    path: '/',
    name: 'home',
    component: { template: '<div>asdasd</div>' }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: mockRoutes
})

describe('App', () => {
  it('renders the App', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router]
      }
    })

    // Check if the Sidebar component is rendered
    const sidebar = wrapper.findComponent(SideBar)
    expect(sidebar.exists()).toBe(true)

    // Check if the header text is present
    const header = wrapper.find('header')
    expect(header.exists()).toBe(true)
    expect(header.text()).toContain('Demo')

    // Router needs to be ready for proper rendering
    await router.isReady()

    // Check if RouterView renders the HomeView (mocked as a div with "Home" text)
    expect(wrapper.html()).toContain('<div>asdasd</div>')
  })
})
