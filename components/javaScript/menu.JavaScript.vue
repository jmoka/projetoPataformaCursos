<template >
  <v-app >     
    <v-card class="TextMenu">
      <v-card-title ><b>Menu JS</b></v-card-title>  
    </v-card> 
    <v-card>   
       <v-card-subtitle class="text-red-darken-1">
        <nuxt-link :to=Indice><b>Índeces</b></nuxt-link>
      </v-card-subtitle>
    </v-card> 
    <v-container>
      <v-expansion-panels >
      <v-expansion-panel v-for="item in lista" :key="item.id">
        <v-expansion-panel-header >              
          <b >{{ item.name }}</b>          
        </v-expansion-panel-header>
        <!-- Subitens -->
        <v-expansion-panel-content  v-if="item.open">
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

    </v-container>
 
  </v-app>
</template>

<script>
import LgoJS from "@/components/logoJSCapa.vue";
export default {
  name: "Index",
  data() {
    return {
      Indice: "/javaScriptPage/introducao/indeces",
      lista: [
        {
          id: 1,
          name: "Introdução",
          page: "",
          open: true,
          subItems: [
            { id: 1, name: "JavaScript?", page: "/javaScriptPage/introducao/OQueEjavascript"},
            { id: 2, name: "História e Evolução", page: "/javaScriptPage/introducao/historiaJS"},
            { id: 3, name: "Instalação", page: "/javaScriptPage/introducao/instalacaoJS"},
            { id: 4, name: "Primeiro Script", page: "/javaScriptPage/introducao/primeiroScript"}
          ]
        },
        {
          id: 2,
          name: "Sintaxe e Tipos de Dados",
          page: "",
          open: true,
          subItems: [
            { id: 1, name: "Sintaxe Básica", page: "/javaScriptPage/sintax_TiposDados/sintaxBasica" },
            { id: 2, name: "Dados Primitivos", page: "/javaScriptPage/sintax_TiposDados/dadosPrimitivos" },
            { id: 3, name: "Dados Complexos", page: "/javaScriptPage/sintax_TiposDados/dadosComplexos" },
            { id: 4, name: "Conversão de Tipos", page: "/javaScriptPage/sintax_TiposDados/ConversaoDeTipos" }
          ] 
        },
        {
          id: 3,
          name: "Instalação",
          page: "/instalacao",
          open: true,
          subItems: []
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
    LgoJS
  }
};
</script>

<style scoped>
.TextMenu {

 background-color: #E38108;
}
.TextItens {
 color:#894200;  
}

.TextSubItens {
 color:Black;  
}
.full {
  margin:0 !important;
  padding: 0 !important;
  border: none;
}
</style>
