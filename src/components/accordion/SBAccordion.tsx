import { defineComponent, PropType } from 'vue'
import SBButton from '../button/SBButton'

interface ISBAccordionProps {
  disabled?: boolean
  onClick?: () => void
  class?: string
}

// TODO: NOT DONE.. NEED MORE WORK ON...
const SBAccordion = defineComponent({
  name: 'SBAccordion',
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
        listed: [{ id: 0, isShow: false, class: '', isCollapse: false }]
      }
    }
  },
  methods: {
    emitToParent(event: MouseEvent) {
      this.onClick(event)
    },
    handleShowCollapse(id: string) {
      console.log({ id })
    }
  },
  computed: {},
  render() {
    let computeClass = (props: ISBAccordionProps) => {
      return [
        'btn-close',
        {
          disabled: props.disabled
        },
        props.class
      ]
    }
    let renderMyVersion = null

    if ((this as any).$slots.default) {
      // for (let i = 0; i < (this as any).$slots.default().length; i++) {
      //   console.log('object', (this as any).$slots.default()[i])
      //   renderMyVersion =
      // }

      renderMyVersion = (this as any).$slots.default().map((element: any, index: any) => {
        let nestChildred = null

        // nestChildred = element.map(())
        console.log('element', element.children[1])
        // let buttonElement = element.children[0].children[0]
        // console.log('buttonElement', buttonElement.)
        // {element.children[0].children[0]}
        return (
          <div class="accordion-item">
            {/* {element} */}
            <h2 class="accordion-header" id={`heading-${index + 1}`}>
              <SBButton {...element.children[0].children[0].props}>
                {element.children[0].children[0].children
                  ? element.children[0].children[0].children.default()[0].children
                  : null}
              </SBButton>
            </h2>
            {element.children[1]}
          </div>
        )
      })
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
          {renderMyVersion}
        </div>

        <h1>REAL</h1>

        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <SBButton
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne">
                Accordion Item #1
              </SBButton>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse
                plugin adds the appropriate classes that we use to style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo">
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse
                plugin adds the appropriate classes that we use to style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree">
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse
                plugin adds the appropriate classes that we use to style each element. These classes control the overall
                appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go
                within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    )

    // return (
    //   <button type="button" class={computeClass((this as any).$props)} aria-label="Close" onClick={($event) => this.emitToParent($event)}></button>
    // )
  }
})

export default SBAccordion
