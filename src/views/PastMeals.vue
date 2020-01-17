<template>
  <div>
    <v-row class="d-flex justify-space-between">
      <v-col>
        <v-btn to="/landing" class="mt-5">add meal</v-btn>
      </v-col>
      <v-col>
        <LoggedInUserInfos class="d-flex justify-end" />
      </v-col>
    </v-row>
    <v-container>
      <v-row align="center" justify="center">
        <div>
          <v-btn @click="realtimeRead">{{ $t("line1") }}</v-btn>
        </div>
      </v-row>

      <!-- expansion panel focusable -->
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
          <v-expansion-panels focusable>
            <v-expansion-panel v-for="item in formData" :key="item.id">
              <v-expansion-panel-header>
                {{ item.form.mealName }} on {{ item.form.pickerDate }} at
                {{ item.form.pickerTime }}
              </v-expansion-panel-header>
              <!-- Now, infos -->
              <v-expansion-panel-content>
                <!-- place and withWhom -->
                <v-row>
                  <!-- place -->
                  <v-col cols="6">
                    <v-list-item-title>{{ $t("line5") }}</v-list-item-title>
                    <v-list-item-subtitle>
                      <v-row
                        v-for="arrItem in item.form.place"
                        :key="arrItem"
                        class="ma-2"
                      >
                        <li class="ml-5">{{ arrItem }}</li>
                      </v-row>
                      <v-row class="ma-2">
                        <li v-if="item.form.placeOther != null" class="ml-5">
                          {{ item.form.placeOther }}
                        </li>
                      </v-row>
                    </v-list-item-subtitle>
                  </v-col>
                  <!-- with whom -->
                  <v-col cols="6">
                    <v-list-item-title>{{ $t("line6") }}</v-list-item-title>
                    <v-list-item-subtitle>
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
                    </v-list-item-subtitle>
                  </v-col>
                </v-row>
                <!-- reason and mood before -->
                <v-row>
                  <!-- reason -->
                  <v-col cols="6">
                    <v-list-item-title>{{ $t("line13") }}</v-list-item-title>
                    <v-list-item-subtitle>
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
                    </v-list-item-subtitle>
                  </v-col>
                  <!-- mood before -->
                  <v-col cols="6">
                    <v-list-item-title>{{ $t("line8") }}</v-list-item-title>
                    <v-list-item-subtitle>
                      <v-row
                        v-for="arrItem in item.form.mood"
                        :key="arrItem"
                        class="ma-2"
                      >
                        <li class="ml-5">{{ arrItem }}</li>
                      </v-row>
                      <v-row class="ma-2">
                        <li
                          v-if="item.form.moodBeforeOther != null"
                          class="ml-5"
                        >
                          {{ item.form.moodBeforeOther }}
                        </li>
                      </v-row>
                    </v-list-item-subtitle>
                  </v-col>
                </v-row>
                <!-- hunger and prots -->
                <v-row>
                  <!-- hunger -->
                  <v-col cols="6">
                    <v-list-item-title>{{ $t("line7") }}</v-list-item-title>
                    <v-list-item-subtitle>
                      <v-row>
                        <li class="ml-5">{{ item.form.hunger }}</li>
                      </v-row>
                    </v-list-item-subtitle>
                  </v-col>
                  <!-- prot -->
                  <v-col cols="6">
                    <v-list-item-title>{{ $t("line10") }}</v-list-item-title>
                    <v-list-item-subtitle>
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
                    </v-list-item-subtitle>
                  </v-col>
                </v-row>
                <!-- vegg and carbs -->
                <v-row>
                  <!-- vegg -->
                  <v-col cols="6">
                    <v-list-item-title>{{ $t("line11") }}</v-list-item-title>
                    <v-list-item-subtitle>
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
                    </v-list-item-subtitle>
                  </v-col>
                  <!-- carbs -->
                  <v-col cols="6">
                    <v-list-item-title>{{ $t("line12") }}</v-list-item-title>
                    <v-list-item-subtitle>
                      <v-row
                        v-for="arrItem in item.form.carbs"
                        :key="arrItem"
                        class="ma-2"
                      >
                        <li class="ml-5">{{ arrItem }}</li>
                      </v-row>
                      <v-row class="ma-2">
                        <li v-if="item.form.carbsOther != null" class="ml-5">
                          {{ item.form.carbsOther }}
                        </li>
                      </v-row>
                    </v-list-item-subtitle>
                  </v-col>
                </v-row>
                <!-- fullness and mood after -->
                <v-row>
                  <!-- fullness -->
                  <v-col cols="6">
                    <v-list-item-title>{{ $t("line9") }}</v-list-item-title>
                    <v-list-item-subtitle>
                      <v-row>
                        <li class="ml-5">{{ item.form.fullness }}</li>
                      </v-row>
                    </v-list-item-subtitle>
                  </v-col>
                  <!-- mood aftfer -->
                  <v-col cols="6">
                    <v-list-item-title>{{ $t("line14") }}</v-list-item-title>
                    <v-list-item-subtitle>
                      <v-row
                        v-for="arrItem in item.form.moodAfter"
                        :key="arrItem"
                        class="ma-2"
                      >
                        <li class="ml-5">{{ arrItem }}</li>
                      </v-row>
                      <v-row class="ma-2">
                        <li
                          v-if="item.form.moodAfterOther != null"
                          class="ml-5"
                        >
                          {{ item.form.moodAfterOther }}
                        </li>
                      </v-row>
                    </v-list-item-subtitle>
                  </v-col>
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-col cols="2"></v-col>
      </v-row>
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
