<template>
  <aside class="sidebar">
    <div class="sidebar_content">
      <a :href="SidebarText.link">
        <!-- Home / Work에따라 text와 a link를 가져와 교체 -->
        <h2 class="underline">{{ SidebarText.title }}</h2>
      </a>
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
  color: $ColorWhite;
  background-color: $ColorBlack;
  // sidebar content
  .sidebar_content {
    transform: rotate(-90deg);
    h2 {
      &::after {
        background-color: $ColorWhite;
      }
    }
  }
  // sidebar content end
}
</style>