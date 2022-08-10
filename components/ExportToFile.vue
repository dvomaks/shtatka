<template>
  <v-btn
    @click="exportToFile"
  >
    Export
  </v-btn>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'

const exportToFile = function (content, fileName, contentType) {
  const a = document.createElement("a");
  const file = new Blob([content], {type: contentType});
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}

export default {
  name: 'ExportToFile',
  computed: {
    ...mapGetters({
      shtat: 'localStorage/shtat'
    }),
  },
  methods: {
    exportToFile() {
      const dateTime = moment().format('YYYY-MM-DD HH_mm_ss')
      exportToFile(JSON.stringify(this.shtat), `${dateTime} shtatka.json`, 'text/plain')
    }
  }
}
</script>

<style scoped>

</style>
