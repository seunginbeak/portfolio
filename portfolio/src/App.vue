<template>
  <div>
    <Header />
    <Sidebar />
    <SideMenu />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import SideMenu from "@/components/SideMenu.vue";

export default {
  components: {
    Header,
    Sidebar,
    SideMenu,
  },
};
</script>

<style lang="scss" scoped>
</style>>
