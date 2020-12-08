import { defineComponent, PropType } from 'vue'

interface ISBSpinners {
  label?: string,
  type?: string,
  small?: boolean,
  variant?: string,
  class?: string
}

type TVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'

const SBSpinners = defineComponent({
  name: 'SBSpinners',
  props: {
    label: {
      type: String,
      required: false
    },
    type: {
      type: String as PropType<'grow'>,
      required: false,
    },
    small: {
      type: Boolean,
      required: false
    },
    variant: {
      type: String as PropType<TVariant>,
      required: false,
      validator: function (payload: string) {
        return (
          [
            'primary',
            'secondary',
            'success',
            'danger',
            'warning',
            'info',
            'light',
            'dark',
          ].indexOf(payload) !== -1
        )
      }
    },
    class: {
      type: String,
      required: false
    }
  },
  methods: {
    mergeAttrs() {
      let listedOfAttrs = []
      for (let key in this.$attrs) {
        listedOfAttrs.push(`${key}= ${this.$attrs[key]}`)
      }
      return listedOfAttrs
    }
  },
  created() {
    this.mergeAttrs()
  },
  render() {
    let computeClass = (props: ISBSpinners) => {
      return [
        props.type ? 'spinner-grow' :'spinner-border',
        props.small ? 'spinner-border-sm' : null,
        props.variant ? `text-${props.variant}` : null,
        props.class
      ]
    }
    // let renderLabel = this.$props.label ? this.$props.label : "Loading..."
    // let renderSlot = null
    // if ( (this.$slots as any).default) {
    //   console.log('true')
    //   renderSlot =  (this.$slots as any).default()[0].children  !== '' ? (this.$slots as any).default()[0].children : false
    // }
    //     // console.log('object', (this.$slots as any).default()[0])

    // console.log({renderLabel, renderSlot})
    // if (renderSlot === null) {
    //   return (
    //     <div class={computeClass((this as any).$props)} role="status">
    //       <span class="visually-hidden">{renderLabel}</span>
    //     </div>
    //   )
    // } else {
    //   console.log(' (this.$slots as any).default()[0].children',  (this.$slots as any).default()[0].children)
    //   return (
    //     <div class={computeClass((this as any).$props)} role="status">
    //       <span class="visually-hidden">{renderSlot}</span>
    //     </div>
    //   )
    // }
    return (
      <div class={computeClass((this as any).$props)} role="status">
        <span class="visually-hidden">{this.$props.label ? this.$props.label : "Loading..."}</span>
      </div>
    )
  }
})

export default SBSpinners
