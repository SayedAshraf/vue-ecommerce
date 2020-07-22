<template>
  <div id="Admin-content-body" :class="{ showNav: NavVisibilityFun }">
    <AdminHeader />
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import AdminHeader from "@/components/AdminComp/AdminHeader.vue";

export default {
  name: "Admin",
  components: {
    AdminHeader,
  },
  computed: {
    NavVisibilityFun: function() {
      return this.$store.state.admin.navVisibility;
    },
  },
};
</script>

<style lang="scss">
body {
  padding-left: 40px;
}
</style>
