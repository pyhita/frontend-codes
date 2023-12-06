<template>
    <div id="app">
      <router-view></router-view>
<!--      <tabbar v-if="!route.meta.hiddenTabBar"></tabbar>-->
      <tabbar></tabbar>
    </div>
</template>

<script setup>
  import useCounterStore from "./stores/counter.js"
  import tabbar from "./components/tab-bar/tabbar.vue"
  import {useRoute} from "vue-router";

  const route = useRoute()

  const counterStore = useCounterStore()
</script>

<style scoped>
</style>
