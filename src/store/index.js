import Vue from "vue";
import Vuex from "vuex";
import todolistStore from "./todolist/todolist";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  modules: { todolistStore },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
});
