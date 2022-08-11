<template>
  <v-data-table
    :headers="staffHeaders"
    :items="staffData"
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    item-key="placeLabel"
    class="elevation-1"
    show-expand
    hide-default-footer
  >
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
        <template>
          <v-container>
            <v-card>
              <v-data-table
                :headers="listHeaders"
                :items="item.list"
                item-key="num_key"
              >
                <template v-slot:item.actions="{ item }">
                  <v-row
                    align="center"
                    justify="space-around"
                  >
                    <unit-move-btn :unit="item" />
                    <unit-info-btn :unit="item" />
                  </v-row>
                </template>
              </v-data-table>
            </v-card>
          </v-container>
        </template>
      </td>
    </template>
  </v-data-table>
</template>

<script>
import {SELECT_OPTIONS} from "../../consts/places"
import {rankCount} from "../../utils"
import UnitListItem from "../UnitListItem";
import UnitMoveBtn from "../UnitMoveBtn";
import UnitInfoBtn from "../UnitInfoBtn";

export default {
  name: "StaffTable",
  components: {UnitInfoBtn, UnitMoveBtn, UnitListItem},
  data() {
    return {
      expanded: [],
      singleExpand: false,
      staffHeaders: [
        { text: ' ', value: 'placeLabel', sortable: false },
        { text: 'Офіцери', value: 'officers', sortable: false },
        { text: 'Сержанти', value: 'sergeants', sortable: false },
        { text: 'Солдати', value: 'soldiers', sortable: false },
        { text: 'Разом', value: 'total', sortable: false }
      ],
      listHeaders: [
        { text: ' ', value: 'num_shtat' },
        { text: 'Звання', value: 'rank' },
        { text: 'ПІБ', value: 'pib' },
        { text: '', value: 'actions' }
      ]
    }
  },
  props: {
    staff: {
      type: Array,
      required: true
    }
  },
  computed: {
    staffData () {
       return SELECT_OPTIONS.map(el => {
         const list = this.staff.filter(v => {
           const place = v.place === undefined ? null : v.place
           return place === el.value
         })
         const count = rankCount(list)
         return {
           placeLabel: el.text,
           list: list,
           officers: count.officers,
           sergeants: count.sergeants,
           soldiers: count.soldiers,
           total: count.officers + count.sergeants + count.soldiers
         }
       })
    }
  }
}
</script>

<style scoped>

</style>
