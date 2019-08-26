<template>
  <footer>
    <h1>{{ title }}</h1>
  </footer>
</template>

<script>
export default {
  name: "component-footer",
  props: {
    title: {
      type: String,
      default: "CodersX default"
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>