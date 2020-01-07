<template>
  <v-app>
    <v-app-bar app color="#015350" dark>
      <div class="d-flex align-center">
        <v-avatar size="90">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="@/assets/logo-2.png"
          />
        </v-avatar>
        <v-btn to="/landing">Route testing bacon bacon</v-btn>
        <v-card-title class="display-1">Meal Journal</v-card-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn rounded outlined>Login</v-btn>
    </v-app-bar>

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
