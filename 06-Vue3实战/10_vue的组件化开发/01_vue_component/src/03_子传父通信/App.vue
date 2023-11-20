<template>
    <div>
        {{ count }}
        <AddCounter @add="addBtnClick"></AddCounter>
        <SubCounter @sub="subBtnClick"></SubCounter>
    </div>
</template>

<script>
import AddCounter from './components/AddCounter.vue';
import SubCounter from './components/SubCounter.vue';

export default {

    data() {
        return {
            count: 0
        }
    },

    methods: {
        addBtnClick(count) {
            this.count += count
        },

        subBtnClick(count) {
            this.count -= count
        }
    },

    components: {
        AddCounter,
        SubCounter
    }
}

</script>

<style scoped>
</style>
