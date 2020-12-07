import { defineComponent, PropType } from 'vue'

interface ISBBadge {
  items: TItems[],
  class?: string,
  href?: string
}

type TItems = {
  text: string, 
  href?: string,
  active?: boolean,
  disabled?: boolean,

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


const SBBreadcrumb = defineComponent({
  name: 'SBBreadcrumb',
  props: {
    items: {
      type: Array as PropType<TItems[]>,
      required: true,
      // default: []
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
        'breadcrumb-item',
        // props.variant ? `bg-${props.variant}` : null,
        // props.class,
        // props.pill ? 'rounded-pill' : null,
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

    return (
      <div>
        <h1>My version</h1>
        {/* <span class={computeClass((this as any).$props)}>{(this.$slots as any).default()[0].children}</span> */}
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            {
              this.items.map((value: any) => {
                return <li class={computeClass((this as any).$props)}>{value.text}</li>
              })
            }
            {/* <li class={computeClass((this as any).$props)}>{(this.$slots as any).default()[0].children}</li> */}
          </ol>
        </nav>
        <h1>Real</h1>
        
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">Home</li>
          </ol>
        </nav>

        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Library</li>
          </ol>
        </nav>

        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
        </nav>
      </div>
    )
    // return <span class={computeClass((this as any).$props)}>{(this.$slots as any).default()[0].children}</span>

  }
})

export default SBBreadcrumb
