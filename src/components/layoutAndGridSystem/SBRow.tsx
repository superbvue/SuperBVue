import { defineComponent, PropType } from 'vue'

interface ISBRowProps {
  fluid?: boolean
  widths?: string
  align?: string
  justify?: string
  tag?: string
  class?: string
  style?: string
  [key: string]: any
}

const SBRow = defineComponent({
  name: 'SBRow',
  props: {
    fluid: {
      type: Boolean,
      required: false
    },
    widths: {
      type: String as PropType<'sm' | 'md' | 'lg' | 'xl' | 'xxl'>,
      required: false
    },
    align: {
      type: String as PropType<'start' | 'center' | 'end' | 'baseline' | 'stretch'>,
      required: false
    },
    justify: {
      type: String as PropType<'start' | 'center' | 'end' | 'baseline' | 'around' | 'between' | 'evenly'>,
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
    let computeClass = (props: ISBRowProps) => {
      let containerType = ''
      let alignType = ''
      let justifyType = ''
      if (this.widths) {
        containerType = `container-${this.widths}`
      } else if (this.fluid) {
        containerType = 'container-fluid'
      } else {
        containerType = 'row'
      }
      if (this.align) {
        alignType = `align-items-${this.align}`
      }
      if (this.justify) {
        justifyType = `justify-content-${this.justify}`
      }
      return [containerType, props.class, alignType, justifyType]
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

export default SBRow
