<template>
  <div class="wrap">
    <Loading/>
    <Header :logo="logo" />
    <Sidebar :SidebarText="SidebarText" />
    <Work />
    <Footer />
  </div>
</template>

<script>
import Loading from "@/components/roading.vue";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Work from "@/components/Work_Portfolio.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      SidebarText: {
        title: "Mail",
        link: "/Mail",
      },
      logo: {
        color: "black",
      },
    };
  },
  components: {
    Loading,
    Header,
    Work,
    Sidebar,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
</style>>