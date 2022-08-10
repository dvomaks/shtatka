<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      clipped-left
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-icon>mdi-theme-light-dark</v-icon>
      </v-btn>
      <v-spacer />
      <search-unit
        v-if="!$vuetify.breakpoint.smAndDown"
        class="mt-6"
      />
      <template
        v-if="$vuetify.breakpoint.smAndDown"
        v-slot:extension
      >
        <search-unit class="mt-6" />
      </template>
      <v-spacer />
      <export-to-file />
      <import-file />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      absolute
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import ImportFile from "../components/ImportFile";
import ExportToFile from "../components/ExportToFile";
import SearchUnit from "../components/SearchUnit";

export default {
  name: 'DefaultLayout',
  components: {SearchUnit, ExportToFile, ImportFile},
  data () {
    return {
      clipped: false,
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Батальйон',
          to: '/'
        },
        {
          icon: 'mdi-apps',
          title: 'Роти',
          to: '/rotes'
        },
        {
          icon: 'mdi-apps',
          title: 'Взводи',
          to: '/vzvods'
        }
      ],
      title: 'Vuetify.js'
    }
  }
}
</script>
