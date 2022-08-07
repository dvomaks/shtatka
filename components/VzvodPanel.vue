<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      {{ title }}
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-row>
        <v-col cols="6">
          <v-card
              class="mx-auto"
              max-width="500"
            >
              <v-toolbar
                color="deep-purple accent-4"
                dark
              >
                <v-toolbar-title>В наявності</v-toolbar-title>
              </v-toolbar>

              <v-list subheader>
                <v-subheader>Взвод</v-subheader>
                <v-list-item-group>
                  <v-list-item
                    v-for="voin in vzvod"
                    :key="voin.num_shtat"
                  >
                    <v-list-item-content>
                      <v-list-item-title v-text="voin.pib"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>

              <v-divider></v-divider>

              <v-list subheader>
                <v-subheader>Приряджені</v-subheader>
                <v-list-item
                  v-for="chat in previous"
                  :key="chat.title"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="chat.title"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
        </v-col>
        <v-col cols="6">
          <v-row>
            <v-col cols="12">
              <v-card
                class="mx-auto"
                max-width="500"
              >
                <v-toolbar
                  color="indigo accent-4"
                  dark
                >
                  <v-toolbar-title>В відрядженні в інші роти</v-toolbar-title>
                </v-toolbar>
                <v-list>
                  <v-list-item
                    v-for="chat in previous"
                    :key="chat.title"
                  >
                    <v-list-item-content>
                      <v-list-item-title v-text="chat.title"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card
                class="mx-auto"
                max-width="500"
              >
                <v-toolbar
                  color="indigo accent-4"
                  dark
                >
                  <v-toolbar-title>В відрядженні</v-toolbar-title>
                </v-toolbar>
                <v-list>
                  <v-list-item
                    v-for="chat in previous"
                    :key="chat.title"
                  >
                    <v-list-item-content>
                      <v-list-item-title v-text="chat.title"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card
                class="mx-auto"
                max-width="500"
              >
                <v-toolbar
                  color="indigo accent-4"
                  dark
                >
                  <v-toolbar-title>В відпустці</v-toolbar-title>
                </v-toolbar>
                <v-list>
                  <v-list-item
                    v-for="chat in previous"
                    :key="chat.title"
                  >
                    <v-list-item-content>
                      <v-list-item-title v-text="chat.title"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
            <v-col cols="12">
              <v-card
                class="mx-auto"
                max-width="500"
              >
                <v-toolbar
                  color="indigo accent-4"
                  dark
                >
                  <v-toolbar-title>В лікарні</v-toolbar-title>
                </v-toolbar>
                <v-list>
                  <v-list-item
                    v-for="chat in previous"
                    :key="chat.title"
                  >
                    <v-list-item-content>
                      <v-list-item-title v-text="chat.title"></v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
export default {
  name: 'VzvodPanel',
  props: {
    vzvod: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    recent: [
      {
        active: true,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Jason Oner',
      },
      {
        active: true,
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Mike Carlson',
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Cindy Baker',
      },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Ali Connors',
      },
    ],
    previous: [{
      title: 'Travis Howard',
      avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
    }],
    warriors: []
  }),
  computed: {
    title() {
      return this.vzvod[0]['r'] + ' - ' + this.vzvod[0]['vzv']
    },
  }
}
</script>

<style scoped>

</style>
