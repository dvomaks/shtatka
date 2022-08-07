<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
        >
          Import
        </v-btn>
      </template>

      <v-card>
        <v-file-input
          v-model="file"
          truncate-length="10"
        />

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="importAction"
          >
            Import
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'ImportFile',
  data: () => ({
    dialog: false,
    file: null
  }),
  methods: {
    ...mapActions({
      importFile: 'localStorage/importFile'
    }),
    importAction () {
      if (this.file) {
        this.importFile(this.file)
      }

      this.dialog = false
    }
  }
}
</script>

<style scoped>

</style>
