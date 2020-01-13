<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <!-- ADD MEAL FORM -->
        <AddMealForm />
      </v-col>

      <v-col cols="6">
        <!-- PAST-MEALS -->
        <PastMeals />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PastMeals from "@/components/PastMeals.vue";
import AddMealForm from "@/components/AddMealForm.vue";

// This is registering the components.
export default {
  data() {
    return {};
  },
  components: {
    PastMeals,
    AddMealForm
  },
  methods: {}
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
