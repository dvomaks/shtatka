<template>
  <v-row>
    <v-col cols="6">
      <rota-card />
    </v-col>
    <v-col cols="6">
      <rota-card />
    </v-col>
    <v-col cols="6">
      <rota-card />
    </v-col>
    <v-col cols="6">
      <rota-card />
    </v-col>
    <v-col cols="6">
      <rota-card />
    </v-col>
    <v-col cols="6">
      <rota-card />
    </v-col>
    <v-col cols="6">
      <rota-card />
    </v-col>
  </v-row>
</template>

<script>
import RotaCard from '~/components/RotaCard';
export default {
  name: 'IndexPage',
  components: { RotaCard }
}
</script>
