<template>
    <div class="tab-bar">
        <!-- <div class="tab-item">
            <img src="../../assets/img/tabbar/tab_home.png" alt="">
            <span class="text">首页</span>
        </div>
        <div class="tab-item">
            <img src="../../assets/img/tabbar/tab_favor.png" alt="">
            <span class="text">收藏</span>
        </div>
        <div class="tab-item">
            <img src="../../assets/img/tabbar/tab_order.png" alt="">
            <span class="text">订单</span>
        </div>
        <div class="tab-item">
            <img src="../../assets/img/tabbar/tab_message.png" alt="">
            <span class="text">消息</span>
        </div> -->
        <template v-for="(item, index) in tabbarData" :key="index">
            <div class="tab-item" @click="itemClick(item.path, index)"
            :class="{active: currentIndex == index}">
                <img v-if="currentIndex != index" :src="getAssetURL(item.img)" alt="">
                <img v-else :src="getAssetURL(item.imgActive)" alt="">
                <span class="text">{{ item.text }}</span>
            </div>
        </template>
    </div>
</template>

<script setup>
   import tabbarData from "@/assets/data/tabbar.js"
   import router from "@/router/index"
   import {ref} from "vue"


   const currentIndex = ref(0)

   const getAssetURL = (image) => {
        return new URL(image, import.meta.url).href
   }

   function itemClick(path, index) {
    currentIndex.value = index
    router.push(path)
   }
</script>

<style lang="less" scoped>
    .tab-bar {
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 50px;
        border: 1px solid #f3f3f3;

        .tab-item {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .text {
                font-size: 12px;
            }

            img {
                width: 36px;
            }

            &.active {
                color: var(--primary-color);
            }
        }
    }
</style>
