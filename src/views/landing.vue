<template>
  <div>
    <LoggedInUserInfos class="d-flex justify-end" />

    <!-- Large screens -->
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-container>
        <v-row>
          <v-col cols="2"></v-col>
          <v-col cols="8">
            <div align="center" justify="center">
              <v-btn @click="getEmailAsync" color="warning">{{
                $t("line5")
              }}</v-btn>
            </div>
            <AddMealForm />
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
    </template>

    <!-- profile modal -->
    <v-dialog v-model="profileDialog" max-width="344" persistent>
      <v-card class="mx-auto">
        <v-container>
          <v-card-title>{{ $t("line6") }} </v-card-title>
          <p>
            {{ $t("line7") }}
          </p>
          <p>{{ $t("line8") }}</p>
          <v-container>
            <v-text-field
              label="Display name"
              v-model="userDisplayName"
            ></v-text-field>
          </v-container>
          <v-container>{{ $t("line9") }}</v-container>
          <v-container>
            <span>{{ email }}</span>
          </v-container>

          <v-card-actions>
            <v-btn text color="deep-purple accent-4" @click="saveInfoDB">{{
              $t("line10")
            }}</v-btn>
            <v-btn
              text
              color="deep-purple accent-4"
              @click="profileDialog = false"
              >{{ $t("line11") }}</v-btn
            >
          </v-card-actions>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import AddMealForm from "@/components/AddMealForm.vue";
import LoggedInUserInfos from "@/components/LoggedInUserInfos.vue";
import firebase from "firebase/app";

// This is registering the components.
export default {
  data() {
    return {
      profileDialog: false,
      userDisplayName: null,
      email: "",
      formData: ""
    };
  },
  components: {
    AddMealForm,
    LoggedInUserInfos
  },
  computed: {
    userInfo() {
      return this.$store.getters.profileInfo;
    }
  },
  mounted() {
    // this.readInfoDB();
  },
  methods: {
    getEmailAsync() {
      this.profileDialog = true;
      this.email = this.userInfo.email;
    },

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
    },

    // readInfoDB() {
    //   const db = firebase.firestore();
    //   const ref = db
    //     .collection("JournalEntries")
    //     .where("uid", "==", this.$store.getters.profileInfo.userID);
    //   let info = [];
    //   ref
    //     .get()
    //     .then(
    //       // get the data object and iterate to extract information
    //       queryArray => {
    //         queryArray.forEach(doc => {
    //           console.log(doc.data().form);
    //           info.push(doc.data());
    //         });
    //       }
    //     )
    //     .catch(error => console.log(error));
    //   this.formData = info;
    //   console.log(this.formData);
    // },

    realtimeRead() {
      let info = [];
      const db = firebase.firestore();
      const ref = db
        .collection("JournalEntries")
        .where("uid", "==", this.$store.getters.profileInfo.userID);

      ref.onSnapshot(snapArray => {
        snapArray.forEach(doc => {
          console.log(doc.data());
          info.push(doc.data());
        });
      });
      this.formData = info;
      console.log("Realtime, baby!");
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
    this.$store.dispatch("getUserInfo");
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
    "line4": "List of past meals:",
    "line5": "Setup your profile",
    "line6": "Setup your profile!",
    "line7": "In order for the app to run properly without any complication, please make sure to complete this tiny weeny little form.",
    "line8": "Enter a username:",
    "line9": "We already have your email:",
    "line10": "save",
    "line11": "close"
  },

  "fr": {
    "line1": "Ajouter un repas",
    "line2": "Date et heure du repas:",
    "line3": "Anciens repas",
    "line4": "Liste des ancients repas:",
    "line5": "Configurer votre profil",
    "line6": "Configurez votre profil!",  
    "line7": "Pour que l'application fonctionne correctement, sans aucune complication, veuillez vous assurer de remplir ce petit formulaire minuscule.",
    "line8": "Entrez un nom d'utilisateur",
    "line9": "Nous avons déja votre courriel:",
    "line10": "Sauvegarder",
    "line11": "Fermer"
  }

}
</i18n>
