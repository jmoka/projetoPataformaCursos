<template>
    <v-app>
      <v-app-bar app fixed>
        <v-container fluid>
          <v-row aligh="center">
          <!-- Logo Column (Aligned to the Left) -->
          <v-col class="pt-5" cols="2">
            <Logo />
          </v-col>
  
          <!-- Centralized Navigation Items (Aligned to the Right and Centered) -->
          <v-col cols="8" class="d-flex justify-center">
            <v-list class="d-flex justify-center corFundoBarra pl-16">
              <v-list-item
                v-for="item in cursos"
                :key="item.id"
                class="d-flex justify-center align-center"
              >
                <nuxt-link :to="item.to" class="no-wrap text-center">
                  {{ item.name }}
                </nuxt-link>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="2" class="d-flex justify-end align-start">
            <v-switch class="pt-5" v-model="isDarkTheme" label="Dark"></v-switch>
          </v-col>
        </v-row>
        </v-container>        
      </v-app-bar>
      <v-main>
      <Nuxt />
    </v-main>
    </v-app>
  </template>
  
  <script>
  import Logo from '~/components/img/logoJota.vue';
  
  export default {
    name: 'defaultPC',
    data() {
      return {
        isDarkTheme: false,
        cursos: [
          { id: 1, name: 'Java Script', to: '/javaScriptPage' },
          { id: 2, name: 'PHP', to: '/phpPage' },
          { id: 3, name: 'CSS', to: '/cssPage' },
          { id: 4, name: 'HTML', to: '/htmlPage' },
          { id: 5, name: 'Node', to: '/nodePage' },
          { id: 6, name: 'Vue.js', to: '/vuePage' },
          { id: 7, name: 'Vuetify', to: '/vuetifyPage' },
          { id: 8, name: 'Vuex', to: '/vuexPage' },
          { id: 9, name: 'Nuxt', to: '/nuxtPage' },
          { id: 10, name: 'Docker', to: '/dockerPage' },
        ],
      };
    },
    components: {
      Logo,
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
  .no-wrap {
    white-space: nowrap;
  }
  .text-center {
    text-align: center;
  }
  .v-toolbar__content {
    width: 100% !important;
  }
  </style>
  