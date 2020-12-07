import { defineComponent } from 'vue'
import SBBadge from './components/badge/SBBadge'
import SBBreadcrumb from './components/breadcrumb/SBBreadcrumb'

const App = defineComponent({
  name: 'App',
  data() {
    return {
      items: [
        {
          text: 'Admin',
          href: '#'
        },
        {
          text: 'Manage',
          href: '#'
        },
        {
          text: 'Library',
          active: true
        }
      ]
    }
  },
  render() {
    return (
      <div>
        App tsx component
        <SBBreadcrumb items={this.items} />
      </div>
    )
  }
})

export default App