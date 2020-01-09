<template>
  <v-container fill-height>
    <SignupCard />
  </v-container>
</template>

<script>
// @ is an alias to /src
import SignupCard from "@/components/SignupCard.vue";

export default {
  name: "signup",
  components: {
    SignupCard
  }
};
</script>
