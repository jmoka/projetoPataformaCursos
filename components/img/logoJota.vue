<template>
  <nuxt-link :to="home">
    <v-img class="img"
      src="https://jotaempresas.com/page/wp-content/uploads/2024/06/logo230x69_sFundo-300x90.png"></v-img>
  </nuxt-link>
</template>

<script>
export default {
  name: 'LogoJota',
  data() {
    return {
      home: "/"
    }
  }
};
</script>

<style scoped>
.img {
  width: 250px;
  /* Ajuste para a largura desejada */
  height: auto;
  /* Mantém a proporção da altura com base na largura */
}
</style>