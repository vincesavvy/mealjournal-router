<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <!-- ADD MEAL FORM -->
        {{ $t("line1") }}
        <hr />
        <div style="margin-top: 15px">{{ $t("line2") }}</div>

        <!-- component -->
        <AddMealForm />
      </v-col>

      <!-- PAST-MEALS -->
      <!-- Will need to map with "v-for" through the backend -->
      <!-- Will need to be a component -->
      <v-col cols="6">
        {{ $t("line3") }}
        <hr />
        <div style="margin-top: 15px">{{ $t("line4") }}</div>
        {{ user }}
        <!-- component -->
        <PastMeals />
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
