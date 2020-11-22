<template>
  <section class="portfolio">
    <h2>PORTFOLIO</h2>
    <ul class="portfolio_content">
      <!-- v-for로 반복 -->
      <li v-for="portfolio_list in PortfolioList" :key="portfolio_list.id">
        <PortfolioList :portfolio_list="portfolio_list" />
      </li>
    </ul>
  </section>
</template>

<script>
import PortfolioList from "./card/portfolio_list.vue";

export default {
  components: {
    PortfolioList,
  },
  computed: {
    // store의 modules 폴더 PortfolioList
    PortfolioList() {
      return this.$store.state.PortfolioListModule.portfolio_list;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/style.scss";

.portfolio {
  padding: 80px 40px;
  box-sizing: border-box;
  > h2 {
    font-size: $font-x-lg;
    font-weight: 900;
  }
  .portfolio_content {
    @include setGrid(grid, 3, 1fr, 2, 1fr, 40px);
    margin-top: 20px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1100px) {
  .portfolio {
    padding: 40px 20px;
    > h2 {
      font-size: $font-lg;
      font-weight: 900;
    }
    .portfolio_content {
      @include setGrid(grid, 2, 1fr, 3, 1fr, 20px);
    }
  }
}

@media screen and (max-width: 767px) {
  .portfolio {
    padding: 40px 20px;
    > h2 {
      font-size: $font-lg;
    }
    .portfolio_content {
      @include setGrid(grid, 1, 1fr, 6, 1fr, 20px);
    }
  }
}
</style>