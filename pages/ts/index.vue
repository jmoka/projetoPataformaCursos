<template>
  <v-app ajsutePagina>
    <v-layout>
      <v-navigation-drawer app>
        <Menu />
      </v-navigation-drawer>
      <v-main>
        <div class="center">
          <Logo />
        </div>
      </v-main>
    </v-layout>
  </v-app>
</template>
<script>
import Logo from "@/components/img/logoTS.vue"
import Menu from "@/components/ts/menuTS.vue"
export default {
  name: "Index",

  components: {
    Logo,
    Menu
  }
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>