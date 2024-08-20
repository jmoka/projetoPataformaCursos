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
          <v-col cols="2" class="d-flex justify-space-around justify-center align-center " >
            <nuxt-link :style="linkStyle" :to="CodigoWeb"><b>Código Web</b></nuxt-link>
            <v-switch v-model="isDarkTheme" label="Dark"></v-switch>            
           
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
        CodigoWeb:"/code",
        cursos: [
          { id: 1, name: 'Java Script', to: '/js' },
          { id: 2, name: 'TypeScript', to: '/ts' },
          { id: 3, name: 'PHP', to: '/php' },
          { id: 4, name: 'CSS', to: '/css' },
          { id: 5, name: 'HTML', to: '/html' },
          { id: 6, name: 'Node', to: '/node' },
          { id: 7, name: 'Vue.js', to: '/vue' },
          { id: 8, name: 'Vuetify', to: '/vuetify' },
          { id: 9, name: 'Vuex', to: '/vuex' },
          { id: 10, name: 'Nuxt', to: '/nuxt' },
          { id: 11, name: 'Docker', to: '/docker' },
        ],
      };
    },
    components: {
      Logo,
    },
    computed:{
      linkStyle(){
        return{
            color:this.isDarkTheme ? "green" : "red"
        }
        

      }
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
  .linkColor {
    
    color: greenyellow;
  }  

  </style>
  