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
import SBContainer from './components/layoutAndGridSystem/SBContainer'
import SBRow from './components/layoutAndGridSystem/SBRow'
import SBCol from './components/layoutAndGridSystem/SBCol'
import SBNav from './components/nav/SBNav'

const App = defineComponent({
  name: 'App',
  data() {
    return {
      state: {}
    }
  },
  methods: {},
  computed: {},
  render() {
    return (
      <div>
        App tsx component
        {/* <SBBreadcrumb items={this.state.options} /> */}
        <SBNav>
          <SBNavLink active>Active</SBNavLink>
          <SBNavLink>Link</SBNavLink>
          <SBNavLink>Another Link</SBNavLink>
        </SBNav>
      </div>
    )
  }
})

export default App
