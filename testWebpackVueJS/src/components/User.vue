<template>
  <div class="user">
    <h3>{{ user.email }}</h3>
    <button v-on:click="handleDelete" class="delete">Delete</button>
  </div>
</template>

<script>
export default {
  name: "user",
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  data() {
    return {};
  },
  methods: {
    handleDelete() {
      const data = {
        id: this.user.id  
      };
      this.$emit("deleteUserEvent", data);
      console.log("handleDelete in User");
    }
  }
};
</script>

<style>
.user .delete {
  position: relative;
  top: 0;
  right: 0;
}
</style>