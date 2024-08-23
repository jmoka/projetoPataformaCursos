<template>
  <v-app ajsutePagina>
    <v-navigation-drawer app>
      <Menu />
    </v-navigation-drawer>
    <div>
      <v-main>
        <div class="center">
          <LgoJS />
        </div>

      </v-main>
    </div>


  </v-app>
</template>

<script>
import LgoJS from "@/components/img/logoJSCapa.vue"
import Menu from "@/components/js/menuJS.vue"
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
              page: "/js/introducao"
            },
            {
              id: 2,
              name: "O que é JavaScript?",
              page: "/js/o-que-e-javascript"
            },
            {
              id: 3,
              name: "História e Evolução",
              page: "/js/historia-e-evolucao"
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
  components: {
    LgoJS,
    Menu // Adicione o componente Menu aqui
  }
};
</script>



<style scoped>
.video {
  max-width: 70%;
  max-height: 70%;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>