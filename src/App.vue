<template>
  <div>
    App .vue in sbvue
    <!-- <SBFormInput v-model="state.selected" type="range" min="0" max="50" value="10" /> -->
    <!-- <SBBadge>My badge</SBBadge> -->
    <!-- <SBFormSelect v-model="state.selected" :options="state.options" /> -->
    <!-- <p>{{ state.selected }}</p> -->
    <button
      v-for="tract in state.tracks"
      @click="selectTract(tract.id)"
      :key="tract.id"
      :class="[isSelectedTrack(tract.id) ? 'border-blue-primary bg-gray-200' : '']"
      class="border text-black py-2 px-4 w-36 rounded-lg"
    >
      s
      <!-- <h1 class="text-center">{{ tract.name }}</h1> -->
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
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
import SBContainer from './components/layoutAndGridSystem/SBContainer'
import SBRow from './components/layoutAndGridSystem/SBRow'
import SBCol from './components/layoutAndGridSystem/SBCol'

import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'App',
  // data() {
  //   return {
  //     state: {
  //       selected: '',
  //       options: [
  //         { text: 'Toggle this custom radio', value: 'first' },
  //         { text: 'Or toggle this other custom radio', value: 'second' },
  //         { text: 'This one is Disabled', value: 'third', disabled: true },
  //         { text: 'This is the 4th radio', value: { fourth: 4 } }
  //       ],
  //       value: 75
  //     }
  //   }
  // },
  setup() {
    let state = reactive({
      tracks: [
        {
          id: 1
        }
      ],
      selectedTrack: {
        value: []
      }
    })

    const isSelectedTrack = (name: any) => {
      computed(function (name) {
        console.log('name', name)

        // state.selectedTrack.value.some((val: any) => {
        //   console.log('val === name')
        //   val === name
        // })
      })
    }
    return {
      state,
      isSelectedTrack
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
    // console.log(this.state.selected)
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
    SBBadge,
    SBContainer,
    SBRow,
    SBCol
  }
})
</script>
