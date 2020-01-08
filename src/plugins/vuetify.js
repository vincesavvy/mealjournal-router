import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#2c7873",
        secondary: "#52de97",
        info: "#c0ffb3",
        accent: "#ffba5a"
      }
    }
  }
});
