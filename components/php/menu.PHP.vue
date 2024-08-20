<template>
  <v-app>
    <v-card class="TextMenu">
      <v-card-title><b>Menu PHP</b></v-card-title>
    </v-card>
    <v-card>
      <v-card-subtitle class="text-red-darken-1 d-flex flex-column">
        <nuxt-link :to=Indice><b>Índeces</b></nuxt-link>
      </v-card-subtitle>
    </v-card>
    <v-expansion-panels>
      <v-expansion-panel v-for="item in lista" :key="item.id">
        <v-expansion-panel-header>
          <b>{{ item.name }}</b>
        </v-expansion-panel-header>
        <!-- Subitens -->
        <v-expansion-panel-content v-if="item.open">
          <v-list-item-group>
            <v-list-item class="full" v-for="subItem in item.subItems" :key="subItem.id">
              <nuxt-link :to="subItem.page">
                {{ subItem.name }}
              </nuxt-link>
            </v-list-item>
          </v-list-item-group>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-app>
</template>
<script>
import LgoJS from "~/components/img/logoJSCapa.vue";
export default {
  name: "menuPHP",
  data() {
    return {
      Indice: "/phpPage/indeces",
      CodigoWeb:"/codeWeb",
      lista: [
        {
          id: 1,
          name: "Introdução",
          page: "",
          open: true,
          subItems: [
            { id: 1, name: "Apresentação", page: "/phpPage/M1_Introducao/apresentacao" },
            { id: 2, name: "O que é PHP", page: "/phpPage/M1_Introducao/historiaJS" },
          ]
        },
        {
          id: 2,
          name: "Instalação",
          page: "",
          open: true,
          subItems: [
            { id: 1, name: "Xampp", page: "/phpPage/M2_instalacao/xampp" },
            { id: 2, name: "Visual Studio", page: "/phpPage/M2_instalacao/vscode" },
            { id: 5, name: "Configurar VS-Code", page: "/phpPage/M2_instalacao/configvscode" },
            { id: 6, name: "Primeiro Script", page: "/phpPage/M2_instalacao/primeiroScript" },
          ]
        },
        {
          id: 3,
          name: "Sintax  Básicas",
          page: "",
          open: true,
          subItems: [
            { id: 1, name: "Script PHP", page: "/phpPage/M3_SintaxBasica/sintaxPHP" },
            { id: 2, name: "Variáveis", page: "/phpPage/M3_SintaxBasica/variavaisPHP" },
            { id: 3, name: "Tipos de Dados", page: "/phpPage/M3_SintaxBasica/tiposDeDadosPHP" },
            { id: 4, name: "Operadores", page: "/phpPage/M3_SintaxBasica/operadoresPHP" },
            { id: 5, name: "Comentários no Código", page: "/phpPage/M3_SintaxBasica/comentariosPHP" },
            { id: 6, name: "Quebra de Linha", page: "/phpPage/M3_SintaxBasica/quebraDeLinhaPHP" },
            { id: 7, name: "Concatenação de Strings", page: "/phpPage/M3_SintaxBasica/concatenacao" },
            { id: 7, name: "VerificacaoTipos", page: "/phpPage/M3_SintaxBasica/verificacaoTipos" },
         
          ]
        },
        {
          id: 4,
          name: "Tipos de dados",
          page: "",
          open: true,
          subItems: [
            { id: 1, name: "Em construção", page: "/#" },
          ]
        },
      ]
    };
  },
  methods: {
    toggleSubItems(item) {
      item.open = !item.open;
    }
  },
  components: {
    LgoJS
  }
};
</script>
<style scoped>
.TextMenu {
  background-color: #E38108;
}
.TextItens {
  color: #894200;
}
.TextSubItens {
  color: Black;
}
.full {
  margin: 0 !important;
  padding: 0 !important;
  border: none;
}
.c {
  max-width: 100%;
}
</style>
