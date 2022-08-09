<template>
  <v-row>
    <v-col cols="6">
      <rota-card
        rota="0"
        :list="rotaFilter('0')"
      />
    </v-col>
    <v-col cols="6">
      <rota-card
        rota="зв"
        :list="rotaFilter('зв')"
      />
    </v-col>
    <v-col cols="6">
      <rota-card
        rota="мп"
        :list="rotaFilter('мп')"
      />
    </v-col>
    <v-col cols="6">
      <rota-card
        rota="1"
        :list="rotaFilter('1')"
      />
    </v-col>
    <v-col cols="6">
      <rota-card
        rota="2"
        :list="rotaFilter('2')"
      />
    </v-col>
    <v-col cols="6">
      <rota-card
        rota="3"
        :list="rotaFilter('3')"
      />
    </v-col>
    <v-col cols="6">
      <rota-card
        rota="4"
        :list="rotaFilter('4')"
      />
    </v-col>
    <v-col cols="6">
      <rota-card
        rota="5"
        :list="rotaFilter('5')"
      />
    </v-col>
  </v-row>
</template>

<script>
import RotaCard from '~/components/RotaCard';
import { mapGetters } from 'vuex'

export default {
  name: 'IndexPage',
  components: { RotaCard },
  computed: {
    ...mapGetters({
      shtat: 'localStorage/shtat'
    })
  },
  methods: {
    rotaFilter (rota) {
      return this.shtat.filter(el => {
        return (el.r.toString() === rota) ||
          (!!el.to_rota && el.to_rota.toString() === rota)
      })
    }
  }
}
</script>
