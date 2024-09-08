<template>
  <v-app ajsutePagina>
    <v-card class="TextMenu">
      <v-card-title v-once><b>Menu Vue.js</b></v-card-title>
    </v-card>
    <v-card>
      <v-card-subtitle class="text-red-darken-1">
        <nuxt-link :to="Indice"><b>Índices</b></nuxt-link> <br><br>
        <nuxt-link :to="CodeVue"><b>Código Vue.js</b></nuxt-link> <br><br>
        <a :href="Doc" :target="Target_Novatela"><b>Documentação</b></a>
      </v-card-subtitle>
    </v-card>
    <v-container>
      <v-expansion-panels>
        <!-- Módulo 1: Introdução ao Vue.js -->
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
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "menuVue",
  data() {
    return {
      Indice: "/vue/indices",
      CodeVue: "/vue/codeVue",
      Doc: "https://vuejs.org/",
      Target_Novatela: "_blank",
      lista: [
        {
          id: 1, name: "Introdução", open: true, subItems: [
            { id: 1, name: "O que é Vue.js?", page: "/vue/M1_Introducao/oQueEVue" },
            { id: 2, name: "História", page: "/vue/M1_Introducao/historia" },
            { id: 3, name: "Características", page: "/vue/M1_Introducao/caracteristicas" }
          ]
        },
        {
          id: 2, name: "Instalação", open: true, subItems: [
            { id: 1, name: "Vs. Code.js", page: "/vue/M2_Instalação/vscode" },
            { id: 2, name: "Node.js", page: "/vue/M2_Instalação/node" },
            { id: 3, name: "Vue Cli Vue", page: "/vue/M2_Instalação/vuecli" },
            { id: 4, name: "Configurações", page: "/vue/M2_Instalação/configuracoes" }
          ]
        },
        {
          id: 3, name: "Fundamentos", open: true, subItems: [
            { id: 1, name: "Componentes", page: "/vue/M3_Fundamentos/componentes" },
            { id: 2, name: "Instância Vue", page: "/vue/M3_Fundamentos/instanciaVue" },
          ]
        },
        {
          id: 4, name: "Diretivas", open: true, subItems: [
            { id: 1, name: "V-Bind", page: "/vue/M4_Diretivas/vbind" },
            { id: 2, name: "V-Text", page: "/vue/M4_Diretivas/vtext" },
            { id: 3, name: "V-Once", page: "/vue/M4_Diretivas/vonce" },
            { id: 4, name: "V-Html", page: "/vue/M4_Diretivas/vhtml" },
            { id: 5, name: "V-On", page: "/vue/M4_Diretivas/von" },
            { id: 9, name: "V-Show", page: "/vue/M4_Diretivas/vshow" },
            { id: 10, name: "V-If / Else-If / Else", page: "/vue/M4_Diretivas/if" },
            { id: 11, name: "V-For", page: "/vue/M4_Diretivas/vfor" },
            { id: 12, name: "V-Model", page: "/vue/M4_Diretivas/vmodel" },
            { id: 13, name: "V-Slot", page: "/vue/M4_Diretivas/vslot" },
          ]
        },
        {
          id: 5, name: "Parametros", open: true, subItems: [
            { id: 1, name: "Parametros", page: "/vue/M5_Parametros/passagemDeParametros" },
            { id: 2, name: "Data Binding", page: "/vue/M5_Parametros/dataBinding" }
          ]
        },
        {
          id: 6, name: "Eventos_Modificadores ", open: true, subItems: [
            { id: 1, name: "Eventos", page: "/vue/M6_Eventos_Modificadores/eventos" },
            { id: 2, name: "Modificadores", page: "/vue/M6_Eventos_Modificadores/modificadores" },
            { id: 3, name: "Compudadas", page: "/vue/M6_Eventos_Modificadores/propriedadesComputadas" },
            { id: 4, name: "Watch", page: "/vue/M6_Eventos_Modificadores/watch" }
          ]
        },
        {
          id: 7, name: "Formulários e Validação", open: true, subItems: [
            { id: 1, name: "Formulários", page: "/vue/M6_Formularios/formularios" },
            { id: 2, name: "Validação de Formulários", page: "/vue/M6_Formularios/validacaoFormularios" }
          ]
        },
        {
          id: 8, name: "Vue Router", open: true, subItems: [
            { id: 1, name: "Configuração do Router", page: "/vue/M7_Router/configuracaoRouter" },
            { id: 2, name: "Rotas Aninhadas", page: "/vue/M7_Router/rotasAninhadas" }
          ]
        },
        {
          id: 9, name: "Vuex", open: true, subItems: [
            { id: 1, name: "Introdução ao Vuex", page: "/vue/M8_Vuex/introducaoVuex" },
            { id: 2, name: "Estado e Mutations", page: "/vue/M8_Vuex/estadoMutations" }
          ]
        },
        {
          id: 10, name: "Diretivas Personalizadas", open: true, subItems: [
            { id: 1, name: "Criando Diretivas", page: "/vue/M9_DiretivasPersonalizadas/criandoDiretivas" },
            { id: 2, name: "Usando Diretivas", page: "/vue/M9_DiretivasPersonalizadas/usandoDiretivas" }
          ]
        },
        {
          id: 11, name: "Componentes Dinâmicos e Lazy Loading", open: true, subItems: [
            { id: 1, name: "Componentes Dinâmicos", page: "/vue/M10_ComponentesDinamicos/componentesDinamicos" },
            { id: 2, name: "Lazy Loading", page: "/vue/M10_ComponentesDinamicos/lazyLoading" }
          ]
        },
        {
          id: 12, name: "Mixins e Plugins", open: true, subItems: [
            { id: 1, name: "Mixins", page: "/vue/M11_Mixins/mixins" },
            { id: 2, name: "Plugins", page: "/vue/M11_Mixins/plugins" }
          ]
        },
        {
          id: 13, name: "Transições e Animações", open: true, subItems: [
            { id: 1, name: "Transições", page: "/vue/M12_Transicoes/transicoes" },
            { id: 2, name: "Animações", page: "/vue/M12_Transicoes/animações" }
          ]
        },
        {
          id: 13, name: "Componentes de Classe", open: true, subItems: [
            { id: 1, name: "Componentes de Classe", page: "/vue/M13_ComponentesClasse/componentesClasse" },
            { id: 2, name: "Usando Class API", page: "/vue/M13_ComponentesClasse/usingClassAPI" }
          ]
        },
        {
          id: 14, name: "Vue CLI e Ferramentas", open: true, subItems: [
            { id: 1, name: "Vue CLI", page: "/vue/M14_VueCLI/vueCLI" },
            { id: 2, name: "Ferramentas de Desenvolvimento", page: "/vue/M14_VueCLI/ferramentas" }
          ]
        },
        {
          id: 15, name: "Configuração e Construção", open: true, subItems: [
            { id: 1, name: "Configuração do Projeto", page: "/vue/M15_Configuracao/configuracaoProjeto" },
            { id: 2, name: "Construção do Projeto", page: "/vue/M15_Configuracao/construcaoProjeto" }
          ]
        },
        {
          id: 16, name: "Testes em Vue.js", open: true, subItems: [
            { id: 1, name: "Testes Unitários", page: "/vue/M16_Testes/testesUnitarios" },
            { id: 2, name: "Testes de Integração", page: "/vue/M16_Testes/testesIntegracao" }
          ]
        },
        {
          id: 17, name: "Internacionalização e Localização", open: true, subItems: [
            { id: 1, name: "Configuração de i18n", page: "/vue/M17_Internacionalizacao/configuracaoI18n" },
            { id: 2, name: "Traduções e Formatação", page: "/vue/M17_Internacionalizacao/traducoesFormatacao" }
          ]
        },
        {
          id: 18, name: "Desenvolvimento Mobile com Vue.js", open: true, subItems: [
            { id: 1, name: "Introdução ao Desenvolvimento Mobile", page: "/vue/M18_DesenvolvimentoMobile/introducao" },
            { id: 2, name: "Frameworks e Ferramentas", page: "/vue/M18_DesenvolvimentoMobile/frameworksFerramentas" }
          ]
        },
        {
          id: 19, name: "Segurança em Vue.js", open: true, subItems: [
            { id: 1, name: "Segurança Básica", page: "/vue/M19_Seguranca/segurancaBasica" },
            { id: 2, name: "Proteção contra Vulnerabilidades", page: "/vue/M19_Seguranca/protecaoVulnerabilidades" }
          ]
        },
        {
          id: 20, name: "Desempenho e Otimização", open: true, subItems: [
            { id: 1, name: "Otimização de Performance", page: "/vue/M20_Desempenho/otimizacaoPerformance" },
            { id: 2, name: "Estratégias de Carregamento", page: "/vue/M20_Desempenho/estrategiasCarregamento" }
          ]
        },
        {
          id: 21, name: "Vue.js e APIs", open: true, subItems: [
            { id: 1, name: "Integração com APIs", page: "/vue/M21_APIs/integracaoAPIs" },
            { id: 2, name: "Consumo de Dados", page: "/vue/M21_APIs/consumoDados" }
          ]
        },
        {
          id: 22, name: "Design Patterns em Vue.js", open: true, subItems: [
            { id: 1, name: "Design Patterns Comuns", page: "/vue/M22_DesignPatterns/designPatternsComuns" },
            { id: 2, name: "Aplicando Design Patterns", page: "/vue/M22_DesignPatterns/aplicandoDesignPatterns" }
          ]
        },
        {
          id: 23, name: "Boas Práticas e Estilo de Código", open: true, subItems: [
            { id: 1, name: "Boas Práticas", page: "/vue/M23_BoasPraticas/boasPraticas" },
            { id: 2, name: "Estilo de Código", page: "/vue/M23_BoasPraticas/estiloCodigo" }
          ]
        },
        {
          id: 24, name: "Vue.js e TypeScript", open: true, subItems: [
            { id: 1, name: "Integração com TypeScript", page: "/vue/M24_TypeScript/integracaoTypeScript" },
            { id: 2, name: "Componentes em TypeScript", page: "/vue/M24_TypeScript/componentesTypeScript" }
          ]
        },
        {
          id: 25, name: "Vue.js com Outros Frameworks", open: true, subItems: [
            { id: 1, name: "Integração com React", page: "/vue/M25_OutrosFrameworks/integracaoReact" },
            { id: 2, name: "Integração com Angular", page: "/vue/M25_OutrosFrameworks/integracaoAngular" }
          ]
        },
        {
          id: 26, name: "Documentação e Manutenção", open: true, subItems: [
            { id: 1, name: "Documentando Código", page: "/vue/M26_Documentacao/documentandoCodigo" },
            { id: 2, name: "Manutenção e Atualizações", page: "/vue/M26_Documentacao/manutencaoAtualizacoes" }
          ]
        },
        {
          id: 27, name: "Vue.js e WebAssembly", open: true, subItems: [
            { id: 1, name: "Introdução ao WebAssembly", page: "/vue/M27_WebAssembly/introducao" },
            { id: 2, name: "Integração com Vue.js", page: "/vue/M27_WebAssembly/integracaoVue" }
          ]
        },
        {
          id: 28, name: "Vue.js no Backend", open: true, subItems: [
            { id: 1, name: "Usando Vue.js com Backend", page: "/vue/M28_Backend/usandoVueBackend" },
            { id: 2, name: "Comunicação com o Servidor", page: "/vue/M28_Backend/comunicacaoServidor" }
          ]
        },
        {
          id: 29, name: "Vue.js e Micro Frontends", open: true, subItems: [
            { id: 1, name: "Introdução aos Micro Frontends", page: "/vue/M29_MicroFrontends/introducao" },
            { id: 2, name: "Implementando Micro Frontends", page: "/vue/M29_MicroFrontends/implementando" }
          ]
        },
        {
          id: 30, name: "Vue.js e GraphQL", open: true, subItems: [
            { id: 1, name: "Introdução ao GraphQL", page: "/vue/M30_GraphQL/introducao" },
            { id: 2, name: "Integração com Vue.js", page: "/vue/M30_GraphQL/integracaoVue" }
          ]
        }
      ]
    }
  },
  methods: {
    toggleSubItems(item) {
      item.open = !item.open;
    }
  }
}
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