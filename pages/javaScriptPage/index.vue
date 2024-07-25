<template>
  <v-app class="theme--dark">
    <v-layout>
      <v-navigation-drawer permanent v-model="drawer">
        <v-card>
          <v-card-title>Aulas JavaScript</v-card-title>
        </v-card>
        <v-list>
          <v-list-item-group v-for="item in lista" :key="item.id">
            <v-list-item @click="toggleSubItems(item)">
              <nuxt-link :to="item.page" :style="{ color: title_color }">
                {{ item.name }}
              </nuxt-link>
            </v-list-item>
            <!-- Subitens -->
            <v-list-item-group v-if="item.open">
              <v-list-item v-for="subItem in item.subItems" :key="subItem.id">
                <nuxt-link :to="subItem.page" :style="{ color:  text_color, paddingLeft: '20px' }">
                  {{ subItem.name }}
                </nuxt-link>
              </v-list-item>
            </v-list-item-group>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <v-container class="d-flex justify-center align-center">
          <LgoJS />
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import LgoJS from "@/components/logoJSCapa.vue"
export default {
  name: "Index",
  data() {
    return {
      drawer: false,
      title_color: "blue",
      text_color: "black",
      lista: [
        {
          id: 1,
          name: "Introdução",
          page: "",
          open: true,
          subItems: [
          {
              id: 1,
              name: "Vamons Iniciar",
              page: "/javaScriptPage/introducao"
            },
            {
              id: 2,
              name: "O que é JavaScript?",
              page: "/javaScriptPage/o-que-e-javascript"
            },
            {
              id: 3,
              name: "História e Evolução",
              page: "/javaScriptPage/historia-e-evolucao"
            }
          ]
        },
        {
          id: 2,
          name: "História",
          page: "/historia",
          open: true,
          subItems: [] // Adicione um array vazio para manter a estrutura
        },
        {
          id: 3,
          name: "Instalação",
          page: "/instalacao",
          open: true,
          subItems: [] // Adicione um array vazio para manter a estrutura
        }
      ]
    };
  },
  methods: {
    toggleSubItems(item) {
      item.open = !item.open;
    }
  },
  components:{
    LgoJS
  }
};
</script>


<style scoped>
</style>
