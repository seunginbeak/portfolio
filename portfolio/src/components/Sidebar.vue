<template>
  <aside class="sidebar">
    <div class="sidebar_content">
      <router-link to="/work"><h2>PORTFOLIO</h2></router-link>
    </div>
  </aside>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";

.sidebar {
  @include setFlex(flex, center, center);
  @include setPosition(fixed, 0, 0, 0, auto, 990);
  width: 80px;
  color: $color01;
  background-color: $color02;

  .sidebar_content {
    transform: rotate(-90deg);
  }
}
</style>