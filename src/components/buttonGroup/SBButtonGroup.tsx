import { defineComponent, PropType, VNode, defineProps, DefineComponent } from 'vue'

interface ISBButtonGroup {
  vertical?: boolean
  size?: string
  ariaRole?: string
  type?: string
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

const TButtonGroupProps = defineProps({
  vertical: {
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
  ariaRole: {
    type: String,
    required: false
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
  class: {
    type: String,
    required: false
  }
})

const SBButtonGroup = defineComponent({
  name: 'SBButtonGroup',

  props: {
    vertical: {
      type: Boolean,
      required: false
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      required: false,
      validator: function (payload: string) {
        return ['sm', 'md', 'lg'].indexOf(payload) !== -1
      }
    },
    ariaRole: {
      type: String,
      required: false
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
    class: {
      type: String,
      required: false
    }
  },
  // setup(props: ISBButtonGroup, context) {
  //   console.log({props, context})

  //   function mergeAttrs() {
  //     let listed = []
  //     for (let key in context.attrs) {
  //       console.log(key, context.attrs[key])
  //       listed.push(`${key}= ${context.attrs[key]}`)
  //     }
  //     console.log({listed})
  //     return listed
  //   }

  //   mergeAttrs()
  //   return {
  //     mergeAttrs,
  //     props
  //   }
  // },
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
    let computeClass = (props: ISBButtonGroup) => {
      if (props.vertical) {
        return [`btn-group-vertical`, props.size ? `btn-group-${props.size}` : null, props.class]
      } else {
        return ['btn-group', props.size ? `btn-group-${props.size}` : null, props.class]
      }
    }
    if ((this.$slots as any).default) {
      renderChildElements = (this.$slots as any).default().map((element: VNode) => {
        return element
      })
    }
    if ((this.$props as any).ariaRole) {
      renderButtonGroup = (
        <div
          class={computeClass((this as any).$props)}
          role="group"
          aria-label={(this.$props as any).ariaRole}
          {...(this as any).mergeAttrs}>
          {renderChildElements}
        </div>
      )
    } else {
      renderButtonGroup = (
        <div class={computeClass((this as any).$props)} role="group" {...(this as any).mergeAttrs}>
          {renderChildElements}
        </div>
      )
    }

    // return (
    //   <div>
    //     <h1>My version</h1>
    //       {renderButtonGroup}

    //     <h1>Real</h1>

    //     <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
    //       <button type="button" class="btn btn-primary">1</button>
    //       <button type="button" class="btn btn-primary">2</button>

    //       <div class="btn-group" role="group">
    //         <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    //           Dropdown
    //         </button>
    //         <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
    //           <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    //           <li><a class="dropdown-item" href="#">Dropdown link</a></li>
    //         </ul>
    //       </div>
    //     </div>

    //   </div>
    // )
    return renderButtonGroup
  }
})

export default SBButtonGroup
