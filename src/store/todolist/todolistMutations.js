export default {
  deleteTask(state, payload) {
    state.todolists = state.todolists.filter(
      (task) => task !== state.todolists[payload]
    );
  },

  clearAllTask(state) {
    state.todolists = state.todolists.filter(() => false);
  },

  createTask(state, payload) {
    state.todolists.push(payload);
  },
  
};
