<template>
    <div class="add">
        <button @click="btnClick(1)">+1</button>
        <button @click="btnClick(5)">+5</button>
        <button @click="btnClick(10)">+10</button>
    </div>
</template>

<script>
export default {
    emits: ["add"],

    methods: {
        btnClick(count) {
            console.log(count)
            // 自定义事件名称 参数
            this.$emit("add", count)
        }
    }
}
</script>

<style scoped>
</style>
