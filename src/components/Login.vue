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
        In order to use the MealJournal app, you are required to log in.
      </div>
      <div style="text-align:center, color:red">
        Use a Google or Facebook account, or use your email.
      </div>
    </v-card-text>
    <hr style="margin:1em" />

    <!-- firebase login options -->
    <v-row>
      <v-col>
        <div>
          <v-row align="center" justify="center">
            <v-col cols="6" align="center">
              <v-btn small outlined color="red">
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
          <p class="caption">Or, use email login instead:</p>

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
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    }
  }
};
</script>
