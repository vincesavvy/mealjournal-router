<template>
  <div>
    <template>
      <v-container>
        {{ $t("line0.1") }}
        <hr />
        <div style="margin-top: 15px">{{ $t("line0.2") }}</div>

        <!-- The date and time pickers -->
        <!-- Big screens -->
        <div v-if="$vuetify.breakpoint.mdAndUp">
          <v-row>
            <v-col cols="6">
              <v-date-picker v-model="pickerDate" width="290"></v-date-picker>
            </v-col>
            <!-- Time Picker -->
            <v-col cols="6">
              <v-time-picker
                v-model="pickerTime"
                color="green lighten-1"
                header-color="primary"
                width="278"
              ></v-time-picker>
            </v-col>
          </v-row>
        </div>

        <!-- Small screens -->
        <div v-else>
          <v-row>
            <v-col cols="6">
              <v-date-picker v-model="pickerDate" width="200"></v-date-picker>
            </v-col>
            <!-- Time Picker -->
            <v-col cols="6">
              <v-time-picker
                v-model="pickerTime"
                color="green lighten-1"
                header-color="primary"
                width="220"
                height="300"
              ></v-time-picker>
            </v-col>
          </v-row>
        </div>

        <!-- Form -->
        <v-form>
          <v-container>
            <!-- Meal Name Field -->
            <v-row>
              <v-col>
                <v-text-field
                  v-model="mealName"
                  :rules="mealNameRules"
                  required
                >
                  <template v-slot:label>{{ $t("line1") }}</template>
                </v-text-field>
              </v-col>
            </v-row>

            <!-- Place Field -->
            <v-row>
              <v-col>
                <v-text-field v-model="place">
                  <template v-slot:label>{{ $t("line104") }}</template>
                </v-text-field>
              </v-col>
            </v-row>

            <!-- With Whom Field -->
            <v-row>
              <v-col>
                <v-text-field v-model="withWhom">
                  <template v-slot:label>{{ $t("line105") }}</template>
                </v-text-field>
              </v-col>
            </v-row>

            <!-- Hunger Field -->
            <div>{{ $t("line106") }}</div>
            <v-row>
              <v-col>
                <v-container fluid>
                  <v-radio-group v-model="hunger" row>
                    <v-radio value="radio-1">
                      <template v-slot:label>{{ $t("line112") }}</template>
                    </v-radio>

                    <v-radio value="radio-2">
                      <template v-slot:label>{{ $t("line113") }}</template>
                    </v-radio>

                    <v-radio value="radio-3">
                      <template v-slot:label>{{ $t("line114") }}</template>
                    </v-radio>

                    <v-radio value="radio-4">
                      <template v-slot:label>{{ $t("line115") }}</template>
                    </v-radio>
                  </v-radio-group>
                </v-container>
              </v-col>
            </v-row>

            <!-- Mood Field -->
            <v-row>
              <v-col>
                <v-text-field v-model="mood">
                  <template v-slot:label>{{ $t("line107") }}</template>
                </v-text-field>
              </v-col>
            </v-row>

            <!-- Fullness Field -->
            <div>{{ $t("line118") }}</div>
            <v-row>
              <v-col>
                <v-container fluid>
                  <v-radio-group v-model="fullness" row>
                    <v-radio value="radio-1">
                      <template v-slot:label>{{ $t("line108") }}</template>
                    </v-radio>

                    <v-radio value="radio-2">
                      <template v-slot:label>{{ $t("line109") }}</template>
                    </v-radio>

                    <v-radio value="radio-3">
                      <template v-slot:label>{{ $t("line110") }}</template>
                    </v-radio>

                    <v-radio value="radio-4">
                      <template v-slot:label>{{ $t("line111") }}</template>
                    </v-radio>
                  </v-radio-group>
                </v-container>
              </v-col>
            </v-row>

            <!-- Protein Field -->
            <v-row>
              <v-col>
                <v-select
                  v-model="value"
                  :items="proteinOptions"
                  attach
                  multiple
                  chips
                >
                  <template v-slot:label>{{ $t("line2") }}</template>
                </v-select>
                <v-row>
                  <v-col cols="2">
                    <v-checkbox v-model="checkbox1">
                      <template v-slot:label>{{ $t("line119") }}</template>
                    </v-checkbox>
                  </v-col>
                  <v-col cols="10">
                    <v-text-field v-if="checkbox1" v-model="proteinsOther">
                      <template v-slot:label>{{ $t("line120") }}</template>
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <!-- div if other is true then text field -->

            <!-- Vegetable Field -->
            <v-row>
              <v-col>
                <v-text-field v-model="veggies">
                  <template v-slot:label>{{ $t("line3") }}</template>
                </v-text-field>
              </v-col>
            </v-row>

            <!-- Carbs Field -->
            <v-row>
              <v-col>
                <v-text-field v-model="carbs">
                  <template v-slot:label>{{ $t("line4") }}</template>
                </v-text-field>
              </v-col>
            </v-row>

            <!-- reason Field -->
            <v-row>
              <v-col>
                <v-text-field v-model="reason">
                  <template v-slot:label>{{ $t("line116") }}</template>
                </v-text-field>
              </v-col>
            </v-row>

            <!-- reason Field -->
            <v-row>
              <v-col>
                <v-text-field v-model="moodAfter">
                  <template v-slot:label>{{ $t("line117") }}</template>
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-container>
    </template>
    <!-- <template v-else>hi</template> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,

      checkbox1: false,

      proteinsOther: "",

      proteinOptions: [
        "chicken",
        "fish",
        "dairy",
        "beans",
        "pork",
        "beef",
        "tofu"
      ],

      // date picker
      pickerDate: new Date().toISOString().substr(0, 10),
      // time picker
      pickerTime: null,
      //FORM
      mealName: "",
      mealNameRules: [v => !!v || "Required / Requis"],

      place: "",

      withWhom: "",

      mood: "",

      hunger: null,

      fullness: null,

      protein: "",

      veggies: "",

      carbs: "",

      reason: "",

      moodAfter: ""
    };
  }
};
/* Use Dictionary with: {{ $t("mealName") }} */
</script>

