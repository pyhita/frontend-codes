<template>
  <div class="city top-page">
    <div class="top">
      <!-- 1.搜索框 -->
      <van-search
          v-model="searchValue"
          placeholder="城市/区域/位置"
          shape="round"
          show-action
          @cancel="cancelClick"
      />

      <!-- 2.tab的切换 -->
      <!-- tabActive默认索引 -->
      <van-tabs v-model:active="tabActive" color="#ff9854" line-height="3">
        <template v-for="(value, key, index) in cityAll" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <!-- <template v-for="(value, key, index) in cityAll">
        <city-group v-show="tabActive === key"
        :group-data="currentGroup?.cities"/>
      </template> -->
      <city-group :group-data="currentGroup"></city-group>
    </div>
  </div>
</template>

<script setup>
  import {computed, ref} from "vue";
  import {useRouter} from "vue-router";
  import useCityStore from "@/stores/modules/city";
  import {storeToRefs} from "pinia";
  import cityGroup from "./cpns/city-group.vue";

  const searchValue = ref("")
  const tabActive = ref(0)
  const router = useRouter()


  // const allCity = ref({})
  const cityStore = useCityStore()
  // 发送网络请求
  cityStore.fetchAllCities()
  const {cityAll} = storeToRefs(cityStore)
  // 获取当前的数据
  const currentGroup = computed(() => cityAll.value[tabActive.value])
</script>

<style lang="less" scoped>
  //.city {
  //  position: relative;
  //  z-index: 9;
  //  height: 100vh;
  //  background-color: #fff;
  //
  //  overflow-y: auto;
  //}

  // 局部滚动
  .city {
    // --van-tabs-line-height: 30px;

    // top固定定位
    // .top {
    //   position: fixed;
    //   top: 0;
    //   left: 0;
    //   right: 0;
    // }

    // .content {
    //   margin-top: 98px;
    // }

    .top {
      position: relative;
      z-index: 9;
    }

    // 布局滚动
    .content {
      height: calc(100vh - 98px);
      overflow-y: auto;
    }
  }
</style>