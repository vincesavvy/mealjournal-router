<template>
  <v-container fill-height>
    <v-row>
      <Login />
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";

export default {
  name: "home",
  components: {
    Login
  }
};
</script>
