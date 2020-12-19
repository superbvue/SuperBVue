import { defineComponent, PropType } from 'vue'

interface ISBFormInputProps {
  placeholder?: string
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

type TInputType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'url'
  | 'tel'
  | 'search'
  | 'range'
  | 'color'
  | 'date'
  | 'time'
  | 'datetime'
  | 'datetime-local'
  | 'month'
  | 'week'

const emitsType = {
  updateModelValue: 'update:modelValue'
}

const SBFormInput = defineComponent({
  name: 'SBFormInput',
  props: {
    placeholder: {
      type: String,
      required: false
    },
    modelValue: {
      type: String,
      required: false
    },
    type: {
      type: String as PropType<TInputType>,
      required: false,
      default: 'text',
      validator: function (payload: string) {
        return (
          [
            'text',
            'password',
            'email',
            'number',
            'url',
            'tel',
            'search',
            'range',
            'color',
            'date',
            'time',
            'datetime',
            'datetime-local',
            'month',
            'week'
          ].indexOf(payload) !== -1
        )
      }
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
    min: {
      type: String || Number,
      required: false
    },
    max: {
      type: String || Number,
      required: false
    },
    step: {
      type: String || Number,
      required: false
    },
    id: {
      type: String,
      required: false,
      default: null
    },
    disabled: {
      type: Boolean,
      required: false
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      required: false
    },
    onInput: Function
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
      let result = (event.target as HTMLInputElement).value
      this.$emit(emitsType.updateModelValue, result)

      // If user use jsx/tsx emit $event
      if (this.onInput) {
        this.onInput(event)
      }
    }
  },
  render() {
    console.log(this)
    let computeClass = (props: ISBFormInputProps) => {
      if (props.type === 'range') {
        return ['form-range', props.class]
      } else {
        return ['form-control', props.class, props.size ? `form-control-${props.size}` : null]
      }
    }
    let computeStyle = (props: ISBFormInputProps) => {
      // console.log('props', props)
      return ''
    }

    if (this.type === 'range') {
      return (
        <div>
          <h1>MY VERISON</h1>
          <input
            type={this.type}
            id={this.id}
            disabled={this.disabled}
            max={this.max}
            min={this.min}
            step={this.step}
            class={computeClass((this as any).$props)}
            style={this.style}
            value={this.value ? this.value : this.modelValue}
            onInput={this.handleEmitValue}
            placeholder={this.placeholder}
          />
          <h1>REAL</h1>

          <label for="customRange1" class="form-label">
            Example range
          </label>
          <input type="range" class="form-range" min="0" max="5" id="customRange2" />
        </div>
      )
    } else {
      return (
        <div>
          <h1>MY VERISON</h1>
          <input
            type={this.type}
            id={this.id}
            disabled={this.disabled}
            class={computeClass((this as any).$props)}
            style={this.style}
            value={this.value ? this.value : this.modelValue}
            onInput={this.handleEmitValue}
            placeholder={this.placeholder}
          />
          <h1>REALs</h1>

          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              @
            </span>
            <input
              type="text"
              class="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      )
    }

    // return (
    //   <img src={this.imgSrc} class={computeClass((this as any).$props)} alt={this.alt} style={this.style}/>
    // )
  }
})

export default SBFormInput
