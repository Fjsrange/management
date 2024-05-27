const state = {
  menuData: [], // 导航栏是否折叠
};
const mutations = {
  getData: (state) => {
    console.log("state", state);
    // state.isCollapse = !state.isCollapse
  },
};
const actions = {
  getMenuData({ commit }) {
    commit("getData");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
