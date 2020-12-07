import { defineComponent, PropType } from 'vue'

interface ISBBadge {
  size?: string,
  pill?: string,
  variant?: string,
  class?: string,
  href?: string
}

type TVariant = 'primary'  
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
        return ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'outline-primary', 'outline-secondary', 'outline-success', 'outline-danger', 'outline-warning', 'outline-info', 'outline-light', 'outline-dark', 'link'].indexOf(payload) !== -1
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
    let renderChildElements = null
    let renderButtonGroup = null
    let computeClass = (props: ISBBadge) => {
      return [
        'badge',
        props.variant ? `bg-${props.variant}` : null,
        props.class,
        props.pill ? 'rounded-pill' : null,
      ]
    }
    // if ((this.$slots as any).default) {
    //   renderChildElements = (this.$slots as any).default().map((element: VNode) => {
    //     return element
    //   })
    // }
    // if ((this.$props as any).ariaRole) {
    //   renderButtonGroup = (
    //     <div class={computeClass((this as any).$props)} role="group" aria-label={(this.$props as any).ariaRole} {...(this as any).mergeAttrs}>
    //       {renderChildElements}
    //     </div>
    //   )
    // } else {
    //   renderButtonGroup = (
    //     <div class={computeClass((this as any).$props)} role="group" {...(this as any).mergeAttrs}>
    //       {renderChildElements}
    //     </div>
    //   )
    // }

    // return (
    //   <div>
    //     <h1>My version</h1>
    //     <span class={computeClass((this as any).$props)}>{(this.$slots as any).default()[0].children}</span>

    //     <h1>Real</h1>
        
    //     <h1>Example heading <span class="badge bg-secondary">New</span></h1>
    //     <h2>Example heading <span class="badge bg-secondary">New</span></h2>
    //     <h3>Example heading <span class="badge bg-secondary">New</span></h3>
    //     <h4>Example heading <span class="badge bg-secondary">New</span></h4>
    //     <h5>Example heading <span class="badge bg-secondary">New</span></h5>
    //     <h6>Example heading <span class="badge bg-secondary">New</span></h6>

        
    //   </div>
    // )
    return <span class={computeClass((this as any).$props)}>{(this.$slots as any).default()[0].children}</span>

  }
})

export default SBBadge
