<template>
    <div id="app">
        <h2>Home中的Counter: {{ $store.state.counter }}</h2>
        <h2>Home-MapState中的Counter: {{ counter }}</h2>
        <button @click="inc">增加</button>
    </div>
</template>
<!-- 
<script>
import {mapState} from "vuex"

export default {
    // 使用mapState简化写法

    computed: {
        ...mapState(["counter"])
    }
}

</script> -->


<script setup>
import {toRefs} from "vue"
import {useStore, mapState} from "vuex"

const store = useStore()

function inc() {
    store.commit("incre")
}

const {counter} = toRefs(store.state)


</script>

<style scoped>
</style>
