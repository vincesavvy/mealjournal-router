<template>
  <!-- Show user's name and avatar -->

  <v-row v-if="user" class="mr-2" align="center">
    {{ user.name }}
    <v-avatar color="indigo" size="35" class="ml-2 mt-2">
      <v-img :src="user.photo" />
    </v-avatar>
  </v-row>

  <div v-else class="mr-2">
    NEED A LINE 118n
    <v-avatar color="indigo" size="35">
      <v-img src="@/assets/default-avatar.png" />
    </v-avatar>
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
  created() {
    this.$store.dispatch("getUserInfo");
  },
  computed: {
    user() {
      return this.$store.getters.profileInfo;
    }
  }
};
</script>
