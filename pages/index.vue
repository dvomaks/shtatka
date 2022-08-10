<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
      <tr>
        <th class="text-left"/>
        <th class="text-left">
          Офіцери
        </th>
        <th class="text-left">
          Сержанти
        </th>
        <th class="text-left">
          Солдати
        </th>
        <th>
          Разом
        </th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>За списком</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>В лікарні</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>В госпіталі</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>В відряджені</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>В відпустці</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>В наявності</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
      </tr>

      </tbody>
    </template>
  </v-simple-table>
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
