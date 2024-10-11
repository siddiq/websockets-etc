import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SideBar from '../SideBar.vue' // Adjust the path as necessary

describe.skip('SideBar', () => {
  it('renders properly', async () => {
    const wrapper = mount(SideBar)

    // Trigger the router to ensure links are rendered
    await wrapper.vm.$router.isReady()

    // Check if the sidebar title is rendered
    expect(wrapper.text()).toContain('My App')

    // Check if the sidebar contains the correct links
    const links = ['Home', 'WebSockets / Crypto', 'WebSockets / Echo', 'WebRTC', 'About']

    links.forEach((link) => {
      expect(wrapper.text()).toContain(link)
    })
  })

  it('has correct number of links', async () => {
    const wrapper = mount(SideBar)

    // Trigger the router to ensure links are rendered
    await wrapper.vm.$router.isReady() // Ensure the router is ready

    const navItems = wrapper.findAll('nav li')
    expect(navItems.length).toBe(5) // Ensure there are 5 links
  })
})
