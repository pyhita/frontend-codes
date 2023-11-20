<template>
    <div>
        <div>{{ msg }}</div>
        <div class="content">
            <slot>
                <p>我是默认内容</p>
            </slot>
        </div>
        <p>一眼丁真</p>
    </div>
</template>

<script>
export default {
    props: {
        msg: {
            type: String,
            default: 'xxxxx'
        }
    }
}
</script>

<style scoped>
</style>
