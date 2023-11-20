<template>
    <div id="app">
        <show-info name="why" height="1.99" age="22" show-message="今天是个好日子" address="广州市"></show-info>
    </div>
</template>

<script>
import ShowInfo from './compoents/ShowInfo.vue';

export default {
    components: {
        ShowInfo
    },

    inheritAttrs: false
}
</script>

<style scoped>
</style>
