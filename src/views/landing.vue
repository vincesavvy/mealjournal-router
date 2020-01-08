<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <!-- ADD MEAL FORM -->
        Add a meal
        <hr />
        <div style="margin-top: 15px">Time of meal:</div>

        <!-- component -->
        <AddMealForm />
      </v-col>

      <!-- PAST-MEALS -->
      <!-- Will need to map with "v-for" through the backend -->
      <!-- Will need to be a component -->
      <v-col cols="6">
        Past meals
        <hr />
        <div style="margin-top: 15px">List of past meals:</div>

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
  components: {
    PastMeals,
    AddMealForm
  }
};
</script>
