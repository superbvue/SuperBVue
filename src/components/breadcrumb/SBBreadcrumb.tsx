import { defineComponent, PropType } from 'vue'
import { RouterLink } from 'vue-router'

interface ISBBadge {
  items: TItems[]
  class?: string
  href?: string
}

type TItems = {
  text: string
  href?: string
  active?: boolean
  disabled?: boolean
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

const SBBreadcrumb = defineComponent({
  name: 'SBBreadcrumb',
  props: {
    items: {
      type: Array as PropType<TItems[]>,
      required: true
      // default: []
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
    let computeClass = (props: ISBBadge, itemObj: TItems) => {
      return [
        'breadcrumb-item',
        props.class,
        itemObj.active ? 'active' : null
      ]
    }

    let renderElementItems = this.items.map((value: TItems) => {
      if (value.href) {
        return (
          <li class={computeClass((this as any).$props, value)}>
            <a href={value.href}>{value.text}</a>
            {/* <RouterLink to={value.href}>{value.text}</RouterLink> */}
          </li>
        )
      } else {
        return <li class={computeClass((this as any).$props, value)}>{value.text}</li>
      }
    })

    return (
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">{renderElementItems}</ol>
      </nav>
    )
  }
})

export default SBBreadcrumb
