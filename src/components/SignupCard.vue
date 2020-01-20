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

      <p>{{ $t("line2") }}</p>
    </v-card-text>
    <!-- FORM -->
    <v-form v-model="valid">
      <!-- email -->
      <v-container>
        <v-text-field type="email" v-model="email" :rules="emailRules" required>
          <template v-slot:label>{{ $t("line3") }}</template>
        </v-text-field>

        <!-- password -->
        <v-text-field
          type="password"
          v-model="password"
          :rules="passwordRules"
          required
        >
          <template v-slot:label>{{ $t("line5") }}</template>
        </v-text-field>

        <!-- password confirmation
        <v-text-field
          v-model="confirmPassword"
          :rules="confirmPasswordRules"
          required
        >
          <template v-slot:label>{{ $t("line6") }}</template>
        </v-text-field>-->

        <!-- button -->
        <v-row>
          <v-card-actions>
            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
              >{{ $t("validate button") }}</v-btn
            >
          </v-card-actions>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import firebase from "firebase/app";

export default {
  data: () => ({
    valid: false,
    email: "",
    password: "",
    confirmPassword: "",
    authUser: null,

    // functions
    emailRules: [
      v => !!v || "Required / Requis",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ],
    nameRules: [v => !!v || "Required / Requis"],
    passwordRules: [v => !!v || "Required / Requis"],
    confirmPasswordRules: [v => !!v || "Required / Requis"]
  }),

  methods: {
    /* eslint-disable no-alert, no-console */
    validate() {
      console.log(
        "Validate! ",
        "email: ",
        this.email,
        " And the password: ",
        this.password
      );
      //this function, "createUserWithEmailAndPassword", will also log the user in, so maybe redirect him afterwards...
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.$router.push("/landing");
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.authUser = user;
    });
  }
};
</script>

<i18n>
{
    "en": {
        "validate button":"Submit",
        "line1":"Instead of using a Google or Facebook account, you are free to register with your email.",
        "line2":"Just fill up this form:",
        "line3": "Email",
        "line4": "Name",
        "line5": "Password",
        "line6": "Confirm password"
    },
    "fr": {
        "validate button":"Soumettre",
        "line1":"Au lieu de vous connectez à l'aide d'un compte Google ou Facebook, vous pouvez vous enregistrer avec votre courriel.",
        "line2":"Vous n'avez qu'à remplir ce formulaire:",
        "line3":"Courriel",
        "line4":"Nom",
        "line5":"Mot de passe",
        "line6":"Confirmation du mot de passe"


    }
}
</i18n>
