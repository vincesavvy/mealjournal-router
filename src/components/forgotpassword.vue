<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      src="@/assets/signup.png"
    ></v-img>

    <v-card-text class="text--primary">
      <p style="text-align:center">{{ $t("line1") }}</p>

      <hr style="margin:1em" />
    </v-card-text>
    <!-- FORM -->
    <v-form>
      <v-row>
        <v-col class="ml-3">
          <p>{{ $t("line2") }}</p>
        </v-col>
      </v-row>
      <v-container>
        <v-text-field type="email" v-model="email" :rules="emailRules" required>
          <template v-slot:label>{{ $t("line3") }}</template>
        </v-text-field>
      </v-container>
      <div align="center">
        <v-btn color="success" class="mb-5" @click="sendRecoveryEmail">{{
          $t("line4")
        }}</v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script>
import firebase from "firebase/app";

export default {
  data: () => ({
    email: null,
    // rules
    emailRules: [
      v => !!v || "Required / Requis",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
  }),

  methods: {
    /* eslint-disable no-alert, no-console */
    sendRecoveryEmail() {
      var auth = firebase.auth();

      auth
        .sendPasswordResetEmail(this.email)
        .catch(function(error) {
          throw error;
        })
        .then((window.location.href = "/"));
    }
  }
};
</script>

<i18n>
{
    "en": {
        "validate button":"Submit",
        "line1":"If you have forgotten your password, enter your email address below and we will send you a link to reset it.",
        "line2":"Your email:",
        "line3":"Email:",
        "line4":"Send"
    },
    "fr": {
        "validate button":"Soumettre",
        "line1":"Si vous avez oublié votre mot de passe, saisissez votre courriel et nous vous enverrons un lien afin de réinitialiser.",
        "line2":"Votre courriel:",
        "line3":"Courriel:",
        "line4":"Envoyer"
    }
}
</i18n>
