import { defineComponent, Fragment, PropType } from 'vue'
import SBNavLink from './SBNavLink'

interface ISBNavProps {
  // options: TOptionsItem[],
  fill?: boolean
  justified?: boolean
  align?: string
  tabs?: boolean
  pills?: boolean
  vertical?: boolean
  class?: string
  style?: string
  id?: string
  size?: string
}

type TOptionsItem = {
  value?: string
  text?: string
  disabled?: boolean
  label?: string
  options: TOptionsItem[]
}

const emitsType = {
  updateModelValue: 'update:modelValue'
}

const SBNav = defineComponent({
  name: 'SBNav',
  props: {
    fill: {
      type: Boolean,
      required: false
    },
    justified: {
      type: Boolean,
      require: false
    },
    align: {
      type: String,
      required: false
    },
    tabs: {
      type: Boolean,
      required: false
    },
    pills: {
      type: Boolean,
      required: false
    },
    vertical: {
      type: Boolean,
      required: false
    },
    class: {
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
    }
  },
  emits: {
    [emitsType.updateModelValue]: function (payload: string) {
      if (typeof payload === 'string') {
        return true
      } else {
        console.warn('Invalid submit event payload!')
        return false
      }
    }
  },
  methods: {
    handleEmitValue(event: Event) {
      let result: any = (event.target as HTMLInputElement).value
      this.$emit(emitsType.updateModelValue, result)
    }
  },
  render() {
    let renderNav = null
    let computeClass = (props: ISBNavProps) => {
      return ['nav', props.vertical ? 'flex-column' : null, props.class]
    }

    if ((this.$slots as any).default()) {
      renderNav = <ul class={computeClass((this as any).$props)}>{(this.$slots as any).default()}</ul>
    }

    return <div>{renderNav}</div>
  }
})

export default SBNav
