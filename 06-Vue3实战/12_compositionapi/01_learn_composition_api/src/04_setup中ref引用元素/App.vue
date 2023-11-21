<template>
    <div>
        <!-- 使用ref获取元素 -->
        <h2 ref="titleRef">我是标题</h2>

        <!-- 获取组件 -->
        <show-info ref="infoRef"></show-info>
    </div>
</template>

<script>
import {ref, onMounted} from "vue"
import ShowInfo from "./ShowInfo.vue"

export default {
    components: {
        ShowInfo
    },

    setup() {
        const titleRef = ref()
        const infoRef = ref()

        onMounted(() => {
            console.log(titleRef)
            console.log(infoRef)
        })

        return {
            titleRef,
            infoRef
        }
    }    
}
</script>

<style scoped>
</style>
