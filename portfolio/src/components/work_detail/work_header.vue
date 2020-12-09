<template>
  <section class="container">
    <div class="work_cont">
      <ul class="work_gnb">
        <!-- 사이트종류 -->
        <li>
          <h2>{{ WorkHeader.info_title_01 }}</h2>
          <p>{{ WorkHeader.info_text_01 }}</p>
        </li>
        <!-- 제작년도 -->
        <li>
          <h2>{{ WorkHeader.info_title_02 }}</h2>
          <p>{{ WorkHeader.info_text_02 }}</p>
        </li>
        <!-- 제작기간 -->
        <li>
          <h2>{{ WorkHeader.info_title_03 }}</h2>
          <p>{{ WorkHeader.info_text_03 }}</p>
        </li>
        <!-- 기여도 -->
        <li>
          <h2>{{ WorkHeader.info_title_04 }}</h2>
          <p>{{ WorkHeader.info_text_04 }}</p>
        </li>
      </ul>

      <div class="work_title">
        <h2 class="main_title">
          {{ WorkHeader.main_title }}
        </h2>

        <p class="sub_title">
          {{ WorkHeader.sub_title }}
        </p>

        <ul>
          <li class="code_view">
            <a class="underline" :href="WorkHeader.code_link" target="_blank">
              코드보기
            </a>
          </li>
          <li class="go_site">
            <a class="underline" :href="WorkHeader.site_link" target="_blank">
              사이트가기
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    WorkHeader: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/style.scss";

.container {
  .work_cont {
    .work_gnb {
      @include setFlex(flex, left, center);

      > li {
        padding: 0 80px 0 0;

        > h2 {
          font-size: $font-md;
          font-weight: 900;
        }

        > p {
          margin-top: 5px;
          font-size: $font_sm;
          color: $Colorgray;
        }
      }
    }

    .work_title {
      margin-top: 60px;

      > .main_title {
        font-size: $font_lg;
      }
      > .sub_title {
        margin-top: 5px;
        font-size: $font_sm;
        font-weight: bold;
        color: $Colorgray;
      }

      > ul {
        margin-top: 40px;
        > li {
          display: inline-block;
          margin-right: 40px;
          font-size: $font-md;
          font-weight: 900;
        }
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
      .work_gnb {
        display: none;
      }

      .work_title {
        margin-top: 0;
        > ul {
          margin-top: 20px;
          > li {
            margin-right: 20px;
          }
        }
      }
    }
  }
}
</style>