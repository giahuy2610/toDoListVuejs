<template>
  <div class="pa-10 input-field-wrapper d-flex justify-center align-center">
    <v-text-field
      :dark="isDark"
      label="The plan tittle"
      hide-details="auto"
      class="ma-0"
      v-model="newName"
    ></v-text-field>
    <v-text-field
      :dark="isDark"
      label="The plan timeline (00:00-23:59)"
      hide-details="auto"
      class="ma-0 ml-5"
      v-model="newTime"
    ></v-text-field>
    <v-btn color="primary" elevation="17" class="ml-4" v-on:click="createTask"
      >Create</v-btn
    >

    <v-alert
      border="right"
      color="red"
      elevation="7"
      type="error"
      style="
        position: absolute;
        top: 20px;
        right: 20px;
        animation: appear-disappear 2s;
      "
      v-show="isVisible"
      >Please fill out all required fields
    </v-alert>
  </div>
</template>

<script>
export default {
  props: {
    listItem: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      newName: "",
      newTime: "",
      isError: false,
      isVisible: false,
      isDark: true,
    };
  },
  methods: {
    checkFormatTime: function (time) {
      if (time[2] != ":" || time.length > 5) {
        console.log("a");
        return false;
      } else if (
        parseInt(time.split(":")[0]) > 24 ||
        parseInt(time.split(":")[1]) > 60
      ) {
        console.log("b");
        return false;
      }
      return true;
    },

    checkAddRow: function () {
      if (this.newName === "" || !this.checkFormatTime(this.newTime)) {
        this.isError = this.isVisible = true;
        setTimeout(() => {
          this.isVisible = false;
        }, 2600);
        return false;
      } else {
        this.isError = false;
        return true;
      }
    },

    async createTask() {
      if (!this.checkAddRow()) return true;
      console.log(this.checkAddRow())
      var newTaskData = {
          name: this.newName,
          time: this.newTime,
          timeLeft: this.newTime,
          isDone: false,
          isInTime: true,
        };
      await this.$store.dispatch("todolistStore/createTask", { newTaskData });
      this.newName = "";
      this.newTime = "";
    },
  },
  computed: {
    calculateTimeLeft: function () {
      console.log(this.timeObj.time);
      return this.newTime;
    },
  },
};
</script>

<style>
.input-field-wrapper {
  width: 70vw;
}
@keyframes appear-disappear {
  0% {
    display: block;
    transform: translateX(30vw);
    opacity: 0;
  }
  100% {
    display: block;
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
