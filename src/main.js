import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
// import firebase from "./plugins/firebase"
import i18n from "./i18n";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import store from "./store";

const firebaseConfig = {
  apiKey: "AIzaSyDwjQGSXV21Xgg9tPLkSuHkzhk8X7pz4lE",
  authDomain: "mealjournal-ea541.firebaseapp.com",
  databaseURL: "https://mealjournal-ea541.firebaseio.com",
  projectId: "mealjournal-ea541",
  storageBucket: "mealjournal-ea541.appspot.com",
  messagingSenderId: "582295251006",
  appId: "1:582295251006:web:d8bf215584d38e2ff6c96f",
  measurementId: "G-1N20KNJQG1"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,

  created() {
    this.$vuetify.theme.light = true;
  },

  i18n,
  store,
  render: h => h(App)
}).$mount("#app");
