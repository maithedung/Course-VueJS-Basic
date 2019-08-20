const vueInstance = new Vue({
  el: "#app",
  data: {
    title: "Coders.Tokyo"
  },
  methods: {
      say = function(text) {
        return `Hello ${text}`
      }
  }
});
// He thong phan ung Reactiriry
console.log(vueInstance);

setTimeout(() => {
  vueInstance.title = "CodersX";
}, 3000);
