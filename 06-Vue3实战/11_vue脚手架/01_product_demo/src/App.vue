<template>
    <h2>{{ msg }}</h2>
    <product-item></product-item>
</template>

<script>
import ProductItem from './ProductsItem.vue'
export default {
    components: {
        "product-item": ProductItem
    },

    data() {
        return {
            msg: '我是标题'
        }
    }
}
</script>

<style>
</style>