import { defineComponent, PropType } from 'vue'

interface ISBContainerProps {
  fluid?: boolean
  widths?: string
  tag?: string
  class?: string
  style?: string
  [key: string]: any
}

const SBContainer = defineComponent({
  name: 'SBContainer',
  props: {
    fluid: {
      type: Boolean,
      required: false
    },
    widths: {
      type: String as PropType<'sm' | 'md' | 'lg' | 'xl' | 'xxl'>,
      required: false
    },
    tag: {
      type: String,
      required: false
    },
    class: {
      type: String,
      required: false
    },
    style: {
      type: String,
      required: false
    }
  },
  render() {
    let computeClass = (props: ISBContainerProps) => {
      let containerType = ''
      if (this.widths) {
        containerType = `container-${this.widths}`
      } else if (this.fluid) {
        containerType = 'container-fluid'
      } else {
        containerType = 'container'
      }
      return [containerType, props.class]
    }

    let computeStyle = (props: ISBContainerProps) => {
      console.log('props', props)
      return ''
    }
    let renderContainer = null

    if (this.$slots.default) {
      console.log(this.$slots.default())
      renderContainer = (
        <div class={computeClass((this as any).$props)} style={this.style}>
          {this.$slots.default()}
        </div>
      )
    }

    return renderContainer
  }
})

export default SBContainer
