<template>
  <!-- card -->
  <v-card class="mx-auto" max-width="450">
    <v-img
      class="white--text align-end"
      height="200px"
      contain
      src="@/assets/login-image.png"
    ></v-img>

    <v-card-text class="text--primary">
      <div style="text-align:center">{{ $t("line1") }}</div>
      <br />
      <div style="text-align:center">{{ $t("line2") }}</div>
      <br />
    </v-card-text>
    <hr style="margin:1em" />

    <!-- firebase login options -->
    <v-row>
      <v-col>
        <div>
          <v-row align="center" justify="center">
            <v-col cols="6" align="center">
              <v-btn small outlined color="red" @click="google()">
                <v-icon small left>mdi-google-glass</v-icon>Google
              </v-btn>
            </v-col>

            <v-col cols="6" align="center">
              <v-btn small outlined color="indigo" @click="facebook()">
                <v-icon small left>mdi-facebook</v-icon>Facebook
              </v-btn>
            </v-col>
          </v-row>
        </div>

        <!-- Email login -->
        <v-container>
          <p class="caption">{{ $t("line3") }}</p>

          <v-row align="center" justify="center">
            <v-form ref="form" v-model="valid" :lazy-validation="lazy">
              <v-text-field v-model="email" :rules="emailRules" required>
                <template v-slot:label>{{ $t("line4") }}</template>
              </v-text-field>

              <v-text-field
                v-model="password"
                :rules="passwordRules"
                required
                type="password"
              >
                <template v-slot:label>{{ $t("line5") }}</template>
              </v-text-field>

              <div align="center">
                <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="validate"
                  >Validate</v-btn
                >
              </div>
            </v-form>
          </v-row>
          <br />
          <br />
          <!-- Signup button -->
          <v-row align="center" justify="center">
            <v-col></v-col>
            <v-toolbar flat dense>
              <v-toolbar-items>
                <v-btn to="/signup" text x-small rounded color="primary">{{
                  $t("line6")
                }}</v-btn>
                <!-- line -->
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-btn to="/forgot" text x-small color="primary">
                  {{ $t("line7") }}
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import firebase from "firebase/app";

export default {
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      v => !!v || "Required / Requis",
      v => /.+@.+\..+/.test(v) || "Not valid / Non valide"
    ],
    password: "",
    passwordRules: [v => !!v || "Required / Requis"],
    select: null,
    lazy: false
  }),

  methods: {
    /* eslint-disable no-alert, no-console */
    google() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$router.push("/landing");
        })
        .catch(e => {
          console.log(e);
        });
    },

    facebook() {
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$router.push("/landing");
        })
        .catch(e => {
          console.log(e);
        });
    },

    validate() {
      console.log("email: ", this.email, "pwd: ", this.password);
      firebase.auth().signInWithEmailAndPassword(this.email, this.password);
    }
  }
};
</script>

/********************** ****** DICTIONARY****** **********************/
<i18n>
{
  "en": {
    "line1": "In order to use the MealJournal app, you are required to log in.",
    "line2": "Use a Google or Facebook account, or use your email.",
    "line3": "email login:",
    "line4": "Email",
    "line5": "Password",
    "line6": "new user sign-up",
    "line7": "Forgot your password"
  },
  "fr": {
    "line1": "Afin d'utiliser l'application MealJournal, vous devrez vous connecter à votre compte.",
    "line2": "Utilisez un compte Google ou Facebook, sinon connectez-vous avec votre courriel.",
    "line3": "Connection à l'aide du courriel:",
    "line4": "Courriel:",
    "line5": "Mot de passe",
    "line6": "nouvel utilisateur",
    "line7": "oublié votre mot de passe"



  }
}
</i18n>
