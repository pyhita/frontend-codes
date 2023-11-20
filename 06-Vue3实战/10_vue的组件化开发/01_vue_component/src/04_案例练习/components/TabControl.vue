<template>
    <div class="tab-control">
        <template v-for="(item, index) in titles" :key="item">
            <div class="tab-control-item" 
            :class="{active: currentIndex == index}"
            @click="click(index)">
            <span>{{ item }}</span>
        </div>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0
        }
    },

    methods: {
        click(index) {
            console.log(index)
            this.currentIndex = index
            this.$emit("tabClick", index)
        }
    },

    props: {
        titles: {
            type: Array,
            default: () => []
        }
    },

    emits: ["tabClick"]
}
</script>

<style scoped>
.tab-control {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
}

.tab-control-item {
    flex: 1;
}

.active {
    color: red;
    font-weight: bold;
}
</style>
