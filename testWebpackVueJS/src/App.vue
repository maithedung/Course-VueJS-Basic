<template>
  <div id="app">
    <!-- <ComponentHeader></ComponentHeader>  -->
    <!-- <ComponentHeader /> -->
    <component-header />
    <list-user />
    <component-footer />
  </div>
</template>

<script>
/* 
App
  Header
  ListProduct
    Product
    Product
    Product
    Product
    Product
  Footer
*/
import ListUser from "./components/ListUser.vue";
import ComponentHeader from "./components/ComponentHeader.vue";
import ComponentFooter from "./components/ComponentFooter.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    ComponentHeader,
    ComponentFooter,
    ListUser
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
