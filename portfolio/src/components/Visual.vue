<template>
  <section class="visual">
    <h2 class="blind"></h2>

    <div class="swiper-container">
      <!-- swiper 플러그인 사용 -->
      <Swiper
        :slides-per-view="1"
        navigation
        :pagination="{ clickable: true, type: 'fraction' }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          class="swiper-slide"
          v-for="swiperPage in SwiperTextList"
          :key="swiperPage.id"
        >
          <div class="swiper_text">
            <strong> {{ swiperPage.title }} </strong>
            <p>
              {{ swiperPage.text }}
            </p>
          </div>
        </swiper-slide>
      </Swiper>
    </div>
  </section>
</template>
<script>
import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
SwiperCore.use([Navigation, Pagination, A11y]);

// 모듈에 있는 swiper 기본 스타일
import "swiper/swiper.scss";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    // 함수가 없으면 플러그인에서 console에 경고메시지
    onSwiper() {},
    onSlideChange() {},
  },
  computed: {
    SwiperTextList() {
      return this.$store.state.SwiperModule.swiperText;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";
// swiper: prev & next 버튼에대한 css
@import "../assets/css/swiper.css";

// swiper_slide
.swiper-slide {
  @include setFlex(flex, left, center);
  height: 90vh;
  color: $ColorWhite;
  background-color: $ColorBlack;

  .swiper_text {
    @include setFlex(flex, center, left);
    flex-flow: column;
    padding: 0 40px;
    box-sizing: border-box;

    strong {
      font-size: $font-x-lg;
      font-weight: 900;
    }
    p {
      line-height: 25px;
      white-space: pre-line;
    }
  }
}
// swiper_slide end

// 태블릿
@media screen and (min-width: 768px) and (max-width: 1100px) {
  .swiper-slide {
    .swiper_text {
      padding: 0 20px;
    }
  }
}

// 모바일
@media screen and (max-width: 767px) {
  .swiper-slide {
    .swiper_text {
      width: auto;
      padding: 0 20px;

      strong {
        font-size: $font-lg;
        font-weight: 900;
      }
      p {
        margin-top: 10px;
        font-size: $font-sm;
        line-height: 20px;
      }
    }
  }
}
</style>