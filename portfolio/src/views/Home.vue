<template>
  <div class="wrap">
    <Header :logo="logo" />
    <Sidebar :SidebarText="SidebarText" />
    <Visual />
    <Profile />
    <About />
    <Portfolio />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Visual from "@/components/Visual.vue";
import Profile from "@/components/Profile.vue";
import About from "@/components/About.vue";
import Portfolio from "@/components/Portfolio.vue";

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
    Header,
    Visual,
    Profile,
    About,
    Portfolio,
    Sidebar,
  },
};
</script>

<style lang="stylus" scoped></style>
