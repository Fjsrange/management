const state = {
  isCollapse: false // 导航栏是否折叠
}
const mutations = {
  setCollapse: (state) => {
    console.log('state', state)
    state.isCollapse = !state.isCollapse
  }
}
const actions = {
  changeIsCollapse ({ commit }) {
    commit('setCollapse')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
