<template>
  <!-- Show user's name and avatar -->
  <div>
    <div v-if="user">
      <v-row class="mr-2" align="center" justify="end">
        <v-col>
          <p class="mt-7 font-weight-bold subtitle-1">{{ $t("line1") }}</p>
        </v-col>
        <v-col>
          <p class="mt-7">{{ user.email }}</p>
        </v-col>

        <!-- <v-avatar color="indigo" size="35" class="ml-2 mt-2">
        <v-img :src="user.photo" />-->
        <!-- </v-avatar> -->
      </v-row>
    </div>

    <v-btn @click="logOut" class="ml-3 mt-8" text icon color="red" large>
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userLoggedIn: true,
      userHasAvatar: false
    };
  },
  mounted() {
    this.$store.dispatch("getUserInfo");
  },
  methods: {
    /* eslint-disable no-alert, no-console */
    logOut() {
      this.$store.dispatch("signOut");
    }
  },
  computed: {
    user() {
      return this.$store.getters.profileInfo;
    }
  }
};
</script>

<i18n>
{
  "en": {
    "line1": "User: "
  },
  "fr": {
    "line1": "Utilisateur: "
  }
}
</i18n>
