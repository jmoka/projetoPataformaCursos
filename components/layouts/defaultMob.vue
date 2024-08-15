<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon class="fundoIcon" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="textColor"> Menu dos Cursos</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-col class="d-flex justify-center align-center">
        <v-switch class="pt-5" v-model="isDarkTheme" label="Dark"></v-switch>
      </v-col>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-card text-right class="pa-0">
        <Logo />
        <v-card-subtitle class="text-right pt-0">
          Cursos On-Line
        </v-card-subtitle>
      </v-card>
      <v-container class="full">
        <v-card>
          <v-expansion-panels>
            <v-expansion-panel v-for="item in cursos" :key="item.id">
              <v-expansion-panel-header>
                <v-contaiiner>
                  <v-avatar>
                    <v-img :src='item.src'></v-img>
                  </v-avatar>
                </v-contaiiner>
                <span class="textColor">{{ item.name }}</span>
              </v-expansion-panel-header>
              <v-expansion-panel-content class="full">
                <MenuJs v-if="item.name === 'Java Script'" class="full" />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-card>
      </v-container>
    </v-navigation-drawer>

    <v-main>

      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Logo from '~/components/img/logoJota.vue';
import MenuJs from '@/components/javaScript/menu.JavaScript.vue'



export default {
  name: 'defaultPC',
  components: {
    Logo,
    MenuJs
  },
  data() {
    return {
      drawer: false,
      isDarkTheme: false,
      cursos: [
        {
          id: 1,
          name: 'Java Script',
          to: '/javaScriptPage',
          icon: 'j',
          src: "/icon/js.png",


        },
        {
          id: 2,
          name: 'CSS',
          to: '/cssPage',
          icon: 'c',
          src: "/icon/css.png",

        },
        {
          id: 3,
          name: 'HTML',
          to: '/htmlPage',
          icon: 'h',
          src: "/icon/html.png",

        },
        {
          id: 4,
          name: 'Node',
          to: '/nodePage',
          icon: 'n',
          src: "/icon/node.png",

        },
        {
          id: 5,
          name: 'Vue.js',
          to: '/vuePage',
          icon: 'v',
          src: "/icon/vue.png",

        },
        {
          id: 6,
          name: 'Vuetify',
          to: '/vuetifyPage',
          icon: 'vt',
          src: "/icon/vuetify.png",

        },
        {
          id: 7,
          name: 'Vuex',
          to: '/vuexPage',
          icon: 'vx',
          src: "/icon/vuex.png",

        },
        {
          id: 8,
          name: 'Nuxt',
          to: '/nuxtPage',
          icon: 'nx',
          src: "/icon/nuxt.png",

        },
        {
          id: 9,
          name: 'Docker',
          to: '/dockerPage',
          icon: 'd',
          src: "/icon/docker.png",

        },
      ],
    };
  },
  watch: {
    isDarkTheme(val) {
      this.$vuetify.theme.dark = val; // Alterna o tema quando o valor de isDarkTheme muda
      localStorage.setItem('isDarkTheme', val); // Armazena a preferência do usuário no localStorage
    },
  },
  mounted() {
    const savedTheme = localStorage.getItem('isDarkTheme');
    if (savedTheme !== null) {
      this.isDarkTheme = JSON.parse(savedTheme); // Recupera e aplica a preferência do usuário do localStorage
      this.$vuetify.theme.dark = this.isDarkTheme;
    }
  },
};
</script>

<style scoped>
.full {
  margin: 0 !important;
  padding: 0 !important;
}

.textColor {
  color: #E38108;
}

.fundoIcon {

  background-color: #E38108;
}
</style>
