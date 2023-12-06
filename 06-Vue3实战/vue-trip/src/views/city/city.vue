<template>
  <div class="city top-page">
    <van-search v-model="searchValue"
                placeholder="城市区域位置"
                shape="round"
                show-action
                @search="onSearch"
                @cancel="onCancel"
              />
    <van-tabs v-model:active="tabActive" color="#ff9854">
<!--      <van-tab title="国内.港澳台"></van-tab>-->
<!--      <van-tab title="海外"></van-tab>-->
      <template v-for="(value, key, index) in cityAll" :key="key">
        <van-tab :title="value.title"></van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<script setup>
  import {ref} from "vue";
  import {useRouter} from "vue-router";
  import useCityStore from "@/stores/modules/city";
  import {storeToRefs} from "pinia";

  const searchValue = ref("")
  const tabActive = ref(0)
  const router = useRouter()

  const onSearch = () => {

  }

  const onCancel = () => {
    router.back()
  }


  // const allCity = ref({})
  const cityStore = useCityStore()
  // 发送网络请求
  cityStore.fetchAllCities()
  const {cityAll} = storeToRefs(cityStore)
  console.log("cityall", cityAll)

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

  .city {
    --van-tabs-line-height: 40px;
  }
</style>
