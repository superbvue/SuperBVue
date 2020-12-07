import { createApp } from 'vue'
import App from './App.vue'
import BButton from './components/buttons/BButton'

import './assets/bootstrap.css'

const app = createApp(App)

app.component('BButton', BButton)

app.mount('#app')
