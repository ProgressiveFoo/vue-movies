import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth/index";
import movies from "./movies/index";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    movies,
    auth,
  },
});
