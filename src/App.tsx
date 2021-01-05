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
import SBTable from './components/table/SBTable'
import SBPagination from './components/pagination/Pagination'
import SBCardTitle from './components/card/SBCardTitle'
import SBListgroup from './components/card/SBListgroup'
import SBListgroupItem from './components/card/SBListgroupItem'

const App = defineComponent({
  name: 'App',
  data() {
    return {
      state: {
        items: [
          { isActive: true, age: 1, fistName: 'Dickerson', lastName: 'Macdonald' },
          { isActive: false, age: 2, fistName: 'Larsen', rowVariant: 'primary', lastName: 'Shaw' },
          { isActive: false, age: 3, fistName: 'Geneva', lastName: 'Wilson' },
          { isActive: true, age: 4, fistName: 'Nicholas', lastName: 'Hoffman' },
          { isActive: false, age: 5, fistName: 'Fintan', rowVariant: 'Florin', lastName: 'Shaw' },
          { isActive: false, age: 6, fistName: 'Hans', lastName: 'Wilson' },
          { isActive: true, age: 7, fistName: 'Andrew', lastName: 'El' },
          { isActive: false, age: 8, fistName: 'Tremble', rowVariant: 'primary', lastName: 'Spanns' },
          { isActive: false, age: 9, fistName: 'Erik', lastName: 'Karianinen' }
        ],
        field: [
          // { key: 'Agess', sortable: true },
          // { key: 'First', sortable: false },
          // { key: 'Last', sortable: true }
          'Ages', 'First', 'Last'
        ],
        perPage: 3,
        currentPage: 1,
      }
    }
  },
  methods: {
    handleSetCurrentPage(event: any) {
      this.state.currentPage = event.target.value
    }
  },
  computed: {
    row(): number {
      return this.state.items.length
    }
  },
  render() {
    return (
      <div>
        App tsx component
        {/*  */}
        {/* <SBPagination totalRows={this.row} onChange={this.handleSetCurrentPage} modelValue={this.state.currentPage} perPage={this.state.perPage} ariaLabel="my-custon-pagination" /> */}
        {/* <SBTable fields={this.state.field} items={this.state.items} currentPage={this.state.currentPage} perPage={this.state.perPage} /> */}
        
        {/* <SBCard style="max-width: 20rem;" class="mb-2" imgAlt="Image" imgSrc="https://picsum.photos/600/300/?image=25" imgTop>
          <SBCardTitle >Some quick example text to build on the card title and make up the bulk of the card's content.</SBCardTitle>
          <SBButton variant="primary">Go somewhere</SBButton>
        </SBCard> */}

        {/* <SBCard style="max-width: 20rem;">
          <SBListgroup>
            <SBListgroupItem>Cras justo odio</SBListgroupItem>
          </SBListgroup>
        </SBCard> */}

        <SBCard class="text-center" title="Card title" header="Primary header" headerBgVariant="primary" headerTextVariant="white">
          <SBCardTitle>Some quick example text to build on the <em>card title</em> and make up the bulk of the card's content.</SBCardTitle>
        </SBCard>
      </div>
    )
  }
})

export default App
