<template>
    <div>
        <h2>Home</h2>
        <!-- 路由嵌套 -->
        <div>
            <router-link to="/home/recommand">Rcommand</router-link>
        </div>
       <div>
        <router-link to="/home/ranking">Ranking</router-link>
       </div>
        <router-view></router-view>
    </div>
</template>

<script>

</script>

<style scoped>
</style>
