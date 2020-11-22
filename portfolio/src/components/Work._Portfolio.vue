<template>
  <section class="work">
    <ul class="work_list">
      <li>LIST 01</li>
      <li>LIST 02</li>
      <li>LIST 03</li>
      <li>LIST 04</li>
    </ul>
    <!-- work  -->
    <div class="work_content">
      <ul>
        <li v-for="portfolio_list in PortfolioList" :key="portfolio_list.id">
          <PortfolioList :portfolio_list="portfolio_list" />
        </li>
      </ul>
    </div>
    <!-- work end -->
  </section>
</template>

<script>
import PortfolioList from "./card/portfolio_list.vue";

export default {
  components: {
    PortfolioList,
  },
  computed: {
    PortfolioList() {
      return this.$store.state.PortfolioListModule.portfolio_list;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";
.work {
  // work_list
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
  // work_list end

  // 포트폴리오 영역 그리드 사용
  .work_content {
    width: calc((100% - 27px) / 3 * 2);
    margin-left: auto !important;
    > ul {
      @include setGrid(grid, 2, 1fr, 3, 1fr, 0);
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 1100px) {
  .work {
    .work_content {
      > ul {
        @include setGrid(grid, 1, 1fr, 6, 1fr, 0);
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .work {
    .work_list {
      display: none;
    }

    // 포트폴리오 영역 그리드 사용
    .work_content {
      width: 100%;
      margin-left: 0;
      > ul {
        @include setGrid(grid, 1, 1fr, 6, 1fr, 0);
      }
    }
  }
}
</style>