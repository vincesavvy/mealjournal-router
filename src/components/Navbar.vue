<template>
  <div>
    <!-- Large screens -->
    <template v-if="$vuetify.breakpoint.mdAndUp">
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
    </template>

    <!-- *** -->
    <!-- Small screens -->
    <!-- *** -->

    <template v-else>
      <v-app-bar app color="primary">
        <div class="d-flex align-center">
          <v-avatar size="80">
            <v-img
              alt="Meal Logo"
              class="shrink mr-2"
              contain
              src="@/assets/logo-2.png"
            />
          </v-avatar>
          <v-card-title class="white--text xs">MealJournal</v-card-title>
        </div>

        <v-spacer></v-spacer>

        <!-- <v-img  src="@/assets/default-avatar.png" /> -->

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
    </template>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userLoggedIn: true,
      userHasAvatar: false,
      langs: ["en", "fr"]
    };
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
