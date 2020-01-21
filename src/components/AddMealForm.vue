<template>
  <div>
    <template>
      <v-container>
        {{ $t("line0.1") }}
        <!-- Show form -->
        <hr />
        <div style="margin-top: 15px">{{ $t("line0.2") }}</div>

        <!-- The date and time pickers -->
        <!-- Big screens -->
        <div v-if="$vuetify.breakpoint.mdAndUp">
          <v-row>
            <v-col cols="6">
              <v-date-picker
                v-model="form.pickerDate"
                width="290"
              ></v-date-picker>
            </v-col>
            <!-- Time Picker -->
            <v-col cols="6">
              <v-time-picker
                v-model="form.pickerTime"
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
              <v-date-picker
                v-model="form.pickerDate"
                width="200"
              ></v-date-picker>
            </v-col>
            <!-- Time Picker -->
            <v-col cols="6">
              <v-time-picker
                v-model="form.pickerTime"
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
                  v-model="form.mealName"
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
                <v-select
                  v-model="form.place"
                  :items="placeOptions"
                  attach
                  multiple
                  chips
                >
                  <template v-slot:label>{{ $t("line104") }}</template>
                </v-select>
                <v-row>
                  <v-col cols="2">
                    <v-checkbox v-model="checkboxPlace">
                      <template v-slot:label>{{ $t("line119") }}</template>
                    </v-checkbox>
                  </v-col>
                  <v-col cols="10">
                    <v-text-field
                      v-if="checkboxPlace"
                      v-model="form.placeOther"
                    >
                      <template v-slot:label>{{ $t("line123") }}</template>
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <!-- With Whom Field -->
            <v-row>
              <v-col>
                <v-select
                  v-model="form.withWhom"
                  :items="companyOptions"
                  attach
                  multiple
                  chips
                >
                  <template v-slot:label>{{ $t("line105") }}</template>
                </v-select>
                <v-row>
                  <v-col cols="2">
                    <v-checkbox v-model="checkboxCompany">
                      <template v-slot:label>{{ $t("line119") }}</template>
                    </v-checkbox>
                  </v-col>
                  <v-col cols="10">
                    <v-text-field
                      v-if="checkboxCompany"
                      v-model="form.withWhomOther"
                    >
                      <template v-slot:label>{{ $t("line124") }}</template>
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <!-- Hunger Field -->
            <div>{{ $t("line106") }}</div>
            <v-row>
              <v-col>
                <v-container fluid>
                  <v-radio-group v-model="form.hunger" row>
                    <v-radio value="Not at all / Pas du tout">
                      <template v-slot:label>{{ $t("line112") }}</template>
                    </v-radio>

                    <v-radio value="Somewhat hungry / Un peu faim">
                      <template v-slot:label>{{ $t("line113") }}</template>
                    </v-radio>

                    <v-radio value="Hungry / Faim normale">
                      <template v-slot:label>{{ $t("line114") }}</template>
                    </v-radio>

                    <v-radio value="Really hungry / Très faim">
                      <template v-slot:label>{{ $t("line115") }}</template>
                    </v-radio>
                  </v-radio-group>
                </v-container>
              </v-col>
            </v-row>

            <!-- Mood before Field -->
            <v-row>
              <v-col>
                <v-select
                  v-model="form.mood"
                  :items="moodBeforeOptions"
                  attach
                  multiple
                  chips
                >
                  <template v-slot:label>{{ $t("line107") }}</template>
                </v-select>
                <v-row>
                  <v-col cols="2">
                    <v-checkbox v-model="checkboxMoodBefore">
                      <template v-slot:label>{{ $t("line119") }}</template>
                    </v-checkbox>
                  </v-col>
                  <v-col cols="10">
                    <v-text-field
                      v-if="checkboxMoodBefore"
                      v-model="form.moodBeforeOther"
                    >
                      <template v-slot:label>{{ $t("line125") }}</template>
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <!-- Fullness Field -->
            <div>{{ $t("line118") }}</div>
            <v-row>
              <v-col>
                <v-container fluid>
                  <v-radio-group v-model="form.fullness" row>
                    <v-radio value="Not at all / Pas du tout">
                      <template v-slot:label>{{ $t("line108") }}</template>
                    </v-radio>

                    <v-radio value="Somewhat full / Un peu rassasié">
                      <template v-slot:label>{{ $t("line109") }}</template>
                    </v-radio>

                    <v-radio value="Full / Plein">
                      <template v-slot:label>{{ $t("line110") }}</template>
                    </v-radio>

                    <v-radio value="I overate / Trop mangé">
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
                  v-model="form.protein"
                  :items="proteinOptions"
                  attach
                  multiple
                  chips
                >
                  <template v-slot:label>{{ $t("line2") }}</template>
                </v-select>
                <v-row>
                  <v-col cols="2">
                    <v-checkbox v-model="checkboxProtein">
                      <template v-slot:label>{{ $t("line119") }}</template>
                    </v-checkbox>
                  </v-col>
                  <v-col cols="10">
                    <v-text-field
                      v-if="checkboxProtein"
                      v-model="form.proteinOther"
                    >
                      <template v-slot:label>{{ $t("line120") }}</template>
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <!-- Vegetable Field -->
            <v-row>
              <v-col>
                <v-select
                  v-model="form.veggies"
                  :items="veggiesOptions"
                  attach
                  multiple
                  chips
                >
                  <template v-slot:label>{{ $t("line3") }}</template>
                </v-select>
                <v-row>
                  <v-col cols="2">
                    <v-checkbox v-model="checkboxVeggies">
                      <template v-slot:label>{{ $t("line119") }}</template>
                    </v-checkbox>
                  </v-col>
                  <v-col cols="10">
                    <v-text-field
                      v-if="checkboxVeggies"
                      v-model="form.veggiesOther"
                    >
                      <template v-slot:label>{{ $t("line121") }}</template>
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <!-- Carbs Field -->
            <v-row>
              <v-col>
                <v-select
                  v-model="form.carbs"
                  :items="carbsOptions"
                  attach
                  multiple
                  chips
                >
                  <template v-slot:label>{{ $t("line4") }}</template>
                </v-select>
                <v-row>
                  <v-col cols="2">
                    <v-checkbox v-model="checkboxCarbs">
                      <template v-slot:label>{{ $t("line119") }}</template>
                    </v-checkbox>
                  </v-col>
                  <v-col cols="10">
                    <v-text-field
                      v-if="checkboxCarbs"
                      v-model="form.carbsOther"
                    >
                      <template v-slot:label>{{ $t("line122") }}</template>
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <!-- reason Field -->
            <v-row>
              <v-col>
                <v-select
                  v-model="form.reason"
                  :items="reasonOptions"
                  attach
                  multiple
                  chips
                >
                  <template v-slot:label>{{ $t("line116") }}</template>
                </v-select>
                <v-row>
                  <v-col cols="2">
                    <v-checkbox v-model="checkboxReason">
                      <template v-slot:label>{{ $t("line119") }}</template>
                    </v-checkbox>
                  </v-col>
                  <v-col cols="10">
                    <v-text-field
                      v-if="checkboxReason"
                      v-model="form.reasonOther"
                    >
                      <template v-slot:label>{{ $t("line126") }}</template>
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <!-- Mood after Field -->
            <v-row>
              <v-col>
                <v-select
                  v-model="form.moodAfter"
                  :items="moodAfterOptions"
                  attach
                  multiple
                  chips
                >
                  <template v-slot:label>{{ $t("line117") }}</template>
                </v-select>
                <v-row>
                  <v-col cols="2">
                    <v-checkbox v-model="checkboxMoodAfter">
                      <template v-slot:label>{{ $t("line119") }}</template>
                    </v-checkbox>
                  </v-col>
                  <v-col cols="10">
                    <v-text-field
                      v-if="checkboxMoodAfter"
                      v-model="form.moodAfterOther"
                    >
                      <template v-slot:label>{{ $t("line125") }}</template>
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
          <v-row align="center" justify="center">
            <v-btn color="success" @click="confirmationBtn">
              {{ $t("reviewBtn") }}
            </v-btn>
          </v-row>
        </v-form>
      </v-container>
    </template>

    <!--  -->
    <!-- review modal -->
    <!--  -->
    <v-dialog v-model="reviewModal" max-width="500">
      <v-card class="mx-auto" max-width="500" tile>
        <v-img class="align-end" height="300px" src="@/assets/reviewForm.png">
          <v-card-title>{{ $t("reviewLine00") }}</v-card-title>
        </v-img>
        <!-- Date -->
        <v-row>
          <v-col cols="6">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ $t("reviewLine1") }}</v-list-item-title>
                {{ this.form.pickerDate }}
              </v-list-item-content>
            </v-list-item>
          </v-col>
          <!-- time-->
          <v-col cols="6">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>{{ $t("reviewLine2") }}</v-list-item-title>
                {{ this.form.pickerTime }}
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
        <v-list-item>
          <v-list-item-content>
            <!-- name -->
            <v-list-item-title>{{ $t("reviewLine3") }}</v-list-item-title>
            <v-list-item-subtitle class="mb-5">{{
              this.form.mealName
            }}</v-list-item-subtitle>
            <!-- place -->
            <v-list-item-title>{{ $t("reviewLine4") }}</v-list-item-title>
            <v-list-item-subtitle
              class="mb-5"
              v-for="(item, i) in this.form.place"
              :key="(i + 1) * 10"
              >{{ item }}</v-list-item-subtitle
            >
            <v-list-item-subtitle class="mb-5">{{
              form.placeOther
            }}</v-list-item-subtitle>
            <!-- company -->
            <v-list-item-title>{{ $t("reviewLine5") }}</v-list-item-title>
            <v-list-item-subtitle
              class="mb-5"
              v-for="(item, i) in this.form.withWhom"
              :key="(i + 1) * 100"
              >{{ item }}</v-list-item-subtitle
            >
            <v-list-item-subtitle class="mb-5">{{
              form.withWhomOther
            }}</v-list-item-subtitle>
            <!-- hunger -->
            <v-list-item-title>{{ $t("reviewLine6") }}</v-list-item-title>
            <v-list-item-subtitle class="mb-5">{{
              this.form.hunger
            }}</v-list-item-subtitle>
            <!-- mood before-->
            <v-list-item-title>{{ $t("reviewLine7") }}</v-list-item-title>
            <v-list-item-subtitle
              class="mb-5"
              v-for="(item, i) in this.form.mood"
              :key="(i + 1) * 1000"
              >{{ item }}</v-list-item-subtitle
            >
            <v-list-item-subtitle class="mb-5">{{
              form.moodBeforeOther
            }}</v-list-item-subtitle>
            <!-- fullness -->
            <v-list-item-title>{{ $t("reviewLine8") }}</v-list-item-title>
            <v-list-item-subtitle class="mb-5">{{
              this.form.fullness
            }}</v-list-item-subtitle>
            <!-- protein -->
            <v-list-item-title>{{ $t("reviewLine9") }}</v-list-item-title>
            <v-list-item-subtitle
              class="mb-5"
              v-for="(item, i) in this.form.protein"
              :key="(i + 1) * 10000"
              >{{ item }}</v-list-item-subtitle
            >
            <v-list-item-subtitle class="mb-5">{{
              form.proteinOther
            }}</v-list-item-subtitle>
            <!-- veggies -->
            <v-list-item-title>{{ $t("reviewLine10") }}</v-list-item-title>
            <v-list-item-subtitle
              class="mb-5"
              v-for="(item, i) in this.form.veggies"
              :key="(i + 1) * 100000"
              >{{ item }}</v-list-item-subtitle
            >
            <v-list-item-subtitle class="mb-5">{{
              form.veggiesOther
            }}</v-list-item-subtitle>
            <!-- carbs -->
            <v-list-item-title>{{ $t("reviewLine11") }}</v-list-item-title>
            <v-list-item-subtitle
              class="mb-5"
              v-for="(item, i) in this.form.carbs"
              :key="(i + 1) * 1000000"
              >{{ item }}</v-list-item-subtitle
            >
            <v-list-item-subtitle class="mb-5">{{
              form.carbsOther
            }}</v-list-item-subtitle>
            <!-- reason -->
            <v-list-item-title>{{ $t("reviewLine12") }}</v-list-item-title>
            <v-list-item-subtitle
              class="mb-5"
              v-for="(item, i) in this.form.reason"
              :key="(i + 1) * 10000000"
              >{{ item }}</v-list-item-subtitle
            >
            <v-list-item-subtitle class="mb-5">{{
              form.reasonOther
            }}</v-list-item-subtitle>
            <!-- mood after  -->

            <v-list-item-title>{{ $t("reviewLine13") }}</v-list-item-title>
            <v-list-item-subtitle
              class="mb-5"
              v-for="item in this.form.moodAfter"
              :key="item"
              >{{ item }}</v-list-item-subtitle
            >
            <v-list-item-subtitle class="mb-5">{{
              form.moodAfterOther
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-row>
            <v-col cols="6">
              <v-btn @click="submitForm">{{ $t("reviewBtn1") }}</v-btn>
            </v-col>
            <v-col cols="6">
              <v-btn @click="closeReviewModal">{{ $t("reviewBtn2") }}</v-btn>
            </v-col>
          </v-row>
        </v-list-item>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import firebase from "firebase/app";
export default {
  data() {
    return {
      value: null,

      reviewModal: false,

      checkboxPlace: false,
      checkboxProtein: false,
      checkboxVeggies: false,
      checkboxCarbs: false,
      checkboxCompany: false,
      checkboxMoodBefore: false,
      checkboxReason: false,
      checkboxMoodAfter: false,

      placeOptions: [
        "kitchen / cuisine",
        "dining room / salle à diner ",
        "bedroom / chambre à coucher",
        "living room / salon",
        "bathroom / chambre de bain"
      ],

      companyOptions: [
        "wife / conjointe",
        "husband / conjoint ",
        "coworkers / collègues",
        "mother / mère",
        "father / père",
        "child / enfant",
        "friend / ami",
        "alone / seul"
      ],

      moodBeforeOptions: [
        "stressed / stressé",
        "grumpy / marabout",
        "fine / bonne humeur",
        "excited / excité"
      ],

      proteinOptions: [
        "chicken / poulet",
        "fish / poisson",
        "dairy / produits laitiers",
        "beans / légumineuses",
        "pork / porc",
        "beef / boeuf",
        "tofu"
      ],

      veggiesOptions: [
        "carrot / carotte",
        "broccoli / brocoli",
        "cabbage / chou",
        "celery / céleri",
        "lettuce / laitue",
        "onions / oignons",
        "bell peppers / poivrons",
        "tomatoes / tomates"
      ],

      carbsOptions: [
        "bread / pain",
        "rice / riz",
        "pastas / pâtes",
        "potatoes / pommes de terre",
        "quinoa",
        "oats / avoine"
      ],
      reasonOptions: [
        "I was hungry / j'avais faim",
        "It was noon / Il était midi",
        "It was a long time since I last eat / Il y a longtemps que j'ai mangé",
        "I wasn`t feeling right / Je ne me sentait pas bien"
      ],
      moodAfterOptions: [
        "stressed / stressé",
        "grumpy / marabout",
        "fine / bonne humeur",
        "excited / excité"
      ],

      // date picker
      pickerDate: new Date().toISOString().substr(0, 10),
      // time picker
      pickerTime: null,
      //FORM
      mealName: "",
      mealNameRules: [v => !!v || "Required / Requis"],

      form: {
        pickerDate: new Date().toISOString().substr(0, 10),
        pickerTime: null,
        mealName: null,
        place: null,
        placeOther: null,
        withWhom: null,
        withWhomOther: null,
        mood: null,
        moodBeforeOther: null,
        hunger: null,
        fullness: null,
        protein: null,
        proteinOther: null,
        veggies: null,
        veggiesOther: null,
        carbs: null,
        carbsOther: null,
        reason: null,
        reasonOther: null,
        moodAfter: null,
        moodAfterOther: null
      }
    };
  },
  methods: {
    /* eslint-disable no-alert, no-console */
    confirmationBtn() {
      console.log("confirm the form");
      this.reviewModal = true;
    },

    closeReviewModal() {
      this.reviewModal = false;
    },

    resetForm() {
      const form = this.form;

      form.pickerDate = new Date().toISOString().substr(0, 10);
      form.pickerTime = null;
      form.veggies = null;
      form.veggiesOther = null;
      form.carbs = null;
      form.carbsOther = null;
      form.reason = null;
      form.reasonOther = null;
      form.moodAfter = null;
      form.moodAfterOther = null;
      form.mealName = null;
      form.place = null;
      form.placeOther = null;
      form.withWhom = null;
      form.withWhomOther = null;
      form.mood = null;
      form.moodBeforeOther = null;
      form.hunger = null;
      form.fullness = null;
      form.protein = null;
      form.proteinOther = null;

      this.checkboxProtein = false;
      this.checkboxVeggies = false;
      this.checkboxCarbs = false;
      this.checkboxPlace = false;
      this.checkboxCompany = false;
      this.checkboxMoodBefore = false;
      this.checkboxReason = false;
      this.checkboxMoodAfter = false;
    },

    submitForm() {
      /**Initialize the db */
      const db = firebase.firestore(); //you start the instance
      const ref = db.collection("JournalEntries").doc(); //create an empty doc inside this collection.
      const id = ref.id; //reference the document's id (auto-generated)
      /**Set the data below */
      db.collection("JournalEntries")
        .doc(id)
        .set({
          form: this.form,
          id: id,
          uid: this.$store.getters.profileInfo.userID //See store for info
        })
        .then(
          ((this.reviewModal = false), this.resetForm),
          console.log("The document was submitted properly.")
        )
        .catch(err => console.log(err));
    }
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
    "line3": "Vegetable sources",
    "line4": "Carbohydrates sources",
    "line104": "Place where the meal was consumed",
    "line105": "With whom was the meal consumed",
    "line106": "Level of hunger:",
    "line107": "Mood before eating",
    "line108": "Not at all",
    "line109": "Somewhat full",
    "line110": "Full",
    "line111": "I overate",
    "line112": "Not at all",
    "line113": "Somewhat hungry",
    "line114": "hungry",
    "line115": "really hungry",
    "line116": "Reason why you had this meal",
    "line117": "Mood after eating",
    "line118": "Level of fullness:",
    "line119": "Other",
    "line120": "Other source of proteins",
    "line121": "Other source of vegetables",
    "line122": "Other source of carbohydrates",
    "line123": "Other place",
    "line124": "Other company",
    "line125": "Other mood",
    "line126": "Other reason",
    "reviewBtn": "Confirm the form",
    "reviewBtn1": "Submit",
    "reviewBtn2": "Close",
    "reviewLine00": "Please review the informations",
    "reviewLine1": "Date:",
    "reviewLine2": "Time:",
    "reviewLine3": "Name:",
    "reviewLine4": "Place where it was consumed:",
    "reviewLine4.2": "Other place:",
    "reviewLine5": "With whom it was consumed:",
    "reviewLine6": "Level of hunger:",
    "reviewLine7": "Mood before eating:",
    "reviewLine8": "Level of satiety:",
    "reviewLine9": "Sources of proteins:",
    "reviewLine10": "Sources of vegetables:",
    "reviewLine11": "Sources of carbohydrates:",
    "reviewLine12": "Reason why this meal was consumed:",
    "reviewLine12.2": "Other Reason why this meal was consumed:",
    "reviewLine13": "Mood after eating:"
  },
  "fr": {
    "line0.1": "Ajouter un repas",
    "line0.2": "Date et heure du repas:",
    "line1": "Nom du repas (Exemple: spaghetti, sandwich, riz au poulet...) ",
    "line2": "Sources de protéines",
    "line3": "Sources de légumes",
    "line4": "Sources de féculents",
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
    "line120": "Autre source de proteines",
    "line121": "Autre source de légumes",
    "line122": "Autre source de féculents",
    "line123": "Autre place",
    "line124": "Autre compagnie",
    "line125": "Autre humeur",
    "line126": "Autre raison",
    "reviewBtn": "Confirmer le formulaire",
    "reviewBtn1": "Soumettre",
    "reviewBtn2": "Fermer",
    "reviewLine00": "Ces informations sont exactes?",
    "reviewLine1": "Date:",
    "reviewLine2": "Heure:",
    "reviewLine3": "Nom:",
    "reviewLine4": "Endroit où le repas à été consommé:",
    "reviewLine4.2": "Autre place:",
    "reviewLine5": "Avec qui le repas à été consommé:",
    "reviewLine6": "Niveau de faim:",
    "reviewLine7": "Humeur avant de manger:",
    "reviewLine8": "Niveau de satiété:",
    "reviewLine9": "Sources de protéines:",
    "reviewLine10": "Sources de légumes:",
    "reviewLine11": "Sources de féculents:",
    "reviewLine12": "Raison pour laquelle le repas a été consommé:",
    "reviewLine12.2": "Autre raison pour laquelle le repas à été consommé:",
    "reviewLine13": "Humeur après avoir mangé:"
  }
}
</i18n>
