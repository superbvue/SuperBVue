import { defineComponent, Fragment, PropType } from 'vue'

interface ISBFormSelectProps {
  options: TOptionsItem[]
  modelValue?: string
  type?: string
  class?: string
  style?: string
  min?: string | number
  max?: string | number
  step?: string | number
  id?: string
  disabled?: boolean
  size?: string
}

type TOptionsItem = {
  value?: any
  text?: string
  disabled?: boolean
  label?: string
  options?: TOptionsItem[]
}

const emitsType = {
  updateModelValue: 'update:modelValue'
}

const SBFormSelect = defineComponent({
  name: 'SBFormSelect',
  props: {
    options: {
      type: Array as PropType<TOptionsItem[]>,
      required: true
    },
    modelValue: {
      type: String,
      required: false
    },
    value: {
      type: String,
      require: false
    },
    class: {
      type: String,
      required: false
    },
    style: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      required: false
    },
    onChange: {
      type: Function,
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
  setup(props, { attrs, slots, expose, emit }) {
    console.log({ attrs, slots, expose, emit })
  },
  methods: {
    handleEmitValue(event: Event) {
      let result: any = (event.target as HTMLInputElement).value
      this.$emit(emitsType.updateModelValue, result)

      // If user use jsx/tsx emit $event
      if (this.onChange) {
        this.onChange(event)
      }
    }
  },
  render() {
    console.log(this.options)
    let computeClass = (props: ISBFormSelectProps) => {
      return ['form-select', props.class, props.size ? `form-select-${props.size}` : null]
    }
    let computeStyle = (props: ISBFormSelectProps) => {
      // console.log('props', props)
      return ''
    }

    let renderOptionItems = this.options.map((value: TOptionsItem) => {
      // console.log({ value })

      // option groups
      if (value.options) {
        let renderNestOptionItem = value.options.map((value2: TOptionsItem) => {
          return (
            <option key={value2.value} value={JSON.stringify(value2.value)}>
              {value2.text}
            </option>
          )
        })

        return (
          <Fragment>
            <option key={value.value} value={JSON.stringify(value.value)}>
              {value.text}
            </option>
            <optgroup label={value.label}>{renderNestOptionItem}</optgroup>
          </Fragment>
        )
      } else {
        return (
          <option key={value.value} value={JSON.stringify(value.value)}>
            {value.text}
          </option>
        )
      }
    })
    return (
      <select class={computeClass((this as any).$props)} onChange={this.handleEmitValue}>
        {renderOptionItems}
      </select>
    )
  }
})

export default SBFormSelect
