import { defineComponent, PropType, reactive } from 'vue'

interface SBProgressBarProps {
  striped?: boolean
  animated?: boolean
  precision?: boolean
  showProgress?: boolean
  showValue?: boolean
  variant?: string
  class?: string
  max?: string | number
  value?: string | number
  label?: string | number
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
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-success'
  | 'outline-danger'
  | 'outline-warning'
  | 'outline-info'
  | 'outline-light'
  | 'outline-dark'
  | 'link'

const SBProgressBar = defineComponent({
  name: 'SBProgressBar',
  props: {
    striped: {
      type: Boolean,
      required: false
    },
    animated: {
      type: Boolean,
      required: false
    },
    precision: {
      type: Boolean,
      required: false
    },
    showProgress: {
      type: Boolean,
      required: false
    },
    showValue: {
      type: Boolean,
      required: false
    },
    variant: {
      type: String as PropType<TVariant>,
      required: false,
      default: 'info'
      // validator: function (payload: string) {
      //   return (
      //     [
      //       'primary',
      //       'secondary',
      //       'success',
      //       'danger',
      //       'warning',
      //       'info',
      //       'light',
      //       'dark',
      //       'outline-primary',
      //       'outline-secondary',
      //       'outline-success',
      //       'outline-danger',
      //       'outline-warning',
      //       'outline-info',
      //       'outline-light',
      //       'outline-dark',
      //       'link'
      //     ].indexOf(payload) !== -1
      //   )
      // }
    },
    max: {
      type: String || Number,
      required: false,
      default: '100'
    },
    value: Number,
    label: Number
  },
  render() {
    let computeClass = (props: SBProgressBarProps) => {
      return [
        'progress-bar',
        props.variant ? `bg-${props.variant}` : null,
        props.striped ? 'progress-bar-striped' : null,
        props.animated ? 'progress-bar-animated' : null,
        props.class
      ]
    }
    let renderAlertElement = null

    // if ((this.$slots as any).default) {
    //   // Nested child elements
    //   if ((this.$slots as any).default().length !== 1) {
    //     console.log('(this.$slots as any).default', (this.$slots as any).default())
    //     renderAlertElement = (this.$slots as any).default().map((element: any) => {
    //       // console.log('element', element)
    //       return element
    //     })
    //   }

    //   // renderAlertElement = (
    //   //   <div class={computeClass((this as any).$props)} role="alert">
    //   //     {(this.$slots as any).default()[0]}
    //   //   </div>
    //   // )
    // }

    // // return (
    // //   <div class={computeClass((this as any).$props)} role="alert">
    // //     {renderAlertElement}
    // //   </div>
    // // )

    return (
      <span
        class={computeClass((this as any).$props)}
        role="progressbar"
        style={{ width: `${this.value}%` }}
        aria-valuenow={0}
        aria-valuemin={0}
        aria-valuemax={100}>
        {this.label ? `${this.label}%` : null}
      </span>
    )
  }
})

export default SBProgressBar
