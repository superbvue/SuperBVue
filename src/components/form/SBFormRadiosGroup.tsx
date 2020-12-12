import { defineComponent, Fragment, PropType } from 'vue'
import SBFormRadios from './SBFormRadios'

interface ISBFormRadiosGroupProps {
  modelValue?: string
  required?: boolean
  form?: string
  autofocus?: boolean
  options?: {} | []
  checked?: any
  validated?: boolean
  stacked?: boolean
  buttons?: boolean
  value?: string | number
  class?: string
  style?: string
  name?: string
  id?: string
  disabled?: boolean
  size?: string
  label?: string
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

const SBFormRadiosGroup = defineComponent({
  name: 'SBFormRadiosGroup',
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
    name: {
      type: String,
      required: false
    },
    id: {
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
    label: {
      type: String,
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
      console.log({ result })
      this.$emit(emitsType.updateModelValue, result)
    }
  },
  render() {
    console.log(this)
    let computeClass = (props: ISBFormRadiosGroupProps) => {
      return ['form-select', props.class, props.size ? `form-select-${props.size}` : null]
    }
    let computeStyle = (props: ISBFormRadiosGroupProps) => {
      // console.log('props', props)
      return ''
    }

    let renderRadiosItems = this.options.map((value: TOptionsItem) => {
      // console.log({value})

      // option groups
      // if (value.options) {
      //   let renderNestOptionItem = value.options.map((value2: TOptionsItem) => {
      //     return <option key={value2.value} value={JSON.stringify(value2.value)}>{value2.text}</option>
      //   })

      //   return (
      //     <Fragment>
      //       <option key={value.value} value={JSON.stringify(value.value)}>{value.text}</option>
      //       <optgroup label={value.label}>
      //         {renderNestOptionItem}
      //       </optgroup>
      //     </Fragment>
      //   )
      // } else {
      //   return (
      //     <option key={value.value} value={JSON.stringify(value.value)}>{value.text}</option>
      //   )
      // }
      return (
        <SBFormRadios value={value.value}>{value.text}</SBFormRadios>
        // <input class="form-check-input" type="checkbox" value={value.value} onInput={this.handleEmitValue} checked={this.value === 'A' ? true : false}/>
      )
    })

    return (
      <div>
        <h1>MY VERISON</h1>
        <div class="input-group">
          <legend>{this.label}</legend>
          {renderRadiosItems}
          {/* <input class="form-check-input" type="checkbox" value={this.value} name={this.name} id="flexCheckDefault" onInput={this.handleEmitValue} checked={this.value === 'A' ? true : false}/>
            <label class="form-check-label" for="flexCheckDefault">
              Default checkbox
            </label> */}
        </div>

        {/* <div class="form-check">
            <input class="form-check-input" type="checkbox" value={this.value} name={this.name} id="flexCheckChecked" onInput={this.handleEmitValue} checked={this.value === 'B' ? true : false}/>
            <label class="form-check-label" for="flexCheckChecked">
              Checked checkbox
            </label>
          </div> */}
        {/* <div class="mt-3">Selected: <strong>{this.value}</strong></div> */}

        <h1>REAL</h1>

        {/* <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          <label class="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
          <label class="form-check-label" for="flexCheckChecked">
            Checked checkbox
          </label>
        </div> */}
      </div>
    )
  }
})

export default SBFormRadiosGroup
