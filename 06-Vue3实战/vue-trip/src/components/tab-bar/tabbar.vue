<template>
    <div class="tab-bar">
        <!-- <template v-for="(item, index) in tabbarData" :key="index">
            <div class="tab-item" @click="itemClick(item.path, index)"
            :class="{active: currentIndex == index}">
                <img v-if="currentIndex != index" :src="getAssetURL(item.img)" alt="">
                <img v-else :src="getAssetURL(item.imgActive)" alt="">
                <span class="text">{{ item.text }}</span>
            </div>
        </template> -->

        <van-tabbar v-model="currentIndex" active-color="#ff9892">
            <template v-for="(item, index) in tabbarData" >
                <van-tabbar-item icon="home-o" :to="item.path">
                    <span>{{ item.text }}</span>
                    <template #icon>
                        <img v-if="currentIndex != index" :src="getAssetURL(item.img)" alt="">
                        <img v-else :src="getAssetURL(item.imgActive)" alt="">
                    </template>
                </van-tabbar-item>
            </template>
        </van-tabbar>
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

//    function itemClick(path, index) {
//     currentIndex.value = index
//     router.push(path)
//    }
</script>

<style lang="less" scoped>
    .tab-bar {
        // 局部修改
        // --van-tabbar-item-icon-size: 30px !important;

        // 找到对应的类，对其中的CSS 进行修改
        // 不生效 因为样式是有作用域的
        // deep 可以让样式 穿透子组件 对子组件 也生效
        border: 1px solid #f3f3f3;
        :deep(.van-tabbar-item__icon) {
            font-size: 30px;
        }

        img {
            height: 30px;
        }
    }
</style>
