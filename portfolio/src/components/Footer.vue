<template>
  <footer class="footer">
    <ul class="footer_profile">
      <li>
        <router-link to="/">
          <i class="xi-user-o"></i>

          <p>Beak Seung In</p>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <i class="xi-call"></i>

          <p>010.4157.9881</p>
        </router-link>
      </li>
      <li>
        <router-link to="/mail">
          <i class="xi-mail-o"></i>

          <p>bsi0228@gmail.com</p>
        </router-link>
      </li>
    </ul>

    <div class="footer_copylight">
      <p>이 사이트는 포트폴리오로 상업적 용도로 사용하지 않습니다.</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";

.footer {
  width: calc(100% - 80px);
  font-size: $font-md;
  color: $ColorWhite;
  background-color: $ColorBlack;

  .footer_profile {
    @include setFlex(flex, center, center);
    column-gap: 40px;
    border-bottom: 1px solid $ColorWhite2;

    > li {
      position: relative;
      padding: 20px 0;

      > a {
        > i {
          @include setPosition(absolute, 50%, auto, auto, 0, 1000);
          transform: translateY(-50%) rotate(45deg);
          width: 24px;
          height: 24px;
          color: $ColorWhite;
          border: 2px solid $ColorWhite;
          border-radius: 5px;

          &::before {
            @include setPosition(absolute, 50%, auto, auto, 50%, 1000);
            transform: translate(-50%, -50%) rotate(-45deg);
            font-size: 16px;
          }
        }

        p {
          display: inline-block;
          margin-left: 40px;
          font-size: $font-sm;
        }
      }

      &:hover {
        > a {
          > i {
            color: $ColorBlack;
            background-color: $ColorWhite;
            transition: 1s;

            &::before {
              font-size: 18px;
            }
          }
        }
      }
    }
  }

  .footer_copylight {
    padding: 80px;
    font-size: $font-md;
    text-align: center;
  }
}

// 모바일
@media screen and (max-width: 767px) {
  .footer {
    font-size: $font-md;

    .footer_profile {
      @include setFlex(block, center, center);
      padding: 0 20px;
    }

    .footer_copylight {
      padding: 20px;
      font-size: $font-sm;
      text-align: center;
    }
  }
}
</style>