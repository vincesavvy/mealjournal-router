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
        <v-card-title class="white--text display-1">Meal Journal</v-card-title>
        <div style="margin-right:15px">testing:</div>
        <v-btn to="/Landing" style="margin-right:15px">to landing</v-btn>
        <v-btn to="/" style="margin-right:15px">to home</v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn rounded outlined>Login</v-btn>
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

  data: () => ({
    //
  })
};
</script>
