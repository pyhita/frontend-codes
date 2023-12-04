<template>
    <div>
        <!-- 在模板中拿到id值 -->
        <h2>{{ $route.params.id }}</h2>
    </div>
</template>

<script setup>
import {useRoute} from "vue-router"

const route = useRoute()
console.log(route.params.id)

</script>

<style scoped>
</style>
