<template>
    <div class="search-box">
        <!-- <div class="location">
            <div class="city" @click="cityClick">
                {{ currentCity.cityName }}
            </div>
            <div class="position" @click="positionClick">
                <span class="text">我的位置</span>
                <img src="@/assets/img/home/icon_location.png" alt="">
            </div>
        </div> -->
        <!-- 日期范围 -->
        <!-- <div class="date-range">
            <div class="start">
                <span>入住</span>
                <span>8月25号</span>
            </div>
            <div class="stay">

            </div>
            <div class="end">
                <span>离店</span>
                <span>8月26号</span>
            </div>
        </div> -->
            <!-- 位置信息 -->
    <div class="location bottom-gray-line ">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <!-- 日期范围 -->
    <div class="section date-range bottom-gray-line " @click="showCalendar = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDate }}</span>
        </div>
        <div class="stay">共{{ stayCount }}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDate }}</span>
        </div>
      </div>
    </div>
    <van-calendar 
    v-model:show="showCalendar"
    type="range" 
    color="#ff9854"
    @confirm="onConfirm" />

        <!-- 价格/人数选择 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>

        <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

        <!-- 热门建议 -->
    <div class="section hot-suggests">
			<template v-for="(item, index) in hotSuggests" :key="index">
				<div 
						class="item"
						:style="{ color: item.tagText.color, background: item.tagText.background.color }"
				>
						{{ item.tagText.text }}
				</div>
			</template>
    </div>
    </div>

    
</template>

<script setup>

  import {useRouter} from "vue-router";
  import useCityStore from "../../../stores/modules/city";
  import { storeToRefs } from "pinia";
  import { ref } from "vue";
  import {formatDate, getDiffDate} from "@/utils/format_date.js"
	import useHomeStore from  "../../../stores/modules/home";


	// defineProps({
	// 	hotSuggests: {
	// 		type: Array,
	// 		default: () => []
	// 	}
	// })

  const router = useRouter()
  function cityClick() {
    router.push("/city")
  }

  function positionClick() {
    // 获取当前位置信息 经纬度
    navigator.geolocation.getCurrentPosition((res) => {
      console.log("获取位置成功", res)
    }, (err) => {
      console.log("获取位置失败")
    })
  }

  const cityStore = useCityStore()
  const {currentCity} = storeToRefs(cityStore)

  // 日期范围处理
  const nowDate = new Date()
  const newDate = new Date().setDate(nowDate.getDate() + 1)
  const startDate = ref(formatDate(nowDate))
  const endDate = ref(formatDate(nowDate.setDate(nowDate.getDate() + 1)))
  const stayCount = ref(1)
//   const stayCount = ref(startDate.getDate() - endDate.getDate())
  const showCalendar = ref(false)

  function onConfirm(dates) {
    showCalendar.value = false
    startDate.value = formatDate(dates[0])
    endDate.value = formatDate(dates[1])
    console.log(startDate.value)
    stayCount.value = getDiffDate(dates[0], dates[1])
  }

	// 热门建议
	const homeStore = useHomeStore()
  homeStore.fetchHotSuggests()
	const {hotSuggests} = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
    .banner {
        img {
            width: 100%;
        }
    }

    .location {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;

  .city {
    flex: 1;
    color: #333;
    font-size: 15px;
  }

  .position {
    width: 74px;
    display: flex;
    align-items: center;

    .text {
      position: relative;
      top: 2px;
      color: #666;
      font-size: 12px;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.date-range {
  height: 44px;
  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}

.price-counter {
  .start {
    border-right: 1px solid  var(--line-color);
  }
}

.hot-suggests {
  margin: 10px 0;

  .item {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1;
  }
}

</style>