<template>
  <v-app>
    <v-card class="TextMenu">
      <v-card-title><b>Menu JS</b></v-card-title>
    </v-card>
    <v-card>
      <v-card-subtitle class="text-red-darken-1">
        <nuxt-link :to=Indice><b>ÍNDICE</b></nuxt-link>
      </v-card-subtitle>
    </v-card>
    <v-container>
      <v-expansion-panels>
        <v-expansion-panel v-for="item in lista" :key="item.id">
          <v-expansion-panel-header>
            <b>{{ item.name }}</b>
          </v-expansion-panel-header>
          <!-- Subitens -->
          <v-expansion-panel-content v-if="item.open">
            <v-list-item-group>
              <v-list-item v-for="subItem in item.subItems" :key="subItem.id" >
                <nuxt-link :to="subItem.page">
                  {{ subItem.name }}
                </nuxt-link>
              </v-list-item>
            </v-list-item-group>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </v-app>
</template>
<script>
import LgoJS from "~/components/img/logoJSCapa.vue";
export default {
  name: "menuJS",
  data() {
    return {
      Indice: "/js/indeces",
      lista: [
        {
          id: 1,
          name: "Introdução",
          page: "",
          open: true,
          subItems: [
            { id: 1, name: "JavaScript?", page: "/js/M1_Introducao/OQueEjavascript" },
            { id: 2, name: "História e Evolução", page: "/js/M1_Introducao/historiaJS" },
            { id: 3, name: "Paradígma", page: "/js/M1_Introducao/paradigmas" },
          ]
        },
        {
          id: 2,
          name: "Instalação",
          page: "",
          open: true,
          subItems: [
            { id: 1, name: "Instalação", page: "/js/M2_Instalacao/instalacaoJS" },
            { id: 2, name: "Visual Studio", page: "/js/M2_Instalacao/vscode" },
            { id: 3, name: "Node", page: "/js/M2_Instalacao/node" },
            { id: 4, name: "NPM Init", page: "/js/M2_Instalacao/npm_init" },
            { id: 5, name: "Configurar VS-Code", page: "/js/M2_Instalacao/configvscode" },
            { id: 6, name: "Primeiro Script", page: "/js/M2_Instalacao/primeiroScript" },


          ]
        },
        {
          id: 3,
          name: "Sintaxe e Dados",
          page: "",
          open: true,
          subItems: [
            { id: 1, name: "Modo Restrito ", page: "/js/M3_SintaxeBasica/useStrict" },
            { id: 2, name: "Congelar Objeto ", page: "/js/M3_SintaxeBasica/congalarObjetos" },
            { id: 3, name: "Variáveis", page: "/js/M3_SintaxeBasica/variaveis" },
            { id: 4, name: "Tipos de dados", page: "/js/M3_SintaxeBasica/tipoDeDados" },
            { id: 5, name: "Conversão de Tipos", page: "/js/M3_SintaxeBasica/conversaoDeTipos" },
            { id: 6, name: "Operadores", page: "/js/M3_SintaxeBasica/operadores" },
            { id: 7, name: "Comentários", page: "/js/M3_SintaxeBasica/comentarios" },
            { id: 8, name: "Entrada de Dados", page: "/js/M3_SintaxeBasica/entradaDados" },
            { id: 9, name: "Concatenação ", page: "/js/M3_SintaxeBasica/concatenacao" },
            { id: 10, name: "Interpolacao ", page: "/js/M3_SintaxeBasica/interpolacao" },
          ]
        },
        {
          id: 4,
          name: "Estruturas de Controles",
          page: "",
          open: true,
          subItems: [
            { id: 1, name: "Condicionais", page: "/js/M4_EstruturaDeControle/condicionais" },
            { id: 2, name: "Controle", page: "/js/M4_EstruturaDeControle/estruturasControle", },
            { id: 3, name: "Funções", page: "/js/sintax_TiposDados/funcoes" },
            { id: 4, name: "Arrays", page: "/js/sintax_TiposDados/arrays" },
            { id: 5, name: "Objetos", page: "/js/sintax_TiposDados/objetos" },
            { id: 6, name: "Manipulação", page: "/js/sintax_TiposDados/manipulacaoDoDom" },
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

.d {
  margin: 0;
  padding: 0;
}
</style>
