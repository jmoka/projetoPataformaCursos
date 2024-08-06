<template>
  <v-app>
    <v-layout>
      <v-navigation-drawer app>
        <MenuJs />
      </v-navigation-drawer>
      <v-main>
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <h1>Introdução ao JavaScript</h1>
              <p class="justficar">Bem-vindo ao curso de Introdução ao JavaScript! Neste curso, você começará sua jornada no desenvolvimento web com uma das linguagens de programação mais populares e versáteis do mundo. JavaScript é essencial para criar sites interativos e dinâmicos e é amplamente utilizado em desenvolvimento front-end e back-end.</p>
              
              <v-container class="flex" >
                <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                    <iframe 
                        :src='video'
                        :allow='propriedadesVideo'
                        allowfullscreen                        
                        >
                    </iframe>
                 </v-responsive>
             </v-container>      

              <h2>O que você aprenderá:</h2>
              
              <h2><strong>1. Introdução ao JavaScript</strong></h2>
              <p>O que é JavaScript? História e Evolução, Instalação e Configuração do Ambiente, Primeiro Código JavaScript.</p>
              <br>
              
              <h2><strong>2. Sintaxe e Tipos de Dados</strong></h2>
              <p>Sintaxe Básica, Tipos de Dados Primitivos, Tipos de Dados Complexos (Objetos e Arrays), Conversão de Tipos.</p>
              <br>
              
              <h2><strong>3. Estruturas de Controle</strong></h2>
              <p>Condicionais (if, else, switch), Laços de Repetição (for, while, do-while), Controle de Fluxo (break, continue).</p>
              <br>
              
              <h2><strong>4. Funções</strong></h2>
              <p>Declaração de Funções, Expressões de Funções, Funções Anônimas e Arrow Functions, Parâmetros e Retorno.</p>
              <br>
              
              <h2><strong>5. Objetos e Arrays</strong></h2>
              <p>Criação e Manipulação de Objetos, Métodos e Propriedades de Objetos, Manipulação de Arrays, Métodos de Arrays (map, filter, reduce).</p>
              <br>
              
              <h2><strong>6. DOM (Document Object Model)</strong></h2>
              <p>Introdução ao DOM, Seleção e Manipulação de Elementos, Eventos e Listeners, Criação e Remoção de Elementos.</p>
              <br>
              
              <h2><strong>7. Eventos e Manipulação</strong></h2>
              <p>Tipos de Eventos, Manipulação de Eventos, Delegação de Eventos, Eventos Customizados.</p>
              <br>
              
              <h2><strong>8. AJAX e Fetch API</strong></h2>
              <p>Introdução ao AJAX, Uso da Fetch API, Requisições GET e POST, Manipulação de Respostas e Erros.</p>
              <br>
              
              <h2><strong>9. Programação Assíncrona</strong></h2>
              <p>Introdução às Promises, Async/Await, Tratamento de Erros em Código Assíncrono, Corrida de Promises.</p>
              <br>
              
              <h2><strong>10. Manipulação de Erros</strong></h2>
              <p>Try/Catch, Lançamento de Erros, Tratamento Global de Erros, Debugging e Ferramentas de Depuração.</p>
              <br>
              
              <h2><strong>11. Orientação a Objetos</strong></h2>
              <p>Conceitos de Orientação a Objetos, Criação de Classes e Objetos, Herança e Polimorfismo, Encapsulamento e Abstração.</p>
              <br>
              
              <h2><strong>12. Módulos e Importação</strong></h2>
              <p>Introdução aos Módulos JavaScript, Exportação e Importação de Módulos, Uso de ES6 Modules, Gerenciamento de Dependências.</p>
              <br>
              
              <h2><strong>13. Manipulação de Strings</strong></h2>
              <p>Métodos de Strings, Interpolação de Strings, Expressões Regulares, Manipulação Avançada de Strings.</p>
              <br>
              
              <h2><strong>14. Trabalhando com Datas e Horas</strong></h2>
              <p>Objetos Date, Manipulação de Datas, Formatação de Datas e Horas, Bibliotecas para Datas (moment.js, date-fns).</p>
              <br>
              
              <h2><strong>15. Armazenamento Local</strong></h2>
              <p>LocalStorage e SessionStorage, Cookies, Manipulação e Persistência de Dados, Segurança e Limitações.</p>
              <br>
              
              <h2><strong>16. Web APIs e Browser</strong></h2>
              <p>Introdução às Web APIs, Manipulação de Localização e Geolocalização, Armazenamento e Cookies, Web Workers.</p>
              <br>
              
              <h2><strong>17. Segurança em JavaScript</strong></h2>
              <p>Proteção contra XSS, Proteção contra CSRF, Segurança em Armazenamento Local, Práticas de Programação Segura.</p>
              <br>
              
              <h2><strong>18. Testes em JavaScript</strong></h2>
              <p>Introdução aos Testes Unitários, Ferramentas de Teste (Jest, Mocha), Testando Funções e Componentes, Testes de Integração.</p>
              <br>
              
              <h2><strong>19. Frameworks e Bibliotecas</strong></h2>
              <p>Introdução a Frameworks (React, Angular, Vue.js), Comparação e Escolha de Frameworks, Uso de Bibliotecas Populares (Lodash, Axios), Criação de Bibliotecas.</p>
              <br>
              
              <h2><strong>20. Design Patterns</strong></h2>
              <p>Introdução a Design Patterns, Singleton, Factory, Observer, Modular e MVC, Implementação Prática.</p>
              <br>
              
              <h2><strong>21. Desenvolvimento de Aplicações Web</strong></h2>
              <p>Arquitetura de Aplicações Web, Configuração de Ambiente de Desenvolvimento, Ferramentas e Frameworks de Desenvolvimento, Deploy e Publicação.</p>
              <br>
              
              <h2><strong>22. WebSockets e Tempo Real</strong></h2>
              <p>Introdução a WebSockets, Implementação de WebSockets em JavaScript, Aplicações de Tempo Real, Manutenção e Escalabilidade.</p>
              <br>
              
              <h2><strong>23. Internacionalização (i18n)</strong></h2>
              <p>Introdução à Internacionalização, Uso de Bibliotecas de i18n, Troca Dinâmica de Idioma, Localização e Formatação.</p>
              <br>
              
              <h2><strong>24. Performance e Otimização</strong></h2>
              <p>Análise de Performance, Técnicas de Lazy Loading e Code Splitting, Otimização de Recursos, Ferramentas de Monitoramento.</p>
              <br>
              
              <h2><strong>25. Programação Funcional</strong></h2>
              <p>Conceitos de Programação Funcional, Funções de Ordem Superior, Imutabilidade e Funções Puras, Composição e Currying.</p>
              <br>
              
              <h2><strong>26. Padrões de Arquitetura</strong></h2>
              <p>Arquitetura de Aplicações, Padrões de Projeto, Modularidade e Escalabilidade, Documentação e Manutenção.</p>
              <br>
              
              <h2><strong>27. Desenvolvimento Mobile com JavaScript</strong></h2>
              <p>Introdução ao Desenvolvimento Mobile, Frameworks Mobile (React Native, Ionic), Componentes e APIs Móveis, Testes e Deploy Mobile.</p>
              <br>
              
              <h2><strong>28. Build Tools e Automatização</strong></h2>
              <p>Introdução a Ferramentas de Build, Uso de Webpack e Babel, Scripts e Automação de Tarefas, Integração Contínua e Deploy.</p>
              <br>
              
              <h2><strong>29. Web Assembly e JavaScript</strong></h2>
              <p>Introdução ao WebAssembly, Integração com JavaScript, Casos de Uso e Performance, Ferramentas e Bibliotecas.</p>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>


<script>
import MenuJs from "@/components/javaScript/menu.JavaScript.vue";

export default {
  name:"indeces",
  data() {
    return {
      isDark: true,
      video: 'https://www.youtube.com/embed/VIDEO_ID',
      propriedadesVideo: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    };
  },
  components: {
    MenuJs
  }
};
</script>

<style scoped>
 .v-main {
     padding: 10px 20px 10px 20px !important; /* Ajuste o padding conforme necessário */
 }

 .flexItem {
    max-width: 70%;
    max-height: 70%
}

</style>
