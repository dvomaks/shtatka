<template>
    <v-autocomplete
      v-model="unit"
      :items="units"
      :search-input.sync="search"
      item-text="pib"
      dense
      filled
      rounded
      clearable
      return-object
    >
      <template v-slot:append-outer>
        <move-unit-dialog
          v-if="unit"
          :unit="unit"
          class="mt-n3"
        />
      </template>
    </v-autocomplete>
</template>

<script>
import { mapGetters } from 'vuex'
import MoveUnitDialog from '~/components/MoveUnitDialog';

export default {
  name: 'SearchUnit',
  components: { MoveUnitDialog },
  data() {
    return {
      unit: null,
      units: [],
      search: null
    }
  },
  computed: {
    ...mapGetters({
      shtat: 'localStorage/shtat'
    })
  },
  watch: {
    search (val) {
      this.units = this.shtat.filter(el => el.pib.includes(val))
    }
  }
}
</script>

<style scoped>

</style>
