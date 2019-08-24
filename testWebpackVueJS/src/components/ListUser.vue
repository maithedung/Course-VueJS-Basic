<template>
  <div class="list-user">
    <p>List User Component</p>
    <user />
    <user />
    <user />
  </div>
</template>

<script>
import User from "./User.vue";

export default {
  name: "list-user",
  data() {
    return {};
  },
  components: {
      User
  }
};
</script>

<style>
</style>