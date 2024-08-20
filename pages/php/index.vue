<template>
  <v-app>
    <v-layout>
      <v-navigation-drawer permanent v-model="drawer">
        <Menu />
      </v-navigation-drawer>
      <v-main>      
        <v-container class="d-flex justify-center align-center">
          <Logo />
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>
<script>
import Logo from "~/components/img/logoPHP.vue"
import Menu from "~/components/php/menuPHP.vue"
export default {
  name: "Index",

  components: {
    Logo,
    Menu
  }
};
</script>


<style scoped></style>
