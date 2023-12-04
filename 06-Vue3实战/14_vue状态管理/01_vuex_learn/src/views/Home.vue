<template>
    <div id="app">
        <h2>Counter: {{ $store.state.counter }}</h2>
        <button @click="incre(5)">Action增加</button>
        <hr/>

        <template v-for="item in $store.state.home.banners">
            <div>{{ item.height }}</div>
        </template>

        <!-- <h2>Double Conter: {{ $store.getters.doubleCounter }}</h2> -->
        <h2>Double Conter: {{ $store.getters["home/doubleCounter"] }}</h2>
    </div>
</template>

<script>
    import {mapActions} from "vuex"

    export default {
        methods: {
            // incre(n) {
            //     console.log(this.$store)
            //     this.$store.dispatch("incre", n)
            // }
            ...mapActions(["incre"])
        }
    }
</script>  

<script setup>
    import {useStore} from "vuex"
    // 告诉vuex 发送网络请求

    const store = useStore()
    
    // 触发action
    // store.dispatch("fetchHomeMultidataAction").then((msg) => {
    //     // 请求发送完毕 进行回调
    //     console.log(msg)
    // })

    // 有了命名空间之后
    store.dispatch("home/fetchHomeMultidataAction").then((msg) => {
        // 请求发送完毕 进行回调
        console.log(msg)
    })
</script>

<style scoped>
</style>
