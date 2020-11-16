<template>
  <div class="wrap">
    <Visual />
    <Profile />
    <About />
    <Portfolio />
  </div>
</template>

<script>
// @ is an alias to /src
import Visual from "@/components/Visual.vue";
import Profile from "@/components/Profile.vue";
import About from "@/components/About.vue";
import Portfolio from "@/components/Portfolio.vue";

export default {
  name: "Home",
  components: {
    Visual,
    Profile,
    About,
    Portfolio,
  },
};
</script>

<style lang="stylus" scoped></style>
