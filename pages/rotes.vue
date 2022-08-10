<template>
  <v-row>
    <v-col
      v-for="(rota, key) in rotes"
      :key="key"
      cols="12"
      md="6"
    >
      <rota-card
        :title="rota"
        :rota="key"
        :list="rotaFilter(key)"
      />
    </v-col>
  </v-row>
</template>

<script>
import RotaCard from '~/components/RotaCard';
import { mapGetters } from 'vuex'
import { UNIT_LABEL } from '~/consts/data';

export default {
  name: 'IndexPage',
  components: { RotaCard },
  data() {
    return {
      rotes: UNIT_LABEL
    }
  },
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
