const vueInstance = new Vue({
  el: "#app",
  data: {
    title: "Coders.Tokyo",
    url: "https://www.facebook.com/maithedung.nodejs",
    target: "_blink",
    price: 1000,
    check: 20 > 1000,
    counter: 0,
    clientX: 0,
    clientY: 0,
    message: "Hello World",
    a: 0,
    b: 0,
    number: 20,
    firstName: "Ken",
    about: "",
    textClass: "active",
    isActive: true,
    isError: true
  },
  methods: {
    say(text) {
      return `Hello ${text}`;
    },
    formatPrice() {
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND"
      }).format(this.price);
    },
    handleClick(event, number) {
      // console.log("click", event);
      this.counter += number;
    },
    handleMouseMove(event) {
      // console.log("move", event);
      this.clientX = event.clientX;
      this.clientY = event.clientY;
      console.log(this.clientX, this.clientY);
    },
    handleSubmitForm(event) {
      console.log(event);
      // event.preventDefault();
    },
    handleMouseMoveChild(event) {
      console.log("HandleMouseMoveChild", event.target);
      // event.stopPropagation();
    },
    handleKeyUp(event) {
      console.log(event.target.value);
      return (this.firstName = event.target.value);
    },
    changeActive() {
      // const check = this.isActive
      this.isActive = !this.isActive;
    }
  },
  computed: {
    // a computed getter
    reversedMessage() {
      // `this` points to the vm instance
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    addA() {
      // console.log("Add A run");
      return this.a + this.number;
    },
    addB() {
      // console.log("Add B run");
      return this.b + this.number;
    },
    now() {
      return Date.now();
    },
    objClass() {
      return { active: this.isActive, error: this.isError };
    },
  }
});
// He thong phan ung Reactiriry
console.log(vueInstance);

setTimeout(() => {
  vueInstance.title = "CodersX";
}, 3000);

// console.log(vueInstance.reversedMessage);
// vueInstance.message = "Say Goodbye";
// console.log(vueInstance.reversedMessage);
