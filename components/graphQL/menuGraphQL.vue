<template>
  <v-app ajsutePagina>
    <v-card class="TextMenu">
      <v-card-title><b>Menu GraphQL</b></v-card-title>
    </v-card>
    <v-card>
      <v-card-subtitle class="text-red-darken-1">
        <nuxt-link :to="Indice"><b>Índice</b></nuxt-link> <br> <br>
        <nuxt-link :to=Code><b>Código GraphQL</b></nuxt-link> <br> <br>
        <a :href=Doc :target=Target_Novatela><b>Documentação</b></a>
      </v-card-subtitle>
    </v-card>
    <v-container>
      <v-expansion-panels>
        <v-expansion-panel v-for="(item, index) in lista" :key="index">
          <v-expansion-panel-header>
            <b>{{ item.name }}</b>
          </v-expansion-panel-header>
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
  name: "menuGraphQL",
  data() {
    return {
      Indice: "/GraphQL/indices",
      Code: "/GraphQL/codeGraphQL",
      Doc: "https://graphql.org/learn/",
      Target_Novatela: "_blank",
      lista: [
        {
          id: 1,
          name: "Introdução",
          open: true,
          subItems: [
            { id: 1, name: "GraphQL?", page: "/GraphQL/M1_Introducao/oQueEGraphQL" },
            { id: 2, name: "Introdução", page: "/GraphQL/M1_Introducao/introducao" },
          ]
        },
        {
          id: 2,
          name: "Queries and Mutations",
          open: true,
          subItems: [
            { id: 1, name: "Introducao", page: "/GraphQL/M2_Consultas_Mutation/queriesAndMutations" },
            { id: 2, name: "Campos", page: "/GraphQL/M2_Consultas_Mutation/campos" },
            { id: 3, name: "Argumentos", page: "/GraphQL/M2_Consultas_Mutation/argumentos" },
            { id: 4, name: "Aliases", page: "/GraphQL/M2_Consultas_Mutation/aliases" },
            { id: 5, name: "Fragmentos", page: "/GraphQL/M2_Consultas_Mutation/fragmentos" },
            { id: 6, name: "Variaveis no Fragmentos", page: "/GraphQL/M2_Consultas_Mutation/variaveisFragmentos" },
          ]
        },
        {
          id: 3,
          name: "Mutations",
          open: true,
          subItems: [
            { id: 1, name: "Criando Mutations", page: "/GraphQL/M3_Mutations/criandoMutations" },
            { id: 2, name: "Mutations Complexas", page: "/GraphQL/M3_Mutations/mutationsComplexas" },
          ]
        },
        {
          id: 4,
          name: "Subscrições",
          open: true,
          subItems: [
            { id: 1, name: "Introdução a Subscrições", page: "/GraphQL/M4_Subscricoes/introducao" },
            { id: 2, name: "Usando Subscrições", page: "/GraphQL/M4_Subscricoes/usandoSubscricoes" },
          ]
        },
        {
          id: 5,
          name: "Esquemas e Tipos",
          open: true,
          subItems: [
            { id: 1, name: "Definindo Esquemas", page: "/GraphQL/M5_Esquemas/definindoEsquemas" },
            { id: 2, name: "Tipos Personalizados", page: "/GraphQL/M5_Esquemas/tiposPersonalizados" },
          ]
        },
        {
          id: 6,
          name: "Resolvers",
          open: true,
          subItems: [
            { id: 1, name: "Introdução aos Resolvers", page: "/GraphQL/M6_Resolvers/introducao" },
            { id: 2, name: "Resolvers Avançados", page: "/GraphQL/M6_Resolvers/avancados" },
          ]
        },
        {
          id: 7,
          name: "Autenticação",
          open: true,
          subItems: [
            { id: 1, name: "Autenticação Básica", page: "/GraphQL/M7_Autenticacao/basica" },
            { id: 2, name: "Autenticação com JWT", page: "/GraphQL/M7_Autenticacao/jwt" },
          ]
        },
        {
          id: 8,
          name: "Autorização",
          open: true,
          subItems: [
            { id: 1, name: "Controle de Acesso", page: "/GraphQL/M8_Autorizacao/controleAcesso" },
            { id: 2, name: "Roles e Permissões", page: "/GraphQL/M8_Autorizacao/rolesPermissoes" },
          ]
        },
        {
          id: 9,
          name: "Erros e Tratamento de Erros",
          open: true,
          subItems: [
            { id: 1, name: "Erros Comuns", page: "/GraphQL/M9_Erros/comuns" },
            { id: 2, name: "Tratamento de Erros", page: "/GraphQL/M9_Erros/tratamento" },
          ]
        },
        {
          id: 10,
          name: "Integração com Frontend",
          open: true,
          subItems: [
            { id: 1, name: "Usando GraphQL com Vue.js", page: "/GraphQL/M10_Frontend/vue" },
            { id: 2, name: "Integração com React", page: "/GraphQL/M10_Frontend/react" },
          ]
        },
        {
          id: 11,
          name: "Ferramentas para GraphQL",
          open: true,
          subItems: [
            { id: 1, name: "GraphiQL", page: "/GraphQL/M11_Ferramentas/graphiql" },
            { id: 2, name: "Apollo Studio", page: "/GraphQL/M11_Ferramentas/apolloStudio" },
          ]
        },
        {
          id: 12,
          name: "Desempenho e Cache",
          open: true,
          subItems: [
            { id: 1, name: "Otimização de Consultas", page: "/GraphQL/M12_Desempenho/otimizacaoConsultas" },
            { id: 2, name: "Cache com GraphQL", page: "/GraphQL/M12_Desempenho/cache" },
          ]
        },
        {
          id: 13,
          name: "Testes em GraphQL",
          open: true,
          subItems: [
            { id: 1, name: "Testes Unitários", page: "/GraphQL/M13_Testes/unitarios" },
            { id: 2, name: "Testes de Integração", page: "/GraphQL/M13_Testes/integracao" },
          ]
        },
        {
          id: 14,
          name: "Deploy de Aplicações GraphQL",
          open: true,
          subItems: [
            { id: 1, name: "Deploy Básico", page: "/GraphQL/M14_Deploy/basico" },
            { id: 2, name: "Deploy em Nuvem", page: "/GraphQL/M14_Deploy/nuvem" },
          ]
        },
        {
          id: 15,
          name: "Documentação de APIs GraphQL",
          open: true,
          subItems: [
            { id: 1, name: "Boas Práticas de Documentação", page: "/GraphQL/M15_Documentacao/boasPraticas" },
            { id: 2, name: "Ferramentas de Documentação", page: "/GraphQL/M15_Documentacao/ferramentas" },
          ]
        },
        {
          id: 16,
          name: "Segurança em GraphQL",
          open: true,
          subItems: [
            { id: 1, name: "Prevenção de Ataques", page: "/GraphQL/M16_Seguranca/prevencaoAtaques" },
            { id: 2, name: "Criptografia de Dados", page: "/GraphQL/M16_Seguranca/criptografia" },
          ]
        },
        {
          id: 17,
          name: "Interações em Tempo Real",
          open: true,
          subItems: [
            { id: 1, name: "Usando Subscrições", page: "/GraphQL/M17_Interacoes/subscricoes" },
            { id: 2, name: "Implementação com Websockets", page: "/GraphQL/M17_Interacoes/websockets" },
          ]
        },
        {
          id: 18,
          name: "GraphQL e Microservices",
          open: true,
          subItems: [
            { id: 1, name: "Integração com Microservices", page: "/GraphQL/M18_Microservices/integracao" },
            { id: 2, name: "Gerenciamento de Microservices", page: "/GraphQL/M18_Microservices/gerenciamento" },
          ]
        },
        {
          id: 19,
          name: "GraphQL com Serveless",
          open: true,
          subItems: [
            { id: 1, name: "Introdução ao Serveless", page: "/GraphQL/M19_Serveless/introducao" },
            { id: 2, name: "Exemplos Práticos", page: "/GraphQL/M19_Serveless/exemplos" },
          ]
        },
        {
          id: 20,
          name: "Paginação em GraphQL",
          open: true,
          subItems: [
            { id: 1, name: "Paginação Básica", page: "/GraphQL/M20_Paginacao/basica" },
            { id: 2, name: "Paginação com Cursores", page: "/GraphQL/M20_Paginacao/cursores" },
          ]
        },
        {
          id: 21,
          name: "GraphQL com TypeScript",
          open: true,
          subItems: [
            { id: 1, name: "Configuração Inicial", page: "/GraphQL/M21_TypeScript/configuracao" },
            { id: 2, name: "Tipagem Avançada", page: "/GraphQL/M21_TypeScript/tipagemAvancada" },
          ]
        },
        {
          id: 22,
          name: "GraphQL e Bancos de Dados",
          open: true,
          subItems: [
            { id: 1, name: "Integração com SQL", page: "/GraphQL/M22_BancosDados/sql" },
            { id: 2, name: "Integração com NoSQL", page: "/GraphQL/M22_BancosDados/nosql" },
          ]
        },
        {
          id: 23,
          name: "GraphQL com REST APIs",
          open: true,
          subItems: [
            { id: 1, name: "Integração Básica", page: "/GraphQL/M23_REST/integracaoBasica" },
            { id: 2, name: "GraphQL como Gateway", page: "/GraphQL/M23_REST/gateway" },
          ]
        },
        {
          id: 24,
          name: "Migrando de REST para GraphQL",
          open: true,
          subItems: [
            { id: 1, name: "Planejamento da Migração", page: "/GraphQL/M24_Migracao/planejamento" },
            { id: 2, name: "Desafios Comuns", page: "/GraphQL/M24_Migracao/desafios" },
          ]
        },
        {
          id: 25,
          name: "GraphQL e Docker",
          open: true,
          subItems: [
            { id: 1, name: "Configurando GraphQL com Docker", page: "/GraphQL/M25_Docker/configuracao" },
            { id: 2, name: "Boas Práticas com Docker", page: "/GraphQL/M25_Docker/boasPraticas" },
          ]
        },
        {
          id: 26,
          name: "GraphQL e Kubernetes",
          open: true,
          subItems: [
            { id: 1, name: "Implantando GraphQL no Kubernetes", page: "/GraphQL/M26_Kubernetes/implantacao" },
            { id: 2, name: "Gerenciamento com Kubernetes", page: "/GraphQL/M26_Kubernetes/gerenciamento" },
          ]
        },
        {
          id: 27,
          name: "GraphQL e CI/CD",
          open: true,
          subItems: [
            { id: 1, name: "Automatização de Deploy", page: "/GraphQL/M27_CICD/automatizacaoDeploy" },
            { id: 2, name: "Integração com CI/CD", page: "/GraphQL/M27_CICD/integracao" },
          ]
        },
        {
          id: 28,
          name: "Casos de Uso Avançados",
          open: true,
          subItems: [
            { id: 1, name: "GraphQL em Aplicações Complexas", page: "/GraphQL/M28_CasosUso/complexas" },
            { id: 2, name: "GraphQL em Grandes Escalas", page: "/GraphQL/M28_CasosUso/grandesEscalas" },
          ]
        },
        {
          id: 29,
          name: "Tendências Futuras",
          open: true,
          subItems: [
            { id: 1, name: "Evolução do GraphQL", page: "/GraphQL/M29_Tendencias/evolucao" },
            { id: 2, name: "GraphQL e Web3", page: "/GraphQL/M29_Tendencias/web3" },
          ]
        },
        {
          id: 30,
          name: "Conclusão",
          open: true,
          subItems: [
            { id: 1, name: "Revisão dos Conceitos", page: "/GraphQL/M30_Conclusao/revisao" },
            { id: 2, name: "Próximos Passos", page: "/GraphQL/M30_Conclusao/proximosPassos" },
          ]
        }
      ]
    };
  }
};
</script>

<style>
.ajsutePagina {
  width: 350px;
}

.TextMenu {
  text-align: center;
}
</style>
