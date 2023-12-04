<template>
    <div>
        <h2>About {{ $route.query }}</h2>
        <button @click="back">返回</button>
    </div>
</template>

<script setup>
import {useRouter, useRoute} from "vue-router"
const router = useRouter()
const route = useRoute()

function back() {
    console.log(router, route)
    router.back()
}

</script>

<style scoped>
</style>
