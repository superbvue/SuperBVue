import { defineComponent, PropType, reactive } from 'vue'
// import SBDropdownsBar from './SBDropdownsBar'

interface SBDropdownsProps {
  text?: boolean
  split?: boolean
  size?: string
  precision?: boolean
  showProgress?: boolean
  showValue?: boolean
  variant?: string
  dropLeft?: boolean
  dropRight?: boolean
  dropUp?: boolean

  class?: string
  id?: string
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

const SBDropdowns = defineComponent({
  name: 'SBDropdowns',
  props: {
    text: {
      type: String,
      required: false
    },
    split: {
      type: Boolean,
      required: false
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      required: false,
      default: 'md'
      // validator: function (payload: string) {
      //   return ['sm', 'md', 'lg'].indexOf(payload) !== -1
      // }
    },
    dropLeft: {
      type: Boolean,
      required: false
    },
    dropRight: {
      type: Boolean,
      required: false
    },
    dropUp: {
      type: Boolean,
      required: false
    },
    variant: {
      type: String as PropType<TVariant>,
      required: false,
      default: 'secondary'
      // validator: function (payload: string) {
      //   return (
      //     [
      //       'primary',
      //       'secondary',
      //       'success',
      //       'danger',
      //       'warning',
      //       'info',
      //       'light',
      //       'dark',
      //       'outline-primary',
      //       'outline-secondary',
      //       'outline-success',
      //       'outline-danger',
      //       'outline-warning',
      //       'outline-info',
      //       'outline-light',
      //       'outline-dark',
      //       'link'
      //     ].indexOf(payload) !== -1
      //   )
      // },
    },
    class: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      state: {
        isShow: false
      }
    }
  },
  methods: {
    handleSetShow() {
      this.state.isShow = !this.state.isShow
    }
  },
  computed: {
    // computeClassForDropdown() {

    // },
    classForDropdownPositions() {
      if (this.dropLeft) {
        return 'dropstart'
      }
      if (this.dropRight) {
        return 'dropend'
      }
      if (this.dropUp) {
        return 'dropup'
      }
      return null
    }
  },
  render() {
    let computeClassForDropdown = (props: SBDropdownsProps) => {
      return [
        'btn',
        'dropdown-toggle',
        props.variant ? `btn-${props.variant}` : 'btn-secondary',
        props.size ? `btn-${props.size}` : 'btn-md',
        // props.striped ? 'progress-bar-striped' : null,
        // props.animated ? 'progress-bar-animated' : null,
        { show: this.state.isShow },
        props.class
      ]
    }
    let computeClassForDropdownSplit = (props: SBDropdownsProps) => {
      return [
        'btn',
        'dropdown-toggle',
        'dropdown-toggle-split',
        props.variant ? `btn-${props.variant}` : 'btn-secondary',
        props.size ? `btn-${props.size}` : 'btn-md',
        { show: this.state.isShow },
        props.class
      ]
    }
    let renderDropdownElement = null
    let renderDropdownSplitElement = null

    if (this.split) {
      renderDropdownSplitElement = (
        <div class={['btn-group', this.classForDropdownPositions]}>
          <button type="button" class={`btn btn-${this.variant}`}>
            {this.text ? this.text : 'Action'}
          </button>
          <button
            type="button"
            class={computeClassForDropdownSplit((this as any).$props)}
            aria-expanded="false"
            onClick={this.handleSetShow}>
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class={`dropdown-menu ${this.state.isShow ? 'show' : ''}`}>
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </div>
      )
    } else {
      console.log('{(this.$slots as any).default()[0]}', (this.$slots as any).default())
      renderDropdownElement = (
        <div class={['btn-group', this.classForDropdownPositions]}>
          <button
            class={computeClassForDropdown((this as any).$props)}
            type="button"
            id={this.id ? this.id : ''}
            aria-expanded="false"
            onClick={this.handleSetShow}>
            {this.text ? this.text : 'Dropdown button'}
          </button>
          <ul class={`dropdown-menu ${this.state.isShow ? 'show' : ''}`}>{(this.$slots as any).default()}</ul>
        </div>
      )
    }
    // if ((this.$slots as any).default) {
    //   //  <SBDropdowns :max="100" :label="state.value" striped>
    //   //    <SBDropdownsBar :value="state.value" :label="state.value" variant="warning" striped />
    //   //  </SBDropdowns>
    //   renderDropdownElement = (
    //     <div class="progress" style={{ height: this.height ? `${this.height}px` : '' }}>
    //       {(this.$slots as any).default()}
    //     </div>
    //   )
    // } else {
    //   renderDropdownElement = (
    //     <div class="progress" style={{ height: this.height ? `${this.height}px` : '' }}>
    //       <span class={computeClass((this as any).$props)} role="progressbar" style={{ width: `${this.value}%` }}>
    //         {this.label ? `${this.label}%` : null}
    //       </span>
    //     </div>
    //   )
    // }

    return (
      <div>
        <h1>My</h1>
        {/* {renderDropdownSplitElement} */}
        {renderDropdownElement}
        {/* <div class="dropdown">
          <button class={computeClassForDropdown((this as any).$props)} type="button" id={this.id ? this.id : ''} aria-expanded="false" onClick={this.handleSetShow}>
            {this.text ? this.text : 'Dropdown button'}
          </button>
          <ul class={`dropdown-menu ${this.state.isShow ? "show" : ""}`} aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div> */}

        <h1>Example</h1>
        <div class="btn-group">
          <button type="button" class="btn btn-danger">
            Action
          </button>
          <button
            type="button"
            class="btn btn-danger dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            <span class="visually-hidden">Toggle Dropdown</span>
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
})

export default SBDropdowns
