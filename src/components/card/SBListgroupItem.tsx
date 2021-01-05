import { defineComponent } from 'vue'

const SBListgroupItem = defineComponent({
  name: 'SBListgroupItem',
  render() {
    let renderElement = null

    if ((this as any).$slots.default) {
        renderElement = (
          <li class="list-group-item">{(this as any).$slots.default()[0]}</li>
        )
    }

    return renderElement
  }
})

export default SBListgroupItem
