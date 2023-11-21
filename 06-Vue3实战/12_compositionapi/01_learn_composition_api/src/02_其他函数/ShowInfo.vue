<template>
    <div>
        <h2>name: {{ info.name }}</h2>
        <h2>age: {{ info.age }}</h2>
        <button @click="changeInfo"> change</button>

        <h2>name: {{ roInfo.name }}</h2>
        <h2>age: {{ roInfo.age }}</h2>
    </div>
</template>

<script>
export default {

    setup(props, context) {
        function changeInfo() {
            console.log("change info")
            context.emit("changeInfoName", "kobe")
        }

        return {
            changeInfo
        }
    },

    props: {
        name: {
            type: String,
            default: 'xxx'
        },

        age: {
            type: Number,
            default: 22
        },
        
        info: {
            type: Object,
            default: () => ({})
        },

        roInfo: {
            type: Object,
            default: () => ({})
        }
    }
}
</script>

<style scoped>
</style>
