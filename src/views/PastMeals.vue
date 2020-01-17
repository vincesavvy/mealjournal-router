<template>
  <div>
    <LoggedInUserInfos class="d-flex justify-end" />
    <v-container>
      <v-btn @click="realtimeRead">{{ $t("line1") }}</v-btn>
      <!-- {{item.form}} -->
      <v-card v-for="item in formData" :key="item.id" class="ma-2">
        <div>
          <!-- Time -->
          <v-row>
            <v-col cols="6">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ $t("line2") }}</v-list-item-title>
                  <v-list-item-subtitle>
                    {{ item.form.pickerDate }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
            <v-col cols="6">
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ $t("line3") }}</v-list-item-title>
                  <v-list-item-subtitle>
                    {{ item.form.pickerTime }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
          <!-- Name -->
          <v-row class="ma-2">
            <v-list-item-title>{{ $t("line4") }}</v-list-item-title>
            <v-list-item-subtitle class="ml-5">
              {{ item.form.mealName }}
            </v-list-item-subtitle>
          </v-row>
          <!-- place -->

          <v-list-item-title class="ma-2">{{ $t("line5") }}</v-list-item-title>
          <v-row v-for="arrItem in item.form.place" :key="arrItem" class="ma-2">
            <li class="ml-5">{{ arrItem }}</li>
          </v-row>
          <v-row class="ma-2">
            <li v-if="item.form.placeOther != null" class="ml-5">
              {{ item.form.placeOther }}
            </li>
          </v-row>

          <!-- With whom -->

          <v-list-item-title class="ma-2">{{ $t("line6") }}</v-list-item-title>
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
            <v-list-item-title>{{ $t("line7") }}</v-list-item-title>
            <v-list-item-subtitle class="ml-5">
              {{ item.form.hunger }}
            </v-list-item-subtitle>
          </v-row>

          <!-- Mood before -->

          <v-list-item-title class="ma-2">{{ $t("line8") }}</v-list-item-title>
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
            <v-list-item-title>{{ $t("line9") }}</v-list-item-title>
            <v-list-item-subtitle class="ml-5">
              {{ item.form.fullness }}
            </v-list-item-subtitle>
          </v-row>

          <!-- Proteins -->
          <v-list-item-title class="ma-2">{{ $t("line10") }}</v-list-item-title>
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
          <v-list-item-title class="ma-2">{{ $t("line11") }}</v-list-item-title>
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
          <v-list-item-title class="ma-2">{{ $t("line12") }}</v-list-item-title>
          <v-row v-for="arrItem in item.form.carbs" :key="arrItem" class="ma-2">
            <li class="ml-5">{{ arrItem }}</li>
          </v-row>
          <v-row>
            <li v-if="item.form.carbsOther != null" class="ml-5">
              {{ item.form.carbsOther }}
            </li>
          </v-row>

          <!-- Reason -->

          <v-list-item-title class="ma-2">{{ $t("line13") }}</v-list-item-title>
          <v-row
            v-for="arrItem in item.form.reason"
            :key="arrItem"
            class="ma-2"
          >
            <li class="ml-5">{{ arrItem }}</li>
          </v-row>
          <v-row class="ma-2">
            <li v-if="item.form.reasonOther != null" class="ml-5">
              {{ item.form.reasonOther }}
            </li>
          </v-row>

          <!-- Mood After -->

          <v-list-item-title class="ma-2">{{ $t("line14") }}</v-list-item-title>
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
  </div>
</template>

<script>
import firebase from "firebase/app";
import LoggedInUserInfos from "@/components/LoggedInUserInfos.vue";

// This is registering the components.
export default {
  data() {
    return {
      userLoggedIn: true,
      formData: ""
    };
  },
  components: {
    LoggedInUserInfos
  },
  computed: {},
  mounted() {
    this.$store.dispatch("getUserInfo");
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
    "line1": "Get the past meals",
    "line2": "Date",
    "line3": "Time",
    "line4": "Name",
    "line5": "Place",
    "line6": "With whom",
    "line7": "Level of hunger",
    "line8": "Mood before",
    "line9": "Level of fullness",
    "line10": "Proteins",
    "line11": "Vegetables",
    "line12": "Carbohydrates",
    "line13": "Reason",
    "line14": "Mood after"
  },
  "fr": {
    "line1": "Accéder aux repas passés",
    "line2": "Date",
    "line3": "Heure",
    "line4": "Nom",
    "line5": "Endroit",
    "line6": "Avec qui?",
    "line7": "Niveau de faim",
    "line8": "Humeur avant de manger",
    "line9": "Niveau de satiété",
    "line10": "Protéines",
    "line11": "Légumes",
    "line12": "Féculents",
    "line13": "Raison",
    "line14": "Humeur après avoir mangé"
  }
}
</i18n>
