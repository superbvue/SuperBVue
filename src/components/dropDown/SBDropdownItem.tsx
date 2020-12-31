import { defineComponent, PropType } from 'vue'

interface ISBDropdownItemProps {
  href?: string
  rel?: string
  target?: string
  active?: boolean
  disabled?: boolean
  to?: string | object
  append?: boolean
  replace?: boolean
  activeClass?: string
  exact?: boolean
  exactActiveClass?: string
  style?: string
  id?: string
  linkClasses?: string
  class?: string
}

// TODO: Need to more work on link or vue-router. Not sure about it. Or just <a> element only
const SBDropdownItem = defineComponent({
  name: 'SBDropdownItem',
  props: {
    href: {
      type: String,
      required: false,
      default: ''
    },
    rel: {
      type: String,
      require: false
    },
    target: {
      type: String,
      required: false
    },
    active: {
      type: Boolean,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    to: {
      type: String || Object,
      required: false
    },
    append: {
      type: Boolean,
      required: false
    },
    replace: {
      type: Boolean,
      required: false
    },
    activeClass: {
      type: String,
      required: false
    },
    exact: {
      type: Boolean,
      required: false
    },
    exactActiveClass: {
      type: String,
      required: false
    },
    style: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: false
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      required: false
    },
    linkClasses: {
      type: String,
      required: false
    },
    class: {
      type: String,
      required: false
    }
  },
  // methods: {
  //   handleRouteTo(event: Event, urlPath: string) {
  //     console.log('enter',event, urlPath, )
  //     console.log(this.href)
  //     // this.$router.push({
  //     //   path: this.href
  //     // })
  //     // this.$router.push(this.href)
  //   }
  // },
  setup(props) {
    // route.push({})
    function handleRouteTo(event: Event, urlPath: string) {
      event.preventDefault()
      // window.location.assign(props.href)
      // event.preventDefault()
      // console.log(route)
      // console.log(router)

      // router.push(props.href)
      // console.log(this.href)
      // this.$router.push({
      //   path: this.href
      // })
      // this.$router.push(this.href)
    }

    return {
      handleRouteTo
    }
  },
  render() {
    let renderNavItem = null
    let computeClass = (props: ISBDropdownItemProps) => {
      return ['dropdown-item', props.active ? 'active' : null, props.class]
    }

    if ((this.$slots as any).default()) {
      renderNavItem = (
        <li>
          <a
            class={computeClass((this as any).$props)}
            href={this.href}
            onClick={(event) => this.handleRouteTo(event, this.href)}>
            {(this.$slots as any).default()[0]}
          </a>

          {/* <a class={computeClass((this as any).$props)} target={this.target} onClick={(event) => this.handleRouteTo(event, this.href)}>
            {(this.$slots as any).default()[0]}
          </a> */}
          {/* <RouterLink to="/s"></RouterLink> */}
        </li>
      )
    }

    return renderNavItem
  }
})

export default SBDropdownItem
