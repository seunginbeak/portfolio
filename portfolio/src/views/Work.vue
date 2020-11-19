<template>
  <div class="wrap">
    <Header :logo="logo" />
    <Sidebar :SidebarText="SidebarText" />
    <Work />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import Work from "@/components/Work._Portfolio.vue";

export default {
  data() {
    return {
      SidebarText: {
        title: "Home",
        link: "/",
      },
      logo: {
        color: "black",
      },
    };
  },
  components: {
    Header,
    Work,
    Sidebar,
  },
};
</script>

<style lang="scss" scoped>
</style>>