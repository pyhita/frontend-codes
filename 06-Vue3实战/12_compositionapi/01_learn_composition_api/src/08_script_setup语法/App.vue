<template>
    <div>
        <h2>{{ message }}</h2>

        <button @click="change">change</button>
    </div>
</template>

<script setup>
    // 1 默认顶层代码 都是暴露给template的
    const message = "hello world"

    // 2 导入的组件直接使用，不需要使用components 注册


    // 3 定义props
    defineProps({
        info: {
            type: Object,
            default: () => ({})
        }
    })
    
    // 绑定函数 发出事件
    const emits = defineEmits(["infoChange"])
    function change() {
        emits("infoChange", "发生了点击")
    }

    // 获取组件实例
    omMounted(() => {
        
    })
</script>

<style scoped>
</style>
