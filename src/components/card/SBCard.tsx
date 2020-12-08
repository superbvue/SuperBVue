import { defineComponent, PropType } from 'vue'
import SBButton from '../button/SBButton'

interface ISBCardProps {
  title?: string,
  imgSrc?: string,
  imgTop?: boolean,
  tag?: string,
  style?: string,
  class?: string
}

const SBCard = defineComponent({
  name: 'SBCard',
  props: {
    disabled: {
      type: Boolean,
      required: false
    },
    onClick: {
      type: Function as PropType<(event: MouseEvent) => void>,
      required: false,
      default: () => {}
    },
    class: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      state: {
        listed: [
          { id: 0, isShow: false, class: '', isCollapse: false }
        ]
      }
    }
  },
  methods: {
    emitToParent(event: MouseEvent) {
      this.onClick(event)
    },
    handleShowCollapse(id: string) {
      console.log({id})
    }
  },
  computed: {

  },
  render() {
    let computeClass = (props: ISBCardProps) => {
      return [
        'card',
        {
          // disabled: props.disabled,
        },
        props.class
      ]
    }
    let renderMyVersion = null
    console.log('(this as any).$slots.default', (this as any).$slots.default)
    if ( (this as any).$slots.default) {
      // for (let i = 0; i < (this as any).$slots.default().length; i++) {
      //   console.log('object', (this as any).$slots.default()[i])
      //   renderMyVersion = 
      // }

      // renderMyVersion = (this as any).$slots.default().map((element: any, index: any) => {
      //   let nestChildred = null

      //   // nestChildred = element.map(())
      //   console.log('element', element.children[1])
      //   // let buttonElement = element.children[0].children[0]
      //   // console.log('buttonElement', buttonElement.)
      //   // {element.children[0].children[0]}
      //   return (
      //     <div class="accordion-item">
      //       {/* {element} */}
      //       <h2 class="accordion-header" id={`heading-${index + 1}`}>
      //         <SBButton {...element.children[0].children[0].props}>
      //           {element.children[0].children[0].children ? element.children[0].children[0].children.default()[0].children : null}
      //         </SBButton>
      //       </h2>
      //       {element.children[1]}
      //     </div>
      //   )
      // })
      // renderMyVersion = (this as any).$slots.default().children.map((element: any, index: any) => {
      //   console.log('element', element)
      //   return (
      //     <div>
      //       <h2>{element}</h2>
          
      //     </div>
      //   )
      // })
    }

    return (
      <div>
        
        <h1>MY VERISON</h1>
        <div class="accordion" id="accordionExample">
          {/* {renderMyVersion} */}
        </div>



        <h1>REAL</h1>
        
        <div class="card" style="width: 18rem;">
          <img src="https://picsum.photos/600/300/?image=25" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>



      </div>
    )

    // return (
    //   <button type="button" class={computeClass((this as any).$props)} aria-label="Close" onClick={($event) => this.emitToParent($event)}></button>
    // )
  }
})

export default SBCard
