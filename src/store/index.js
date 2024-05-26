import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import navCollapse from './modules/navCollapse'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    navCollapse
  },
  getters
})

export default store
