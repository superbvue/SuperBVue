import { defineComponent, PropType, reactive } from 'vue'
import SBProgressBar from './SBProgressBar'

interface SBProgressProps {
  striped?: boolean
  animated?: boolean
  height?: string
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
      default: '100'
    },
    value: Number,
    label: Number
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
    let computeClass = (props: SBProgressProps) => {
      return [
        'progress-bar',
        props.variant ? `bg-${props.variant}` : null,
        props.striped ? 'progress-bar-striped' : null,
        props.animated ? 'progress-bar-animated' : null,
        props.class
      ]
    }
    let renderProgressElement = null
    if ((this.$slots as any).default) {
      //  <SBProgress :max="100" :label="state.value" striped>
      //    <SBProgressBar :value="state.value" :label="state.value" variant="warning" striped />
      //  </SBProgress>
      renderProgressElement = (
        <div class="progress" style={{ height: this.height ? `${this.height}px` : '' }}>
          {(this.$slots as any).default()}
        </div>
      )
    } else {
      renderProgressElement = (
        <div class="progress" style={{ height: this.height ? `${this.height}px` : '' }}>
          <span class={computeClass((this as any).$props)} role="progressbar" style={{ width: `${this.value}%` }}>
            {this.label ? `${this.label}%` : null}
          </span>
        </div>
      )
    }
    return renderProgressElement
  }
})

export default SBProgress
