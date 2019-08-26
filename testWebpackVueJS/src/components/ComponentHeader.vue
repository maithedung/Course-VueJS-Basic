<template>
  <header>
    <ul>
      <li v-for="user in listUser" v-bind:key="user.id">{{ user.email }}</li>
    </ul>
    <h1>
      {{ title }}
      <br />
      <button v-on:click="changeTitleHeader">Change title in the Component Header</button>
    </h1>
  </header>
</template>

<script>
export default {
  name: "componet-header",
  props: {
    title: {
      type: String,
      default: "CodersX default"
    },
    listUser: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      //   text: "Header"
    };
  },
  methods: {
    changeTitleHeader() {
      console.log("Before activated");
      const data = {
        title: "Create Event Data"
      };
      this.$emit("changeTitleEvent", data);
      console.log("After activated");
    }
  }
};
</script>

<style>
</style>