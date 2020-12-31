import { defineComponent, Fragment, PropType } from 'vue'

import './table.css'

interface ISBTable {
  fields: string[]
  items?: TItems[]
  striped?: boolean
  hover?: boolean
  class?: string,
  perPage?: string | number,
  currentPage?: string | number,
  dark?: boolean
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
const SBTable = defineComponent({
  name: 'SBTable',
  props: {
    fields: {
      // type: Array as PropType<string[] | object[]>,
      required: true
    },
    items: {
      type: Array as PropType<TItems[]>,
      required: true
    },
    striped: {
      type: Boolean,
      required: false
    },
    hover: {
      type: Boolean,
      required: false
    },
    class: {
      type: String,
      required: false
    },
    perPage: {
      type: [Number, String] as PropType<string | number>,
      required: false,
    },
    currentPage: {
      type: [Number, String] as PropType<string | number>,
      required: false,
      default: 1
    },
    dark: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    // emitToParent(event: MouseEvent) {
    //   this.onClick(event)
    // }
  },
  computed: {
    computeClass(): unknown[] {
      return ['table', this.striped ? 'table-striped' : null, this.hover ? 'table-hover' : null, this.class]
    },
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
    paginationFilterList() {
      if (this.currentPage && this.perPage) {
        let list: any[] = Object.assign([], this.items)
        let currentPageNumber = 1
        if (this.currentPage !== 1) {
          // console.log('(Number(this.currentPage) - 1)', this.currentPage)

          let startSplice: number = ((Number(this.currentPage) - 1) * Number(this.perPage))
          let endSplice: number = startSplice + Number(this.perPage)
          return list.slice(startSplice, endSplice)
        } else {
          let startSplice: number = ((Number(this.currentPage)) * Number(this.perPage))
          let endSplice: number = startSplice + Number(this.perPage)
          // let list: any[] = [...this.items]
  
          // console.log('startSplice', startSplice, 'endSplice', endSplice)
          // console.log('(Number(this.currentPage) - 1)', (Number(this.currentPage) - 1))
          // list.slice(3)
          list.splice(Number(this.perPage))
          // list.splice(startSplice, endSplice)
          // console.log({list})
          return list
        }

      }
      return []
    }
  },
  render() {
 
    type ArrayElem<A> = A extends Array<infer Elem> ? Elem : never

    function elemT<T>(array: T): Array<ArrayElem<T>> {
      return array as any
    }
    // console.log(this.CurrentItems)
    // let computeClass = (props: ISBTable) => {
    //   return [
    //     'btn-close',
    //     {
    //       // disabled: props.disabled
    //     },
    //     props.class
    //   ]
    // }

    // return (
    //   <button
    //     type="button"
    //     class={computeClass((this as any).$props)}
    //     aria-label="Close"
    //     onClick={($event) => this.emitToParent($event)}></button>
    // )
    let renderTableRowHeader = null
    let renderTableRowItems = null

    if (this.fields) {
      renderTableRowHeader = elemT(this.fields).map((value: any, index: any) => {
        // console.log({value})

        // TODO: sortable feature. WIP...
        if (value.key) {
          // return (
          //   <th key={index} scope="col" aria-sort="ascending">{value.key}</th>
          // )
        } else {
          // only ['Ages', 'First', 'Last']
          return (
            <th key={index} scope="col">
              {value}
            </th>
          )
        }
      })
    }
    if (this.items) {

      if (this.perPage && this.currentPage) {
        // With pagination mode
        // console.log('TODO:  With pagination mode')
        // console.log(this.paginationFilterList)
        renderTableRowItems = this.paginationFilterList.map((value: any, index: any) => {
          // console.log({value})
          if (value.rowVariant) {
            let oldObj = Object.assign({}, value)
            delete oldObj.rowVariant
            let renderTableRowDataWithRowVariant: any = []
            let mergerOrginalObj = Object.assign({}, oldObj)
            for (let i = 1; i < Object.keys(mergerOrginalObj).length; i++) {
              renderTableRowDataWithRowVariant.push(<td>{value[Object.keys(mergerOrginalObj)[i]]}</td>)
            }
  
            return (
              <tr class={`${value.rowVariant ? `table-${value.rowVariant}` : ''}`}>{renderTableRowDataWithRowVariant}</tr>
            )
          } else if (value.cellVariant) {
            let oldObj = Object.assign({}, value)
            delete oldObj.cellVariant
            delete oldObj.isActive
            let renderTableRowDataWithCellVariants: any = []
            let mergerOrginalObj = Object.assign({}, oldObj)
            // console.log({mergerOrginalObj})
            for (let key in mergerOrginalObj) {
              if (key === Object.keys(value.cellVariant)[0]) {
                renderTableRowDataWithCellVariants.push(<td class={`table-${value.cellVariant[key]}`}>{value[key]}</td>)
              } else {
                // console.log('Object.keys(mergerOrginalObj', value, 'key', key, Object.keys(value.cellVariant))
  
                renderTableRowDataWithCellVariants.push(<td>{value[key]}</td>)
              }
              // console.log(Object.getOwnPropertyNames(value))
              // if ( Object.keys(mergerOrginalObj).includes(Object.keys(value.cellVariant)[0])) {
              //   renderTableRowDataWithCellVariants.push((
              //     <td class={`table-${value.cellVariant[Object.keys(value.cellVariant)[i]]}`}>{value[Object.keys(mergerOrginalObj)[i]]}</td>
              //   ))
              // } else {
              //   renderTableRowDataWithCellVariants.push((
              //     <td>{value[Object.keys(mergerOrginalObj)[i]]}</td>
              //   ))
              // }
              // if (value.cellVariant) {
  
              //   renderTableRowDataWithCellVariants.push((
              //     <td class={`table-${(value.cellVariant as any).fistName}`}>{value[Object.keys(mergerOrginalObj)[i]]}</td>
              //   ))
              // } else {
              //   renderTableRowDataWithCellVariants.push((
              //     <td>{value[Object.keys(mergerOrginalObj)[i]]}</td>
              //   ))
              // }
            }
  
            return (
              <tr class={`${value.rowVariant ? `table-${value.rowVariant}` : ''}`}>
                {renderTableRowDataWithCellVariants}
              </tr>
            )
          } else {
            let renderTableRowData: any = []
  
            for (let i = 1; i < Object.keys(value).length; i++) {
              renderTableRowData.push(<td>{value[Object.keys(value)[i]]}</td>)
            }
  
            return <tr class={`${value.rowVariant ? `table-${value.rowVariant}` : ''}`}>{renderTableRowData}</tr>
          }
        })

      } else {
        // Non-pagination mode
        renderTableRowItems = this.items.map((value, index) => {
          if (value.rowVariant) {
            let oldObj = Object.assign({}, value)
            delete oldObj.rowVariant
            let renderTableRowDataWithRowVariant: any = []
            let mergerOrginalObj = Object.assign({}, oldObj)
            for (let i = 1; i < Object.keys(mergerOrginalObj).length; i++) {
              renderTableRowDataWithRowVariant.push(<td>{value[Object.keys(mergerOrginalObj)[i]]}</td>)
            }
  
            return (
              <tr class={`${value.rowVariant ? `table-${value.rowVariant}` : ''}`}>{renderTableRowDataWithRowVariant}</tr>
            )
          } else if (value.cellVariant) {
            let oldObj = Object.assign({}, value)
            delete oldObj.cellVariant
            delete oldObj.isActive
            let renderTableRowDataWithCellVariants: any = []
            let mergerOrginalObj = Object.assign({}, oldObj)
            // console.log({mergerOrginalObj})
            for (let key in mergerOrginalObj) {
              if (key === Object.keys(value.cellVariant)[0]) {
                renderTableRowDataWithCellVariants.push(<td class={`table-${value.cellVariant[key]}`}>{value[key]}</td>)
              } else {
                console.log('Object.keys(mergerOrginalObj', value, 'key', key, Object.keys(value.cellVariant))
  
                renderTableRowDataWithCellVariants.push(<td>{value[key]}</td>)
              }
              // console.log(Object.getOwnPropertyNames(value))
              // if ( Object.keys(mergerOrginalObj).includes(Object.keys(value.cellVariant)[0])) {
              //   renderTableRowDataWithCellVariants.push((
              //     <td class={`table-${value.cellVariant[Object.keys(value.cellVariant)[i]]}`}>{value[Object.keys(mergerOrginalObj)[i]]}</td>
              //   ))
              // } else {
              //   renderTableRowDataWithCellVariants.push((
              //     <td>{value[Object.keys(mergerOrginalObj)[i]]}</td>
              //   ))
              // }
              // if (value.cellVariant) {
  
              //   renderTableRowDataWithCellVariants.push((
              //     <td class={`table-${(value.cellVariant as any).fistName}`}>{value[Object.keys(mergerOrginalObj)[i]]}</td>
              //   ))
              // } else {
              //   renderTableRowDataWithCellVariants.push((
              //     <td>{value[Object.keys(mergerOrginalObj)[i]]}</td>
              //   ))
              // }
            }
  
            return (
              <tr class={`${value.rowVariant ? `table-${value.rowVariant}` : ''}`}>
                {renderTableRowDataWithCellVariants}
              </tr>
            )
          } else {
            let renderTableRowData: any = []
  
            for (let i = 1; i < Object.keys(value).length; i++) {
              renderTableRowData.push(<td>{value[Object.keys(value)[i]]}</td>)
            }
  
            return <tr class={`${value.rowVariant ? `table-${value.rowVariant}` : ''}`}>{renderTableRowData}</tr>
          }
        })
      }

    }



    return (
      <div>
        <table class={this.computeClass}>
          <thead>
            <tr>{renderTableRowHeader}</tr>
          </thead>
          <tbody>{renderTableRowItems}</tbody>
        </table>
      </div>
    )
  }
})

export default SBTable
