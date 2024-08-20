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
              <p class="justificar">Bem-vindo ao curso de Introdução ao JavaScript! Neste curso, você começará sua
                jornada no desenvolvimento web com uma das linguagens de programação mais populares e versáteis do
                mundo. JavaScript é essencial para criar sites interativos e dinâmicos e é amplamente utilizado em
                desenvolvimento front-end e back-end.</p>

              <v-container class="flex">
                <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                  <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                  </iframe>
                </v-responsive>
              </v-container>

              <h2><strong>1. Introdução ao JavaScript</strong></h2>
              <ul>
                <li>O que é JavaScript?</li>
                <li>História e Evolução </li>
              </ul>
              <br>

              <h2><strong>2. Instalação e Configuração do Ambiente, Primeiro Código JavaScript</strong></h2>
              <ul>
                <li>Resumo Geral</li>
                <li>Instalação do Visual Studio Code</li>
                <li>Instalação do Node.js</li>
                <li>Instalação do pacote JSON (NPM init)</li>
                <li>Configuração do VS Code</li>
                <li>Primeiro Script</li>
              </ul>
              <br>

              <h2><strong>3. Sintaxe e Tipos de Dados</strong></h2>
              <ul>
                <li>Modo Restrito</li>
                <li>Congelamento de Objetos</li>
                <li>Variáveis</li>
                <li>Tipos de Dados</li>
                <li>Conversão de Tipos</li>
                <li>Operadores</li>
                <li>Comentários</li>
              </ul>
              <br>

              <h2><strong>4. Estruturas de Controle</strong></h2>
              <ul>
                <li>Condicionais (if, else, switch)</li>
                <li>Laços de Repetição (for, while, do-while)</li>
                <li>Controle de Fluxo (break, continue)</li>
              </ul>
              <br>

              <h2><strong>5. Funções</strong></h2>
              <ul>
                <li>Declaração de Funções</li>
                <li>Expressões de Funções</li>
                <li>Funções Anônimas e Arrow Functions</li>
                <li>Parâmetros e Retorno</li>
              </ul>
              <br>

              <h2><strong>6. Objetos e Arrays</strong></h2>
              <ul>
                <li>Criação e Manipulação de Objetos</li>
                <li>Métodos e Propriedades de Objetos</li>
                <li>Manipulação de Arrays</li>
                <li>Métodos de Arrays (map, filter, reduce)</li>
              </ul>
              <br>

              <h2><strong>7. DOM (Document Object Model)</strong></h2>
              <ul>
                <li>Introdução ao DOM</li>
                <li>Seleção e Manipulação de Elementos</li>
                <li>Eventos e Listeners</li>
                <li>Criação e Remoção de Elementos</li>
              </ul>
              <br>

              <h2><strong>8. Eventos e Manipulação</strong></h2>
              <ul>
                <li>Tipos de Eventos</li>
                <li>Manipulação de Eventos</li>
                <li>Delegação de Eventos</li>
                <li>Eventos Customizados</li>
              </ul>
              <br>

              <h2><strong>9. AJAX e Fetch API</strong></h2>
              <ul>
                <li>Introdução ao AJAX</li>
                <li>Uso da Fetch API</li>
                <li>Requisições GET e POST</li>
                <li>Manipulação de Respostas e Erros</li>
              </ul>
              <br>

              <h2><strong>10. Programação Assíncrona</strong></h2>
              <ul>
                <li>Introdução às Promises</li>
                <li>Async/Await</li>
                <li>Tratamento de Erros em Código Assíncrono</li>
                <li>Corrida de Promises</li>
              </ul>
              <br>

              <h2><strong>11. Manipulação de Erros</strong></h2>
              <ul>
                <li>Try/Catch</li>
                <li>Lançamento de Erros</li>
                <li>Tratamento Global de Erros</li>
                <li>Debugging e Ferramentas de Depuração</li>
              </ul>
              <br>

              <h2><strong>12. Orientação a Objetos</strong></h2>
              <ul>
                <li>Conceitos de Orientação a Objetos</li>
                <li>Criação de Classes e Objetos</li>
                <li>Herança e Polimorfismo</li>
                <li>Encapsulamento e Abstração</li>
              </ul>
              <br>

              <h2><strong>13. Módulos e Importação</strong></h2>
              <ul>
                <li>Introdução aos Módulos JavaScript</li>
                <li>Exportação e Importação de Módulos</li>
                <li>Uso de ES6 Modules</li>
                <li>Gerenciamento de Dependências</li>
              </ul>
              <br>

              <h2><strong>14. Manipulação de Strings</strong></h2>
              <ul>
                <li>Métodos de Strings</li>
                <li>Interpolação de Strings</li>
                <li>Expressões Regulares</li>
                <li>Manipulação Avançada de Strings</li>
              </ul>
              <br>

              <h2><strong>15. Trabalhando com Datas e Horas</strong></h2>
              <ul>
                <li>Objetos Date</li>
                <li>Manipulação de Datas</li>
                <li>Formatação de Datas e Horas</li>
                <li>Bibliotecas para Datas (moment.js, date-fns)</li>
              </ul>
              <br>

              <h2><strong>16. Armazenamento Local</strong></h2>
              <ul>
                <li>LocalStorage e SessionStorage</li>
                <li>Cookies</li>
                <li>Manipulação e Persistência de Dados</li>
                <li>Segurança e Limitações</li>
              </ul>
              <br>

              <h2><strong>17. Web APIs e Browser</strong></h2>
              <ul>
                <li>Introdução às Web APIs</li>
                <li>Manipulação de Localização e Geolocalização</li>
                <li>Armazenamento e Cookies</li>
                <li>Web Workers</li>
              </ul>
              <br>

              <h2><strong>18. Segurança em JavaScript</strong></h2>
              <ul>
                <li>Proteção contra XSS</li>
                <li>Proteção contra CSRF</li>
                <li>Segurança em Armazenamento Local</li>
                <li>Práticas de Programação Segura</li>
              </ul>
              <br>

              <h2><strong>19. Testes em JavaScript</strong></h2>
              <ul>
                <li>Introdução aos Testes Unitários</li>
                <li>Ferramentas de Teste (Jest, Mocha)</li>
                <li>Testando Funções e Componentes</li>
                <li>Testes de Integração</li>
              </ul>
              <br>

              <h2><strong>20. Frameworks e Bibliotecas</strong></h2>
              <ul>
                <li>Introdução a Frameworks (React, Angular, Vue.js)</li>
                <li>Comparação e Escolha de Frameworks</li>
                <li>Uso de Bibliotecas Populares (Lodash, Axios)</li>
                <li>Criação de Bibliotecas</li>
              </ul>
              <br>

              <h2><strong>21. Design Patterns</strong></h2>
              <ul>
                <li>Introdução a Design Patterns</li>
                <li>Singleton</li>
                <li>Factory</li>
                <li>Observer</li>
                <li>Modular e MVC</li>
                <li>Implementação Prática</li>
              </ul>
              <br>

              <h2><strong>22. Deploy e Publicação</strong></h2>
              <ul>
                <li>Build e Deploy de Aplicações</li>
                <li>Gerenciamento de Dependências e Bundlers</li>
                <li>Deploy em Servidores Web (GitHub Pages, Netlify, Vercel)</li>
                <li>Monitoramento e Atualizações</li>
              </ul>
              <br>

              <h2><strong>23. Conclusão</strong></h2>
              <ul>
                <li>Resumo do Curso</li>
                <li>Próximos Passos e Recursos</li>
                <li>Projetos Finais e Portfólio</li>
                <li>Continuação e Estudos Avançados</li>
              </ul>
              <br>

              <v-container class="flex">
                <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                  <iframe :src='videoConclusao' :allow='propriedadesVideo' allowfullscreen>
                  </iframe>
                </v-responsive>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script>
import MenuJs from '~/components/js/menuJS.vue'

export default {
  components: {
    MenuJs
  },
  data: () => ({
    video: 'https://www.youtube.com/embed/VIDEO_ID',
    videoConclusao: 'https://www.youtube.com/embed/VIDEO_ID',
    propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
  })
}
</script>

<style scoped>
.v-main {
  padding: 10px 20px 10px 20px !important;
  /* Ajuste o padding conforme necessário */
}

.flexItem {
  max-width: 70%;
  max-height: 70%;
}
</style>
