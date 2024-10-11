import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SideBar from '@/components/SideBar.vue'
import router from '@/router'

describe('SideBar', () => {
  it('renders the sidebar and links', async () => {
    const wrapper = mount(SideBar, {
      global: {
        plugins: [router]
      }
    })

    expect(wrapper.html()).toContain('My App')

    const links = wrapper.findAllComponents({ name: 'RouterLink' })
    expect(links.length).toBe(5)
  })
})
