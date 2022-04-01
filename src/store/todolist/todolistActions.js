export default {
  createTask(context, payload) {
    context.commit("createTask", payload.newTaskData);
  },

  deleteTask(context, payload) {
    context.commit("deleteTask", payload.item);
  },

  clearAllTask(context) {
    context.commit("clearAllTask")
  }
};
