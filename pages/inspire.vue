<template>
  <v-row>
    <v-col>
      <v-expansion-panels>
        <template v-for="(rota) in batalion">
          <template v-for="vzvod in rota">
            <vzvod-panel
              :vzvod="vzvod"
            />
          </template>
        </template>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>

<script>
import VzvodPanel from '~/components/VzvodPanel';
import axios from 'axios'
import { mapGetters } from 'vuex'

export default {
  name: 'InspirePage',
  components: { VzvodPanel },
  created() {
    axios.get('/shtatka.json')
      .then(({ data }) => this.fillBatalion(data))
  },

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

        batalion[voin.r][voin.vzv].push(voin)
      })

      return batalion
    }
  }
}
</script>
