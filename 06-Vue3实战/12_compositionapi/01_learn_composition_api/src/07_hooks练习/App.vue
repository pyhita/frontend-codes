<template>
    <div>
        <home></home>
        <about></about>
    </div>
</template>

<script>
import Home from './views/Home.vue';
import About from './views/About.vue';

export default {
    components: {
        About,
        Home
    }
}
</script>

<style scoped>
</style>
