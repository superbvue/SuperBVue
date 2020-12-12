import { defineComponent, PropType, reactive } from 'vue'

interface SBAlertProps {
  fade?: boolean
  show?: boolean
  dismissLabel?: boolean
  dismissible?: boolean
  variant?: string
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
  | 'outline-primary'
  | 'outline-secondary'
  | 'outline-success'
  | 'outline-danger'
  | 'outline-warning'
  | 'outline-info'
  | 'outline-light'
  | 'outline-dark'
  | 'link'

/*** TODO: PENDING... NOT COMPLETE */
const SBAlert = defineComponent({
  name: 'SBAlert',
  props: {
    fade: {
      type: Boolean,
      required: false
    },
    show: {
      type: Boolean,
      required: false
    },
    dismissLabel: {
      type: Boolean,
      required: false
    },
    dismissible: {
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
    class: {
      type: String,
      required: false
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
    let computeClass = (props: SBAlertProps) => {
      return [
        'alert',
        `alert-${props.variant || 'secondary'}`,
        {
          'alert-dismissible': props.dismissible
        },
        props.class
      ]
    }
    let renderAlertElement = null

    if ((this.$slots as any).default) {
      // Nested child elements
      if ((this.$slots as any).default().length !== 1) {
        console.log('(this.$slots as any).default', (this.$slots as any).default())
        renderAlertElement = (this.$slots as any).default().map((element: any) => {
          // console.log('element', element)
          return element
        })
      }

      // renderAlertElement = (
      //   <div class={computeClass((this as any).$props)} role="alert">
      //     {(this.$slots as any).default()[0]}
      //   </div>
      // )
    }

    return (
      <div class={computeClass((this as any).$props)} role="alert">
        {renderAlertElement}
      </div>
    )
  }
})

export default SBAlert
