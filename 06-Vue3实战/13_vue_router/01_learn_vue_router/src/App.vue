<template>
    <div>
      <h1>App Content</h1>
      <!-- <div class="nav">
        <router-link to="/home" active-class="active">首页</router-link>
        <router-link to="/about" active-class="active">关于</router-link>
        <router-link to="/user/123" active-class="active">用户123</router-link>
        <router-link to="/user/456" active-class="active">用户456</router-link>
      </div> -->
      <!-- 其他元素的跳转 -->
      <!-- <span @click="homeSpanClick">首页</span>
      <button @click="aboutBtnClick">关于</button>
      <router-view></router-view> -->
      <div><router-link to="/review">Review Page</router-link></div>
      <div><router-link to="/user/123">User Page</router-link></div>
      <router-view></router-view>

      <button @click="logout">Logout</button>
    </div>

</template>

<script setup>
import {useRouter} from "vue-router"

const router = useRouter()

function homeSpanClick() {
  // 跳转首页
  router.push("/home")
}

function aboutBtnClick() {
  router.push({
    path: "/about",
    query: {
      name: "kante",
      age: 22
    }
  })
}

function logout() {
  localStorage.removeItem("token")
}

</script>

<style scoped>
.active {
  color: red;
  font-size: 20px;
}
</style>
