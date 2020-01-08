<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <!-- ADD MEAL FORM -->
        Add a meal
        <hr />
        <div style="margin-top: 15px">Time of meal:</div>
        <!-- Date Picker -->
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

        <!-- Form -->
        <v-form>
          <v-container>
            <!-- Meal Name Field -->
            <v-row>
              <v-col>
                <v-text-field
                  v-model="mealName"
                  :rules="nameRules"
                  outlined
                  label="Meal's Name"
                  placeholder="(Spaghetti, sandwich, rice and chicken...)"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Protein Field -->
            <v-row>
              <v-col>
                <v-text-field
                  v-model="protein"
                  :rules="proteinRules"
                  label="Protein Source (Example: chicken, fish, dairy, beans, pork, beef, tofu...)"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Vegetable Field -->
            <v-row>
              <v-col>
                <v-text-field
                  v-model="veggies"
                  :rules="veggiesRules"
                  label="Vegetable Source (Example: carrots, tomatoes, cabbage, salad, corn, cucumber...)"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <!-- Carbs Field -->
            <v-row>
              <v-col>
                <v-text-field
                  v-model="carbs"
                  :rules="carbsRules"
                  label="Carbohydrates Source (Example: bread, pastas, potatoes, quinoa, oats...)."
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>

      <v-col cols="6">
        Past meals
        <hr />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      // date picker
      pickerDate: new Date().toISOString().substr(0, 10),
      // time picker
      pickerTime: null,
      //FORM
      mealName: "",
      nameRules: [
        v =>
          !!v ||
          "Meal's name is required, if none was eaten, enter 'none' in each fields below, including this one."
      ],

      protein: "",
      proteinRules: [
        v =>
          !!v || "Protein source is required, if none were eaten, enter 'none'."
      ],

      veggies: "",
      veggiesRules: [
        v =>
          !!v ||
          "Vegetable source is required, if none were eaten, enter 'none'."
      ],

      carbs: "",
      carbsRules: [
        v =>
          !!v ||
          "Carbohydrates source is required, if none were eaten, enter 'none'."
      ]

      // CALENDAR
    };
  }
};
</script>
