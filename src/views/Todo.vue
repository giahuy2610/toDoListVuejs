<template>
  <div class="main">
    <div class="wrapper d-flex align-center flex-column">
      <p>{{ timeObj.date }}</p>
      <Header :timeObj="timeObj" />
      <TodoListInput :listItem="listItem" />
      <TodoListWrapper :listItem="listItem" />
    </div>
  </div>
</template>

<script>
import TodoListInput from "../components/TodoListInput.vue";
import TodoListWrapper from "../components/TodoListWrapper.vue";
import Header from "../components/Header.vue";

export default {
  components: {
    TodoListInput,
    TodoListWrapper,
    Header,
  },
  data() {
    return {
      listItem: [
        {
          name: "Do homework",
          timeLeft: 159,
          isDone: true,
          isInTime: true,
        },
        {
          name: "Swimming",
          timeLeft: 237,
          isDone: true,
          isInTime: true,
        },
        {
          name: "Do housework",
          timeLeft: 262,
          isDone: true,
          isInTime: false,
        },
        {
          name: "Make dinner",
          timeLeft: 305,
          isDone: false,
          isInTime: true,
        },
        {
          name: "Hang out with friends",
          timeLeft: 0,
          isDone: false,
          isInTime: false,
        },
      ],

      timeObj: {
        date: "",
        time: "",
        year: "",
      },
    };
  },

  methods: {},

  mounted: function () {
    setInterval(() => {
      this.timeObj.date = new Date().toLocaleTimeString();
      this.timeObj.year = new Date().getFullYear();
      this.timeObj.date = new Date();
    }, 1000);
  },
};
</script>

<style>
.main {
  width: 100vw;
  height: 100vh;
  color: #efbb35;
  background-color: #222831;
}
.wrapper {
  margin: auto;
  width: 70vw;
}
</style>
