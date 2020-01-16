<template>
  <div>
    <LoggedInUserInfos class="d-flex justify-end" />

    <!-- Large screens -->
    <template v-if="$vuetify.breakpoint.mdAndUp">
      <v-container>
        <v-row>
          <v-col cols="7">
            <AddMealForm />
          </v-col>
          <v-col cols="5">
            <!--  -->
            <!-- PastMeals -->
            <!--  -->
            <v-btn @click="realtimeRead">Read the data</v-btn>
            <v-btn @click="getEmailAsync">Setup your profile</v-btn>

            <v-container>
              <!-- {{item.form}} -->
              <v-card v-for="item in formData" :key="item.id" class="ma-2">
                <div>
                  <!-- Time -->
                  <v-row>
                    <v-col cols="6">
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>DATE</v-list-item-title>
                          <v-list-item-subtitle>
                            {{ item.form.pickerDate }}
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                    <v-col cols="6">
                      <v-list-item>
                        <v-list-item-content>
                          <v-list-item-title>Time</v-list-item-title>
                          <v-list-item-subtitle>
                            {{ item.form.pickerTime }}
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-col>
                  </v-row>
                  <!-- Name -->
                  <v-row class="ma-2">
                    <v-list-item-title>Name</v-list-item-title>
                    <v-list-item-subtitle class="ml-5">
                      {{ item.form.mealName }}
                    </v-list-item-subtitle>
                  </v-row>
                  <!-- place -->
                  <v-row class="ma-2">
                    <v-list-item-title>Place</v-list-item-title>
                    <v-list-item-subtitle class="ml-5">
                      {{ item.form.place }}
                    </v-list-item-subtitle>
                  </v-row>
                  <!-- With whom -->
                  <v-row class="ma-2">
                    <v-list-item-title>With whom</v-list-item-title>
                    <v-list-item-subtitle class="ml-5">
                      {{ item.form.withWhom }}
                    </v-list-item-subtitle>
                  </v-row>
                  <!-- Level of hunger -->
                  <v-row class="ma-2">
                    <v-list-item-title>Level of hunger</v-list-item-title>
                    <v-list-item-subtitle class="ml-5">
                      {{ item.form.hunger }}
                    </v-list-item-subtitle>
                  </v-row>
                  <!-- Mood before -->
                  <v-row class="ma-2">
                    <v-list-item-title>Mood before eating</v-list-item-title>
                    <v-list-item-subtitle class="ml-5">
                      {{ item.form.mood }}
                    </v-list-item-subtitle>
                  </v-row>
                  <!-- Level of fullness -->
                  <v-row class="ma-2">
                    <v-list-item-title>Level of fullness</v-list-item-title>
                    <v-list-item-subtitle class="ml-5">
                      {{ item.form.fullness }}
                    </v-list-item-subtitle>
                  </v-row>
                  <!-- Proteins -->
                  <v-list-item-title class="ma-2">Proteins</v-list-item-title>
                  <v-row
                    v-for="arrItem in item.form.protein"
                    :key="arrItem"
                    class="ma-2"
                  >
                    <li class="ml-5">{{ arrItem }}</li>
                  </v-row>
                  <v-row class="ma-2">
                    <li v-if="item.form.proteinOther != null" class="ml-5">
                      {{ item.form.proteinOther }}
                    </li>
                  </v-row>
                  <!-- Veggies -->
                  <v-list-item-title class="ma-2">Vegetables</v-list-item-title>
                  <v-row
                    v-for="arrItem in item.form.veggies"
                    :key="arrItem"
                    class="ma-2"
                  >
                    <li class="ml-5">{{ arrItem }}</li>
                  </v-row>
                  <v-row class="ma-2">
                    <li v-if="item.form.veggiesOther != null" class="ml-5">
                      {{ item.form.veggiesOther }}
                    </li>
                  </v-row>
                  <!-- Carbs -->
                  <v-list-item-title class="ma-2"
                    >Carbohydrates</v-list-item-title
                  >
                  <v-row
                    v-for="arrItem in item.form.carbs"
                    :key="arrItem"
                    class="ma-2"
                  >
                    <li class="ml-5">{{ arrItem }}</li>
                  </v-row>
                  <v-row>
                    <li v-if="item.form.carbsOther != null" class="ml-5">
                      {{ item.form.carbsOther }}
                    </li>
                  </v-row>
                  <!-- Reason -->
                  <v-row class="ma-2">
                    <v-list-item-title>Reason</v-list-item-title>
                    <v-list-item-subtitle class="ml-5">
                      {{ item.form.reason }}
                    </v-list-item-subtitle>
                  </v-row>
                  <!-- Mood After -->
                  <v-row class="ma-2 mb-5">
                    <v-list-item-title>Mood after eating</v-list-item-title>
                    <v-list-item-subtitle class="ml-5 mb-5">
                      {{ item.form.moodAfter }}
                    </v-list-item-subtitle>
                  </v-row>
                </div>
              </v-card>
            </v-container>
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

    <!-- profile modal -->
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
            <span>{{ email }}</span>
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
    PastMeals,
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
