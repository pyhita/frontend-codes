<template>
  <div class="citygroup">
    <van-index-bar :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <div v-for="(item, index) in groupData.hotCities" 
        class="city-item"
        @click="cityClick(item)"
        :key="index">
        {{ item.cityName }}
        </div>
      </div>

      <template v-for="item in groupData.cities" :key="item">
        <van-index-anchor :index="item.group" />
        <van-cell v-for="city in item.cities" 
        :title="city.cityName"
        @click="cityClick(city)" 
        :key="city"/>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import useCityStore from "@/stores/modules/city.js"
  import { useRouter } from 'vue-router';

  const props = defineProps({
    groupData: {
      type: Object,
      default: () => ({})
    }
  })

  const indexList = computed(() => {
      const list = props.groupData.cities?.map(item => item.group)
      list?.unshift("#")
      return list
    }
  )

  const router = useRouter()
  function cityClick(city) {
    const cityStore = useCityStore()
    cityStore.currentCity = city
    router.back()
  }

  console.log(indexList)


</script>

<style lang="less" scoped> 
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    padding-right: 25px;


    .city-item {
      width: 70px;
      height: 28px;
      border-radius: 14px;
      font-size: 12px;
      color: #000;
      background-color: #fff4ec;
      text-align: center;
      line-height: 28px;
      margin: 5px 0;

    }
  }
</style>
