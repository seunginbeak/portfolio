<template>
  <Swiper
    class="work_swiper"
    :slides-per-view="1"
    :space-between="0"
    navigation
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide
      class="swiper_list"
      v-for="(work_swiper_all, index) in work_swiper_list.img"
      :key="work_swiper_all.id"
      :style="{
        backgroundImage:
          'url(' + require('@/assets/images' + work_swiper_all) + ')',
      }"
    >
      <!-- 인덱스를 가져와서 대체텍스트에 연결 -->
      <span class="blind">{{ work_swiper_list.text[index] }}</span>
    </swiper-slide>
  </Swiper>
</template>
<script>
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y]);

// 모듈에 있는 swiper 기본 스타일
import "swiper/swiper.scss";

// Import Swiper styles
export default {
  props: {
    curren_index: {
      type: String,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  computed: {
    work_swiper_list() {
      return this.$store.state.WorkSwiperModule.work_swiper_list[
        this.curren_index
      ];
    },
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
};
</script>


<style lang="scss" scoped>
@import "@/assets/css/style.scss";
// netlify에서 css style을 가져오지 못하여 따로 링크
@import url("https://unpkg.com/swiper/swiper-bundle.min.css");

.swiper_list {
  height: 35vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.swiper-button-prev,
.swiper-button-next {
  &::after {
    color: white;
  }
}
</style>