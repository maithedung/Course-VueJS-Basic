<template>
  <div class="demo-slot">
    <!-- <h1>Demo Slot</h1> -->
    <!-- <slot></slot> -->
    <component-tabs title="Title of Tab">
      <ul class="tabs-header">
        <li v-for="(item, index) in tabsHeader" v-bind:key="index">{{ item.text }}</li>
      </ul>
    </component-tabs>
  </div>
</template>

<script>
import ComponentTabs from "./ComponentTabs";
export default {
  name: "demo-slot",
  data() {
    return {
      tabsHeader: [{ text: "Tab 1" }, { text: "Tab 2" }, { text: "Tab 3" }]
    };
  },
  components: {
    ComponentTabs
  }
};
</script>

<style>
.demo-slot {
  margin-top: 5rem;
  padding: 5rem 1.5rem;
  border: 1px solid #000;
}
.tabs-header {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  list-style-type: none;
}
.tabs-header li {
  background-color: aquamarine;
  border: 2px solid #333;
  margin-top: 1rem;
  margin-right: 2rem;
  padding: 1rem 2rem;
  cursor: pointer;
}
.tabs-header li:hover {
  background-color: aqua;
  color: white;
  transition: all 0.5s ease;
}
</style>