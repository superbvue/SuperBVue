import { defineComponent, h } from 'vue'

const SBCardTitle = defineComponent({
  name: 'SBCardTitle',
  props: {

    /**	Specify the HTML tag to render instead of the default tag for the text content */
    textTag: {
      type: String,
      required: false,
      default: 'p'
    }
  },
  render() {
    let renderElement = null

    if ((this as any).$slots.default) {
      if (this.textTag) {
        renderElement = h(this.textTag, { class: "card-title" } , (this as any).$slots.default()[0])
      } else {
        renderElement = (
          <p class="card-title">{(this as any).$slots.default()[0]}</p>
        )
      }
    }

    return renderElement
  }
})

export default SBCardTitle
