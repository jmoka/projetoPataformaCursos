<template>
    <v-app>
    <v-layout>
      <v-navigation-drawer permanent v-model="drawer">
        <Menu />
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
import LgoJS from "~/components/img/logoJSCapa.vue"
import Menu from "@/components/javaScript/menu.JavaScript.vue"
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
    LgoJS,
    Menu
  }
};
</script>


<style scoped>
</style>
