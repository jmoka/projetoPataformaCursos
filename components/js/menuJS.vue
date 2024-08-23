<template>
  <v-app ajsutePagina>
    <v-card class="TextMenu">
      <v-card-title><b>Menu JavaScript</b></v-card-title>
    </v-card>
    <v-card>
      <v-card-subtitle class="text-red-darken-1">
        <nuxt-link :to=Indice><b>Índeces</b></nuxt-link> <br><br>
        <nuxt-link :to=CodeJS><b>Código PHP</b></nuxt-link>
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

export default {
  name: "menuTS",
  data() {
    return {
      Indice: "/js/indices",
      CodeJS: "/js/codeJS",
      lista: [
        {
          id: 1,
          name: "Introdução",
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
          open: true,
          subItems: [
            { id: 1, name: "Resumo Geral", page: "/js/M2_Instalacao/instalacaoJS" },
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
          open: true,
          subItems: [
            { id: 1, name: "Condicionais", page: "/js/M4_EstruturaDeControle/condicionais" },
            { id: 2, name: "Laços", page: "/js/M4_EstruturaDeControle/lacos", },
            { id: 3, name: "Controle de Fluxo", page: "/js/M4_EstruturaDeControle/controleFluxo", },
          ]
        },
        {
          id: 5,
          name: "Funções Avançadas",
          open: true,
          subItems: [
            { id: 1, name: "Declarações e Expressões", page: "/js/M5_FuncoesAvancadas/declaracoesExpressoes" },
            { id: 2, name: "Parâmetros Padrão", page: "/js/M5_FuncoesAvancadas/parametrosPadrao" },
            { id: 3, name: "Funções Anônimas", page: "/js/M5_FuncoesAvancadas/funcoesAnonimas" },
            { id: 4, name: "Funções de Ordem Superior", page: "/js/M5_FuncoesAvancadas/funcoesOrdemSuperior" },
          ]
        },
        {
          id: 6,
          name: "Programação Assíncrona",
          open: true,
          subItems: [
            { id: 1, name: "Callbacks", page: "/js/M6_ProgramacaoAssincrona/callbacks" },
            { id: 2, name: "Promises", page: "/js/M6_ProgramacaoAssincrona/promises" },
            { id: 3, name: "Async/Await", page: "/js/M6_ProgramacaoAssincrona/asyncAwait" },
          ]
        },
        {
          id: 7,
          name: "Manipulação do DOM",
          open: true,
          subItems: [
            { id: 1, name: "Seleção de Elementos", page: "/js/M7_ManipulacaoDOM/selecaoElementos" },
            { id: 2, name: "Eventos", page: "/js/M7_ManipulacaoDOM/eventos" },
            { id: 3, name: "Modificar o DOM", page: "/js/M7_ManipulacaoDOM/modificarDOM" },
            { id: 4, name: "Classes e Estilos", page: "/js/M7_ManipulacaoDOM/classesEstilos" },
          ]
        },
        {
          id: 8,
          name: "Manipulação de Dados",
          open: true,
          subItems: [
            { id: 1, name: "Map, Filter e Reduce", page: "/js/M8_ManipulacaoDados/mapFilterReduce" },
            { id: 2, name: "JSON", page: "/js/M8_ManipulacaoDados/json" },
            { id: 3, name: "Armazenamento Local", page: "/js/M8_ManipulacaoDados/armazenamentoLocal" },
          ]
        },
        {
          id: 9,
          name: "Programação Orientada a Objetos",
          open: true,
          subItems: [
            { id: 1, name: "Classes e Objetos", page: "/js/M9_POO/classesObjetos" },
            { id: 2, name: "Herança", page: "/js/M9_POO/heranca" },
            { id: 3, name: "Encapsulamento", page: "/js/M9_POO/encapsulamento" },
            { id: 4, name: "Polimorfismo", page: "/js/M9_POO/polimorfismo" },
          ]
        },
        {
          id: 10,
          name: "Módulos e Importação",
          open: true,
          subItems: [
            { id: 1, name: "Importação e Exportação", page: "/js/M10_Modulos/importacaoExportacao" },
            { id: 2, name: "Módulos Padrão", page: "/js/M10_Modulos/modulosPadrao" },
            { id: 3, name: "Módulos de Terceiros", page: "/js/M10_Modulos/modulosTerceiros" },
          ]
        },
        {
          id: 11,
          name: "Tratamento de Erros",
          open: true,
          subItems: [
            { id: 1, name: "Try, Catch e Finally", page: "/js/M11_TratamentoErros/tryCatchFinally" },
            { id: 2, name: "Lançamento de Erros", page: "/js/M11_TratamentoErros/lancamentoErros" },
            { id: 3, name: "Erro Customizado", page: "/js/M11_TratamentoErros/erroCustomizado" },
          ]
        },
        {
          id: 12,
          name: "Testes e Debugging",
          open: true,
          subItems: [
            { id: 1, name: "Depuração de Código", page: "/js/M12_TestesDebugging/debugging" },
            { id: 2, name: "Testes Unitários", page: "/js/M12_TestesDebugging/testesUnitarios" },
            { id: 3, name: "Ferramentas de Testes", page: "/js/M12_TestesDebugging/ferramentasTestes" },
          ]
        },
        {
          id: 13,
          name: "Web APIs",
          open: true,
          subItems: [
            { id: 1, name: "Fetch API", page: "/js/M13_WebAPIs/fetchAPI" },
            { id: 2, name: "Geolocation API", page: "/js/M13_WebAPIs/geolocationAPI" },
            { id: 3, name: "Canvas API", page: "/js/M13_WebAPIs/canvasAPI" },
            { id: 4, name: "Web Storage API", page: "/js/M13_WebAPIs/webStorageAPI" },
          ]
        },
        {
          id: 14,
          name: "Bibliotecas JavaScript",
          open: true,
          subItems: [
            { id: 1, name: "Introdução às Bibliotecas", page: "/js/M14_Bibliotecas/introducao" },
            { id: 2, name: "jQuery", page: "/js/M14_Bibliotecas/jquery" },
            { id: 3, name: "Lodash", page: "/js/M14_Bibliotecas/lodash" },
            { id: 4, name: "Moment.js", page: "/js/M14_Bibliotecas/momentjs" },
          ]
        },
        {
          id: 15,
          name: "Frameworks JavaScript",
          open: true,
          subItems: [
            { id: 1, name: "Introdução aos Frameworks", page: "/js/M15_Frameworks/introducao" },
            { id: 2, name: "React.js", page: "/js/M15_Frameworks/react" },
            { id: 3, name: "Vue.js", page: "/js/M15_Frameworks/vue" },
            { id: 4, name: "Angular.js", page: "/js/M15_Frameworks/angular" },
          ]
        },
        {
          id: 16,
          name: "Automação de Tarefas",
          open: true,
          subItems: [
            { id: 1, name: "Gulp.js", page: "/js/M16_Automacao/gulp" },
            { id: 2, name: "Webpack", page: "/js/M16_Automacao/webpack" },
            { id: 3, name: "Parcel", page: "/js/M16_Automacao/parcel" },
          ]
        },
        {
          id: 17,
          name: "Testes Avançados",
          open: true,
          subItems: [
            { id: 1, name: "Teste de Integração", page: "/js/M17_TestesAvancados/testeIntegracao" },
            { id: 2, name: "Teste de Performance", page: "/js/M17_TestesAvancados/testePerformance" },
            { id: 3, name: "Teste de Interface", page: "/js/M17_TestesAvancados/testeInterface" },
          ]
        },
        {
          id: 18,
          name: "Controle de Versão",
          open: true,
          subItems: [
            { id: 1, name: "Git e GitHub", page: "/js/M18_ControleVersao/gitGitHub" },
            { id: 2, name: "Branches", page: "/js/M18_ControleVersao/branches" },
            { id: 3, name: "Pull Requests", page: "/js/M18_ControleVersao/pullRequests" },
          ]
        },
        {
          id: 19,
          name: "Programação Funcional",
          open: true,
          subItems: [
            { id: 1, name: "Imutabilidade", page: "/js/M19_ProgramacaoFuncional/imutabilidade" },
            { id: 2, name: "Funções Puras", page: "/js/M19_ProgramacaoFuncional/funcoesPuras" },
            { id: 3, name: "Composição de Funções", page: "/js/M19_ProgramacaoFuncional/composicaoFuncoes" },
          ]
        },
        {
          id: 20,
          name: "Programação Reativa",
          open: true,
          subItems: [
            { id: 1, name: "Introdução à Programação Reativa", page: "/js/M20_ProgramacaoReativa/introducao" },
            { id: 2, name: "RxJS", page: "/js/M20_ProgramacaoReativa/rxjs" },
            { id: 3, name: "Observables", page: "/js/M20_ProgramacaoReativa/observables" },
          ]
        },
        {
          id: 21,
          name: "Web Components",
          open: true,
          subItems: [
            { id: 1, name: "Custom Elements", page: "/js/M21_WebComponents/customElements" },
            { id: 2, name: "Shadow DOM", page: "/js/M21_WebComponents/shadowDOM" },
            { id: 3, name: "Templates e Slots", page: "/js/M21_WebComponents/templatesSlots" },
          ]
        },
        {
          id: 22,
          name: "Segurança em JavaScript",
          open: true,
          subItems: [
            { id: 1, name: "XSS e CSRF", page: "/js/M22_Seguranca/xssCsrf" },
            { id: 2, name: "Segurança no Front-end", page: "/js/M22_Seguranca/segurancaFrontend" },
            { id: 3, name: "Autenticação e Autorização", page: "/js/M22_Seguranca/autenticacaoAutorizacao" },
          ]
        },
        {
          id: 23,
          name: "APIs REST",
          open: true,
          subItems: [
            { id: 1, name: "Conceitos de REST", page: "/js/M23_APIsRest/conceitosRest" },
            { id: 2, name: "Criação de APIs com Node.js", page: "/js/M23_APIsRest/criacaoApisNode" },
            { id: 3, name: "Autenticação em APIs", page: "/js/M23_APIsRest/autenticacaoApis" },
          ]
        },
        {
          id: 24,
          name: "GraphQL",
          open: true,
          subItems: [
            { id: 1, name: "Introdução ao GraphQL", page: "/js/M24_GraphQL/introducaoGraphQL" },
            { id: 2, name: "Consultas e Mutations", page: "/js/M24_GraphQL/consultasMutations" },
            { id: 3, name: "Integração com APIs", page: "/js/M24_GraphQL/integracaoApis" },
          ]
        },
        {
          id: 25,
          name: "Serverless",
          open: true,
          subItems: [
            { id: 1, name: "Introdução ao Serverless", page: "/js/M25_Serverless/introducaoServerless" },
            { id: 2, name: "AWS Lambda", page: "/js/M25_Serverless/awsLambda" },
            { id: 3, name: "Netlify Functions", page: "/js/M25_Serverless/netlifyFunctions" },
          ]
        },
        {
          id: 26,
          name: "Mobile Development",
          open: true,
          subItems: [
            { id: 1, name: "React Native", page: "/js/M26_MobileDevelopment/reactNative" },
            { id: 2, name: "Ionic", page: "/js/M26_MobileDevelopment/ionic" },
            { id: 3, name: "Progressive Web Apps", page: "/js/M26_MobileDevelopment/pwa" },
          ]
        },
        {
          id: 27,
          name: "Performance Optimization",
          open: true,
          subItems: [
            { id: 1, name: "Lazy Loading", page: "/js/M27_PerformanceOptimization/lazyLoading" },
            { id: 2, name: "Code Splitting", page: "/js/M27_PerformanceOptimization/codeSplitting" },
            { id: 3, name: "Minification e Uglification", page: "/js/M27_PerformanceOptimization/minificationUglification" },
          ]
        },
        {
          id: 28,
          name: "WebAssembly",
          open: true,
          subItems: [
            { id: 1, name: "Introdução ao WebAssembly", page: "/js/M28_WebAssembly/introducaoWebAssembly" },
            { id: 2, name: "Integração com JavaScript", page: "/js/M28_WebAssembly/integracaoJavaScript" },
            { id: 3, name: "Casos de Uso", page: "/js/M28_WebAssembly/casosDeUso" },
          ]
        },
        {
          id: 29,
          name: "Real-time Applications",
          open: true,
          subItems: [
            { id: 1, name: "WebSockets", page: "/js/M29_RealTimeApplications/websockets" },
            { id: 2, name: "Socket.io", page: "/js/M29_RealTimeApplications/socketIo" },
            { id: 3, name: "Real-time Databases", page: "/js/M29_RealTimeApplications/realTimeDatabases" },
          ]
        },
        {
          id: 30,
          name: "Machine Learning com JavaScript",
          open: true,
          subItems: [
            { id: 1, name: "Introdução ao Machine Learning", page: "/js/M30_MachineLearning/introducao" },
            { id: 2, name: "TensorFlow.js", page: "/js/M30_MachineLearning/tensorFlow" },
            { id: 3, name: "Casos de Uso em JavaScript", page: "/js/M30_MachineLearning/casosDeUso" },
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
</style>
