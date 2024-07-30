<template>
  <v-app>
    <v-app-bar color="primary" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Menu dos Cursos</v-toolbar-title>
      <v-spacer></v-spacer>
    <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app >
      <v-card text-right class="pa-0">
        <Logo/>
        <v-card-subtitle class="text-right pt-0">
            Cursos On-Line
          </v-card-subtitle>
      </v-card>      
      <v-container>
        <v-card>
          <v-expansion-panels>
            <v-expansion-panel v-for="item in cursos" :key="item.id">
              <v-expansion-panel-header>
                <template v-slot:prepend>
                  <v-avatar left>
                    <img src="https://cdn.vuetifyjs.com/images/john.png" alt="avatar">
                  </v-avatar>
                </template>
                <span>{{ item.name }}</span>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <nuxt-link :to="item.to">Go to {{ item.name }} page</nuxt-link>
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
import Logo from '@/components/logoJota.vue';
export default {
  name: 'defaultPC',
  components:{
    Logo
  },
  data() {
    return {
      drawer: false,
      isDarkTheme: false,
      cursos: [
        { id: 1, name: 'Java Script', to: '/javaScriptPage' },
        { id: 2, name: 'CSS', to: '/cssPage' },
        { id: 3, name: 'HTML', to: '/htmlPage' },
        { id: 4, name: 'Node', to: '/nodePage' },
        { id: 5, name: 'Vue.js', to: '/vuePage' },
        { id: 6, name: 'Vuetify', to: '/vuetifyPage' },
        { id: 7, name: 'Vuex', to: '/vuexPage' },
        { id: 8, name: 'Nuxt', to: '/nuxtPage' },
        { id: 9, name: 'Docker', to: '/dockerPage' },
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
.toolbar-title {
  background-color: #E38018; /* Define a cor de fundo como primary */
  color: white; /* Define a cor do texto como branca para contraste */
  padding: 16px; /* Adiciona padding em todos os lados */
  text-align: center;
  height: 100%; /* Faz com que o título ocupe a altura total do app-bar */
  display: flex;
  align-items: center; /* Alinha o texto verticalmente ao centro */
}
</style>
