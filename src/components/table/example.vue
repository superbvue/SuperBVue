<template>
  <SBTable fields="{['#', 'Age', 'First', 'last']}" v-bind:items="state.items" />
</template>

<script lang="tsx">
import { defineComponent } from 'vue'
import SBTable from './Table'

const App = defineComponent({
  name: 'App',
  data() {
    return {
      state: {
        items: [
          { isActive: true, age: 40, fistName: 'Dickerson', lastName: 'Macdonald' },
          { isActive: false, age: 21, fistName: 'Larsen', rowVariant: 'primary', lastName: 'Shaw' },
          { isActive: false, age: 89, fistName: 'Geneva', lastName: 'Wilson' },
          { isActive: true, age: 38, fistName: 'Jami', lastName: 'Carney', cellVariant: { fistName: 'info' } }
        ]
      }
    }
  },
  render() {
    return (
      <div>
        <SBTable fields={['#', 'Age', 'First', 'last']} items={this.state.items} />
      </div>
    )
  }
})

export default App
</script>