<i18n>
{
  "en": {
    "line0.1": "Add a meal",
    "line0.2": "Time of meal:",
    "line1": "Meal's name (Example: spaghetti, sandwich, rice and chicken...)",
    "line2": "Protein sources",
    "line3": "Vegetable source (Example: carrots, tomatoes, cabbage, salad, corn, cucumber...)",
    "line4": "Carbohydrates source (Example: bread, pastas, potatoes, quinoa, oats...)",
    "line104": "Place where the meal was consumed (Example: kitchen, living room, bedroom...)",
    "line105": "With whom was the meal consumed (Example: husband, wife, mother, alone...)",
    "line106": "Level of hunger:",
    "line107": "Mood before eating (Example: stressed, grumpy, fine, excited...)",
    "line108": "Not at all",
    "line109": "Somewhat full",
    "line110": "Full",
    "line111": "I overate",
    "line112": "Not at all",
    "line113": "Somewhat hungry",
    "line114": "hungry",
    "line115": "really hungry",
    "line116": "Reason why you had this meal (Example: I was hungry, It was noon...)",
    "line117": "Mood after eating (Example: grumpy, fine, excited...)",
    "line118": "Level of fullness:",
    "line119": "Other",
    "line120": "Other source of proteins"

  },
  "fr": {
    "line0.1": "Ajouter un repas",
    "line0.2": "Date et heure du repas:",
    "line1": "Nom du repas (Exemple: spaghetti, sandwich, riz au poulet...) ",
    "line2": "Source de protéines (Exemple: poulet, poisson, produits laitiers, légumineuse, porc, boeuf, tofu...)",
    "line3": "Source de légumes (Exemple: carottes, tomates, chou, salade, maïs, concombre...)",
    "line4": "Source de féculents (Exemple: pain, pâtes, pommes de terres, quinoa, avoine...)",
    "line104": "Endroit où le repas à été mangé (Exemple: cuisine, salon, chambre...)",
    "line105": "Avec qui le repas à-t-il été mangé (Exemple: Époux, mère, seul...)",
    "line106": "Niveau de faim:",
    "line107": "Humeur avant de manger (Exemple: stressé, marabout, bien, excité...)",
    "line108": "Pas du tout",
    "line109": "Un peu rassasié",
    "line110": "Plein",
    "line111": "Trop mangé",
    "line112": "Pas du tout",
    "line113": "Un peu faim",
    "line114": "Faim normale",
    "line115": "Très faim",
    "line116": "Raison pour laquelle le repas à été mangé (Exemple: j'avais faim, il était midi...)",
    "line117": "Humeur après avoir mangé (Exemple: marabout, bien, excité...)",
    "line118": "Niveau de satiété:",
    "line119": "Autre",
    "line120": "Autre source de proteines"
  }
}
</i18n>
