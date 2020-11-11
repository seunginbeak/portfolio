<template>
  <div class="home">
    <Header />
    <Sidebar />
    <Visual />
    <Profile />
    <About />
    <Portfolio />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Visual from "@/components/Visual.vue";
import Profile from "@/components/Profile.vue";
import About from "@/components/About.vue";
import Portfolio from "@/components/Portfolio.vue";

export default {
  name: "Home",
  components: {
    Header,
    Sidebar,
    Visual,
    Profile,
    About,
    Portfolio,
  },
};
</script>
