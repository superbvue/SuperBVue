<template>
  <SBProgress :value="state.value" :label="state.value" variant="warning" class="w-25" striped />

  <SBProgress :max="100" :label="state.value" striped>
    <SBProgressBar :value="state.value" :label="state.value" variant="warning" striped />
  </SBProgress>
</template>
