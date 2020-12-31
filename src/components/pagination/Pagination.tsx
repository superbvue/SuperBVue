import { defineComponent, Fragment, PropType } from 'vue'

import './pagination.css'

interface ISBSBPagination {
  align?: string
  perPage?: string | number,
  totalRows?: string | number,
  ariacontrols?: string
  ariaLabel?: string
  disabled?: boolean
  labelFirstPage?: string,
  labelLastPage?: string,
  labelNextPage?: string,
  labelPrevPage?: string,
  firstText?: string,
  lastText?: string,
  nextText?: string,
  prevText?: string,
  limit?: string | number,
  size?: string,
  class?: string,
  modelValue?: string
  id?: string,
  pills?: boolean
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

type TItems = {
  isActive?: boolean
  rowVariant?: string
  cellVariant?: {
    [key: string]: string
  }
  [key: string]: any
}

type TFields = {
  key?: string
  sortable?: boolean
}[]

type Partial<T> = {
  [P in keyof T]?: T[P]
}
interface Test1 {
  [key: string]: any
}
interface Test2 extends Test1 {
  [key: string]: any
}
// Partial<string[] | object[]>

const emitsType = {
  updateModelValue: 'update:modelValue'
}

const SBPagination = defineComponent({
  name: 'SBPagination',
  props: {
    // fields: {
    //   type: Array as PropType<string[] | object[]>,
    //   required: true
    // },
    // items: {
    //   type: Array as PropType<TItems[]>,
    //   required: true
    // },
    modelValue: {
      type: [Number, String] as PropType<string | number>,
      required: false
    },
    align: {
      type: String as PropType<'left' | 'center' | 'right' | 'fill'>,
      required: false,
      default: 'left'
    },
    perPage: {
      type: [Number, String] as PropType<string | number>,
      required: false,
    },
    totalRows: {
      type: [Number, String] as PropType<string | number>,
      required: false,
      default: 0
    },
    ariacontrols: {
      type: String,
      required: false
    },
    ariaLabel: {
      type: String,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    labelFirstPage: {
      type: String,
      required: false
    },
    labelLastPage: {
      type: String,
      required: false
    },
    labelNextPage: {
      type: String,
      required: false
    },
    labelPrevPage: {
      type: String,
      required: false
    },
    firstText: {
      type: String,
      required: false
    },
    lastText: {
      type: String,
      required: false
    },
    nextText: {
      type: String,
      required: false
    },
    prevText: {
      type: String,
      required: false
    },
    limit: {
      type: String || Number,
      required: false
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg'>,
      required: false
    },
    class: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: false 
    },
    pills: {
      type: Boolean,
      required: false
    },
    onInput: Function,
    onChange: Function
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
      } else if (this.onChange) {
        this.onChange(event)
      }
    }
  },
  computed: {
    computeClass(): unknown[] {
      return [
        'pagination',
        this.alignClass,
        this.pills ? 'sb-pagination-pills' : null,
        this.size ? `pagination-${this.size}` : null,
        this.class ? this.class : null
      ]
    },
    alignClass(): string | null {
      if (this.align === 'left') {
        return null
      } else if (this.align === 'center') {
        return 'justify-content-center'
      } else if (this.align === 'right') {
        return 'justify-content-end'
      } else if (this.align === 'fill') {
        return 'text-center'
      }
      return null
    }
    // CurrentItems(): any {
    //   let me: any  = []

    //   me.push(this.items.map((value)=> Object.getOwnPropertyNames(value)))

    //   // this.items.forEach((value) => {
    //   //   console.log('value', value)
    //   //   // for (let [key, value1] of Object.entries(value)) {
    //   //   //   // for (let [key, value1] of Object.entries(value)) {
    //   //   //     console.log(`${key}: ${value1}`)
    //   //   //     me.

    //   //   //   // }
    //   //   // }
    //   // })
    //   // // console.log('me', )
    //   // // me.map((value) => value)
    //   // return ''
    //   // me.map((value) => value.f)
    // }
  },
  render() {
    type ArrayElem<A> = A extends Array<infer Elem> ? Elem : never

    function elemT<T>(array: T): Array<ArrayElem<T>> {
      return array as any
    }
    // console.log(this.CurrentItems)
    // let computeClass = (props: ISBSBPagination) => {
    //   return [
    //     'btn-close',
    //     {
    //       // disabled: props.disabled
    //     },
    //     props.class
    //   ]
    // }
    let amountOfPaginationRequired: number = Number(this.totalRows) / Number(this.perPage)

    // return (
    //   <button
    //     type="button"
    //     class={computeClass((this as any).$props)}
    //     aria-label="Close"
    //     onClick={($event) => this.emitToParent($event)}></button>
    // )
    let renderPageItemElement = []
    for (let i = 1; i < amountOfPaginationRequired + 1; i++) {
      renderPageItemElement.push((
        <Fragment>
          <li class={`page-item ${ this.modelValue == i ? 'active' : ''}`}>
            <button class="page-link" value={i} onClick={this.handleEmitValue}>{i}</button>
          </li>
        </Fragment>
      ))
    }
    let renderPrevTextElement = this.prevText ? (
      <li class={`page-item ${this.modelValue == 1 ? "disabled" : ""}`}>
        <button class="page-link" aria-label={this.ariaLabel ? this.ariaLabel : 'Go to previous page'}>
          {this.prevText}
        </button>
      </li>
    ) : null

    let renderLastTextElement = this.lastText ? (
      <li class={`page-item ${this.modelValue == this.perPage ? "disabled" : ""}`}>
        <button class="page-link" aria-label={this.ariaLabel ? this.ariaLabel : 'Go to next page'}>
          {this.lastText}
        </button>
      </li>
    ) : null
    

    return (
      <nav aria-label="Page navigation example">
        <ul class={this.computeClass}>
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Go to first page"> 
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          {renderPrevTextElement}
          {renderPageItemElement}
          {renderLastTextElement}
          <li class="page-item">
            <a class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
})

export default SBPagination
