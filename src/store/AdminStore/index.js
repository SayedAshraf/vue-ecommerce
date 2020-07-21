export default {
  state: {
    navVisibility: true,
  },
  mutations: {
    UpdateAdminNavVisibility(state, visibility) {
      state.navVisibility = visibility;
    },
  },
};
