<template>
  <v-app>
    <div class="menu">
      <div id="a1">
        <LogoJOTA />
      </div>
      <div id="a2">
        <v-menu v-for="item in cursos" :key="item.id" offset-y>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on">
              <h3>
                <NuxtLink :to="item.to" class="menu-link">
                  {{ item.name }}
                </NuxtLink>
              </h3>
            </div>
          </template>
          <v-list v-if="item.subItems && item.subItems.length">
            <v-list-item v-for="(subItem, subIndex) in item.subItems" :key="subIndex">
              <NuxtLink :to="subItem.to" class="sub-menu-link">
                <v-list-item-title>{{ subItem.name }}</v-list-item-title>
              </NuxtLink>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div id="a3">

        <v-col class="d-flex justify-center align-center">
          <v-switch class="pt-5" v-model="isDarkTheme" label="Dark"></v-switch>
        </v-col>

      </div>
    </div>


    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import LogoJOTA from "@/components/img/logoJota.vue"

export default {

  name: "defaultPC",

  data() {
    return {
      isDarkTheme: false,
      cursos: [
        { id: 1, name: "JavaScript", to: "/js" },
        { id: 2, name: "TypeScript", to: "/ts" },
        {
          id: 3,
          name: "PHP",
          to: "/php",
          subItems: [
            { id: 1, name: "Laravel", to: "/laravel" },
          ],
        },
        { id: 4, name: "GraphQL", to: "/GraphQL" },
        { id: 5, name: "CSS", to: "/css" },
        { id: 6, name: "HTML", to: "/html" },
        { id: 7, name: "Node", to: "/node" },
        {
          id: 9, name: "Vue.js", to: "/vue",
          subItems: [
            { id: 10, name: "Vuetify", to: "/vuetify" },
            { id: 11, name: "Vuex", to: "/vuex" },
            { id: 12, name: "Nuxt", to: "/nuxt" },
          ],
        },
        { id: 13, name: "Docker", to: "/docker" },
      ],
    };
  },
  components: {
    LogoJOTA,
  },
  watch: {
    isDarkTheme(val) {
      this.$vuetify.theme.dark = val; // Alterna o tema quando o valor de isDarkTheme muda
      localStorage.setItem('isDarkTheme', val); // Armazena a preferência do usuário no localStorage
    },
  },
  mounted() {
    const savedTheme = localStorage.getItem('isDarkTheme');
    if (savedTheme !== null) {
      this.isDarkTheme = JSON.parse(savedTheme); // Recupera e aplica a preferência do usuário do localStorage
      this.$vuetify.theme.dark = this.isDarkTheme;
    }
  },
};
</script>

<style scoped>
#a1 {
  width: 250px;
  height: 100%;
  /* border: 1px red solid; */
  display: flex;
  justify-content: center;
  align-items: center;
}

#a3 {
  width: auto;
  height: 100%;
  /* border: 1px red solid; */
  display: flex;
  justify-content: center;
  align-items: center;
}

#a2 {
  display: flex;
  justify-content: space-around;
  padding: 20px 20px;
  width: 100%;
  height: 100%;
  /* border: 1px red solid; */
}

.menu {
  display: flex;
  width: 100%;
  height: 70px;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  border-bottom: 2px orange solid;
  position: fixed;
  z-index: 1000;
  top: 0;
  background-color: aliceblue;

}

.menu::after {
  content: '';
  position: absolute;
  top: 100%;
  /* Posição logo abaixo do elemento fixo */
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  /* Cor de fundo da camada adicional para bloquear o conteúdo */
  z-index: -1;
  /* Faz com que a camada adicional fique abaixo do conteúdo do elemento fixo */
}


.menu-link,
.sub-menu-link {
  text-decoration: none;
  color: inherit;
}
</style>
