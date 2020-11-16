<template>
  <section class="work">
    <ul class="work_list">
      <li>LIST 01</li>
      <li>LIST 02</li>
      <li>LIST 03</li>
      <li>LIST 04</li>
    </ul>

    <div class="work_content">
      <ul>
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
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";
.work {
  .work_list {
    @include setPosition(fixed, 0, auto, 0, 0, 950);
    @include setFlex(flex, center, left);
    flex-direction: column;
    width: calc((100% - 27px) / 3);
    padding: 0 80px;
    box-sizing: border-box;

    > li {
      margin: 20px 0;
    }
  }

  .work_content {
    width: calc((100% - 27px) / 3 * 2);
    margin-left: auto !important;

    > ul {
      @include setGrid(grid, 2, 1fr, 3, 1fr, 0);

      > li {
        position: relative;

        > img {
          display: block;
          width: 100%;
        }

        .overlay_bg,
        .portfolio_title {
          @include setPosition(absolute, auto, 0, 0, 0, 950);
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
}
</style>