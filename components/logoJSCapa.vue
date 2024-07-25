<template>
  <nuxt-link  :to="home">
    <v-img class="img"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/260px-Unofficial_JavaScript_logo_2.svg.png"      
    ></v-img>
  </nuxt-link >
  </template>
  
  <script>
  
  export default {
    name: 'logoJSCapa.',
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
    height: auto;  /* Mantém a proporção da altura com base na largura */
  }
  </style>
  