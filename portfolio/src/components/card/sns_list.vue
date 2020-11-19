<template>
  <div class="sns_content">
    <a :href="snslist_all.link" target="_black">
      <i :class="snslist_all.icon">
        <span> {{ snslist_all.text }} </span>
      </i>
    </a>
  </div>
</template>

<script>
export default {
  props: ["snslist_all"],
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/style.scss";

.sns_content {
  position: relative;
  width: 36px;
  height: 36px;
  > a > i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 28px;
    color: rgba(255, 255, 255, 0.5);
    transition: 0.5s;
    // hover
    &:hover {
      color: white;
      transition: 0.5s;
    }
    // hover end
    > span {
      display: block;
      width: 1px;
      height: 1px;
      overflow: hidden;
      text-indent: -1000px;
    }
  }
}
</style>