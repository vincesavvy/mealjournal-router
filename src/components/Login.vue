<template>
  <!-- card -->
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      contain
      src="@/assets/login-image.png"
    ></v-img>

    <v-card-text class="text--primary">
      <div style="text-align:center">
        <!-- See i18n in the bottom for the list of dictionary lines. -->
        {{ $t("line1") }}
      </div>
      <br />
      <div style="text-align:center">
        {{ $t("line2") }}
      </div>
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
              <v-btn small outlined color="indigo">
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
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                :rules="passwordRules"
                label="Password"
                required
                type="password"
              ></v-text-field>

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
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    password: "",
    passwordRules: [v => !!v || "Password is required"],
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

    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
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
    "line3": "email login:"
  },
  "fr": {
    "line1": "Afin d'utiliser l'application MealJournal, vous devrez vous connecter a votre compte.",
    "line2": "Utilisez un compte Google ou Facebook, ou connectez-vous avec votre couuriel.",
    "line3": "Connection a l'aide du courriel:"

  }
}
</i18n>
