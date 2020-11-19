<template>
  <section class="profile">
    <h2 class="blind">Profile</h2>
    <div class="profile_content">
      <img src="@/assets/images/port_01.jpg" alt="프로필사진" />

      <!-- 프로필 정보 -->
      <ul class="profile_text">
        <li>백승인</li>
        <li>010.4157.9881</li>
        <li>
          29세
          <span>(1992.02.28)</span>
        </li>
        <li>bsi0228@gmail.com</li>
        <li>광주광역시 북구 두암동</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";

.profile {
  @include setFlex(flex, left, center);
  .profile_content {
    position: relative;
    > img {
      display: block;
      width: 100%;
      filter: brightness(0.4);
    }
    // text
    .profile_text {
      @include setPosition(absolute, 50%, auto, auto, 40px, 970);
      transform: translate(0, -50%);
      > li {
        height: 40px;
        font-size: 14px;
        color: $color01;
        > span {
          font-size: 12px;
          color: rgb(203, 203, 203);
        }
      }
    }
    // text end
  }
}
</style>