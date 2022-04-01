<template>
  <v-simple-table class="to-do-list-table pa-10 indigo lighten-3">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Time</th>
          <th class="text-left">Time left (min)</th>
          <th class="text-left">Status</th>
          <th class="text-left">Action</th>
          <th>
            <v-btn class="pink lighten-3" @click="clearAllTask"
              >Clear All</v-btn
            >
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in getTodolist" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.time }}</td>
          <td>{{ item.timeLeft }}</td>
          <td>
            {{
              item.isDone
                ? "Done"
                : item.isInTime
                ? "In processing"
                : "Time out"
            }}
          </td>
          <td>
            <v-btn
              class="green"
              icon
              v-if="item.isDone"
              v-on:click="item.isDone = !item.isDone"
              ><v-icon>mdi-check-bold</v-icon></v-btn
            >
            <v-btn
              class="red"
              icon
              v-if="!item.isDone"
              v-on:click="item.isDone = !item.isDone"
              ><v-icon>mdi-window-close</v-icon></v-btn
            >
          </td>
          <td>
            <v-btn
              class="mt-1 ml-10 deleteItem"
              icon
              v-on:click="deleteTask(index)"
              ><v-icon>mdi-delete</v-icon></v-btn
            >
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import { mapGetters } from "vuex";



export default {
  props: {
    listItem: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    async deleteTask(item) {
      await this.$store.dispatch("todolistStore/deleteTask", { item });
    },

    async clearAllTask() {
      await this.$store.dispatch("todolistStore/clearAllTask");
    }

  },
  watch: {
    timeLeft: function () {
      if (this.time == 0) this.isInTime = false;
    },
  },
  computed: {
    ...mapGetters("todolistStore", ["getTodolist"]),
  },
};
</script>

<style>
th {
  color: red;
}
.to-do-list-table {
  width: 70vw;
  height: 100vh;
  overflow-y: auto;
  max-height: 60vh;
  background-color: #222831;
}
</style>
