<template>
  <nuxt-link  :to="home">
    <v-img class="img"
      src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png"      
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
    width: 400px;  /* Ajuste para a largura desejada */
    height: 400px;  /* Mantém a proporção da altura com base na largura */
  }
  </style>
  