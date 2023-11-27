<template>
    <div>
        {{ message }}
        <button @click="changeMsg">change</button>
    </div>
</template>

<script>
import {ref, watch, reactive, watchEffect} from "vue"

export default {

    setup() {   
        const message = ref("Hello World")

        const info = reactive({
            name: "kante",
            age: 22
        })

        watch(message, (newValue, oldValue) => {
            console.log(newValue, oldValue)
        }, {
            immediate: true
        }) 

        // 传入的函数默认会直接执行 
        //  自动收集依赖
        const flag = watchEffect(() => {
            console.log(message.value + " ------- ")
        })

        // 根据flag 停止侦听
        if (message == 'stop') {
            flag()
        }

        // 监听reactive 数据变化后，获取普通对象 {...info} 会对Proxy对象进行展开
        watch(() => ({...info}), (newValue, oldValue) => {
            console.log(newValue, oldValue)
        })


        function changeMsg() {
            message.value = "Hello Vue"
        }
        
        return {
            message,
            changeMsg
        }
    }
}
</script>

<style scoped>
</style>
