<template>
  <div class="wrap">
    <Loading/>
    <Header :logo="logo" />
    <Sidebar :SidebarText="SidebarText" />
    <Visual />
    <Profile />
    <About />
    <Portfolio />
    <Footer />
  </div>
</template>

<script>
import Loading from "@/components/roading.vue";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Visual from "@/components/Visual.vue";
import Profile from "@/components/Profile.vue";
import About from "@/components/About.vue";
import Portfolio from "@/components/Portfolio.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {
      SidebarText: {
        title: "PORTFOLIO",
        link: "/work",
      },
      logo: {
        color: "white",
      },
    };
  },
  name: "Home",
  components: {
    Loading,
    Header,
    Visual,
    Profile,
    About,
    Portfolio,
    Sidebar,
    Footer,
  },
};
</script>

<style lang="stylus" scoped></style>
