import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";

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
    /* eslint-disable no-alert, no-console */
    getUserInfo({ commit }) {
      firebase.auth().onAuthStateChanged(function(user) {
        //console.log(user);
        let info = {
          name: user.displayName,
          photo: user.photoURL,
          email: user.email,
          userID: user.uid
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
