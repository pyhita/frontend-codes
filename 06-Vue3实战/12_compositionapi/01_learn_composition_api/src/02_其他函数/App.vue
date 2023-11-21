<template>
    <show-info name="info.name" age="info.age" 
                :info="info"
                :roInfo="roInfo"
                @changeInfoName="changeInfo">

    </show-info>
</template>

<script>
import {reactive, readonly} from "vue"
import ShowInfo from './ShowInfo.vue';

export default {
    components: {
        ShowInfo
    },

    emits: ["changeInfoName"],

    setup() {
        const info = reactive({
            name: "kante",
            age: 11
        })

        const roInfo = readonly(info)

        function changeInfo(payload) {
            info.name = payload
        }

        return {
            info,
            changeInfo,
            roInfo
        }
    }
    
}
</script>

<style scoped>
</style>
