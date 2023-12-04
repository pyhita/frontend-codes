<template>
    <div>
      <h2>App Content</h2>
      <h2>App中的Counter: {{ $store.state.counter }}</h2>
      <home></home>
    </div>
</template>

<script setup>
  import Home from "./views/Home.vue"



</script>

<style scoped>
</style>
