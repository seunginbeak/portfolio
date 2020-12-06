<template>
  <section class="container">
    <ul class="work_cont">
      <li>
        <router-link
          class="underline"
          :to="'/work/' + (this.PageNumber - 1)"
          @click="prev"
          v-show="PageId > 0"
        >
          BACK
        </router-link>
      </li>
      <li class="menu_all">
        <router-link to="/work">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </router-link>
      </li>
      <li>
        <router-link
          class="underline"
          :to="'/work/' + (this.PageNumber + 1)"
          @click="next"
          v-show="PageId < lneght"
        >
          NEXT
        </router-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    PageId: {
      type: String,
    },
  },
  computed: {
    PageNumber() {
      return parseInt(this.PageId);
    },

    lneght() {
      return this.$store.state.WorkHeaderModule.work_main_title.length - 1;
    },
  },
  methods: {
    prev() {
      this.PageNumber - 1;
    },
    next() {
      this.PageNumber + 1;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/style.scss";

.container {
  .work_cont {
    @include setFlex(flex, center, center);
    padding: 30px 20px;
    justify-content: space-between;
    border-top: 1px solid $Colorgray;

    > li {
      font-size: $font_md;
      font-weight: 900;

      &.menu_all {
        position: relative;
        width: 26px;
        height: 26px;

        > a > span {
          @include setPosition(absolute, auto, auto, auto, auto, 1000);
          width: 12px;
          height: 12px;
          border: 3px solid black;
          border-radius: 3px;
          box-sizing: border-box;
          text-indent: -10000px;

          &:nth-child(1) {
            top: 0;
            left: 0;
          }
          &:nth-child(2) {
            top: 0;
            right: 0;
          }
          &:nth-child(3) {
            bottom: 0;
            left: 0;
          }
          &:nth-child(4) {
            right: 0;
            bottom: 0;
          }
        }

        &:hover > a > span {
          background-color: black;
          transition: 0.5s;
        }
      }
    }
  }
}
</style>