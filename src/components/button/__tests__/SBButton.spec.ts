import { shallowMount } from '@vue/test-utils'
import SBButtonCopy from '../SBButton'

describe('SBButtonCopy Components', () => {
  it('renders button element to DOM node', () => {
    let wrapper = shallowMount(SBButtonCopy)

    expect(wrapper.vm).toBeDefined()
  })

  it('button pill to true', () => {
    let wrapper = shallowMount(SBButtonCopy)

    wrapper
      .setProps({
        pill: true
      })
      .then(function () {
        expect(wrapper.vm.pill).toBe(true)
      })
      .catch((err) => console.error(err))
  })

  it('button default html output', () => {
    let wrapper = shallowMount(SBButtonCopy)
    expect(wrapper.html()).toContain('<button type="button" class="btn"></button>')
  })

  it('button type="reset" html output', () => {
    let wrapper = shallowMount(SBButtonCopy)
    wrapper
      .setProps({
        type: 'reset'
      })
      .then(function () {
        expect(wrapper.html()).toContain('<button type="reset" class="btn"></button>')
      })
      .catch((err) => console.error(err))
  })
})
