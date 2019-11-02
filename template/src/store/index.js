import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    token: JSON.parse(sessionStorage.getItem("token")) || null,
  },
  mutations: {
    token(state, token) {
      sessionStorage.setItem('token', JSON.stringify(token));
      state.token = token;
    },
  },
  actions: {}
});
export default store;
