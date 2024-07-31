<template>
  <v-app>
    <v-app-bar color="primary" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Menu dos Cursos</v-toolbar-title>
      <v-spacer></v-spacer>
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
                <v-contaiiner>
                  <v-avatar :size="size" rounded="circle">
                   <v-img :src='item.src'></v-img>
                  </v-avatar>
                </v-contaiiner>               
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
      size:{
          type:[Number, String],
          default:64
      },
      cursos: [
        { id: 1, 
          name: 'Java Script', 
          to: '/javaScriptPage', 
          icon:'j', 
          src:"/icoJota50.png"   
        },
        { id: 2,
          name: 'CSS', 
          to: '/cssPage', 
          icon:'c', 
          src:"/vv.png"   
       },
        { id: 3, 
          name: 'HTML', 
          to: '/htmlPage', 
          icon:'h', 
          src:"/icoJota50.png"   
          },
        { id: 4, 
          name: 'Node', 
          to: '/nodePage', 
          icon:'n', 
          src:"/icoJota50.png"   
        },
        { id: 5, 
          name: 'Vue.js', 
          to: '/vuePage', 
          icon:'v', 
          src:"/icoJota50.png"   
        },
        { 
          id: 6, 
          name: 'Vuetify', 
          to: '/vuetifyPage', 
          icon:'vt', 
          src:"/icoJota50.png"   
         },
        { id: 7, 
          name: 'Vuex', 
          to: '/vuexPage', 
          icon:'vx', 
          src:"/icoJota50.png"   
          },
        { 
          id: 8, 
          name: 'Nuxt', 
          to: '/nuxtPage' , 
          icon:'nx', 
          src:"/icoJota50.png"   
        },
        { 
          id: 9, 
          name: 'Docker', 
          to: '/dockerPage', 
          icon:'d', 
          src:"/icoJota50.png"   
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
.circle{
  border-radius: 50%;
  overflow:hidden

}
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
