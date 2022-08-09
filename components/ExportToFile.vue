<template>
  <v-btn
    @click="exportToFile"
  >
    Export
  </v-btn>
</template>

<script>
import { mapGetters } from 'vuex'

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
      exportToFile(JSON.stringify(this.shtat), 'json.json', 'text/plain')
    }
  }
}
</script>

<style scoped>

</style>
