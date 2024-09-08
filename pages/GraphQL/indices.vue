<template>
  <v-app>
    <!-- Menu -->
    <v-navigation-drawer app>
      <Menu />
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <!-- Course Introduction -->
            <h1>{{ msg }}</h1>
            <p class="justificar">
              Bem-vindo ao curso de GraphQL! Neste curso, você aprenderá a utilizar o GraphQL, uma linguagem de
              consulta para APIs que permite buscar apenas os dados necessários, de forma eficiente e flexível. Ao longo
              deste curso, você vai entender os conceitos fundamentais e aprender a construir APIs robustas utilizando
              GraphQL.
            </p>

            <!-- Embedded Video -->
            <v-container class="video">
              <v-responsive :aspect-ratio="16 / 9">
                <iframe :src="video" :allow="propriedadesVideo" allowfullscreen></iframe>
              </v-responsive>
            </v-container>

            <!-- Course Content -->
            <h2><strong>1. Introdução ao GraphQL</strong></h2>
            <ul>
              <li>O que é GraphQL?</li>
              <li>História e Filosofia</li>
              <li>Vantagens sobre REST</li>
            </ul>

            <h2><strong>2. Configuração do Ambiente</strong></h2>
            <ul>
              <li>Instalação de Ferramentas</li>
              <li>Configuração de Servidor Local</li>
              <li>Primeira Query GraphQL</li>
            </ul>

            <h2><strong>3. Fundamentos do GraphQL</strong></h2>
            <ul>
              <li>Queries e Mutations</li>
              <li>Tipos de Dados</li>
              <li>Esquemas e Resolvers</li>
            </ul>

            <h2><strong>4. Integração com Banco de Dados</strong></h2>
            <ul>
              <li>GraphQL com Bancos Relacionais</li>
              <li>GraphQL com NoSQL</li>
              <li>Modelagem de Dados em GraphQL</li>
            </ul>

            <h2><strong>5. Autenticação e Autorização</strong></h2>
            <ul>
              <li>Proteção de APIs com GraphQL</li>
              <li>Autenticação com Tokens</li>
              <li>Autorização de Acesso</li>
            </ul>

            <h2><strong>6. Paginação e Filtragem</strong></h2>
            <ul>
              <li>Implementando Paginação</li>
              <li>Filtrando Dados</li>
              <li>Melhorando a Performance das Queries</li>
            </ul>

            <h2><strong>7. Subscriptions e Tempo Real</strong></h2>
            <ul>
              <li>Introdução às Subscriptions</li>
              <li>Implementação de Subscriptions</li>
              <li>Atualizações em Tempo Real</li>
            </ul>

            <h2><strong>8. GraphQL em Produção</strong></h2>
            <ul>
              <li>Melhores Práticas para APIs GraphQL</li>
              <li>Monitoramento e Logging</li>
              <li>Escalabilidade e Segurança</li>
            </ul>

            <h2><strong>9. Ferramentas e Ecosistema</strong></h2>
            <ul>
              <li>Ferramentas de Desenvolvimento</li>
              <li>Integrando GraphQL com Front-end</li>
              <li>Frameworks e Bibliotecas Populares</li>
            </ul>

            <h2><strong>10. Conclusão e Próximos Passos</strong></h2>
            <ul>
              <li>Recapitulação dos Conceitos</li>
              <li>Projetos Práticos</li>
              <li>Explorando Tecnologias Relacionadas</li>
            </ul>

            <h2><strong>11. Avançando com GraphQL</strong></h2>
            <ul>
              <li>Operações Avançadas de Queries</li>
              <li>Directives no GraphQL</li>
              <li>Fragmentos de Consulta</li>
            </ul>

            <h2><strong>12. Trabalhando com APIs Externas</strong></h2>
            <ul>
              <li>Consumindo APIs REST com GraphQL</li>
              <li>Combinação de Múltiplas APIs</li>
              <li>Trabalhando com APIs de Terceiros</li>
            </ul>

            <h2><strong>13. Ferramentas de Desenvolvimento</strong></h2>
            <ul>
              <li>GraphiQL e Insomnia</li>
              <li>Configuração do Playground GraphQL</li>
              <li>Depuração e Testes</li>
            </ul>

            <h2><strong>14. Desempenho e Otimização</strong></h2>
            <ul>
              <li>Melhorando a Performance de Queries</li>
              <li>Lazy Loading e Eager Loading</li>
              <li>Cache e Persistência</li>
            </ul>

            <h2><strong>15. GraphQL e Front-end</strong></h2>
            <ul>
              <li>Introdução ao Apollo Client</li>
              <li>GraphQL com React</li>
              <li>GraphQL com Vue.js</li>
            </ul>

            <h2><strong>16. Integração com Mobile</strong></h2>
            <ul>
              <li>GraphQL com React Native</li>
              <li>GraphQL com Flutter</li>
              <li>GraphQL em Aplicações Móveis</li>
            </ul>

            <h2><strong>17. GraphQL Subscriptions em Profundidade</strong></h2>
            <ul>
              <li>Subscriptions com WebSockets</li>
              <li>Gerenciando Atualizações em Tempo Real</li>
              <li>Escalabilidade de Subscriptions</li>
            </ul>

            <h2><strong>18. Segurança em GraphQL</strong></h2>
            <ul>
              <li>Implementando Rate Limiting</li>
              <li>Proteção contra Ataques de N+1 Queries</li>
              <li>Segurança de Dados e Autorização</li>
            </ul>

            <h2><strong>19. Testando APIs GraphQL</strong></h2>
            <ul>
              <li>Escrevendo Testes Unitários</li>
              <li>Testes de Integração</li>
              <li>Testes de Performance</li>
            </ul>

            <h2><strong>20. GraphQL com Serverless</strong></h2>
            <ul>
              <li>Introdução ao Serverless</li>
              <li>Implementando GraphQL em Lambda</li>
              <li>GraphQL e Microservices</li>
            </ul>

            <h2><strong>21. Gerenciamento de Estado com GraphQL</strong></h2>
            <ul>
              <li>GraphQL e Gerenciamento de Estado</li>
              <li>State Management com Apollo Client</li>
              <li>Melhores Práticas de Gerenciamento de Estado</li>
            </ul>

            <h2><strong>22. GraphQL com TypeScript</strong></h2>
            <ul>
              <li>Introdução ao TypeScript com GraphQL</li>
              <li>Types e Interfaces no GraphQL</li>
              <li>Implementação e Tipagem Estática</li>
            </ul>

            <h2><strong>23. GraphQL com Prisma</strong></h2>
            <ul>
              <li>Introdução ao Prisma</li>
              <li>GraphQL e Prisma para Banco de Dados</li>
              <li>ORM com Prisma e GraphQL</li>
            </ul>

            <h2><strong>24. GraphQL com NestJS</strong></h2>
            <ul>
              <li>Introdução ao NestJS</li>
              <li>Construindo APIs com GraphQL e NestJS</li>
              <li>Integração de Serviços com NestJS</li>
            </ul>

            <h2><strong>25. GraphQL com Docker</strong></h2>
            <ul>
              <li>Introdução ao Docker</li>
              <li>Containerizando Aplicações GraphQL</li>
              <li>Docker Compose para GraphQL</li>
            </ul>

            <h2><strong>26. GraphQL com Kubernetes</strong></h2>
            <ul>
              <li>Introdução ao Kubernetes</li>
              <li>Orquestrando APIs GraphQL com Kubernetes</li>
              <li>Deploy de GraphQL em Clusters</li>
            </ul>

            <h2><strong>27. GraphQL Federation</strong></h2>
            <ul>
              <li>Introdução ao GraphQL Federation</li>
              <li>Construindo APIs Federadas</li>
              <li>Integração com Microsserviços</li>
            </ul>

            <h2><strong>28. Casos de Uso Reais</strong></h2>
            <ul>
              <li>Estudo de Caso: Aplicação em Produção</li>
              <li>Melhores Práticas Baseadas em Experiência</li>
              <li>Explorando Casos de Sucesso</li>
            </ul>

            <h2><strong>29. Explorando Novas Funcionalidades</strong></h2>
            <ul>
              <li>Trabalhando com Dataloaders</li>
              <li>Performance e Escalabilidade</li>
              <li>Novas Funcionalidades no Ecossistema</li>
            </ul>

            <h2><strong>30. Conclusão do Curso</strong></h2>
            <ul>
              <li>Revisão Geral do Curso</li>
              <li>Próximos Passos e Recursos</li>
              <li>Trabalhos Finais e Projetos</li>
            </ul>

          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Menu from "@/components/graphQL/menuGraphQL.vue"
export default {
  data() {
    return {
      msg: 'Curso Completo de GraphQL',
      video: 'https://www.youtube.com/embed/VIDEO_ID',
      propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    }
  },
  components: {
    Menu
  }
}
</script>

<style scoped>
.justificar {
  text-align: justify;
}

.video {
  margin-bottom: 20px;
}
</style>
