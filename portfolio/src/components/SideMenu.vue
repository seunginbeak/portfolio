<template>
  <div class="side_menu">
    <!-- hidden overlay 클릭시 제거 -->
    <div
      class="side_menu_overlay"
      @click="hidden"
      :class="{ show: sideMove.isMove }"
    ></div>
    <!-- hamburger 메뉴 클릭시 move -->
    <div class="side_menu_fixed" :class="{ move: sideMove.isMove }">
      <!-- gnb -->
      <nav class="gnb">
        <ul>
          <li>
            <router-link to="/">
              <strong>HOME</strong>
              <span>Go to Home</span>
            </router-link>
          </li>
          <li>
            <a href="/Work">
              <strong>WORK</strong>
              <span>Go to Work</span>
            </a>
          </li>
          <li>
            <a href="">
              <strong>MAIL</strong>
              <span>Go to Mail</span>
            </a>
          </li>
        </ul>
      </nav>
      <!-- gnb end-->
      <!-- SNS -->
      <div class="sns">
        <ul>
          <li v-for="snslist_all in snslist_text" :key="snslist_all.id">
            <SnsList :snslist_all="snslist_all" />
          </li>
        </ul>
      </div>
      <!-- SNS end -->
    </div>
  </div>
</template>

<script>
import SnsList from "./card/sns_list.vue";

export default {
  props: {
    sideMove: {
      type: Object,
      required: true,
    },
  },
  components: {
    SnsList,
  },
  computed: {
    // store에 sns_list
    snslist_text() {
      return this.$store.state.SnsModule.sns_list;
    },
  },
  methods: {
    hidden() {
      // console.log("hide", this.sideMove);
      this.$emit("hidden", this.sideMove);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";

.side_menu {
  // overlay
  .side_menu_overlay {
    @include setPosition(fixed, 0, 0, 0, 0, 1010);
    display: none;

    &.show {
      display: block;
    }
  }
  // overlay end
  .side_menu_fixed {
    @include setPosition(fixed, 0, 0, 0, auto, 1010);
    @include setFlex(flex, center, center);
    background: $ColorWhite;
    right: -100%;
    transition: 0.5s;
    // move 클래스
    &.move {
      right: 0;
      transition: 0.5s;
    }

    // gnb / sns 공통
    .gnb,
    .sns {
      display: flex;
      height: 100%;
    }
    // gnb
    .gnb {
      width: 300px;
      padding: 0 40px;
      box-sizing: border-box;
      > ul {
        width: 100%;
        align-self: center;
        > li {
          padding: 24px 0;
          color: $Colorgray;
          transition: 0.5s;

          &:hover {
            color: $ColorBlack;
            transition: 1s;
          }

          > a {
            display: block;
            > strong,
            span {
              display: block;
              font-size: $font-x-lg;
              font-weight: 900;
            }
            span {
              font-size: $font-lg;
            }
          }
        }
      }
    }
    // gnb end
    // sns
    .sns {
      width: 80px;
      color: $ColorWhite;
      background-color: $ColorBlack;
      > ul {
        align-self: flex-end;
        margin: 0 auto;
        > li {
          margin-bottom: 40px;
        }
      }
    }
    // sns end
  }
}

// 모바일
@media screen and (max-width: 767px) {
  .side_menu {
    .side_menu_fixed {
      // gnb
      .gnb {
        width: auto;
      }
    }
  }
}
</style>