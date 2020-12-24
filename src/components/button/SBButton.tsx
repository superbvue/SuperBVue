import { defineComponent, Fragment, PropType, ref } from 'vue'

interface ISBButtonProps {
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

type SBButtononClick = {
  onClick?: (event: Event) => void
  [key: string]: any
}

const SBButton = defineComponent({
  name: 'SBButton',
  props: {
    disabled: {
      type: Boolean,
      required: false
    },
    toggle: {
      type: Boolean,
      required: false
    },
    pressed: {
      type: Boolean,
      required: false
    },
    block: {
      type: Boolean,
      required: false
    },
    pill: {
      type: Boolean,
      required: false
    },
    squared: {
      type: Boolean,
      required: false
    },
    active: {
      type: Boolean,
      required: false
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      required: false,
      default: 'md',
      validator: function (payload: string) {
        return ['sm', 'md', 'lg'].indexOf(payload) !== -1
      }
    },
    type: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      required: false,
      default: 'button',
      validator: function (payload: string) {
        return ['button', 'submit', 'reset'].indexOf(payload) !== -1
      }
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
            'outline-primary',
            'outline-secondary',
            'outline-success',
            'outline-danger',
            'outline-warning',
            'outline-info',
            'outline-light',
            'outline-dark',
            'link'
          ].indexOf(payload) !== -1
        )
      }
    },
    href: {
      type: String as PropType<'#'>,
      required: false,
      validator: function (payload: string) {
        return ['#'].indexOf(payload) !== -1
      }
    },
    onClick: {
      type: Function,
      required: false,
      default: () => {}
    },
    class: {
      type: String,
      required: false
    }
  },
  methods: {
    emitToParent(event: MouseEvent) {
      this.onClick(event)
    }
  },
  render() {
    const computeClass = (props: ISBButtonProps) => {
      return [
        'btn',
        props.class,
        props.variant ? `btn-${props.variant}` : null,
        {
          // [`btn-${props.size}`]: props.size,
          'btn-block': props.block,
          'rounded-pill': props.pill,
          // 'rounded-0': props.squared && !props.pill,
          disabled: props.disabled
          // active: props.pressed
        }
      ]
    }
    // const toggle = isToggle(props)
    // const link = isLink(props)
    // const nonStandardTag = isNonStandardTag(props)
    // const hashLink = link && props.href === '#'
    // const on = {
    //   keydown(evt) {
    //     // When the link is a `href="#"` or a non-standard tag (has `role="button"`),
    //     // we add a keydown handlers for CODE_SPACE/CODE_ENTER
    //     /* istanbul ignore next */
    //     if (props.disabled || !(nonStandardTag || hashLink)) {
    //       return
    //     }
    //     const { keyCode } = evt
    //     // Add CODE_SPACE handler for `href="#"` and CODE_ENTER handler for non-standard tags
    //     if (keyCode === CODE_SPACE || (keyCode === CODE_ENTER && nonStandardTag)) {
    //       const target = evt.currentTarget || evt.target
    //       stopEvent(evt, { propagation: false })
    //       target.click()
    //     }
    //   },
    //   click(evt) {
    //     /* istanbul ignore if: blink/button disabled should handle this */
    //     if (props.disabled && isEvent(evt)) {
    //       stopEvent(evt)
    //     } else if (toggle && listeners && listeners['update:pressed']) {
    //       // Send `.sync` updates to any "pressed" prop (if `.sync` listeners)
    //       // `concat()` will normalize the value to an array without
    //       // double wrapping an array value in an array
    //       concat(listeners['update:pressed']).forEach(fn => {
    //         if (isFunction(fn)) {
    //           fn(!props.pressed)
    //         }
    //       })
    //     }
    //   }
    // }
    if ((this.$slots as any).default) {
      if ((this.$slots as any).default().length === 1) {
        if (typeof (this.$slots as any).default()[0].type === 'symbol') {
          if (this.onClick) {
            return (
              <button
                type={this.type}
                class={computeClass((this as any).$props)}
                onClick={($event) => this.emitToParent($event)}>
                {(this.$slots as any).default()[0].children}
              </button>
            )
          } else {
            return (
              <button type={this.type} class={computeClass((this as any).$props)}>
                {(this.$slots as any).default()[0].children}
              </button>
            )
          }
        } else {
          // If there any nest element like loading component
          if (this.onClick) {
            return (
              <button
                type={this.type}
                class={computeClass((this as any).$props)}
                onClick={($event) => this.emitToParent($event)}>
                {(this.$slots as any).default()[0]}
              </button>
            )
          } else {
            return (
              <button type={this.type} class={computeClass((this as any).$props)}>
                {(this.$slots as any).default()[0]}
              </button>
            )
          }
        }
      }

      if ((this.$slots as any).default().length === 2) {
        if (typeof (this.$slots as any).default()[0].type === 'symbol') {
          console.log('true')
          if (this.onClick) {
            return (
              <button
                type={this.type}
                class={computeClass((this as any).$props)}
                onClick={($event) => this.emitToParent($event)}>
                {(this.$slots as any).default()[0].children}
              </button>
            )
          } else {
            return (
              <button type={this.type} class={computeClass((this as any).$props)}>
                {(this.$slots as any).default()[0].children}
              </button>
            )
          }
        } else {
          // If there any nest element like loading component
          if (this.onClick) {
            return (
              <button
                type={this.type}
                class={computeClass((this as any).$props)}
                onClick={($event) => this.emitToParent($event)}>
                {(this.$slots as any).default()[0]} {(this.$slots as any).default()[1]}
              </button>
            )
          } else {
            return (
              <button type={this.type} class={computeClass((this as any).$props)}>
                {(this.$slots as any).default()[0]}
              </button>
            )
          }
        }
      }
    } else {
      // <SBButton type="button" class="btn-close"></SBButton>
      return <button type={this.type} class={computeClass((this as any).$props)} onClick={this.emitToParent}></button>
    }
  }
})

export default SBButton
