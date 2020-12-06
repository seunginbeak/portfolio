<template>
  <section class="container">
    <ul class="work_cont">
      <li>
        <h2>간단한 소개</h2>

        <p>
          {{ WorkMain.text_content_01 }}
        </p>
      </li>
      <li>
        <h2>제작후</h2>

        <p>
          {{ WorkMain.text_content_02 }}
        </p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    WorkMain: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/style.scss";

.container {
  .work_cont {
    @include setFlex(flex, center, inherit);
    > li {
      flex: 1;
      padding: 60px 20px;
      > p {
        font-size: $font-sm;
        font-weight: 900;
        line-height: 24px;
        white-space: pre-line;
      }
    }
  }
}
</style>