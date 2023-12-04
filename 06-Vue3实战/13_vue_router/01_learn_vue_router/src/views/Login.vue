<template>
    <div>
        <h2>Login Page</h2>
        <button @click="login">登录</button>
    </div>
</template>

<script setup>

import {useRouter} from "vue-router"

const router = useRouter()

function login() {
    console.log("login ..... ")
    localStorage.setItem("token", "coderwhy")

    // 跳转order
   router.push("/user/1234") 
}

</script>

<style scoped>
</style>
