<template>
  <v-app ajsutePagina>
    <v-card class="TextMenu">
      <v-card-title><b>Menu PHP</b></v-card-title>
    </v-card>
    <v-card>
      <v-card-subtitle class="text-red-darken-1">
        <nuxt-link :to=Indice><b>Índeces</b></nuxt-link> <br><br>
        <nuxt-link :to=CodePHP><b>Código PHP</b></nuxt-link>
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
            <v-list-item v-for="subItem in item.subItems" :key="subItem.id">
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

export default {
  name: "menuPHP",
  data() {
    return {
      Indice: "/php/indices",
      CodePHP: "/php/codePHP",
      lista: [
        {
          id: 1,
          name: "Introdução",
          page: "",
          open: true,
          subItems: [
            { id: 1, name: "Apresentação", page: "/php/M1_Introducao/apresentacao" },
            { id: 2, name: "O que é PHP", page: "/php/M1_Introducao/historiaJS" },
          ]
        },
        {
          id: 2,
          name: "Instalação",
          page: "",
          open: true,
          subItems: [
            { id: 1, name: "Xampp", page: "/php/M2_instalacao/xampp" },
            { id: 2, name: "Visual Studio", page: "/php/M2_instalacao/vscode" },
            { id: 5, name: "Configurar VS-Code", page: "/php/M2_instalacao/configvscode" },
            { id: 6, name: "Primeiro Script", page: "/php/M2_instalacao/primeiroScript" },
          ]
        },
        {
          id: 3,
          name: "Sintax  Básicas",
          page: "",
          open: true,
          subItems: [
            { id: 1, name: "Script PHP", page: "/php/M3_SintaxBasica/sintaxPHP" },
            { id: 2, name: "Variáveis", page: "/php/M3_SintaxBasica/variavaisPHP" },
            { id: 3, name: "Tipos de Dados", page: "/php/M3_SintaxBasica/tiposDeDadosPHP" },
            { id: 4, name: "Operadores", page: "/php/M3_SintaxBasica/operadoresPHP" },
            { id: 5, name: "Comentários no Código", page: "/php/M3_SintaxBasica/comentariosPHP" },
            { id: 6, name: "Quebra de Linha", page: "/php/M3_SintaxBasica/quebraDeLinhaPHP" },
            { id: 7, name: "Concatenação de Strings", page: "/php/M3_SintaxBasica/concatenacao" },
            { id: 7, name: "VerificacaoTipos", page: "/php/M3_SintaxBasica/verificacaoTipos" },

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
