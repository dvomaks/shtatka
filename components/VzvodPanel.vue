<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      {{ title }} <v-spacer /> {{ inTotalStockTitle }} <v-spacer /> {{ inListTitle }}
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-row>
        <v-col cols="6">
          <v-card
              class="mx-auto"
              max-width="500"
            >
              <v-toolbar
                color="deep-purple accent-4"
                dark
              >
                <v-toolbar-title>
                  {{ inTotalStockTitle }}
                </v-toolbar-title>
              </v-toolbar>

              <v-list subheader>
                <v-subheader>Взвод {{ inStockTitle }}</v-subheader>
                <v-list-item-group>
                  <template
                    v-for="voin in inStock"
                  >
                    <voin-list-item :voin="voin" />
                  </template>
                </v-list-item-group>
              </v-list>

              <v-divider></v-divider>

              <v-list subheader>
                <v-subheader>Приряджені {{ addedFromBatalionTitle }}</v-subheader>
                <v-list-item-group>
                  <template
                    v-for="voin in addedFromBatalion"
                  >
                    <voin-list-item :voin="voin" />
                  </template>
                </v-list-item-group>
              </v-list>
            </v-card>
        </v-col>
        <v-col cols="6">
          <v-row>
            <v-col cols="12">
              <v-card
                class="mx-auto"
                max-width="500"
              >
                <v-toolbar
                  color="indigo accent-4"
                  dark
                >
                  <v-toolbar-title>{{ takenAwayInBatalionTitle }}</v-toolbar-title>
                </v-toolbar>
                <v-list>
                  <v-list-item-group>
                    <template
                      v-for="voin in takenAwayInBatalion"
                    >
                      <voin-list-item :voin="voin" />
                    </template>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card
                class="mx-auto"
                max-width="500"
              >
                <v-toolbar
                  color="indigo accent-4"
                  dark
                >
                  <v-toolbar-title>{{ takenAwayTitle }}</v-toolbar-title>
                </v-toolbar>
                <v-list>
                  <v-list-item-group>
                    <template
                      v-for="voin in takenAway"
                    >
                      <voin-list-item :voin="voin" />
                    </template>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card
                class="mx-auto"
                max-width="500"
              >
                <v-toolbar
                  color="indigo accent-4"
                  dark
                >
                  <v-toolbar-title>{{ inVacationTitle }}</v-toolbar-title>
                </v-toolbar>
                <v-list>
                  <v-list-item-group>
                    <template
                      v-for="voin in inVacation"
                    >
                      <voin-list-item :voin="voin" />
                    </template>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card
                class="mx-auto"
                max-width="500"
              >
                <v-toolbar
                  color="indigo accent-4"
                  dark
                >
                  <v-toolbar-title>{{ inHospitalTitle }}</v-toolbar-title>
                </v-toolbar>
                <v-list>
                  <v-list-item-group>
                    <template
                      v-for="voin in inHospital"
                    >
                      <voin-list-item :voin="voin" />
                    </template>
                  </v-list-item-group>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
import VoinListItem from "~/components/VoinListItem";
import * as places from '~/consts/places'
import * as dataSet from '~/consts/data'

const rankString = function (list) {
  const officers = list.filter(el => el[dataSet.O_SKLAD_KEY] === dataSet.SKLAD_OFFICERS_VALUE).length
  const sergeants = list.filter(el => el[dataSet.O_SKLAD_KEY] === dataSet.SKLAD_SERGEANTS_VALUE).length
  const soldiers = list.filter(el => el[dataSet.O_SKLAD_KEY] === dataSet.SKLAD_SOLDIERS_VALUE).length

  return { officers, sergeants, soldiers }
}

export default {
  name: 'VzvodPanel',
  components: { VoinListItem },
  props: {
    vzvod: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    warriors: []
  }),
  computed: {
    title() {
      return this.vzvod[0]['r'] + ' - ' + this.vzvod[0]['vzv']
    },
    inList () {
      return this.vzvod.filter(voin => {
        return !!voin.assignment_r && !!voin.assignment_vzv
      })
    },
    inListTitle () {
      const rankCount = rankString(this.inList)
      return `За списком ${rankCount.officers}-${rankCount.sergeants}-${rankCount.soldiers}`
    },
    inStock () {
      return this.vzvod.filter(voin => !voin.place)
    },
    inStockTitle () {
      const rankCount = rankString(this.inStock)
      return `${rankCount.officers}-${rankCount.sergeants}-${rankCount.soldiers}`
    },
    addedFromBatalion () {
      return this.vzvod.filter(voin => {
        return voin.assignment_r && voin.r !== voin.assignment_r &&
          voin.assignment_vzv && voin.vzv !== voin.assignment_vzv
      })
    },
    addedFromBatalionTitle () {
      const rankCount = rankString(this.addedFromBatalion)
      return `${rankCount.officers}-${rankCount.sergeants}-${rankCount.soldiers}`
    },
    inTotalStockTitle () {
      const rankCount = rankString(this.inStock)
      const rankCountAdded = rankString(this.addedFromBatalion)

      const o = rankCount.officers + rankCountAdded.officers
      const s = rankCount.sergeants + rankCountAdded.sergeants
      const sl = rankCount.soldiers + rankCountAdded.soldiers

      return `В наявності ${o}-${s}-${sl}`
    },
    inHospital () {
      return this.vzvod.filter(voin => voin.place === places.HOSPITAL)
    },
    inHospitalTitle () {
      const rankCount = rankString(this.inHospital)
      return `В лікарні ${rankCount.officers}-${rankCount.sergeants}-${rankCount.soldiers}`
    },
    inVacation () {
      return this.vzvod.filter(voin => voin.place === places.VACATION)
    },
    inVacationTitle () {
      const rankCount = rankString(this.inVacation)
      return `В відпустці ${rankCount.officers}-${rankCount.sergeants}-${rankCount.soldiers}`
    },
    takenAway () {
      return this.vzvod.filter(voin => voin.place === places.TAKEN_AWAY)
    },
    takenAwayTitle () {
      const rankCount = rankString(this.takenAway)
      return `В відрядженні ${rankCount.officers}-${rankCount.sergeants}-${rankCount.soldiers}`
    },
    takenAwayInBatalion () {
      return this.vzvod.filter(voin => voin.place === places.TAKEN_AWAY_IN_BATALION)
    },
    takenAwayInBatalionTitle () {
      const rankCount = rankString(this.takenAwayInBatalion)
      return `В відряджені в інший взвод ${rankCount.officers}-${rankCount.sergeants}-${rankCount.soldiers}`
    }
  }
}
</script>

<style scoped>

</style>
