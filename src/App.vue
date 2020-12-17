<template>
  <div>
    App .vue in sbvue
    <!-- <SBFormInput v-model="state.selected" type="range" min="0" max="50" value="10" /> -->
    <!-- <SBBadge>My badge</SBBadge> -->
    <SBFormSelect v-model="state.selected" :options="state.options" />
    <p>{{state.selected}}</p>
    <!-- <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> -->
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
import SBAlert from './components/alert/SBAlert'
import SBButton from './components/button/SBButton'
import SBProgress from './components/progress/SBProgress'
import SBProgressBar from './components/progress/SBProgressBar'
import SBBadge from './components/badge/SBBadge'

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
        ],
        value: 75
      }
    }
  },
  methods: {
    handleSetName(value: any) {
      console.log({ value })
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
    SBNav,
    SBAlert,
    SBButton,
    SBProgress,
    SBProgressBar,
    SBBadge
  }
})
</script>
