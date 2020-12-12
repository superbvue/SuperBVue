import { defineComponent, Fragment, PropType } from 'vue'

interface ISBFormRadiosProps {
  modelValue?: string
  value?: string
  class?: string
  style?: string
  name?: string
  id?: string
  for?: string

  disabled?: boolean
  size?: string
  type?: string
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

const SBFormRadios = defineComponent({
  name: 'SBFormRadios',
  props: {
    // options: {
    //   type: Array as PropType<TOptionsItem[]>,
    //   required: true
    // },
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
    for: {
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
    type: {
      type: String as PropType<'checkbox' | 'radio'>,
      required: false,
      default: 'checkbox',
      validator: function (payload: string) {
        return ['checkbox', 'radio'].indexOf(payload) !== -1
      }
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
    // console.log(this.$slots.default)
    let computeClass = (props: ISBFormRadiosProps) => {
      return ['form-check', props.class, props.size ? `form-select-${props.size}` : null]
    }
    let computeStyle = (props: ISBFormRadiosProps) => {
      // console.log('props', props)
      return ''
    }
    if (this.$slots.default) {
      return (
        <div class={computeClass((this as any).$props)}>
          <input
            class="form-check-input"
            type={this.type}
            value={this.value}
            name={this.name}
            disabled={this.disabled}
            id={this.id}
            onInput={this.handleEmitValue}
          />
          <label class="form-check-label" for={this.for}>
            {this.$slots.default()[0].children}
          </label>
        </div>
      )
    } else {
      return (
        <div class={computeClass((this as any).$props)}>
          <input
            class="form-check-input"
            type={this.type}
            value={this.value}
            name={this.name}
            disabled={this.disabled}
            id={this.id}
            onInput={this.handleEmitValue}
          />
          <label class="form-check-label" for={this.for}>
            {/* {this.$slots.default()[0].children} */}
            {this.value}
          </label>
        </div>
      )
    }

    // let renderOptionItems = this.options.map((value: TOptionsItem) => {
    //   console.log({value})

    //   // option groups
    //   if (value.options) {
    //     let renderNestOptionItem = value.options.map((value2: TOptionsItem) => {
    //       return <option key={value2.value} value={JSON.stringify(value2.value)}>{value2.text}</option>
    //     })

    //     return (
    //       <Fragment>
    //         <option key={value.value} value={JSON.stringify(value.value)}>{value.text}</option>
    //         <optgroup label={value.label}>
    //           {renderNestOptionItem}
    //         </optgroup>
    //       </Fragment>
    //     )
    //   } else {
    //     return (
    //       <option key={value.value} value={JSON.stringify(value.value)}>{value.text}</option>
    //     )
    //   }
    // })
    // return (
    //   <div>
    //     {/* <h1>MY VERISON</h1> */}
    //     <input class="form-check-input" type="checkbox" value={this.value} name={this.name} id="flexCheckDefault" onInput={this.handleEmitValue} checked={this.value === 'A' ? true : false}/>
    //     <label class="form-check-label" for="flexCheckDefault">
    //       Default checkbox
    //     </label>
    //   </div>
    // )
  }
})

export default SBFormRadios
