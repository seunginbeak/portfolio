<template>
  <div class="wrap">
    <Loading/>
    <Header :logo="logo" />
    <Sidebar :SidebarText="SidebarText" />

    <WorkHeader :WorkHeader="WorkHeader" />
    <WorkVisual :WorkHeader="WorkHeader" />
    <WorkSection :WorkMain="WorkMain" />
    <WorkSwiper
      :WorkSwiper="WorkSwiper"
      :WorkHeader="WorkHeader"
      :PageId="PageId"
    />

    <WorkButton :PageId="PageId" />
  </div>
</template>

<script>
import Loading from "@/components/roading.vue";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import WorkHeader from "@/components/work_detail/work_header.vue";
import WorkVisual from "@/components/work_detail/work_visual.vue";
import WorkSection from "@/components/work_detail/work_section.vue";
import WorkSwiper from "@/components/work_detail/work_swiper.vue";
import WorkButton from "@/components/work_detail/work_next_prev.vue";

export default {
  components: {
    Loading,
    Header,
    Sidebar,
    WorkHeader,
    WorkVisual,
    WorkSection,
    WorkSwiper,
    WorkButton,
  },
  data() {
    return {
      logo: {
        color: "black",
      },
      SidebarText: {
        title: "Home",
        link: "/",
      },
    };
  },
  computed: {
    PageId() {
      return this.$route.params.id;
    },

    WorkHeader() {
      return this.$store.state.WorkHeaderModule.work_main_title[this.PageId];
    },
    WorkMain() {
      return this.$store.state.WorkMainModule.work_main[this.PageId];
    },
    WorkSwiper() {
      return this.$store.state.WorkSwiperModule.work_swiper[this.PageId];
    },
  },
};
</script>

<style lang="scss" scoped>
// reset.css가 work/01 주소로 가져오지못하는 것 같음
@import "../../public/css/reset.css";
@import "../assets/css/style.scss";

.wrap {
  padding-top: 80px;
}

.container {
  margin-top: 40px;
}
</style>