<template>
  <div>
    App .vue in sbvue
    <!-- <BButton>imacool</BButton> -->
    <!-- <SBFormInput v-model="state.text" type="range" size="lg" min="0" max="5" step="0.5" placeholder="Enter your name" /> -->
    <SBFormSelect v-model="state.selected" :options="state.options" />
    <div class="mt-3">Selected: <strong>{{ state.selected }}</strong></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SBFormInput from './SBFormInput'
import SBFormSelect from './SBFormSelect'

export default defineComponent({
  name: 'App',
  data() {
    return {
      state: {
        selected: '',
         options: [
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: { C: '3PO' }, text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true },
          {
            label: 'Grouped options',
            options: [
              { value: { C: '3PO' }, text: 'Option with object value' },
              { value: { R: '2D2' }, text: 'Another option with object value' }
            ]
          }
        ]
      }
    }
  },
  updated() {
    // console.log(JSON.parse(this.state.selected))
    console.log(this.state.selected)

  },
  components: {
    SBFormInput,
    SBFormSelect
  }
})
</script>
