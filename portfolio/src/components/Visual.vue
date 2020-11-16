<template>
  <section class="visual">
    <h2 class="blind"></h2>

    <div class="swiper-container">
      <Swiper
        class="swiper-wrapper"
        :slides-per-view="1"
        navigation
        :pagination="{ clickable: true, type: 'fraction' }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide
          class="swiper-slide"
          v-for="swiperPage in swiperText"
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
  data() {
    return {
      swiperText: [
        {
          title: "PAGE_01",
          text:
            "content_01 : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptate, explicabo, cum porro dicta iure aliquid pariatur magnam nulla provident distinctio laboriosam dignissimos! Nostrum corporis, eius inventore doloribus excepturi eum!",
        },
        {
          title: "PAGE_02",
          text:
            "content_02 : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptate, explicabo, cum porro dicta iure aliquid pariatur magnam nulla provident distinctio laboriosam dignissimos! Nostrum corporis, eius inventore doloribus excepturi eum!",
        },
        {
          title: "PAGE_03",
          text:
            "content_03 : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, voluptate, explicabo, cum porro dicta iure aliquid pariatur magnam nulla provident distinctio laboriosam dignissimos! Nostrum corporis, eius inventore doloribus excepturi eum!",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";
@import "../assets/css/swiper.css";

.swiper-slide {
  @include setFlex(flex, left, center);
  height: 90vh;

  .swiper_text {
    @include setFlex(flex, center, left);
    flex-flow: column;
    width: 500px;
    padding: 0 40px;
    box-sizing: border-box;

    strong {
      font-size: 32px;
      font-weight: 900;
    }
    p {
      margin-top: 20px;
      font-size: 14px;
      line-height: 25px;
    }
  }
}

.swiper-slide {
  background-color: $color02;
  color: $color01;
}
</style>