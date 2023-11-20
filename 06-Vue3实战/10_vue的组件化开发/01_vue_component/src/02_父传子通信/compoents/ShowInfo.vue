<template>
    <div v-bind="$attrs">
        <h2>Name: {{name}}</h2>
        <h2>Age: {{age}}</h2>
        <h2>Height: {{height}}</h2>
        <h2>Msg: {{ showMessage }}</h2>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },

    // 接收父组件的数据
    // 1 props数组语法
        // 不能对类型进行控制
        // 没有默认值
        // 
    // props: ["name", "age", "height"]

    // 2 props的对象写法
    props: {
        name: {
            type: String,
            default: 'kante'
        },
        age: {
            type: Number,
            default: 22
        },
        height: {
            type: Number,
            default: 1.88
        },
        showMessage: {
            type: String,
            default: 'xxxxx'
        }
    }
}
</script>

<style scoped>
</style>
