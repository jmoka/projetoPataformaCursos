<template>
  <v-app ajsutePagina>
    <v-card class="TextMenu">
      <v-card-title><b>Menu Laravel</b></v-card-title>
    </v-card>
    <v-card>
      <v-card-subtitle class="text-red-darken-1">
        <nuxt-link :to="Indice"><b>ÍNDICE</b></nuxt-link> <br> <br>
        <nuxt-link :to=Code><b>Código Laravel</b></nuxt-link>
      </v-card-subtitle>
    </v-card>
    <v-container>
      <v-expansion-panels>
        <!-- Módulo 1: Introdução ao TypeScript -->
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
import LgoTS from "~/components/img/logoLaravel.vue";
export default {
  name: "menuLaravel",
  data() {
    return {
      Indice: "/laravel/indices",
      Code: "/laravel/codeLaravel",
      lista: [
        {
          id: 1,
          name: "Introdução",
          open: true,
          subItems: [
            { id: 1, name: "TypeScript?", page: "/ts/M1_Introducao/oQueETypeScript" },
            { id: 2, name: "Instalação", page: "/ts/M1_Introducao/instalacaoConfiguracao" },
            { id: 3, name: "TS x JS", page: "/ts/M1_Introducao/diferencasJavaScript" },
          ]
        },
        {
          id: 2,
          name: "Sintaxe e Tipos",
          open: true,
          subItems: [
            { id: 1, name: "Tipos Primitivos", page: "/ts/M2_SintaxeTipos/tiposPrimitivos" },
            { id: 2, name: "Dados Avançados", page: "/ts/M2_SintaxeTipos/tiposDadosAvancados" },
            { id: 3, name: "Union e Intersection", page: "/ts/M2_SintaxeTipos/tiposUnionIntersection" },
          ]
        },
        {
          id: 3,
          name: "Funções",
          open: true,
          subItems: [
            { id: 1, name: "Funções", page: "/ts/M3_Funcoes/funcaoTiposRetorno" },
            { id: 2, name: "Anônimas", page: "/ts/M3_Funcoes/anonimasFunctions" },
            { id: 2, name: "Arrow Functions", page: "/ts/M3_Funcoes/arrowFunctions" },
            { id: 3, name: "Overloading", page: "/ts/M3_Funcoes/overloading" },
          ]
        },
        {
          id: 4,
          name: "Classes e Interfaces",
          open: true,
          subItems: [
            { id: 1, name: "Classes", page: "/ts/M4_ClassesInterfaces/classesBasicas" },
            { id: 2, name: "Polimorfismo", page: "/ts/M4_ClassesInterfaces/polimorfismo" },
            { id: 3, name: "Herança", page: "/ts/M4_ClassesInterfaces/heranca" },
            { id: 4, name: "Interfaces", page: "/ts/M4_ClassesInterfaces/interfacesTipos" },
            { id: 5, name: "Tipos Customizados", page: "/ts/M4_ClassesInterfaces/interfacesTipos" },
          ]
        },
        {
          id: 5,
          name: "Genéricos",
          open: true,
          subItems: [
            { id: 1, name: "Genéricos", page: "/ts/M5_Genericos/introducao" },
            { id: 2, name: "Em Funções", page: "/ts/M5_Genericos/genericosFuncoes" },
            { id: 3, name: "Em Classes", page: "/ts/M5_Genericos/genericosClasses" },
          ]
        },
        {
          id: 6,
          name: "Módulos",
          open: true,
          subItems: [
            { id: 1, name: "Importação", page: "/ts/M6_Modulos/importacao" },
            { id: 2, name: "Exportação", page: "/ts/M6_Modulos/exportacao" },
            { id: 3, name: "Nativose", page: "/ts/M6_Modulos/modulosNativos" },
            { id: 4, name: "Terceiros", page: "/ts/M6_Modulos/modulosTerceiros" },
          ]
        },
        {
          id: 7,
          name: "Programação Assíncrona",
          open: true,
          subItems: [
            { id: 1, name: "Promises", page: "/ts/M7_ProgramacaoAssincrona/promises" },
            { id: 2, name: "Async/Await", page: "/ts/M7_ProgramacaoAssincrona/asyncAwait" },
            { id: 3, name: "Manipular Erros", page: "/ts/M7_ProgramacaoAssincrona/manipulacaoErros" },
          ]
        },
        {
          id: 8,
          name: "Integração com JavaScript",
          open: true,
          subItems: [
            { id: 1, name: "Usando TypeScript com Bibliotecas JavaScript", page: "/ts/M8_IntegraçãoJavaScript/usandoBibliotecas" },
            { id: 2, name: "Integração com Frameworks", page: "/ts/M8_IntegraçãoJavaScript/frameworks" },
          ]
        },
        {
          id: 9,
          name: "Configurações Avançadas",
          open: true,
          subItems: [
            { id: 1, name: "Configuração do TypeScript com Webpack", page: "/ts/M9_ConfigAvancadas/webpack" },
            { id: 2, name: "Configuração com Babel", page: "/ts/M9_ConfigAvancadas/babel" },
            { id: 3, name: "Configuração com ESLint", page: "/ts/M9_ConfigAvancadas/eslint" },
          ]
        },
        {
          id: 10,
          name: "Testes em TypeScript",
          open: true,
          subItems: [
            { id: 1, name: "Testes Unitários com Jest", page: "/ts/M10_Testes/jest" },
            { id: 2, name: "Testes com Mocha e Chai", page: "/ts/M10_Testes/mochaChai" },
          ]
        },
        {
          id: 11,
          name: "Boas Práticas e Estilo",
          open: true,
          subItems: [
            { id: 1, name: "Boas Práticas de Codificação", page: "/ts/M11_BoasPraticas/boasPraticas" },
            { id: 2, name: "Guia de Estilo para TypeScript", page: "/ts/M11_BoasPraticas/guiaEstilo" },
          ]
        },
        {
          id: 12,
          name: "TypeScript com React",
          open: true,
          subItems: [
            { id: 1, name: "Configuração Inicial", page: "/ts/M12_TSReact/configuracaoInicial" },
            { id: 2, name: "Componentes e Props", page: "/ts/M12_TSReact/componentesProps" },
            { id: 3, name: "State e Context API", page: "/ts/M12_TSReact/stateContext" },
          ]
        },
        {
          id: 13,
          name: "TypeScript com Vue",
          open: true,
          subItems: [
            { id: 1, name: "Configuração do Vue com TypeScript", page: "/ts/M13_TSVue/configuracaoVue" },
            { id: 2, name: "Componentes e Props", page: "/ts/M13_TSVue/componentesProps" },
            { id: 3, name: "Vuex e TypeScript", page: "/ts/M13_TSVue/vuexTypeScript" },
          ]
        },
        {
          id: 14,
          name: "TypeScript com Angular",
          open: true,
          subItems: [
            { id: 1, name: "Configuração do Angular com TypeScript", page: "/ts/M14_TSAngular/configuracaoAngular" },
            { id: 2, name: "Componentes e Serviços", page: "/ts/M14_TSAngular/componentesServicos" },
            { id: 3, name: "Dependency Injection", page: "/ts/M14_TSAngular/dependencyInjection" },
          ]
        },
        {
          id: 15,
          name: "Tipos Avançados",
          open: true,
          subItems: [
            { id: 1, name: "Tipos Condicionais", page: "/ts/M15_TiposAvancados/tiposCondicionais" },
            { id: 2, name: "Mapeamento de Tipos", page: "/ts/M15_TiposAvancados/mapeamentoTipos" },
            { id: 3, name: "Tipos de Utilidade", page: "/ts/M15_TiposAvancados/tiposUtilidade" },
          ]
        },
        {
          id: 16,
          name: "Patterns de Projeto",
          open: true,
          subItems: [
            { id: 1, name: "Singleton", page: "/ts/M16_PatternsProjeto/singleton" },
            { id: 2, name: "Factory", page: "/ts/M16_PatternsProjeto/factory" },
            { id: 3, name: "Observer", page: "/ts/M16_PatternsProjeto/observer" },
          ]
        },
        {
          id: 17,
          name: "Segurança em TypeScript",
          open: true,
          subItems: [
            { id: 1, name: "Validação de Dados", page: "/ts/M17_Seguranca/validacaoDados" },
            { id: 2, name: "Prevenção de Injeção de Código", page: "/ts/M17_Seguranca/prevençãoInjecao" },
          ]
        },
        {
          id: 18,
          name: "Performance e Otimização",
          open: true,
          subItems: [
            { id: 1, name: "Otimização de Código", page: "/ts/M18_Performance/otimizacaoCodigo" },
            { id: 2, name: "Análise de Performance", page: "/ts/M18_Performance/analisePerformance" },
          ]
        },
        {
          id: 19,
          name: "Integração com API",
          open: true,
          subItems: [
            { id: 1, name: "Consumo de API com Fetch", page: "/ts/M19_IntegraçãoAPI/fetch" },
            { id: 2, name: "Integração com Axios", page: "/ts/M19_IntegraçãoAPI/axios" },
          ]
        },
        {
          id: 20,
          name: "Documentação e Comentários",
          open: true,
          subItems: [
            { id: 1, name: "Documentação com JSDoc", page: "/ts/M20_DocumentacaoJSdoc/jsdoc" },
            { id: 2, name: "Melhores Práticas de Comentários", page: "/ts/M20_DocumentacaoJSdoc/melhoresPraticas" },
          ]
        },
        {
          id: 21,
          name: "Utilitários e Ferramentas",
          open: true,
          subItems: [
            { id: 1, name: "Utilitários de Linters", page: "/ts/M21_Utilitarios/linters" },
            { id: 2, name: "Ferramentas de Build", page: "/ts/M21_Utilitarios/ferramentasBuild" },
          ]
        },
        {
          id: 22,
          name: "Trabalhando com Dados",
          open: true,
          subItems: [
            { id: 1, name: "Manipulação de Arrays", page: "/ts/M22_TrabalhandoComDados/manipulacaoArrays" },
            { id: 2, name: "Manipulação de Objetos", page: "/ts/M22_TrabalhandoComDados/manipulacaoObjetos" },
          ]
        },
        {
          id: 23,
          name: "TypeScript no Backend",
          open: true,
          subItems: [
            { id: 1, name: "Configuração com Node.js", page: "/ts/M23_Backend/configuracaoNode" },
            { id: 2, name: "Frameworks Backend", page: "/ts/M23_Backend/frameworksBackend" },
          ]
        },
        {
          id: 24,
          name: "Comunicação entre Componentes",
          open: true,
          subItems: [
            { id: 1, name: "Props e Eventos", page: "/ts/M24_ComunicacaoComponentes/propsEventos" },
            { id: 2, name: "Gerenciamento de Estado", page: "/ts/M24_ComunicacaoComponentes/gerenciamentoEstado" },
          ]
        },
        {
          id: 25,
          name: "Design Patterns com TypeScript",
          open: true,
          subItems: [
            { id: 1, name: "Decorator", page: "/ts/M25_DesignPatterns/decorator" },
            { id: 2, name: "Proxy", page: "/ts/M25_DesignPatterns/proxy" },
          ]
        },
        {
          id: 26,
          name: "Segurança Avançada",
          open: true,
          subItems: [
            { id: 1, name: "Proteção contra XSS", page: "/ts/M26_SegurancaAvancada/xss" },
            { id: 2, name: "Proteção contra CSRF", page: "/ts/M26_SegurancaAvancada/csrf" },
          ]
        },
        {
          id: 27,
          name: "Internacionalização e Localização",
          open: true,
          subItems: [
            { id: 1, name: "Configuração de i18n", page: "/ts/M27_Internacionalizacao/configuracaoI18n" },
            { id: 2, name: "Traduções e Formatação", page: "/ts/M27_Internacionalizacao/traducoesFormatacao" },
          ]
        },
        {
          id: 28,
          name: "Desenvolvimento Mobile com TypeScript",
          open: true,
          subItems: [
            { id: 1, name: "Introdução ao React Native", page: "/ts/M28_DesenvolvimentoMobile/reactNative" },
            { id: 2, name: "Integração com API", page: "/ts/M28_DesenvolvimentoMobile/integracaoAPI" },
          ]
        },
        {
          id: 29,
          name: "Desenvolvimento Desktop com TypeScript",
          open: true,
          subItems: [
            { id: 1, name: "Introdução ao Electron", page: "/ts/M29_DesenvolvimentoDesktop/electron" },
            { id: 2, name: "Integração com Backend", page: "/ts/M29_DesenvolvimentoDesktop/integracaoBackend" },
          ]
        },
        {
          id: 30,
          name: "Práticas Avançadas e Estudos de Caso",
          open: true,
          subItems: [
            { id: 1, name: "Estudo de Caso: Aplicação Completa", page: "/ts/M30_PraticaEstudos/estudoCaso" },
            { id: 2, name: "Práticas Avançadas e Dicas", page: "/ts/M30_PraticaEstudos/praticasAvancadas" },
          ]
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
    LgoTS
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