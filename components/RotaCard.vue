<template>
  <v-card>
    <v-card-title class="subheading font-weight-bold">
      Рота {{ rota }}
    </v-card-title>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item>
        <v-list-item-content>
          За списком
        </v-list-item-content>
        <v-spacer />
        <v-list-item-content class="align-end">
          {{ inList.officers }}
        </v-list-item-content>
        <v-list-item-content class="align-end">
          {{ inList.sergeants }}
        </v-list-item-content>
        <v-list-item-content class="align-end">
          {{ inList.soldiers }}
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          В наявності
        </v-list-item-content>
        <v-spacer />
        <v-list-item-content class="align-end">
          {{ inStock.officers + addedFromBatalion.officers }}
        </v-list-item-content>
        <v-list-item-content class="align-end">
          {{ inStock.sergeants + addedFromBatalion.sergeants }}
        </v-list-item-content>
        <v-list-item-content class="align-end">
          {{ inStock.soldiers + addedFromBatalion.soldiers }}
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          В лікарні
        </v-list-item-content>
        <v-spacer />
        <v-list-item-content class="align-end">
          {{ inHospital.officers }}
        </v-list-item-content>
        <v-list-item-content class="align-end">
          {{ inHospital.sergeants }}
        </v-list-item-content>
        <v-list-item-content class="align-end">
          {{ inHospital.soldiers }}
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          В відрядженні
        </v-list-item-content>
        <v-spacer />
        <v-list-item-content class="align-end">
          {{ takenAway.officers + takenInBatalion.officers }}
        </v-list-item-content>
        <v-list-item-content class="align-end">
          {{ takenAway.sergeants + takenInBatalion.sergeants }}
        </v-list-item-content>
        <v-list-item-content class="align-end">
          {{ takenAway.soldiers + takenInBatalion.soldiers }}
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          В відпустці
        </v-list-item-content>
        <v-spacer />
        <v-list-item-content class="align-end">
          {{ inVacation.officers }}
        </v-list-item-content>
        <v-list-item-content class="align-end">
          {{ inVacation.sergeants }}
        </v-list-item-content>
        <v-list-item-content class="align-end">
          {{ inVacation.soldiers }}
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          Приряджені
        </v-list-item-content>
        <v-spacer />
        <v-list-item-content class="align-end">
          {{ addedFromBatalion.officers }}
        </v-list-item-content>
        <v-list-item-content class="align-end">
          {{ addedFromBatalion.sergeants }}
        </v-list-item-content>
        <v-list-item-content class="align-end">
          {{ addedFromBatalion.soldiers }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import * as utils from '~/utils'

export default {
  name: 'RotaCard',
  props: {
    list: {
      type: Array,
      required: true
    },
    rota: {
      type: String,
      required: true
    }
  },
  computed: {
    inList () {
      return utils.inList(this.list, this.rota)
    },
    inStock () {
      return utils.inStock(this.list, this.rota)
    },
    inHospital () {
      return utils.inHospital(this.list)
    },
    takenAway () {
      return utils.takenAway(this.list)
    },
    takenInBatalion () {
      return utils.takenInBatalion(this.list, this.rota)
    },
    addedFromBatalion () {
      return utils.addedFromBatalion(this.list, this.rota)
    },
    inVacation () {
      return utils.inVacation(this.list)
    },

  }
}
</script>

<style scoped>

</style>
