<template>
    <!-- <nav-bar>
        <template #left>
            <h2>left</h2>
        </template>
        <template #center>
            <h2>center</h2>
        </template>
        <template #right>
            <h2>right</h2>
        </template>
        
    </nav-bar>

    <nav-bar>
        <template v-slot:[pos]>
            <a href="#">登录</a>
        </template>
    </nav-bar> -->

    <!-- <button @click="pos = 'left'">left</button> -->

    <tab-control :titles="['衣服', '裤子', '帽子']">
        <template #default="props">
            <button>{{ props.item }}</button>
        </template>
    </tab-control>
</template>

<script>
import ShowMsg from './components/ShowMsg.vue';
import NavBar from "./components/NavBar.vue";
import TabControl from './components/TabControl.vue';


export default {
    components: {
        ShowMsg,
        NavBar,
        TabControl
    },

    data() {
        return {
            pos: "center",
            titles: ['衣服', '鞋子', '帽子']
        }
    }
}
</script>

<style scoped>
</style>
