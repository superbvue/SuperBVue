<template>
  <div>
    App .vue in sbvue
    <SBPagination v-bind:totalRows="this.row" v-model="this.state.currentPage"  prevText="prevText"  lastText="last" :perPage="this.state.perPage" ariaLabel="my-custon-pagination" />
     <p class="mt-3">Current Page: {{ this.state.currentPage }}</p>

    <SBTable :fields="this.state.field" :items="this.state.items" :currentPage="state.currentPage" :perPage="this.state.perPage" />

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
import SBPagination from './components/pagination/Pagination'
import SBTable from './components/table/Table'

import { RouterLink } from 'vue-router'

export default defineComponent({
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
        perPage: '3',
        currentPage: 1,
      }
    }
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
    SBCol,
    SBPagination,
    SBTable
  },
  computed: {
    row(): number {
      return this.state.items.length
    }
  },
  // setup() {
  //   let state = reactive({
  //     tracks: [
  //       {
  //         id: 1
  //       }
  //     ],
  //     selectedTrack: {
  //       value: []
  //     }
  //   })

  //   const isSelectedTrack = (name: any) => {
  //     computed(function (name) {
  //       console.log('name', name)

  //       // state.selectedTrack.value.some((val: any) => {
  //       //   console.log('val === name')
  //       //   val === name
  //       // })
  //     })
  //   }
  //   return {
  //     state,
  //     isSelectedTrack
  //   }
  // },
  methods: {
    handleSetName(value: any) {
      console.log({ value })
      console.log(value.target.value)
    }
  },
  updated() {
    // console.log(JSON.parse(this.state.selected))
    // console.log(this.state.selected)
  }
})
</script>
