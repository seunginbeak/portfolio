<template>
  <section class="portfolio">
    <h2>PORTFOLIO</h2>
    <ul class="portfolio_content">
      <li>
        <img src="@/assets/images/letskorail_19201281.jpg" alt="" />

        <div class="overlay_bg">
          <p>PORTFOLIO_01</p>
        </div>

        <div class="portfolio_title">PORTFOLIO_01</div>
      </li>
      <li>
        <img src="@/assets/images/letskorail_19201281.jpg" alt="" />

        <div class="overlay_bg">
          <p>PORTFOLIO_01</p>
        </div>

        <div class="portfolio_title">PORTFOLIO_01</div>
      </li>
      <li>
        <img src="@/assets/images/letskorail_19201281.jpg" alt="" />

        <div class="overlay_bg">
          <p>PORTFOLIO_01</p>
        </div>

        <div class="portfolio_title">PORTFOLIO_01</div>
      </li>
      <li>
        <img src="@/assets/images/letskorail_19201281.jpg" alt="" />

        <div class="overlay_bg">
          <p>PORTFOLIO_01</p>
        </div>

        <div class="portfolio_title">PORTFOLIO_01</div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";

.portfolio {
  padding: 80px 40px;
  box-sizing: border-box;

  .portfolio_content {
    @include setGrid(grid, 3, 1fr, 2, 1fr, 40px);

    > li {
      position: relative;

      > img {
        display: block;
        width: 100%;
      }

      .overlay_bg,
      .portfolio_title {
        @include setPosition(absolute, auto, 0, 0, 0, 980);
        @include setFlex(flex, center, center);
        height: 40px;
        font-size: 14px;
        color: $color01;
        background-color: rgba(23, 23, 23, 0.7);

        > p {
          display: none;
        }
      }

      &:hover {
        .overlay_bg {
          height: 100%;
          transition: 1s;

          > p {
            display: block;
          }
        }
      }
    }
  }
}
</style>