<template>
  <section class="about">
    <h2 class="blind">About</h2>
    <div class="about_content">
      <div class="about_img">
        <img src="@/assets/images/port_02.jpg" alt="프로필 이미지" />
      </div>
      <!-- text -->
      <div class="about_text">
        <h3 class="title">about</h3>

        <p class="text_01">
          현재 웹퍼블리셔 나아가 프론트엔드개발자가 되고싶어 <br />
          취업 문을 두드리고 있는 백승인 이라고 합니다. <br />
          늦은 나이에 시작했다고 생각되어 다른분들보다 이것을 잘하고 저것을
          잘한다고 확신은 못드리겠습니다. 그렇기 때문에 제가 할 수있는 것부터
          시작하고자 합니다.
        </p>

        <strong>할수 있는 것</strong>

        <p class="text_02">
          1. 기본이 되는 HTML & CSS 이해 <br />
          2. javascript & jQuery 이해 <br />
          3. github를 이용해 Push 와 Pull 정도는 사용 가능 <br />
          4. Vue를 사용한 Main 포트폴리오 제작으로 기초정도는 사용가능<br />
        </p>
      </div>
      <!-- text end -->
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";

.about {
  padding: 80px 40px;
  box-sizing: border-box;
  background-color: $ColorBlack;
  .about_content {
    @include setFlex(flex, center, center);
    column-gap: 40px;
    .about_img {
      flex: 1;
    }
    // text
    .about_text {
      flex: 1;
      color: $ColorWhite;
      .title {
        font-size: $font-x-lg;
        font-weight: 900;
      }
      strong {
        display: block;
        margin-top: 20px;
      }
      p {
        font-size: $font-sm;
        line-height: 25px;

        &.text_01 {
          margin-top: 20px;
        }
        &.text_02 {
          margin-top: 5px;
        }
      }
    }
    // text end
  }
}

// 태블릿
@media screen and (min-width: 768px) and (max-width: 1100px) {
  .about {
    padding: 40px 20px;
    .about_content {
      column-gap: 20px;
      // text
      .about_text {
        flex: none;
        width: 460px;
        .title {
          font-size: $font-lg;
        }
        p {
          line-height: 20px;

          &.text_01 {
            margin-top: 10px;
          }
          &.text_02 {
            margin-top: 10px;
          }
        }
      }
      // text end
    }
  }
}

// 모바일
@media screen and (max-width: 767px) {
  .about {
    padding: 40px 20px;
    .about_content {
      display: block;
      column-gap: normal;
      .about_img {
        max-width: 320px;
        flex: none;
      }
      // text
      .about_text {
        flex: none;
        .title {
          margin-top: 10px;
          font-size: $font-lg;
        }
        p {
          line-height: 20px;

          &.text_01 {
            margin-top: 10px;
          }
          &.text_02 {
            margin-top: 10px;
          }
        }
      }
      // text end
    }
  }
}
</style>