<template>
  <v-container>
    <v-btn @click="realtimeRead">Read the data</v-btn>
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

        <v-list-item-title class="ma-2">Place</v-list-item-title>
        <v-row v-for="arrItem in item.form.place" :key="arrItem" class="ma-2">
          <li class="ml-5">{{ arrItem }}</li>
        </v-row>
        <v-row class="ma-2">
          <li v-if="item.form.placeOther != null" class="ml-5">
            {{ item.form.placeOther }}
          </li>
        </v-row>

        <!-- With whom -->

        <v-list-item-title class="ma-2">With whom</v-list-item-title>
        <v-row
          v-for="arrItem in item.form.withWhom"
          :key="arrItem"
          class="ma-2"
        >
          <li class="ml-5">{{ arrItem }}</li>
        </v-row>
        <v-row class="ma-2">
          <li v-if="item.form.withWhomOther != null" class="ml-5">
            {{ item.form.withWhomOther }}
          </li>
        </v-row>

        <!-- Level of hunger -->
        <v-row class="ma-2">
          <v-list-item-title>Level of hunger</v-list-item-title>
          <v-list-item-subtitle class="ml-5">
            {{ item.form.hunger }}
          </v-list-item-subtitle>
        </v-row>

        <!-- Mood before -->

        <v-list-item-title class="ma-2">Mood before</v-list-item-title>
        <v-row v-for="arrItem in item.form.mood" :key="arrItem" class="ma-2">
          <li class="ml-5">{{ arrItem }}</li>
        </v-row>
        <v-row class="ma-2">
          <li v-if="item.form.moodBeforeOther != null" class="ml-5">
            {{ item.form.moodBeforeOther }}
          </li>
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
        <v-row v-for="arrItem in item.form.protein" :key="arrItem" class="ma-2">
          <li class="ml-5">{{ arrItem }}</li>
        </v-row>
        <v-row class="ma-2">
          <li v-if="item.form.proteinOther != null" class="ml-5">
            {{ item.form.proteinOther }}
          </li>
        </v-row>

        <!-- Veggies -->
        <v-list-item-title class="ma-2">Vegetables</v-list-item-title>
        <v-row v-for="arrItem in item.form.veggies" :key="arrItem" class="ma-2">
          <li class="ml-5">{{ arrItem }}</li>
        </v-row>
        <v-row class="ma-2">
          <li v-if="item.form.veggiesOther != null" class="ml-5">
            {{ item.form.veggiesOther }}
          </li>
        </v-row>

        <!-- Carbs -->
        <v-list-item-title class="ma-2">Carbohydrates</v-list-item-title>
        <v-row v-for="arrItem in item.form.carbs" :key="arrItem" class="ma-2">
          <li class="ml-5">{{ arrItem }}</li>
        </v-row>
        <v-row>
          <li v-if="item.form.carbsOther != null" class="ml-5">
            {{ item.form.carbsOther }}
          </li>
        </v-row>

        <!-- Reason -->

        <v-list-item-title class="ma-2">Reason</v-list-item-title>
        <v-row v-for="arrItem in item.form.reason" :key="arrItem" class="ma-2">
          <li class="ml-5">{{ arrItem }}</li>
        </v-row>
        <v-row class="ma-2">
          <li v-if="item.form.reasonOther != null" class="ml-5">
            {{ item.form.reasonOther }}
          </li>
        </v-row>

        <!-- Mood After -->

        <v-list-item-title class="ma-2">Mood after</v-list-item-title>
        <v-row
          v-for="arrItem in item.form.moodAfter"
          :key="arrItem"
          class="ma-2"
        >
          <li class="ml-5">{{ arrItem }}</li>
        </v-row>
        <v-row class="ma-2">
          <li v-if="item.form.moodAfterOther != null" class="ml-5">
            {{ item.form.moodAfterOther }}
          </li>
        </v-row>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import firebase from "firebase/app";

// This is registering the components.
export default {
  data() {
    return {
      formData: ""
    };
  },
  components: {},
  computed: {},
  mounted() {
    // this.readInfoDB();
  },
  methods: {
    /* eslint-disable no-alert, no-console */

    /***************************
     ***** Firestore stuff *****
     **************************/

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
  },
  created() {}
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
