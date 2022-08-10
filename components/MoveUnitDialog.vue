<template>
  <div>
    <v-btn
      icon
      @click.stop="showMoveUnitDialog = true"
    >
      <v-icon color="grey lighten-1">mdi-car-outline</v-icon>
    </v-btn>
    <v-dialog
      v-model="showMoveUnitDialog"
      persistent
      max-width="500"
    >
      <v-card>
        <v-card-title class="text-h5">
          Виберіть місце призначення
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-select
                  v-model="selectValue"
                  :items="selectOptions"
                  label="Місце"
                  dense
                ></v-select>
              </v-col>
              <template v-if="isTakenAwayMove">
                <v-col cols="6">
                  <v-select
                    v-model="selectRota"
                    :items="selectRotaOptions"
                    label="Рота"
                    dense
                  ></v-select>
                </v-col>
              </template>
              <template v-if="selectRota">
                <v-col cols="6">
                  <v-select
                    v-model="selectVzvod"
                    :items="selectVzvodOptions"
                    label="Взвод"
                    dense
                  ></v-select>
                </v-col>
              </template>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-btn
            @click="showMoveUnitDialog = false"
          >
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            @click="moveUnit"
            :disabled="disableSaveBtn"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { SELECT_OPTIONS, TAKEN_AWAY_IN_BATALION } from '~/consts/places'
import { UNIT_STRUCTURE, UNIT_LABEL } from '~/consts/data'
import { mapActions } from 'vuex'

export default {
  name: 'MoveUnitDialog',
  props: {
    unit: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showMoveUnitDialog: false,
      selectValue: null,
      selectRota: null,
      selectVzvod: null,
      selectOptions: SELECT_OPTIONS,
      selectRotaOptions: [
        { text: UNIT_LABEL['0'], value: '0' },
        { text: UNIT_LABEL['1'], value: '1' },
        { text: UNIT_LABEL['2'], value: '2' },
        { text: UNIT_LABEL['3'], value: '3' },
        { text: UNIT_LABEL['4'], value: '4' },
        { text: UNIT_LABEL['5'], value: '5' },
        { text: UNIT_LABEL['зв'], value: 'зв' },
        { text: UNIT_LABEL['мп'], value: 'мп' },
      ]
    }
  },
  created () {
    this.selectValue = this.unit.place
  },
  computed: {
    selectVzvodOptions () {
      return UNIT_STRUCTURE[this.selectRota]
    },
    isTakenAwayMove () {
      return this.selectValue === TAKEN_AWAY_IN_BATALION
    },
    disableSaveBtn () {
      return this.isTakenAwayMove && (!this.selectRota || !this.selectVzvod)
    }
  },
  methods: {
    ...mapActions({
      updateUnit: 'localStorage/updateUnit'
    }),
    moveUnit() {
      const unit = Object.assign({}, this.unit)

      if (!this.isTakenAwayMove) {
        this.selectRota = null
        this.selectVzvod = null
      }

      unit.place = this.selectValue
      unit.to_rota = this.selectRota
      unit.to_vzvod = this.selectVzvod

      this.updateUnit(unit)

      this.showMoveUnitDialog = false
    }
  }
}
</script>

<style scoped>

</style>
