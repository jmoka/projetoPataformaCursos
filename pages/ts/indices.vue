<template>
  <v-app>
    <v-navigation-drawer app>
      <MenuJS />
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <!-- Course Introduction -->
            <h1>{{ msg }}</h1>
            <p class="justificar">
              Bem-vindo ao curso de Introdução ao TypeScript! Neste curso, você aprenderá sobre TypeScript, uma
              linguagem
              de programação que adiciona tipos estáticos ao JavaScript. TypeScript é amplamente utilizado para
              construir
              aplicações grandes e complexas, oferecendo melhor manutenção e detecção de erros em tempo de
              desenvolvimento.
            </p>
            <!-- Embedded Video -->
            <v-container class="flex">
              <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                <iframe :src="video" :allow="propriedadesVideo" allowfullscreen></iframe>
              </v-responsive>
            </v-container>
            <!-- Course Content -->
            <h2><strong>1. Introdução ao TypeScript</strong></h2>
            <ul>
              <li>O que é TypeScript?</li>
              <li>Vantagens do TypeScript</li>
              <li>Configuração Inicial</li>
            </ul>
            <h2><strong>2. Instalação e Configuração do Ambiente</strong></h2>
            <ul>
              <li>Resumo Geral</li>
              <li>Instalação do Visual Studio Code</li>
              <li>Instalação do Node.js e npm</li>
              <li>Instalação do TypeScript (tsc)</li>
              <li>Configuração do tsconfig.json</li>
            </ul>
            <h2><strong>3. Tipos de Dados</strong></h2>
            <ul>
              <li>Tipos Básicos</li>
              <li>Tipos Personalizados</li>
              <li>Enums</li>
              <li>Tuplas</li>
              <li>Tipo Any</li>
            </ul>
            <h2><strong>4. Funções e Tipagem</strong></h2>
            <ul>
              <li>Funções Básicas</li>
              <li>Tipos de Parâmetros e Retorno</li>
              <li>Funções Anônimas e Arrow Functions</li>
              <li>Sobrecarregamento de Funções</li>
            </ul>
            <h2><strong>5. Objetos e Interfaces</strong></h2>
            <ul>
              <li>Objetos em TypeScript</li>
              <li>Interfaces</li>
              <li>Herança em Interfaces</li>
              <li>Type Assertions</li>
            </ul>
            <h2><strong>6. Classes e Objetos</strong></h2>
            <ul>
              <li>Definição de Classes</li>
              <li>Construtores</li>
              <li>Herança</li>
              <li>Modificadores de Acesso (public, private, protected)</li>
              <li>Propriedades e Métodos Estáticos</li>
            </ul>
            <h2><strong>7. Módulos e Importação</strong></h2>
            <ul>
              <li>Importação e Exportação de Módulos</li>
              <li>Módulos Comuns e ES6</li>
              <li>Gerenciamento de Dependências</li>
              <li>Uso de @types</li>
            </ul>
            <h2><strong>8. Manipulação de Strings e Arrays</strong></h2>
            <ul>
              <li>Manipulação de Strings</li>
              <li>Arrays e Tipos de Arrays</li>
              <li>Métodos de Arrays</li>
              <li>Funções de Array como map, filter, reduce</li>
            </ul>
            <h2><strong>9. Tipos Avançados</strong></h2>
            <ul>
              <li>Tipos Literais</li>
              <li>Tipos de União e Interseção</li>
              <li>Tipos Genéricos</li>
              <li>Conditional Types</li>
            </ul>
            <h2><strong>10. Programação Assíncrona</strong></h2>
            <ul>
              <li>Promises</li>
              <li>Async/Await</li>
              <li>Tipos de Promises</li>
              <li>Tratamento de Erros em Código Assíncrono</li>
            </ul>
            <h2><strong>11. Manipulação de Erros</strong></h2>
            <ul>
              <li>Tratamento de Erros com Try/Catch</li>
              <li>Criação de Tipos de Erro Personalizados</li>
              <li>Manipulação de Erros Assíncronos</li>
            </ul>
            <h2><strong>12. Decoradores</strong></h2>
            <ul>
              <li>Introdução aos Decoradores</li>
              <li>Decoradores de Classe</li>
              <li>Decoradores de Método</li>
              <li>Decoradores de Propriedade</li>
            </ul>
            <h2><strong>13. Interfaces e Tipos de Função</strong></h2>
            <ul>
              <li>Definição de Tipos de Função</li>
              <li>Interfaces para Funções</li>
              <li>Tipos de Funções e Callbacks</li>
              <li>Funções de Ordem Superior</li>
            </ul>
            <h2><strong>14. Trabalhando com APIs</strong></h2>
            <ul>
              <li>Definição de Tipos para APIs</li>
              <li>Manipulação de Respostas e Tipos</li>
              <li>Uso de TypeScript com Axios</li>
              <li>Gerenciamento de Tipos de Dados</li>
            </ul>
            <h2><strong>15. Integração com Frameworks</strong></h2>
            <ul>
              <li>TypeScript com React</li>
              <li>TypeScript com Vue.js</li>
              <li>TypeScript com Angular</li>
              <li>Configuração de Projetos Multi-Frameworks</li>
            </ul>
            <h2><strong>16. Testes com TypeScript</strong></h2>
            <ul>
              <li>Introdução a Testes Unitários</li>
              <li>Testando com Jest e TypeScript</li>
              <li>Testes de Integração</li>
              <li>Tipos de Dados em Testes</li>
            </ul>
            <h2><strong>17. Configuração Avançada</strong></h2>
            <ul>
              <li>Configuração do tsconfig.json</li>
              <li>Compilação com TSC</li>
              <li>Uso de Babel com TypeScript</li>
              <li>Integração com Ferramentas de Build</li>
            </ul>
            <h2><strong>18. Boas Práticas de Programação</strong></h2>
            <ul>
              <li>Estrutura de Código Limpo</li>
              <li>Documentação e Comentários</li>
              <li>Refatoração e Melhoria Contínua</li>
              <li>Gerenciamento de Versões e Controle de Código</li>
            </ul>
            <h2><strong>19. Segurança com TypeScript</strong></h2>
            <ul>
              <li>Proteção contra Vulnerabilidades</li>
              <li>Segurança em Manipulação de Dados</li>
              <li>Segurança em APIs e Requisições</li>
            </ul>
            <h2><strong>20. Performance e Otimização</strong></h2>
            <ul>
              <li>Otimização de Código</li>
              <li>Configuração de Build</li>
              <li>Minificação e Bundling</li>
              <li>Boas Práticas de Performance</li>
            </ul>
            <h2><strong>21. Design Patterns com TypeScript</strong></h2>
            <ul>
              <li>Introdução a Design Patterns</li>
              <li>Singleton</li>
              <li>Factory</li>
              <li>Observer</li>
              <li>Implementação de Design Patterns em TypeScript</li>
            </ul>
            <h2><strong>22. Trabalhando com Dados e Armazenamento</strong></h2>
            <ul>
              <li>Armazenamento Local e SessionStorage</li>
              <li>Cookies e Sessões</li>
              <li>Manipulação e Persistência de Dados</li>
              <li>Segurança e Limitações</li>
            </ul>
            <h2><strong>23. Acessibilidade</strong></h2>
            <ul>
              <li>Práticas de Acessibilidade</li>
              <li>Uso de ARIA Attributes</li>
              <li>Testes de Acessibilidade</li>
              <li>Ferramentas e Técnicas de Acessibilidade</li>
            </ul>
            <h2><strong>24. Internacionalização</strong></h2>
            <ul>
              <li>Suporte a Múltiplos Idiomas</li>
              <li>Tradução e Localização</li>
              <li>Ferramentas para Internacionalização</li>
              <li>Boas Práticas de Internacionalização</li>
            </ul>
            <h2><strong>25. Documentação e Comentários</strong></h2>
            <ul>
              <li>Documentando Código TypeScript</li>
              <li>Uso de JSDoc</li>
              <li>Gerando Documentação</li>
              <li>Boas Práticas de Documentação</li>
            </ul>
            <h2><strong>26. Integração com Ferramentas de Build</strong></h2>
            <ul>
              <li>Configuração com Webpack</li>
              <li>Uso de Parcel e Rollup</li>
              <li>Configuração de Build para Produção</li>
              <li>Gerenciamento de Dependências e Plugins</li>
            </ul>
            <h2><strong>27. Trabalhando com APIs Externas</strong></h2>
            <ul>
              <li>Integração com APIs REST</li>
              <li>Manipulação de Dados JSON</li>
              <li>Autenticação e Autorização</li>
              <li>Gerenciamento de Requisições e Erros</li>
            </ul>
            <h2><strong>28. TypeScript e Backend</strong></h2>
            <ul>
              <li>Configuração de Servidores Node.js com TypeScript</li>
              <li>Criação de APIs com Express e TypeScript</li>
              <li>Integração com Bancos de Dados</li>
              <li>Boas Práticas em Desenvolvimento Backend</li>
            </ul>
            <h2><strong>29. Trabalhando com WebAssembly</strong></h2>
            <ul>
              <li>Introdução ao WebAssembly</li>
              <li>Integração com TypeScript</li>
              <li>Vantagens e Desvantagens</li>
              <li>Exemplos de Aplicação</li>
            </ul>
            <h2><strong>30. Desenvolvimento Mobile com TypeScript</strong></h2>
            <ul>
              <li>Introdução ao Desenvolvimento Mobile</li>
              <li>TypeScript com React Native</li>
              <li>Uso de Frameworks Mobile</li>
              <li>Boas Práticas e Desafios</li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import MenuJS from "@/components/ts/menuTS.vue";
export default {
  name: "PlanosEstudosJS",
  data() {
    return {
      isDark: true,
      msg: 'Introdução ao TypeScript',
      video: 'https://www.youtube.com/embed/VIDEO_ID',
      propriedadesVideo: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    };
  },
  components: {
    MenuJS
  }
};
</script>
<style scoped>
.video {
  max-width: 70%;
  max-height: 70%;
}
</style>
