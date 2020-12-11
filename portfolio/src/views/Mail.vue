<template>
  <div class="wrap">
    <Loading />
    <Header :logo="logo" />
    <Sidebar :SidebarText="SidebarText" />
    <MailContent />
  </div>
</template>

<script>
import Loading from "@/components/roading.vue";
import Header from "@/components/Header.vue";
import Sidebar from "@/components/Sidebar.vue";
import MailContent from "@/components/Mail_content.vue";

export default {
  data() {
    return {
      SidebarText: {
        title: "Home",
        link: "/",
      },
      logo: {
        color: "white",
      },
    };
  },
  components: {
    Loading,
    Header,
    Sidebar,
    MailContent,
  },
};
</script>

<style lang="scss" scoped>
</style>