import { defineComponent, PropType, reactive } from 'vue'

interface SBProgressProps {
  striped?: boolean
  animated?: boolean
  height?: string,
  precision?: boolean,
  showProgress?: boolean,
  showValue?: boolean,
  variant?: string
  class?: string,
  max?: string | number
  value?: string | number
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

const SBProgress = defineComponent({
  name: 'SBProgress',
  props: {
    striped: {
      type: Boolean,
      required: false
    },
    animated: {
      type: Boolean,
      required: false
    },
    height: {
      type: String,
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
      default: 100
    },
    value: {
      type: String || Number,
      required: false,
      default: 0
    }
  },
  setup() {
    let state = reactive({
      countDown: 0
      // If initially shown, we need to set these for SSR
      // localShow: parseShow(this.show)
    })
    return {
      state
    }
  },
  render() {
    // let computeClass = (props: SBProgressProps) => {
    //   return [
    //     'alert',
    //     `alert-${props.variant || 'secondary'}`,
    //     {
    //       'alert-dismissible': props.dismissible
    //     },
    //     props.class
    //   ]
    // }
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
      <div>


        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
        <br/>
        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
        <br/>
        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
        <br/>
        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
        </div>
        <br/>
        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
        </div>

      </div>
    )
  }
})

export default SBProgress
