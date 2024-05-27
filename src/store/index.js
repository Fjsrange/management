import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import navCollapse from "./modules/navCollapse";
import userMenu from "./modules/userMenu";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    navCollapse,
    userMenu,
  },
  getters,
});

export default store;
