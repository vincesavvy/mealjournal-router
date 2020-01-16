<template>
  <!-- Show user's name and avatar -->
  <div>
    <div v-if="user">
      <v-row class="mr-2" align="center" justify="end">
        <p class="mt-7">{{ user.name }}</p>
        <v-avatar color="indigo" size="35" class="ml-2 mt-2">
          <v-img :src="user.photo" />
        </v-avatar>
      </v-row>
    </div>

    <v-btn @click="logOut" class="ml-3 mt-4" text icon color="red" large>
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