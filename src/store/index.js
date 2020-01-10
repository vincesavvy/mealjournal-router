import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUserInfo(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    getUserInfo({ commit }) {
      firebase.auth().onAuthStateChanged(function(user) {
        // console.log(user);
        let info = {
          name: user.displayName,
          photo: user.photoURL,
          email: user.email
        };
        commit("setUserInfo", info);
      });
    }
  },
  getters: {
    profileInfo(state) {
      return state.user;
    }
  },
  modules: {}
});
