import { defineComponent, Fragment, PropType } from 'vue'
import SBNavLink from './SBNavLink'

interface ISBNavProps {
  // options: TOptionsItem[],
  fill?: boolean,
  justified?: boolean,
  align?: string,
  tabs?: boolean,
  pills?: boolean,
  vertical?: boolean,
  class?: string,
  style?: string,
  id?: string,
  size?: string
}

type TOptionsItem = {
  value?: string,
  text?: string,
  disabled?: boolean,
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
    },
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
      return [
        'nav',
        props.vertical ? 'flex-column' : null,
        props.class
      ]
    }

    if ((this.$slots as any).default()) {
      renderNav = (
        <ul class={computeClass((this as any).$props)}> 
          {(this.$slots as any).default()}
        </ul>
      )
    }

    return (
      <div>
        <h1>MY VERISON</h1>
          {/* <select class={computeClass((this as any).$props)} aria-label="Default select example" onChange={this.handleEmitValue}>
            {renderOptionItems}
          </select>
          <div class="mt-3">Selected: <strong>{this.modelValue}</strong></div> */}
        {renderNav}

        <h1>REAL</h1>


        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Active</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          {/* <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li> */}
        </ul>
      </div>
    )
  }
})

export default SBNav
