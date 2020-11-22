<template>
  <header class="header">
    <!-- Home 과 work에서 로고 색상 변경 -->
    <h1 class="logo" :style="{ color: logo.color }">
      <router-link to="/">
        <strong>BEAK</strong>
        <span>WebPublisher</span>
      </router-link>
    </h1>

    <div
      class="hambergur_menu"
      @click="Toggle"
      :class="{ close: sideMove.isButton }"
    >
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </div>

    <!-- hidden : SideMenu컴포넌트에서 오버레이 클릭시 사라지게 하기위해 emit 사용 -->
    <SideMenu :sideMove="sideMove" @hidden="Toggle" />
  </header>
</template>

<script>
import SideMenu from "./SideMenu.vue";

export default {
  props: {
    logo: {
      type: Object,
    },
  },
  components: {
    SideMenu,
  },
  data() {
    return {
      sideMove: {
        isMove: false,
        isButton: false,
      },
    };
  },
  methods: {
    // SideMenu 오픈
    Open() {
      this.sideMove.isMove = true;
      this.sideMove.isButton = true;
    },
    // SideMenu 클로즈
    Close() {
      this.sideMove.isMove = false;
      this.sideMove.isButton = false;
    },
    Toggle() {
      if (this.sideMove.isMove) {
        this.Close();
      } else {
        this.Open();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";

.header {
  // logo
  .logo {
    @include setPosition(fixed, 20px, auto, auto, 40px, 1000);
    height: 60px;
    strong {
      font-size: $font-x-lg_02;
      font-weight: 900;
    }
    span {
      display: block;
      margin-top: -5px;
      margin-left: 3px;
    }
  }
  // logo end
  // hambergur_menu
  .hambergur_menu {
    @include setPosition(fixed, 30px, 26px, auto, auto, 1020);
    cursor: pointer;
    width: 28px;
    height: 28px;

    span {
      display: block;
      width: 28px;
      height: 4px;
      margin: 4px 0;
      border-radius: 4px;
      text-indent: -10000px;
      color: transparent;
      background-color: $ColorWhite;
    }
    // // hambergur_menu 클릭시 close버튼으로 변경
    &.close {
      > span {
        @include setPosition(absolute, 50%, auto, auto, 50%, 1020);
        margin: 0;
      }
      > span:nth-child(1) {
        transform: translate(-50%, -50%) rotate(45deg);
      }
      > span:nth-child(2) {
        display: none;
      }
      > span:nth-child(3) {
        transform: translate(-50%, -50%) rotate(-45deg);
      }
    }
  }
  // hambergur_menu end
}

// 태블릿
@media screen and (min-width: 768px) and (max-width: 1100px) {
  .header {
    .logo {
      height: auto;
      left: 20px;
      strong {
        font-size: $font-x-lg;
        font-weight: 900;
      }
      span {
        margin-top: -3px;
        margin-left: 2px;
        font-size: $font-sm;
      }
    }
  }
}

// 모바일
@media screen and (max-width: 767px) {
  .header {
    .logo {
      height: auto;
      left: 20px;

      strong {
        color: $ColorWhite;
        font-size: $font-x-lg;
        font-weight: 900;
      }
      span {
        color: $ColorWhite;
        margin-top: -3px;
        margin-left: 2px;
        font-size: $font-sm;
      }
    }
  }
}
</style>