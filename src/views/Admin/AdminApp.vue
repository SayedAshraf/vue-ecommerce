<template>
  <div id="Admin-content-body" :class="{ showNav: NavVisibilityFun }">
    <h1>Admin page</h1>
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
#Admin-content-body {
  font-family: "Josefin Sans", sans-serif;
}
</style>
