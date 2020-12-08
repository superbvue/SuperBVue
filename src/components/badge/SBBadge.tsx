import { defineComponent, PropType } from 'vue'

interface ISBBadge {
  size?: string
  pill?: string
  variant?: string
  class?: string
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

const SBBadge = defineComponent({
  name: 'SBBadge',
  props: {
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      required: false,
      validator: function (payload: string) {
        return ['sm', 'md', 'lg'].indexOf(payload) !== -1
      }
    },
    pill: {
      type: Boolean,
      required: false
    },
    variant: {
      type: String as PropType<TVariant>,
      required: false,
      default: 'secondary',
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
    class: {
      type: String,
      required: false
    },
    href: {
      type: String as PropType<'#'>,
      required: false,
      validator: function (payload: string) {
        return ['#'].indexOf(payload) !== -1
      }
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
    let computeClass = (props: ISBBadge) => {
      return ['badge', props.variant ? `bg-${props.variant}` : null, props.class, props.pill ? 'rounded-pill' : null]
    }

    return <span class={computeClass((this as any).$props)}>{(this.$slots as any).default()[0].children}</span>
  }
})

export default SBBadge
