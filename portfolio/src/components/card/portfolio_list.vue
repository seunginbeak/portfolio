<template>
  <div class="portfolio_list">
    <img :src="imageLink" :alt="portfolio_list.alt" />
    <div class="overlay_bg">
      <router-link :to="link_id">
        <p>{{ portfolio_list.overlay_text }}</p>
      </router-link>
    </div>
    <div class="portfolio_title">{{ portfolio_list.title }}</div>
  </div>
</template>

<script>
export default {
  props: ["portfolio_list"],
  computed: {
    // 모든 포트폴리오 이미지에대한 위치
    imageLink() {
      return require("@/assets/images" + this.portfolio_list.image);
    },

    link_id() {
      return "/work/" + this.portfolio_list.id;
    },
  },
};
</script>

<style lang="scss" scoped >
@import "../../assets/css/style.scss";
.portfolio_list {
  position: relative;
  height: 100%;
  > img {
    display: block;
    width: 100%;
    height: 100%;
  }
  .overlay_bg,
  .portfolio_title {
    @include setPosition(absolute, auto, 0, 0, 0, 980);
    @include setFlex(flex, center, center);
    height: 40px;
    font-size: $font-md;
    color: $ColorWhite;
    background-color: $ColorBlack2;
  }
  .overlay_bg {
    > a {
      @include setFlex(flex, center, center);
      width: 100%;
      height: 100%;
      > p {
        display: none;
      }
    }
  }
  // hover
  &:hover {
    .overlay_bg {
      height: 100%;
      transition: 1s;
      > a > p {
        display: block;
      }
    }
  }
  // hover end
}
</style>