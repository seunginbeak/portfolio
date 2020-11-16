<template>
  <header class="header">
    <h1 class="logo">
      <a href="#">
        <strong>BEAK</strong>
        <span>WebPublisher</span>
      </a>
    </h1>

    <div class="hambergur_menu">
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>

    <div class="sideMenu">사이드 메뉴</div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";

.header {
  .logo {
    @include setPosition(fixed, 20px, auto, auto, 40px, 1000);
    height: 60px;
    color: $color01;

    strong {
      font-size: 42px;
      font-weight: 900;
    }
    span {
      display: block;
      margin-top: -5px;
      margin-left: 3px;
    }
  }
  .hambergur_menu {
    @include setPosition(fixed, 26px, 26px, auto, auto, 1020);
    cursor: pointer;

    span {
      display: block;
      width: 28px;
      height: 4px;
      margin: 4px 0;
      border-radius: 4px;
      text-indent: -10000px;
      color: transparent;
      background-color: $color01;
    }
  }
  .sideMenu {
    @include setPosition(fixed, 0, 0, 0, auto, 990);
    // 추후에 컴포넌트로 뺴서 만들것
    display: none;
  }
}
</style>