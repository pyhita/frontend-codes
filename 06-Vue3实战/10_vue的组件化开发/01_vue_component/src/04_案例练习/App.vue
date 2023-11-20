<template>
    <div id="app">
        <tab-control :titles="titles" @tab-click="tabClick"></tab-control>
        <h2>{{ coontent[currentIndex] }}</h2>
    </div>
</template>

<script>
import TabControl from './components/TabControl.vue';

export default {
    data() {
        return {
            titles: ['衣服', '鞋子', '帽子'],
            coontent: ["衣服列表", "鞋子列表", "帽子列表"],
            currentIndex: 0
        }
    },

    methods: {
        tabClick(index) {
            this.currentIndex = index
        }
    },

    components: {
        TabControl
    }

}
</script>

<style scoped>
</style>
