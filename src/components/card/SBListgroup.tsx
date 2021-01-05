import { defineComponent } from 'vue'

const SBListgroup = defineComponent({
  name: 'SBListgroup',
  props: {
    flush: {
      type: Boolean,
      required: false
    }
  },
  render() {
    let renderElement: JSX.Element | null = null

    if ((this as any).$slots.default) {
      renderElement = (this as any).$slots.default()
    }

    return (
      <ul class={this.flush ? "list-group list-group-flush" : "list-group"}>
        {renderElement}
      </ul>
    )
  }
})

export default SBListgroup
