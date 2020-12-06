<template>
  <div class="wrap">
    <Header :logo="logo" />
    <Sidebar :SidebarText="SidebarText" />
    <MailContent />
  </div>
</template>

<script>
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
    Header,
    Sidebar,
    MailContent,
  },
};
</script>

<style lang="scss" scoped>
</style>