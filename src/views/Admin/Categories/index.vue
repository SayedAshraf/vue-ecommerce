<template>
  <div>
    <SectionHeader :AddMethod="ConsolMethod">
      <template #title>
        Page Title
      </template>
      <template #action> </template>
    </SectionHeader>
    <ve-Model></ve-Model>
  </div>
</template>

<script>
import SectionHeader from "../../../components/AdminComp/SectionHeader";
export default {
  name: "Categories",
  components: {
    SectionHeader,
  },
  methods: {
    ConsolMethod: function() {
      console.log("Worked!");
    },
  },
};
</script>
<style lang="scss" scoped></style>
