<template>
  <aside class="sidebar">
    <div class="sidebar_content">
      <router-link :to="SidebarText.link">
        <!-- Home / Work에따라 text와 a link를 가져와 교체 -->
        <h2>{{ SidebarText.title }}</h2>
      </router-link>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    SidebarText: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";

.sidebar {
  @include setFlex(flex, center, center);
  @include setPosition(fixed, 0, 0, 0, auto, 990);
  width: 80px;
  color: $color01;
  background-color: $color02;
  // sidebar content
  .sidebar_content {
    transform: rotate(-90deg);
    h2 {
      &::after {
        content: " ";
        display: block;
        width: 100%;
        height: 3px;
        background-color: white;
      }
      &:hover::after {
        width: 0;
        transition: 1s;
      }
    }
  }
  // sidebar content end
}
</style>