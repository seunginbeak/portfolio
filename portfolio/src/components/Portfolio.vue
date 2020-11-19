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
    font-size: 32px;
    font-weight: 900;
  }
  .portfolio_content {
    @include setGrid(grid, 3, 1fr, 2, 1fr, 40px);
    margin-top: 20px;
  }
}
</style>