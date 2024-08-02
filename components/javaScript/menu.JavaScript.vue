<template >
  <v-app >     
    <v-card>
      <v-card-title ><b>Menu</b></v-card-title>
    </v-card>  
    
    <v-expansion-panels >
      <v-expansion-panel v-for="item in lista" :key="item.id">
        <v-expansion-panel-header >              
          <b>{{ item.name }}</b>          
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
  </v-app>
</template>

<script>
import LgoJS from "@/components/logoJSCapa.vue";
export default {
  name: "Index",
  data() {
    return {
      lista: [
        {
          id: 1,
          name: "Introdução",
          page: "",
          open: true,
          subItems: [
            { id: 1, name: "Vamos Iniciar", page: "/javaScriptPage/introducao" },
            { id: 2, name: "JavaScript?", page: "/javaScriptPage/OQueEjavascript" },
            { id: 3, name: "História e Evolução", page: "/javaScriptPage/historiaJS" }
          ]
        },
        {
          id: 2,
          name: "Sintaxe e Tipos de Dados",
          page: "",
          open: true,
          subItems: [
            { id: 1, name: "Sintaxe Básica", page: "/javaScriptPage/sintax" },
            { id: 2, name: "Dados Primitivos", page: "/javaScriptPage/dadosPrimitivos" },
            { id: 3, name: "Dados Complexos", page: "/javaScriptPage/dadosComplexos" },
            { id: 4, name: "Conversão de Tipos", page: "/javaScriptPage/conversaoTipos" }
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
.subitens {
  width: 200px
  
}
.full {
  margin:0 !important;
  padding: 0 !important;
  border: none;
}
</style>
