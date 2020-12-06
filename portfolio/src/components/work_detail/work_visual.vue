<template>
  <section
    class="container"
    :style="{
      backgroundImage: 'url(' + visualBgImg + ')',
      backgroundPosition: visualBgImgPosition,
    }"
  >
    <span>{{ WorkHeader.img_text }}</span>
  </section>
</template>
<script>
export default {
  props: {
    WorkHeader: {
      type: Object,
    },
  },
  computed: {
    visualBgImg() {
      return require("@/assets/images" + this.WorkHeader.visual_main_img);
    },
    visualBgImgPosition() {
      return this.WorkHeader.visual_img_position;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/style.scss";

.container {
  position: relative;
  padding-bottom: 40%;
  background-size: cover;

  > span {
    display: inline-block;
    width: 1px;
    height: 1px;
    overflow: hidden;
    text-indent: -10000px;
  }
}
</style>