<template>
  <v-row justify="center">
    <v-dialog
      v-model="showDialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon color="grey lighten-1">mdi-information</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="showDialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ unit.pib }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              disabled
              dark
              text
              @click="showDialog = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-row>
          <v-col
            md="6"
            offset-md="3"
          >
            <v-simple-table>
              <template v-slot:default>
                <tbody>
                <tr>
                  <td>Посада</td>
                  <td>{{ unit.position }}</td>
                </tr>
                <tr>
                  <td>Звання</td>
                  <td>{{ unit.rank }}</td>
                </tr>
                <tr>
                  <td>ПІБ</td>
                  <td>{{ unit.pib }}</td>
                </tr>
                <tr>
                  <td>Рота</td>
                  <td>{{ unit.r }}</td>
                </tr>
                <tr>
                  <td>Взвод</td>
                  <td>{{ unit.vzv }}</td>
                </tr>
                <tr>
                  <td>Телефон</td>
                  <td>{{ unit.phone }}</td>
                </tr>
                <tr>
                  <td>TODO Знаходиться на об'єкті</td>
                  <td>12</td>
                </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'UnitInfo',
  props: {
    unit: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showDialog: false
    }
  },
}
</script>

<style scoped>

</style>
