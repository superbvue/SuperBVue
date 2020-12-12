import { defineComponent, PropType } from 'vue'

interface ISBNavLinkProps {
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

const SBNavLink = defineComponent({
  name: 'SBNavLink',
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
  render() {
    let renderNavItem = null
    let computeClass = (props: ISBNavLinkProps) => {
      return ['nav-link', props.active ? 'active' : null, props.class]
    }

    if ((this.$slots as any).default()) {
      renderNavItem = (
        <li class="nav-item">
          <a class={computeClass((this as any).$props)} target={this.target} href={this.href}>
            {(this.$slots as any).default()[0]}
          </a>
        </li>
      )
    }

    return renderNavItem
  }
})

export default SBNavLink
