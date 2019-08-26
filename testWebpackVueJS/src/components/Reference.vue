<template>
  <div class="reference">
    <h1>Reference</h1>
    <button v-on:click="handleClickInputFile" class="avatar">Change Avatar</button>
    <input ref="fileInputAvatar" type="file" style="display: none" />
  </div>
</template>

<script>
export default {
  name: "reference",
  data() {
    return {};
  },
  methods: {
    handleClickInputFile(event) {
      //   console.log(this.$refs.fileInputAvatar);
      this.$refs.fileInputAvatar.click();
    }
  }
};
</script>

<style>
.reference {
  margin-top: 5rem;
  padding: 5rem 1.5rem;
  border: 1px solid #000;
}
.avatar {
  color: white;
  border: 2px solid #333;
  padding: 12px 15px;
  background-color: #333;
}
.avatar:hover {
  color: aqua;
  background-color: white;
  transition: all 0.3s ease;
}
</style>