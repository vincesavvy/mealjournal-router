<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200px" src="@/assets/signup.png"></v-img>

    <v-card-text class="text--primary">
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text>{{ $t("message") }}</v-btn>

      <v-btn color="orange" text>Explore</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {};
</script>

<i18n>
{
    "en": {
        "message":"hi this is bacon"
    },
    "fr": {
        "message":"Salut, cest le message."
    }
}
</i18n>
