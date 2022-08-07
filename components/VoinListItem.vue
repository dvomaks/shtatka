<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title v-text="voin.pib"></v-list-item-title>
    </v-list-item-content>
    <v-list-item-action>
      <v-btn icon>
        <v-icon color="grey lighten-1">mdi-information</v-icon>
      </v-btn>
    </v-list-item-action>
    <v-list-item-action>
      <v-btn
        icon
        @click.stop="showMoveVoinDialog = true"
      >
        <v-icon color="grey lighten-1">mdi-car-outline</v-icon>
      </v-btn>
    </v-list-item-action>
    <v-dialog
      v-model="showMoveVoinDialog"
      persistent
      max-width="500"
    >
      <v-card>
        <v-card-title class="text-h5">
          Use Google's location service?
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-select
                  v-model="selectValue"
                  :items="selectOptions"
                  label="Standard"
                  dense
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-btn
            @click="showMoveVoinDialog = false"
          >
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            @click="moveVoin"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-list-item>
</template>

<script>
import { SELECT_OPTIONS } from '~/consts/places'
import { mapActions } from 'vuex'

export default {
  name: 'VoinListItem',
  props: {
    voin: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showMoveVoinDialog: false,
      selectValue: null,
      selectOptions: SELECT_OPTIONS
    }
  },
  created () {
    this.selectValue = this.voin.place
  },
  methods: {
    ...mapActions({
      updateVoin: 'localStorage/updateVoin'
    }),
    moveVoin () {
      const voin = Object.assign({},this.voin)

      voin.place = this.selectValue

      this.updateVoin(voin)

      this.showMoveVoinDialog = false
      console.log(voin);
    }
  }
}
</script>

<style scoped>

</style>
