import todolistMutations from "./todolistMutations";
import todolistActions from "./todolistActions";
import todolistGetters from "./todolistGetters";

export default {
  namespaced: true,
  state: () => ({
    todolists: [
      { name: "Do To Do List Project", isDone: 0, time: "11:10", timeLeft: "10",isInTime: 1 },
      { name: "Call my babe", isDone: 0, time: "11:10", timeLeft: "10", isInTime: 1 },
      { name: "Read Book", isDone: 1, time: "11:10", timeLeft: "10", isInTime: 1 },
      { name: "Play Game", isDone: 1, time: "11:10", timeLeft: "10", isInTime: 1 },
    ],
  }),
  getters: todolistGetters,
  mutations: todolistMutations,
  actions: todolistActions,
};
