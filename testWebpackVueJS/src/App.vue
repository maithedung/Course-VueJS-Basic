<template>
  <div id="app">
    <!-- <ComponentHeader></ComponentHeader>  -->
    <!-- <ComponentHeader /> -->
    <div class="container">
      <button v-on:click="title = 'Coders.Tokyo'">Change title</button>
      <component-header
        v-bind:listUser="listUser"
        v-bind:title="title"
        v-on:changeTitleEvent="handleChangeTitle"
      />
      <list-user v-bind:listUser="listUser" v-on:deleteUserEvent="handleDeleteUsers" />
      <component-footer v-bind:title="title" />
      <reference />
      <demo-slot>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui ullam voluptatum, laudantium eaque, molestias pariatur dolorum voluptatem, repellat natus enim ipsum ex a aperiam! Beatae eaque corporis quaerat fugiat laudantium.</p>
        </div>
      </demo-slot>
    </div>
  </div>
</template>

<script>
/* 
App (title, listUser[])
  ComponentHeader (title)
  ListUser (listUser[])
    User (user - object)
    User (user - object)
    User (user - object)
  ComponentFooter (title)
  -> props -> Nhung data truyen tu Component cha vao Component con
*/
import ListUser from "./components/ListUser.vue";
import ComponentHeader from "./components/ComponentHeader.vue";
import ComponentFooter from "./components/ComponentFooter.vue";
import Reference from "./components/Reference.vue";
import DemoSlot from "./components/DemoSlot.vue";
export default {
  name: "app",
  props: {
    // titleHeader:
  },
  data() {
    return {
      title: "CodersX",
      listUser: [
        { id: 1, email: "test1@gmail.com", active: true },
        { id: 2, email: "test2@gmail.com", active: false },
        { id: 3, email: "test3@gmail.com", active: true },
        { id: 4, email: "test4@gmail.com", active: false },
        { id: 5, email: "test5@gmail.com", active: true },
        { id: 6, email: "test6@gmail.com", active: true }
      ]
    };
  },
  components: {
    ComponentHeader,
    ComponentFooter,
    ListUser,
    Reference,
    DemoSlot
  },
  methods: {
    handleChangeTitle(data) {
      this.title = data.title;
      console.log("Active Success", data);
    },
    handleDeleteUsers(data) {
      console.log("handleDeleteUsers in App.vue", data);
      let indexDelete = -1;
      this.listUser.map((user, index) => {
        if (user.id === data.id) {
          indexDelete = index;
        }
      });
      return this.listUser.splice(indexDelete, 1);
    }
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
