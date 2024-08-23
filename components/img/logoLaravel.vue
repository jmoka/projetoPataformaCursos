<template>
  <nuxt-link  :to="home">
    <v-img class="img"
      src="/icon/laravel.png"      
    ></v-img>
  </nuxt-link >
  </template>
  
  <script>
  export default {
    name: 'LogoLaravel',
    data () {
      return{
        home:"/"
      }
    }
  };
  </script>
  
  <style scoped>
  .img {
    width: auto;  /* Ajuste para a largura desejada */
    height: auto;  /* Mantém a proporção da altura com base na largura */
  }
  </style>
  