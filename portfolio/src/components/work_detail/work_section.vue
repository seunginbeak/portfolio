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
        margin-top: 20px;
        font-size: $font-sm;
        font-weight: 900;
        line-height: 24px;
        white-space: pre-line;
      }
    }
  }
}

// 태블릿
@media screen and (min-width: 768px) and (max-width: 1100px) {
}

// 모바일
@media screen and (max-width: 767px) {
  .container {
    .work_cont {
      display: block;
      > li {
        margin-top: 20px;
        padding: 0;
        > p {
          margin-top: 10px;
          font-size: $font-sm;
          font-weight: 900;
          line-height: 24px;
          white-space: pre-line;
        }
      }
    }
  }
}
</style>