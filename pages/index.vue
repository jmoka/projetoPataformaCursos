<template>
  <v-app :class="isDarkTheme">
 
    <v-container fliuid>
      <v-row>   
        <v-col cols="12" class="d-flex justify-center">          
          <h1>Curso Completo de JavaScript e Ferramentas Vue</h1>
        </v-col>    
        <v-col cols="12" class="d-flex justify-center">          
          <h4>Aprimore suas habilidades com Vue.js, Vuex, Nuxt, CSS, HTML e Docker</h4>
        </v-col>  
        <v-col cols="6" class="d-flex justify-center">          
          <LogoJS class='imgSize'/>         
        </v-col>
        <v-col cols="6" class="d-flex justify-center">
          <LogoVue />  
        </v-col>
        <v-col cols="12" class="d-flex justify-center">          
          <h3>
            Desenvolva sua expertise em front-end com nosso curso completo de JavaScript e ferramentas Vue. Aprenda a criar interfaces reativas com Vue.js, gerenciar estados complexos com Vuex e implementar renderização do lado do servidor com Nuxt. Inclui também módulos detalhados de CSS, HTML e Docker. Projetado para iniciantes e desenvolvedores experientes, nosso curso oferece uma experiência prática para transformar seu conhecimento em aplicações web robustas e modernas.
          </h3>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import LogoJS from '../components/logoJSCapa.vue';
import LogoVue from '../components/logovue.vue';
export default {
  name: 'IndexPage',
  components:{
    LogoJS,
    LogoVue
  },
};
</script>

<style>

</style>
