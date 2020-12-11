# SuperBoostrapVue

**SuperBoostrapVue** gives you a set of accessible and composable [Vue](https://v3.vuejs.org/) components/UI that you can use to build your favourite applications and sites with [Bootstrap v5](https://getbootstrap.com/).

## Looking for the documentation?
Head over here =>

## Prerequisite
- Vue 3 is required

## Features

- **Ease of Styling:** SuperBoostrapVue using boostrap v5 UI
- Fully support Vue 3
- Typescript support

## Installation

```bash
yarn add superbvue
```
or
```bash
npm install superbvue
```

## Usage

**1. Import the SuperBoostrapVue UI in your `main.js` file.**
```js
import { createApp } from 'vue'
import { SBButton } from 'SuperBoostrapVue'
import App from './App.vue'

const app = createApp(App)

app.component('SBButton', SBButton)
app.mount('#app')
```
Or in component level:
```js
import { defineComponent } from 'vue'
import { SBButton } from 'SuperBoostrapVue'
export default defineComponent({
  components: {
    SBButton
  }
})
```

**2. In your component, you can global use it in template
```html
<template>
  <SBButton>my button</SBButton>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    SBButton
  }
})
</script>
```

**:fire: Note this is early WIP! Currently the focus is on making SuperBoostrapVue stable and feature complete first. You can [open an issue]https://github.com/superbvue/SuperBVue/issues/new) for bugs or feature requests.**


