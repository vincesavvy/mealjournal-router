import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    errorMessage: null
  },
  mutations: {
    setUserInfo(state, payload) {
      state.user = payload;
    },
    userInfoNull(state) {
      state.user = null;
    },
    setErrorMessage(state, payload) {
      state.errorMessage = payload;
    }
  },
  actions: {
    getUserInfo({ commit }) {
      firebase.auth().onAuthStateChanged(function(user) {
        let info = {
          name: user.displayName,
          photo: user.photoURL,
          email: user.email,
          userID: user.uid
        };
        commit("setUserInfo", info);
      });
    },

    signOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(
          // We need to use a browser property "window" for the redirect, because "$router" is not available in the store.
          (window.location.href = "/")
        )
        .catch(function(error) {
          throw error;
        });
      commit("userInfoNull");
    },

    validate({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          this.$router.push("/landing");
        })
        .catch(function(err) {
          commit("setErrorMessage", err.message);
        });
    }
  },
  getters: {
    profileInfo(state) {
      return state.user;
    },
    getError(state) {
      return state.errorMessage;
    }
  },
  modules: {}
});
