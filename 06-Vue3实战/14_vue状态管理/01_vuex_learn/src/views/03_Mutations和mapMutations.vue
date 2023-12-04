<template>
    <div id="app">
        <h2>Counter: {{ $store.state.counter }}</h2>
        <button @click="incre(5)">增加</button>
        <hr/>

        <h2>Book: {{ $store.getters.findBook(1) }}</h2>
        <button @click="changeInfo">changeInfo</button>
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
    // 改变state 必须commit miuation
    import {useStore, mapMutations} from "vuex"
    import {CHANGE_INFO} from "../store/mutation_types.js"

    const store = useStore()

    // function incre() {
    //     store.commit("incre", 3)
    // }

    function changeInfo() {
        store.commit(CHANGE_INFO, {desc: ".....", price: 435})
    }

    const mutations = mapMutations(["incre"])
    // 绑定 store
    const newMutations = {}
    Object.keys(mutations).forEach(key => {
        newMutations[key] = mutations[key].bind({$store: store})
    })

    const {incre} = newMutations

</script>

<style scoped>
</style>
