<template>
  <v-app>
    <v-container fliuid>
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <h1>Curso Completo de JavaScript e Ferramentas Vue</h1>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <h4>Aprimore suas habilidades com Vue.js, Vuex, Nuxt, CSS, HTML e Docker</h4>
        </v-col>
        <v-col class="d-flex justify-center">
          <!-- <LogoJS class='imgSize'/>          -->
          <v-img src="/icon/js.png" :width="300" :height="300" contain></v-img>        
        </v-col>
        <v-col class="d-flex justify-center">
          <!-- <LogoJS class='imgSize'/>          -->
          <v-img src="/icon/vue.png" :width="300" :height="300" contain></v-img>        
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <p>
            Desenvolva sua expertise em front-end com nosso curso completo de JavaScript e ferramentas Vue. Aprenda a
            criar interfaces reativas com Vue.js, gerenciar estados complexos com Vuex e implementar renderização do
            lado do servidor com Nuxt. Inclui também módulos detalhados de CSS, HTML e Docker. Projetado para iniciantes
            e desenvolvedores experientes, nosso curso oferece uma experiência prática para transformar seu conhecimento
            em aplicações web robustas e modernas.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>

export default {
  name: 'IndexPage', 
};
</script>
<style>
.imgSize c {
  /* size: auto; */
  height: 30px;
  width: 10px;
}


</style>
