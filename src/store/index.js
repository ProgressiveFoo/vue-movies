import Vue from "vue";
import Vuex from "vuex";
import authService from "../services/AuthService";
import { mutations } from "./mutations";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeUser: {
      name: "",
      email: "",
      password: "",
    },
  },

  getters: {
    counter: (state) => state.counter,
  },

  setActiveUser(state, activeUser) {
    state.activeUser = activeUser;
  },

  actions: {
    async login(store, credentials) {
      const activeUser = await authService.login(credentials);
      localStorage.setItem("token", activeUser.token);
      store.commit("setActiveUser", activeUser);
    },
  },
  mutations,

  modules: {},
});
