<template>
  <v-container>
    <v-card class="mx-auto" max-width="400" tile>
      <!-- Date field -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Date (January 3, 2020)</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- Name field -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Spaghetti</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- Sources field -->
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title>Sources</v-list-item-title>
          <v-list-item-subtitle>Protein: {"item"}</v-list-item-subtitle>
          <v-list-item-subtitle>Vegetables: {"item"}</v-list-item-subtitle>
          <v-list-item-subtitle>Carbohydrates: {"item"}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>
