<template>
  <v-app light>
    <!-- APP BAR -->
    <v-app-bar app color="primary">
      <div class="d-flex align-center">
        <v-avatar size="90">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="@/assets/logo-2.png"
          />
        </v-avatar>
        <v-card-title class="white--text display-1">MealJournal</v-card-title>
        <div style="margin-right:15px">testing:</div>
        <v-btn to="/" style="margin-right:15px">to home</v-btn>
        <v-btn to="/Landing" style="margin-right:15px">to landing</v-btn>
        <v-btn to="/signup" style="margin-right:15px">to signup</v-btn>
      </div>

      <v-spacer></v-spacer>
      <v-btn
        rounded
        outlined
        x-small
        color="white"
        class="mr-2 font-italic text-capitalize"
        @click="english"
        >En</v-btn
      >
      <v-btn
        rounded
        outlined
        x-small
        color="white"
        @click="french"
        class="font-italic text-capitalize mr-2"
        >fr</v-btn
      >
    </v-app-bar>
    <!-- ROUTER INTEGRATION -->
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return { langs: ["en", "fr"] };
  },
  methods: {
    english() {
      this.$i18n.locale = "en";
    },
    french() {
      this.$i18n.locale = "fr";
    }
  }
};
</script>
