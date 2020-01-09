<template>
  <v-container>
    <v-card class="mx-auto" max-width="400" tile>
      <!-- Date field -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{ $t("line1") }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- Name field -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{ $t("line2") }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <!-- Sources field -->
      <v-list-item three-line>
        <v-list-item-content>
          <v-list-item-title>{{ $t("line3") }}</v-list-item-title>
          <v-list-item-subtitle>{{ $t("line4") }}</v-list-item-subtitle>
          <v-list-item-subtitle>{{ $t("line5") }}</v-list-item-subtitle>
          <v-list-item-subtitle>{{ $t("line6") }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-container>
</template>

<script>
export default {};
//dictionary use: {{ $t("line3") }}
</script>

<i18n>
{
  "en": {
    "line1": "Date",
    "line2": "Name:",
    "line3": "Sources:",
    "line4": "Protein:",
    "line5": "Vegetables:",
    "line6": "Carbohydrates:"
  },
  "fr": {
    "line1": "Date",
    "line2": "Nom:",
    "line3": "Sources:",
    "line4": "Protéines:",
    "line5": "Légumes:",
    "line6": "Féculents:"
  }
}
</i18n>
