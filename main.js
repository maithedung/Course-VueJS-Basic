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
    isError: true,
    activeColor: "white",
    fontSize: "1rem",
    marginTop: "1rem",
    width: "16rem",
    heigh: "auto",
    bgImage:
      "https://img.freepik.com/free-vector/blue-light-sparkles-background-with-copyspace_1017-20091.jpg?size=626&ext=jpg",
    tabs: "tabs",
    tabSelected: "login"
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
    },
    changeTab(tab) {
      this.tabSelected = tab;
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
    background() {
      return `url(${this.bgImage})`;
    },
    objStyle() {
      return {
        color: this.activeColor,
        fontSize: this.fontSize,
        marginTop: this.marginTop
      };
    },
    styleTabs() {
      return {
        margin: 0,
        padding: 0
      };
    },
    styleFormLogin() {
      return {
        display: "flex",
        padding: "15px",
        border: "2px solid blue",
        marginTop: "20px"
      };
    },
    styleFormRegister() {
      return {
        display: "flex",
        padding: "15px",
        border: "2px solid blue",
        marginTop: "20px"
      };
    }
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
