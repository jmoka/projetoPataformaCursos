<template>
    <v-app>
      <v-navigation-drawer permanent app>
        <Menu />
      </v-navigation-drawer>
      <v-main>
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <h1>Introdução ao JavaScript</h1>
              <p>Bem-vindo ao curso de Introdução ao JavaScript! Neste curso, você começará sua jornada no desenvolvimento web com uma das linguagens de programação mais populares e versáteis do mundo. JavaScript é essencial para criar sites interativos e dinâmicos e é amplamente utilizado em desenvolvimento front-end e back-end.</p>
              <v-card>
                <v-card-title>O que você aprenderá:</v-card-title>
                <v-card-subtitle>
                  <h3>1. Introdução ao JavaScript</h3>
                  O que é JavaScript? História e Evolução, Instalação e Configuração do Ambiente, Primeiro Código JavaScript.
                  <br><br>
                  <h3>2. Sintaxe e Tipos de Dados</h3>
                  Sintaxe Básica, Tipos de Dados Primitivos, Tipos de Dados Complexos (Objetos e Arrays), Conversão de Tipos.
                  <br><br>
                  <h3>3. Estruturas de Controle</h3>
                  Condicionais (if, else, switch), Laços de Repetição (for, while, do-while), Controle de Fluxo (break, continue).
                  <br><br>
                  <h3>4. Funções</h3>
                  Declaração de Funções, Expressões de Funções, Funções Anônimas e Arrow Functions, Parâmetros e Retorno.
                  <br><br>
                  <h3>5. Objetos e Arrays</h3>
                  Criação e Manipulação de Objetos, Métodos e Propriedades de Objetos, Manipulação de Arrays, Métodos de Arrays (map, filter, reduce).
                  <br><br>
                  <h3>6. DOM (Document Object Model)</h3>
                  Introdução ao DOM, Seleção e Manipulação de Elementos, Eventos e Listeners, Criação e Remoção de Elementos.
                  <br><br>
                  <h3>7. Eventos e Manipulação</h3>
                  Tipos de Eventos, Manipulação de Eventos, Delegação de Eventos, Eventos Customizados.
                  <br><br>
                  <h3>8. AJAX e Fetch API</h3>
                  Introdução ao AJAX, Uso da Fetch API, Requisições GET e POST, Manipulação de Respostas e Erros.
                  <br><br>
                  <h3>9. Programação Assíncrona</h3>
                  Introdução às Promises, Async/Await, Tratamento de Erros em Código Assíncrono, Corrida de Promises.
                  <br><br>
                  <h3>10. Manipulação de Erros</h3>
                  Try/Catch, Lançamento de Erros, Tratamento Global de Erros, Debugging e Ferramentas de Depuração.
                  <br><br>
                  <h3>11. Orientação a Objetos</h3>
                  Conceitos de Orientação a Objetos, Criação de Classes e Objetos, Herança e Polimorfismo, Encapsulamento e Abstração.
                  <br><br>
                  <h3>12. Módulos e Importação</h3>
                  Introdução aos Módulos JavaScript, Exportação e Importação de Módulos, Uso de ES6 Modules, Gerenciamento de Dependências.
                  <br><br>
                  <h3>13. Manipulação de Strings</h3>
                  Métodos de Strings, Interpolação de Strings, Expressões Regulares, Manipulação Avançada de Strings.
                  <br><br>
                  <h3>14. Trabalhando com Datas e Horas</h3>
                  Objetos Date, Manipulação de Datas, Formatação de Datas e Horas, Bibliotecas para Datas (moment.js, date-fns).
                  <br><br>
                  <h3>15. Armazenamento Local</h3>
                  LocalStorage e SessionStorage, Cookies, Manipulação e Persistência de Dados, Segurança e Limitações.
                  <br><br>
                  <h3>16. Web APIs e Browser</h3>
                  Introdução às Web APIs, Manipulação de Localização e Geolocalização, Armazenamento e Cookies, Web Workers.
                  <br><br>
                  <h3>17. Segurança em JavaScript</h3>
                  Proteção contra XSS, Proteção contra CSRF, Segurança em Armazenamento Local, Práticas de Programação Segura.
                  <br><br>
                  <h3>18. Testes em JavaScript</h3>
                  Introdução aos Testes Unitários, Ferramentas de Teste (Jest, Mocha), Testando Funções e Componentes, Testes de Integração.
                  <br><br>
                  <h3>19. Frameworks e Bibliotecas</h3>
                  Introdução a Frameworks (React, Angular, Vue.js), Comparação e Escolha de Frameworks, Uso de Bibliotecas Populares (Lodash, Axios), Criação de Bibliotecas.
                  <br><br>
                  <h3>20. Design Patterns</h3>
                  Introdução a Design Patterns, Singleton, Factory, Observer, Modular e MVC, Implementação Prática.
                  <br><br>
                  <h3>21. Desenvolvimento de Aplicações Web</h3>
                  Arquitetura de Aplicações Web, Configuração de Ambiente de Desenvolvimento, Ferramentas e Frameworks de Desenvolvimento, Deploy e Publicação.
                  <br><br>
                  <h3>22. WebSockets e Tempo Real</h3>
                  Introdução a WebSockets, Implementação de WebSockets em JavaScript, Aplicações de Tempo Real, Manutenção e Escalabilidade.
                  <br><br>
                  <h3>23. Internacionalização (i18n)</h3>
                  Introdução à Internacionalização, Uso de Bibliotecas de i18n, Troca Dinâmica de Idioma, Localização e Formatação.
                  <br><br>
                  <h3>24. Performance e Otimização</h3>
                  Análise de Performance, Técnicas de Lazy Loading e Code Splitting, Otimização de Recursos, Ferramentas de Monitoramento.
                  <br><br>
                  <h3>25. Programação Funcional</h3>
                  Conceitos de Programação Funcional, Funções de Ordem Superior, Imutabilidade e Funções Puras, Composição e Currying.
                  <br><br>
                  <h3>26. Padrões de Arquitetura</h3>
                  Arquitetura de Aplicações, Padrões de Projeto, Modularidade e Escalabilidade, Documentação e Manutenção.
                  <br><br>
                  <h3>27. Desenvolvimento Mobile com JavaScript</h3>
                  Introdução ao Desenvolvimento Mobile, Frameworks Mobile (React Native, Ionic), Componentes e APIs Móveis, Testes e Deploy Mobile.
                  <br><br>
                  <h3>28. Build Tools e Automatização</h3>
                  Introdução a Ferramentas de Build, Uso de Webpack e Babel, Scripts e Automação de Tarefas, Integração Contínua e Deploy.
                  <br><br>
                  <h3>29. Web Assembly e JavaScript</h3>
                  Introdução ao WebAssembly, Integração com JavaScript, Casos de Uso e Performance, Ferramentas e Bibliotecas.
                  <br><br>
                  <h3>30. Projeto Final</h3>
                  Definição de um Projeto Completo, Planejamento e Estruturação do Projeto, Desenvolvimento e Implementação, Testes e Deploy Final.
                </v-card-subtitle>
                <v-card-text>
                  Ao final deste curso, você terá uma compreensão sólida do JavaScript e será capaz de aplicar suas habilidades para criar aplicações web modernas e eficazes.
                  <br><br>
                  Prepare-se para um aprendizado prático e envolvente que permitirá a você construir e aprimorar suas habilidades de programação em JavaScript!
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
  import Menu from "@/components/javaScript/menu.JavaScript.vue";
  
  export default {
    components: {
      Menu
    }
  };
  </script>
  
  <style scoped>
  .v-main {
    padding: 10px 20px 10px 50px !important; /* Ajuste o padding conforme necessário */
  }
  </style>
