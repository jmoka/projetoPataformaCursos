<template>
  <v-app ajsutePagina>
    <v-layout>
      <v-navigation-drawer app>
        <MenuVUE />
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
import Logo from "@/components/img/logovue.vue"
import MenuVUE from '~/components/vue/menuVue.vue'
export default {
  name: "Index",

  components: {
    Logo,
    MenuVUE
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