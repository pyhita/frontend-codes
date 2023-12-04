<template>
    <div id="app">
        <h2>Getters中的TotalPrice {{ totalPrice }}</h2>
        <h2>FindBook: {{ $store.getters.findBook(1) }}</h2>
        <h2>FindBook: {{ findBook(1) }}</h2>
    </div>
</template>

<script>
    import {mapGetters} from "vuex"

    export default {
        computed: {
            ...mapGetters(["totalPrice"])
        }
    }
</script>

<script setup>
    import {useStore, mapGetters} from "vuex"
    import {toRefs} from "vue"

    const store = useStore()
    const {findBook} = toRefs(store.getters)
</script>

<style scoped>
</style>
