<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      {{ title }} <v-spacer /> {{ inTotalStockTitle }} <v-spacer /> {{ inListTitle }}
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
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
                    <voin-list-item
                      :voin="voin"
                      :show-move-btn="false"
                    />
                  </template>
                </v-list-item-group>
              </v-list>
            </v-card>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
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
import { rankCount, inList } from '~/utils'
import * as places from '~/consts/places'

export default {
  name: 'VzvodPanel',
  components: { VoinListItem },
  props: {
    vzvod: {
      type: Array,
      required: true
    },
    rotaKey: {
      type: String,
      required: true
    },
    vzvodKey: {
      type: String,
      required: true
    }
  },
  computed: {
    title() {
      return this.vzvod[0]['r'] + ' - ' + this.vzvod[0]['vzv']
    },
    inListTitle () {
      const rc = inList(this.vzvod, this.rotaKey.toString(), this.rotaKey.toString())
      return `За списком ${rc.officers}-${rc.sergeants}-${rc.soldiers}`
    },
    inStock () {
      return this.vzvod.filter(voin => !voin.place)
    },
    inStockTitle () {
      const rc = rankCount(this.inStock)
      return `${rc.officers}-${rc.sergeants}-${rc.soldiers}`
    },
    addedFromBatalion () {
      return this.vzvod.filter(voin => {
        return voin.place === places.TAKEN_AWAY_IN_BATALION &&
          (this.rotaKey.toString() !== voin.r.toString() ||
          this.vzvodKey.toString() !== voin.vzv.toString())
      })
    },
    addedFromBatalionTitle () {
      const rc = rankCount(this.addedFromBatalion)
      return `${rc.officers}-${rc.sergeants}-${rc.soldiers}`
    },
    inTotalStockTitle () {
      const rc = rankCount(this.inStock)
      const rankCountAdded = rankCount(this.addedFromBatalion)

      const o = rc.officers + rankCountAdded.officers
      const s = rc.sergeants + rankCountAdded.sergeants
      const sl = rc.soldiers + rankCountAdded.soldiers

      return `В наявності ${o}-${s}-${sl}`
    },
    inHospital () {
      return this.vzvod.filter(voin => voin.place === places.HOSPITAL)
    },
    inHospitalTitle () {
      const rc = rankCount(this.inHospital)
      return `В лікарні ${rc.officers}-${rc.sergeants}-${rc.soldiers}`
    },
    inVacation () {
      return this.vzvod.filter(voin => voin.place === places.VACATION)
    },
    inVacationTitle () {
      const rc = rankCount(this.inVacation)
      return `В відпустці ${rc.officers}-${rc.sergeants}-${rc.soldiers}`
    },
    takenAway () {
      return this.vzvod.filter(voin => voin.place === places.TAKEN_AWAY)
    },
    takenAwayTitle () {
      const rc = rankCount(this.takenAway)
      return `В відрядженні ${rc.officers}-${rc.sergeants}-${rc.soldiers}`
    },
    takenAwayInBatalion () {
      return this.vzvod.filter(voin => {
        return voin.place === places.TAKEN_AWAY_IN_BATALION &&
          this.rotaKey.toString() === voin.r.toString() &&
          this.vzvodKey.toString() === voin.vzv.toString()
      })
    },
    takenAwayInBatalionTitle () {
      const rc = rankCount(this.takenAwayInBatalion)
      return `В відряджені в інший взвод ${rc.officers}-${rc.sergeants}-${rc.soldiers}`
    }
  }
}
</script>

<style scoped>

</style>
