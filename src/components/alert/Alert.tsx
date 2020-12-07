import { defineComponent, PropType, reactive } from 'vue'

interface SIBAlertProps {
  disabled?: boolean
  toggle?: boolean
  pressed?: boolean
  block?: boolean
  pill?: boolean
  squared?: boolean
  active?: boolean
  size?: string
  type?: string
  variant?: string
  href?: string
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


// Convert `show` value to a number
const parseCountDown = (show: any) => {
  console.log('show', show)
  // if (show === '' || isBoolean(show)) {
  //   return 0
  // }
  // show = toInteger(show, 0)
  // return show > 0 ? show : 0
}

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
      default: 'info',
      validator: function (payload: string) {
        return ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'outline-primary', 'outline-secondary', 'outline-success', 'outline-danger', 'outline-warning', 'outline-info', 'outline-light', 'outline-dark', 'link'].indexOf(payload) !== -1
      }
    }
  },
  setup() {
    const state = reactive({
      countDown: 0,
      // If initially shown, we need to set these for SSR
      // localShow: parseShow(this.show)
    })
    return {
      state
    }
  },
  render() {
    const computeClass = (props: any) => {
      console.log('props', props)
      return [
        'alert',
        `alert-${props.variant || 'secondary'}`,
        {
          'alert-dismissible': props.dismissible,
          // [`alert-${props.variant}`]: props.variant
        }
      ]
    }
    console.log('(this.$slots as any).default()[0].children', (this.$slots as any).default()[0])

    return (
      <div>
        <div class={computeClass((this as any).$props)} role="alert">
          {(this.$slots as any).default()[0].children}
        </div>

        <div class="alert alert-primary" role="alert">
          A simple primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.
        </div>
      </div>
    )
  }
})

export default SBAlert
