<template>
  <v-app ajsutePagina>
    <!-- Menu -->
    <v-navigation-drawer app>
      <MenuVue />
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <!-- Course Introduction -->
            <h1>{{ msg }}</h1>
            <p class="justificar">
              Bem-vindo ao curso de Vue.js! Neste curso, você aprenderá a criar aplicações web interativas e eficientes
              utilizando o framework Vue.js. Vamos explorar desde conceitos básicos até técnicas avançadas, garantindo
              que você esteja preparado para construir projetos robustos.
            </p>

            <!-- Embedded Video -->
            <v-container video>
              <v-responsive :aspect-ratio="16 / 9">
                <iframe :src="video" :allow="propriedadesVideo" allowfullscreen></iframe>
              </v-responsive>
            </v-container>

            <!-- Course Content -->
            <h2><strong>1. Introdução ao Vue.js</strong></h2>
            <ul>
              <li>O que é Vue.js?</li>
              <li>História e Filosofia</li>
              <li>Características Principais</li>
            </ul>

            <h2><strong>2. Configuração do Ambiente de Desenvolvimento</strong></h2>
            <ul>
              <li>Instalação do Node.js e npm</li>
              <li>Instalação do Vue CLI</li>
              <li>Configuração do Projeto</li>
            </ul>

            <h2><strong>3. Estrutura do Projeto Vue.js</strong></h2>
            <ul>
              <li>Visão Geral dos Diretórios</li>
              <li>Configuração Básica</li>
              <li>Componentes, Rotas e Store</li>
            </ul>

            <h2><strong>4. Fundamentos do Vue.js</strong></h2>
            <ul>
              <li>Data Binding</li>
              <li>Diretivas</li>
              <li>Manipulação de Eventos</li>
            </ul>

            <h2><strong>5. Componentes em Vue.js</strong></h2>
            <ul>
              <li>Criação de Componentes</li>
              <li>Props e Eventos</li>
              <li>Slots e Componentes Dinâmicos</li>
            </ul>

            <h2><strong>6. Gerenciamento de Estado com Vuex</strong></h2>
            <ul>
              <li>Introdução ao Vuex</li>
              <li>State, Getters, Mutations e Actions</li>
              <li>Módulos Vuex</li>
            </ul>

            <h2><strong>7. Vue Router</strong></h2>
            <ul>
              <li>Configuração do Vue Router</li>
              <li>Rotas Dinâmicas e Aninhadas</li>
              <li>Navegação de Rotas</li>
            </ul>

            <h2><strong>8. Interpolação e Renderização Condicional</strong></h2>
            <ul>
              <li>Interpolação de Dados</li>
              <li>Renderização Condicional</li>
              <li>List Rendering</li>
            </ul>

            <h2><strong>9. Trabalhando com Formulários</strong></h2>
            <ul>
              <li>v-model e Two-way Binding</li>
              <li>Validação de Formulários</li>
              <li>Componentes de Formulário Personalizados</li>
            </ul>

            <h2><strong>10. Comunicação entre Componentes</strong></h2>
            <ul>
              <li>Props e Eventos</li>
              <li>Event Bus e Refs</li>
              <li>Injeção de Dependências</li>
            </ul>

            <h2><strong>11. Renderização de Lista e Iteração</strong></h2>
            <ul>
              <li>v-for e Index Key</li>
              <li>Filtragem e Ordenação</li>
              <li>Renderização Condicional</li>
            </ul>

            <h2><strong>12. Diretivas Customizadas</strong></h2>
            <ul>
              <li>O que são Diretivas?</li>
              <li>Criação de Diretivas Customizadas</li>
              <li>Utilização em Componentes</li>
            </ul>

            <h2><strong>13. Transições e Animações</strong></h2>
            <ul>
              <li>Introdução a Transições</li>
              <li>Animações CSS e JavaScript</li>
              <li>Transições de Página</li>
            </ul>

            <h2><strong>14. Slots e Render Functions</strong></h2>
            <ul>
              <li>Slots Simples e Nomeados</li>
              <li>Scoped Slots</li>
              <li>Render Functions</li>
            </ul>

            <h2><strong>15. Gerenciamento de Dados com Vuex</strong></h2>
            <ul>
              <li>State Management Patterns</li>
              <li>Vuex Store</li>
              <li>Mutations e Actions Avançadas</li>
            </ul>

            <h2><strong>16. Testes em Vue.js</strong></h2>
            <ul>
              <li>Introdução aos Testes Unitários</li>
              <li>Testes de Componentes com Vue Test Utils</li>
              <li>Mocking e Testes de Integração</li>
            </ul>

            <h2><strong>17. Aplicações Single Page (SPA) com Vue.js</strong></h2>
            <ul>
              <li>O que é uma SPA?</li>
              <li>SPA com Vue Router</li>
              <li>Gerenciamento de Estado em SPAs</li>
            </ul>

            <h2><strong>18. Vue.js com API RESTful</strong></h2>
            <ul>
              <li>Conectando Vue.js com APIs</li>
              <li>Consumindo Dados com Axios</li>
              <li>Autenticação e Autorização</li>
            </ul>

            <h2><strong>19. SEO e Otimização de Performance</strong></h2>
            <ul>
              <li>SEO em Aplicações Vue.js</li>
              <li>Lazy Loading de Componentes</li>
              <li>Otimização de Imagens e Assets</li>
            </ul>

            <h2><strong>20. Internacionalização (i18n)</strong></h2>
            <ul>
              <li>Configuração de Idiomas</li>
              <li>Traduções de Conteúdo</li>
              <li>Gerenciamento de Locales</li>
            </ul>

            <h2><strong>21. Vue.js e GraphQL</strong></h2>
            <ul>
              <li>Introdução ao GraphQL</li>
              <li>Integração com Vue Apollo</li>
              <li>Consultas e Mutations</li>
            </ul>

            <h2><strong>22. Vue.js com Nuxt.js</strong></h2>
            <ul>
              <li>Introdução ao Nuxt.js</li>
              <li>Criação de Projetos com Nuxt</li>
              <li>SSR (Server-Side Rendering) e SSG (Static Site Generation)</li>
            </ul>

            <h2><strong>23. Vue.js com TypeScript</strong></h2>
            <ul>
              <li>Introdução ao TypeScript</li>
              <li>Configuração do Vue com TypeScript</li>
              <li>Componentes Tipados</li>
            </ul>

            <h2><strong>24. Plugins e Mixins</strong></h2>
            <ul>
              <li>Criação de Plugins</li>
              <li>Uso de Mixins</li>
              <li>Gerenciamento de Dependências Globais</li>
            </ul>

            <h2><strong>25. Ferramentas de Desenvolvimento e Debugging</strong></h2>
            <ul>
              <li>Vue Devtools</li>
              <li>Debugging com Vue CLI</li>
              <li>Ferramentas de Performance</li>
            </ul>

            <h2><strong>26. Testes de Performance</strong></h2>
            <ul>
              <li>Testando a Performance de Aplicações Vue.js</li>
              <li>Otimização de Código e Consultas</li>
              <li>Ferramentas de Benchmarking</li>
            </ul>

            <h2><strong>27. Segurança em Aplicações Vue.js</strong></h2>
            <ul>
              <li>Proteção Contra Ataques XSS</li>
              <li>Gerenciamento de Tokens</li>
              <li>Autenticação de Usuários</li>
            </ul>

            <h2><strong>28. Desenvolvimento de Plugins Vue.js</strong></h2>
            <ul>
              <li>Criação de Plugins Personalizados</li>
              <li>Uso de Plugins Populares</li>
              <li>Distribuição de Plugins</li>
            </ul>

            <h2><strong>29. Vue 3 - Novidades e Recursos Avançados</strong></h2>
            <ul>
              <li>Composition API</li>
              <li>Teleport e Suspense</li>
              <li>Recursos de Desempenho e Otimização</li>
            </ul>

            <h2><strong>30. Projeto Final: Aplicação Completa em Vue.js</strong></h2>
            <ul>
              <li>Planejamento do Projeto</li>
              <li>Desenvolvimento da Aplicação</li>
              <li>Testes, Deploy e Considerações Finais</li>
            </ul>

          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MenuVue from "@/components/vue/menuVue.vue"
export default {

  data() {
    return {
      msg: 'Curso Completo de Vue.js',
      video: 'https://www.youtube.com/embed/VIDEO_ID',
      propriedadesVideo: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    };
  }, components: {
    MenuVue
  }
};
</script>
<style scoped>
.video {
  max-width: 70%;
  max-height: 70%;
}
</style>
