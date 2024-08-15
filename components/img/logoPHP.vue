<template>
  <nuxt-link  :to="home">
    <v-img class="img"
      src="/icon/php.png"      
    ></v-img>
  </nuxt-link >
  </template>
  
  <script>
  export default {
    name: 'LogoVue',
    data () {
      return{
        home:"/"
      }
    }
  };
  </script>
  
  <style scoped>
  .img {
    width: 100%;  /* Ajuste para a largura desejada */
    height:auto;  /* Mantém a proporção da altura com base na largura */
  }
  </style>
  