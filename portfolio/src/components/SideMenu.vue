<template>
  <div class="side_menu">
    <div class="side_menu_overlay"></div>

    <div class="side_menu_fixed">
      <nav class="gnb">
        <ul>
          <li>
            <a href="">
              <strong>HOME</strong>
            </a>
          </li>
          <li>
            <a href="">
              <strong>WORK</strong>
            </a>
          </li>
          <li>
            <a href="">
              <strong>MAIL</strong>
            </a>
          </li>
        </ul>
      </nav>

      <div class="sns">
        <ul>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";

.side_menu {
  .side_menu_overlay {
    @include setPosition(fixed, 0, 0, 0, 0, 1010);
    // 클릭시 오버레이 right: 0
    right: 100%;
  }

  .side_menu_fixed {
    @include setPosition(fixed, 0, 0, 0, auto, 1010);
    @include setFlex(flex, center, center);
    background: white;
    // 클릭시 right: 0
    right: -100%;

    .gnb,
    .sns {
      display: flex;
      height: 100%;
    }

    .gnb {
      width: 300px;
      padding: 0 40px;
      box-sizing: border-box;
      > ul {
        width: 100%;
        align-self: center;
        > li {
          padding: 24px 0;
          > a {
            display: block;
            > strong {
              font-size: 32px;
            }
          }
        }
      }
    }

    .sns {
      width: 80px;
      color: white;
      background-color: $color02;
      > ul {
        align-self: flex-end;
        margin: 0 auto;
        > li {
          margin-bottom: 40px;
        }
      }
    }
  }
}
</style>