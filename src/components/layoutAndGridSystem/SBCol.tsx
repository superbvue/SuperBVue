import { defineComponent, PropType } from 'vue'

interface ISBColProps {
  cols?: string
  widths?: string
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
  alignSelf?: string
  order?: string
  orderSmall?: string
  orderMiddle?: string
  orderLarge?: string
  offset?: string
  offsetSmall?: string
  offsetMiddle?: string
  offsetLarge?: string
  class?: string
  style?: string
  [key: string]: any
}

const SBCol = defineComponent({
  name: 'SBCol',
  props: {
    cols: {
      type: String as PropType<'1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12'>,
      required: false
    },
    widths: {
      type: String as PropType<'sm' | 'md' | 'lg' | 'xl' | 'xxl'>,
      required: false
    },
    sm: {
      type: Boolean,
      required: false
    },
    md: {
      type: Boolean,
      required: false
    },
    lg: {
      type: Boolean,
      required: false
    },
    xl: {
      type: Boolean,
      required: false
    },
    /** horizontal alignment */
    alignSelf: {
      type: String as PropType<'start' | 'center' | 'end' | 'baseline' | 'stretch'>,
      required: false
    },
    order: {
      type: String as PropType<'0' | '1' | '2' | '3' | '4' | '5' | 'first' | 'last'>,
      required: false
    },
    orderSmall: {
      type: String as PropType<'0' | '1' | '2' | '3' | '4' | '5' | 'first' | 'last'>,
      required: false
    },
    orderMiddle: {
      type: String as PropType<'0' | '1' | '2' | '3' | '4' | '5' | 'first' | 'last'>,
      required: false
    },
    orderLarge: {
      type: String as PropType<'0' | '1' | '2' | '3' | '4' | '5' | 'first' | 'last'>,
      required: false
    },
    offset: {
      type: String as PropType<'0' | '1' | '2' | '3' | '4' | '5' | 'first' | 'last'>,
      required: false
    },
    offsetSmall: {
      type: String as PropType<'0' | '1' | '2' | '3' | '4' | '5' | 'first' | 'last'>,
      required: false
    },
    offsetMiddle: {
      type: String as PropType<'0' | '1' | '2' | '3' | '4' | '5' | 'first' | 'last'>,
      required: false
    },
    offsetLarge: {
      type: String as PropType<'0' | '1' | '2' | '3' | '4' | '5' | 'first' | 'last'>,
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
    let computeClass = (props: ISBColProps) => {
      let containerTypeClass = ''
      let alignSelfTypeClass = ''
      let orderTypeClass = ''
      let offsetTypeClass = ''
      if (this.cols) {
        containerTypeClass = `col-${this.cols}`
      } else if (this.sm) {
        containerTypeClass = 'col-sm'
      } else if (this.md) {
        containerTypeClass = 'col-md'
      } else if (this.lg) {
        containerTypeClass = 'col-lg'
      } else if (this.xl) {
        containerTypeClass = 'col-xl'
      } else {
        containerTypeClass = 'col'
      }
      if (this.alignSelf) {
        alignSelfTypeClass = `align-self-${this.alignSelf}`
      }
      if (this.order) {
        orderTypeClass = `order-${this.order}`
      } else if (this.orderSmall) {
        orderTypeClass = `order-sm-${this.orderSmall}`
      } else if (this.orderMiddle) {
        orderTypeClass = `order-md-${this.orderMiddle}`
      } else if (this.orderLarge) {
        orderTypeClass = `order-lg-${this.orderLarge}`
      }
      if (this.offset) {
        offsetTypeClass = `offset-${this.offset}`
      } else if (this.offsetSmall) {
        offsetTypeClass = `offset-sm-${this.offsetSmall}`
      } else if (this.offsetMiddle) {
        offsetTypeClass = `offset-md-${this.offsetMiddle}`
      } else if (this.offsetLarge) {
        offsetTypeClass = `offset-lg-${this.offsetLarge}`
      }
      return [containerTypeClass, props.class, alignSelfTypeClass, orderTypeClass, offsetTypeClass]
    }

    let computeStyle = (props: ISBColProps) => {
      // console.log('props', props)
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

export default SBCol
