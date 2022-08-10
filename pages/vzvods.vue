<template>
  <v-row>
    <v-col>
      <v-expansion-panels>
        <template v-for="(rota, rotaKey) in batalion">
          <template v-for="(vzvod, vzvodKey) in rota">
            <vzvod-panel
              :vzvod="vzvod"
              :rota-key="rotaKey.toString()"
              :vzvod-key="vzvodKey.toString()"
            />
          </template>
        </template>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>

<script>
import VzvodPanel from '~/components/VzvodPanel';
import { mapGetters } from 'vuex'

export default {
  name: 'InspirePage',
  components: { VzvodPanel },
  computed: {
    ...mapGetters({
      shtat: 'localStorage/shtat'
    }),
    batalion () {
      return this.fillBatalion(this.shtat)
    }
  },

  methods: {
    fillBatalion (data) {
      let batalion = {}
      data.forEach(voin => {
        if (!batalion[voin.r]) {
          batalion[voin.r] = []
        }

        if (!batalion[voin.r][voin.vzv]) {
          batalion[voin.r][voin.vzv] = []
        }

        if (!batalion[voin.r][voin.vzv]) {
          batalion[voin.r][voin.vzv] = []
        }

        batalion[voin.r][voin.vzv].push(voin)

        if (voin.to_rota) {
          if (!voin.to_rota && !batalion[voin.to_rota]) {
            batalion[voin.to_rota] = []
          }

          if (!batalion[voin.to_rota][voin.to_vzvod]) {
            batalion[voin.to_rota][voin.to_vzvod] = []
          }

          batalion[voin.to_rota][voin.to_vzvod].push(voin)
        }
      })

      return batalion
    }
  }
}
</script>
