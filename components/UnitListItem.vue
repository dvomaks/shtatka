<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title v-text="unit.pib"></v-list-item-title>
    </v-list-item-content>
    <v-list-item-action v-if="showMoveBtn">
      <move-unit-dialog :unit="unit" />
    </v-list-item-action>
    <v-list-item-action>
      <unit-info :unit="unit" />
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import MoveUnitDialog from '~/components/MoveUnitDialog';
import UnitInfo from '~/components/UnitInfo';

export default {
  name: 'UnitListItem',
  components: { UnitInfo, MoveUnitDialog },
  props: {
    unit: {
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
