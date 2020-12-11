<template>
  <div>
    App .vue in sbvue
    <!-- <SBFormRadios v-model="state.selected" name="myFormRaios" value="A"></SBFormRadios> -->
    <SBFormRadios v-model="state.selected" name="myFormRaios" value="B" for="myFor" class="form-switch" @click="handleSetName"></SBFormRadios>
    <!-- <SBNavLink href="me">Link</SBNavLink> -->
    <SBNav t>
      <SBNavLink href="/me" active>Active</SBNavLink>
      <SBNavLink href="/m2">Link</SBNavLink>
      <SBNavLink href="/m3">Link2</SBNavLink>
    </SBNav>
    <!-- <SBFormRadios :value="state.selected" @change="handleSetName" name="myFormRaios"></SBFormRadios> -->
    <!-- <SBFormRadiosGroup id="radio-group-1" label="useing radios group" name="radio-options" v-model="state.selected" :options="state.options"  /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SBFormInput from './components/form/SBFormInput'
import SBFormSelect from './components/form/SBFormSelect'
import SBFormRadios from './components/form/SBFormRadios'
import SBFormRadiosGroup from './components/form/SBFormRadiosGroup'
import SBNavLink from './components/nav/SBNavLink'
import SBNav from './components/nav/SBNav'

import { RouterLink } from 'vue-router'


export default defineComponent({
  name: 'App',
  data() {
    return {
      state: {
        selected: '',
         options: [
          { text: 'Toggle this custom radio', value: 'first' },
          { text: 'Or toggle this other custom radio', value: 'second' },
          { text: 'This one is Disabled', value: 'third', disabled: true },
          { text: 'This is the 4th radio', value: { fourth: 4 } }
        ]
      }
    }
  },
  methods: {
    handleSetName(value: any) {
      console.log({value})
      console.log(value.target.value)
    }
  },
  updated() {
    // console.log(JSON.parse(this.state.selected))
    console.log(this.state.selected)

  },
  components: {
    SBFormInput,
    SBFormSelect,
    SBFormRadios,
    SBFormRadiosGroup,
    SBNavLink,
    SBNav
  }
})
</script>
