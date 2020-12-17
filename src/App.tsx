import { defineComponent } from 'vue'
import SBProgress from './components/progress/SBProgress'
import SBAccordion from './components/accordion/SBAccordion'
import SBBadge from './components/badge/SBBadge'
import SBBreadcrumb from './components/breadcrumb/SBBreadcrumb'
import SBButton from './components/button/SBButton'
import SBCard from './components/card/SBCard'
import SBCardImg from './components/card/SBCardImg'
import SBCloseButton from './components/closeButton/SBCloseButton'
import SBFormInput from './components/form/SBFormInput'
import SBFormSelect from './components/form/SBFormSelect'
import SBNavLink from './components/nav/SBNavLink'
import SBSpinners from './components/spinners/SBSpinners'
import SBToasts from './components/toasts/SBToasts'

const App = defineComponent({
  name: 'App',
  data() {
    return {
      state: {
        selected: null,
        options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
        ]
      }
    }
  },
  methods: {
    handleSetName(event: any) {
      console.log('enter handleSetName', event.target.value)
      this.state.selected = event.target.value
    },
    handleShowCollapse(event: Event, id: number) {
      let result = ''
      let result2 = ''
      // if (this.state.class === 'accordion-button collapsed') {
      //   result = 'accordion-button'
      //   result2 = 'accordion-collapse collapse'
      // } else {
      //   result = 'accordion-button collapsed'
      //   result2 = 'accordion-collapse collapsed show'
      // }
      // this.state.class = result
      // this.state.class2 = result2
    }
  },
  computed: {
    // myClass(): string {
    //   return this.state.class
    // },
    // myClass2(): string {
    //   return this.state.class2
    // }
  },
  render() {
    return (
      <div>
        App tsx component
        {/* <SBFormInput value={this.state.selected} type="date" onInput={this.handleSetName} /> */}
        <h1>selected{this.state.selected}</h1>
        <SBFormSelect options={this.state.options} onChange={this.handleSetName} />
        <p>{this.state.selected}</p>
      </div>
    )
  }
})

export default App
