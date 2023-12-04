<template>
    <div>
        <h2>Home View</h2>
        <h3>count: {{ counterStore.count }}</h3>
        <h3>double count: {{ counterStore.doubleCounter }}</h3>
        <h3>double count add one: {{ counterStore.addOne }}</h3>
        <button @click="incre">增加</button>
        <button @click="reset">重置</button>
        <button @click="increByAction">Action 增加</button>
        <h3>friend: {{ counterStore.getFriend(1) }}</h3>
        <h3>产品列表: {{ productList }}</h3>
        <h3>msg: {{ counterStore.showMsg }}</h3>
    </div>
</template>

<script setup>
import useCounter from "../store/counter"
import useProduct from "../store/product"
import {storeToRefs} from "pinia"

const counterStore = useCounter()

const {productList} = storeToRefs(useProduct())

// 修改state 状态
function incre() {
    counterStore.count++
}

function reset() {
    counterStore.$reset()
}

// 一次修改多个状态
function updateMulti() {
    counterStore.$path({
        count: 100,
        name: "kante"
    })
}

// 替换全部的state
function replace() {
    // 重新赋值一个新的对象
    counterStore.$state = {
    
    }
}

// 调用 Action
function increByAction() {
    counterStore.increment(10)
}
</script>

<style scoped>
</style>
