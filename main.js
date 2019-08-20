const vueInstance = new Vue({
  el: "#app",
  data: {
    title: "Coders.Tokyo",
    url: 'https://www.facebook.com/maithedung.nodejs',
    target: '_blink',
    price: 1000,
    check: 20 > 1000
  },
  methods: {
    say(text) {
      return `Hello ${text}`;
    },
    formatPrice() {
      return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(this.price)
    }
  }
});
// He thong phan ung Reactiriry
console.log(vueInstance);

setTimeout(() => {
  vueInstance.title = "CodersX";
}, 3000);
