import { defineComponent, PropType } from 'vue'

interface IBButtonProps {
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

// Compute required classes (non static classes)
const computeClass = (props: IBButtonProps) => [
  'btn',
  `btn-${props.variant || 'secondary'}`,
  {
    // [`btn-${props.size}`]: props.size,
    'btn-block': props.block,
    'rounded-pill': props.pill
    // 'rounded-0': props.squared && !props.pill,
    // disabled: props.disabled,
    // active: props.pressed
  }
]

const BButton = defineComponent({
  name: 'BButton',
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
        return ['danger', 'success', 'outline-primary'].indexOf(payload) !== -1
      }
    },
    href: {
      type: String as PropType<'#'>,
      required: false,
      validator: function (payload: string) {
        return ['#'].indexOf(payload) !== -1
      }
    }
  },
  setup(props) {
    console.log(props)
    return {
      props
    }
  },
  render() {
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

    // if (toggle) {
    //   on.focusin = handleFocus
    //   on.focusout = handleFocus
    // }

    // const componentData = {
    //   staticClass: 'btn',
    //   class: computeClass(props),
    //   props: computeLinkProps(props),
    //   attrs: computeAttrs(props, data),
    //   on
    // }

    // return h(link ? BLink : props.tag, mergeData(data, componentData), children)
    return (
      <button type="button" class={computeClass((this as any).props)}>
        {(this.$slots as any).default()[0].children}
      </button>
    )
  }
})

export default BButton
