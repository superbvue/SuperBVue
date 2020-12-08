import { defineComponent } from 'vue'
import SBAccordion from './components/accordion/SBAccordion'
import SBBadge from './components/badge/SBBadge'
import SBBreadcrumb from './components/breadcrumb/SBBreadcrumb'
import SBButton from './components/button/SBButton'
import SBCard from './components/card/SBCard'
import SBCardImg from './components/card/SBCardImg'
import SBCloseButton from './components/closeButton/SBCloseButton'
import SBSpinners from './components/spinners/SBSpinners'

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
      
        {/* <SBCard>

        </SBCard> */}
      </div>
    )
  }
})

export default App
