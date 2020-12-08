import { defineComponent } from 'vue'
import SBAccordion from '../../components/accordion/SBAccordion'
import SBBadge from '../../components/badge/SBBadge'
import SBBreadcrumb from '../../components/breadcrumb/SBBreadcrumb'
import SBButton from '../../components/button/SBButton'
import SBCloseButton from '../../components/closeButton/SBCloseButton'
import SBSpinners from '../../components/spinners/SBSpinners'

const App = defineComponent({
  name: 'App',
  data() {
    return {
      state: {
        class: 'accordion-button collapsed',
        class2: 'accordion-collapse collapse',
        items: [
          { isAccordionCollapsed: false, buttonClass: 'accordion-button collapsed',  }
        ]
      }
    }
  },
  methods: {
    handleSetName(event: any) {
      console.log('enter handleSetName', event)
    },
    handleShowCollapse(event: Event, id: number) {
      let result = ''
      let result2 = ''
      if (this.state.class === 'accordion-button collapsed') {
        result = 'accordion-button'
        result2 = 'accordion-collapse collapse'
        
      } else {
        result = 'accordion-button collapsed'
        result2 = 'accordion-collapse collapsed show'
      }
      this.state.class = result
      this.state.class2 = result2
    },
  },
  computed: {
    myClass(): string {
      return this.state.class
    },
    myClass2(): string {
      return this.state.class2
    }
  },
  render() {
    return (
      <div>
        App tsx component
        <SBAccordion>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <SBButton class={this.myClass} onClick={(event: Event) => this.handleShowCollapse(event, 1)} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
              </SBButton>
            </h2>
            <div id="collapseOne" class={this.myClass2} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <SBButton class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
              </SBButton>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          
        </SBAccordion>
{/* 
        <SBAccordion>

        </SBAccordion> */}
      </div>
    )
  }
})

export default App
