<template>
  <div class="component-tabs">
    <div class="tab-title">
      <span>{{ title }}</span>
      <ion-icon name="heart"></ion-icon>
    </div>
    <div class="tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "component-tab",
  props: {
    title: {
      type: String,
      default: "title default"
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
.tab-title {
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  border: 2px solid #000;
}
.tab-content {
  margin-top: 2px;
  border: 2px solid #543;
}
</style>