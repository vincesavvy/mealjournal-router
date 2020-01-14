<template>
  <div>
    <!-- profile setup button -->
    <v-btn @click="profileDialog = true">Setup your profile</v-btn>

    <!-- Large screens -->
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-container>
        <v-row>
          <v-col cols="6">
            <AddMealForm />
          </v-col>
          <v-col cols="6">
            <PastMeals />
          </v-col>
        </v-row>
      </v-container>
    </template>

    <!-- Small screens -->
    <template v-else>
      <v-row>
        <v-col cols="12">
          <AddMealForm />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <PastMeals />
        </v-col>
      </v-row>
    </template>

    <!-- actual profile dialog -->
    <v-dialog v-model="profileDialog" max-width="344" persistent>
      <v-card class="mx-auto">
        <v-container>
          <v-card-title>Please good sir or ma'am!</v-card-title>
          <v-card-title>Complete your profile!</v-card-title>
          <p>
            In order for the app to run properly without any complication,
            please make sure to complete this tiny weeny little form.
          </p>
          <p>How would you like to be called?</p>
          <v-container>
            <v-text-field
              label="Display name"
              v-model="userDisplayName"
            ></v-text-field>
          </v-container>
          <v-container>We already know your email:</v-container>
          <v-container>
            <span>{{ $store.getters.profileInfo.email }}</span>
          </v-container>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4" @click="saveInfoDB"
              >Save</v-btn
            >
            <v-btn
              text
              color="deep-purple accent-4"
              @click="profileDialog = false"
              >CLOSE</v-btn
            >
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import PastMeals from "@/components/PastMeals.vue";
import AddMealForm from "@/components/AddMealForm.vue";
import firebase from "firebase/app";

// This is registering the components.
export default {
  data() {
    return {
      profileDialog: false,
      userDisplayName: null
    };
  },
  components: {
    PastMeals,
    AddMealForm
  },
  methods: {
    /* eslint-disable no-alert, no-console */

    /***************************
     ***** Firestore stuff *****
     **************************/
    saveInfoDB() {
      const db = firebase.firestore();
      const ref = db.collection("UserInfo").doc();
      const id = ref.id;
      db.collection("UserInfo")
        .doc(id)
        .set({
          username: this.userDisplayName,
          //Get these 2 lines from the store, because it's already fetched during
          //the "getUserInfo" in the (Vuex)store.
          email: this.$store.getters.profileInfo.email,
          uid: this.$store.getters.profileInfo.userID
        })
        .then(console.log("Document written successfully"))
        .catch(error => console.log(error));
    }
    // saveInfoDBv2() {
    //   const db = firebase.firestore();
    //   db.collection("UserInfo")
    //     .add({
    //       username: this.userDisplayName,
    //       email: this.$store.getters.profileInfo.email,
    //       uid: this.$store.getters.profileInfo.userID
    //     })
    //     .then(function(docRef) {
    //       console.log("Document written with ID: ", docRef.id);
    //     })
    //     .catch(function(error) {
    //       console.error("Error adding document: ", error);
    //     });
    // }
  },
  created() {
    this.$store.getters.profileInfo.email;
  }
};
//dictionary use: {{ $t("line3") }}
</script>

<i18n>
{
  "en": {
    "line1": "Add a meal",
    "line2": "Time of meal:",
    "line3": "Past meals",
    "line4": "List of past meals:"
  },
  "fr": {
    "line1": "Ajouter un repas",
    "line2": "Date et heure du repas:",
    "line3": "Anciens repas",
    "line4": "Liste des ancients repas:"
  }
}
</i18n>
