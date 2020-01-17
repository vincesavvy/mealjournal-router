<template>
  <v-app light>
    <!-- APP BAR -->
    <Navbar />
    <!-- ROUTER INTEGRATION -->
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar
  },
  name: "App",
  data() {
    return {
      userLoggedIn: true,
      userHasAvatar: false,
      langs: ["en", "fr"]
    };
  },
  created() {
    const locale = localStorage.getItem("locale");

    if (locale) {
      this.$i18n.locale = locale;
    }
  },

  methods: {
    english() {
      this.$i18n.locale = "en";
      localStorage.setItem("locale", "en");
    },
    french() {
      this.$i18n.locale = "fr";
      localStorage.setItem("locale", "fr");
    }
  }
};
</script>
