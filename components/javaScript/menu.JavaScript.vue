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
          name: "Introdução ao JavaScript",
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
              page: "/javaScriptPage/OQueEjavascript"
            },
            {
              id: 3,
              name: "História e Evolução",
              page: "/javaScriptPage/historiaEvolucao"
            }
          ]
        },
        {
          id: 2,
          name: "Sintaxe e Tipos de Dados",
          page: "",
          open: true,
          subItems: [
          {
              id: 1,
              name: "Sintax Básica",
              page: "/javaScriptPage/sintax"
            },
            {
              id: 2,
              name: "Tipos de Dados Primitivos",
              page: "/javaScriptPage/dadosPrimitivos"
            },
            {
              id: 3,
              name: "Tipos de Dados Complexos",
              page: "/javaScriptPage/dadosComplexos"
            },
            {
              id: 4,
              name: "Conversão de Tipos",
              page: "/javaScriptPage/conversaoTipos"
            },
           
          ] 
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
