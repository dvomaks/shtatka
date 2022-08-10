<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title v-text="voin.pib"></v-list-item-title>
    </v-list-item-content>
    <v-list-item-action v-if="showMoveBtn">
      <move-unit-dialog :unit="voin" />
    </v-list-item-action>
    <v-list-item-action>
      <v-btn icon>
        <v-icon color="grey lighten-1">mdi-information</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import MoveUnitDialog from "~/components/MoveUnitDialog";

export default {
  name: 'VoinListItem',
  components: { MoveUnitDialog },
  props: {
    voin: {
      type: Object,
      required: true
    },
    showMoveBtn: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>

</style>
