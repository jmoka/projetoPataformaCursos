<template>
  <v-app ajsutePagina>
    <v-card class="TextMenu">
      <v-card-title><b>Menu Laravel</b></v-card-title>
    </v-card>
    <v-card>
      <v-card-subtitle class="text-red-darken-1">
        <nuxt-link :to="Indice"><b>Índice VV</b></nuxt-link> <br> <br>
        <nuxt-link :to=Code><b>Código Laravel</b></nuxt-link> <br> <br>
        <a :href=Doc :target=Target_Novatela><b>Documentação</b></a>
      </v-card-subtitle>
    </v-card>
    <v-container>
      <v-expansion-panels>
        <!-- Módulo 1: Introdução ao Laravel -->
        <v-expansion-panel v-for="(item, index) in lista" :key="index">
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
import LgoLaravel from "~/components/img/logoLaravel.vue";
export default {
  name: "menuLaravel",
  data() {
    return {
      Indice: "/laravel/indices",
      Code: "/laravel/codeLaravel",
      Doc: "https://laravel.com/",
      Target_Novatela: "_blank",
      lista: [
        {
          id: 1,
          name: "Introdução",
          open: true,
          subItems: [
            { id: 1, name: "O que é Laravel?", page: "/laravel/M1_Introducao/oQueELaravel" },
            { id: 2, name: "Instalação", page: "/laravel/M1_Introducao/instalacao" },
            { id: 3, name: "Arquitetura MVC", page: "/laravel/M1_Introducao/arquiteturaMVC" },
          ]
        },
        {
          id: 2,
          name: "Roteamento e Controladores",
          open: true,
          subItems: [
            { id: 1, name: "Rotas Básicas", page: "/laravel/M2_Roteamento/rotasBasicas" },
            { id: 2, name: "Controladores", page: "/laravel/M2_Roteamento/controladores" },
            { id: 3, name: "Métodos de Rota", page: "/laravel/M2_Roteamento/metodosRota" },
          ]
        },
        {
          id: 3,
          name: "Modelos e Eloquent ORM",
          open: true,
          subItems: [
            { id: 1, name: "Introdução ao Eloquent", page: "/laravel/M3_Modelos/introducaoEloquent" },
            { id: 2, name: "Criação de Modelos", page: "/laravel/M3_Modelos/criacaoModelos" },
            { id: 3, name: "Relacionamentos", page: "/laravel/M3_Modelos/relacionamentos" },
          ]
        },
        {
          id: 4,
          name: "Banco de Dados e Migrações",
          open: true,
          subItems: [
            { id: 1, name: "Configuração do Banco de Dados", page: "/laravel/M4_BancoDeDados/configuracaoBD" },
            { id: 2, name: "Migrações", page: "/laravel/M4_BancoDeDados/migracoes" },
            { id: 3, name: "Seeders", page: "/laravel/M4_BancoDeDados/seeders" },
          ]
        },
        {
          id: 5,
          name: "Validação de Dados",
          open: true,
          subItems: [
            { id: 1, name: "Validação de Requisições", page: "/laravel/M5_Validacao/validacaoRequisicoes" },
            { id: 2, name: "Customização de Mensagens", page: "/laravel/M5_Validacao/customizacaoMensagens" },
          ]
        },
        {
          id: 6,
          name: "Autenticação e Autorização",
          open: true,
          subItems: [
            { id: 1, name: "Autenticação Básica", page: "/laravel/M6_Autenticacao/autenticacaoBasica" },
            { id: 2, name: "Autorização com Policies", page: "/laravel/M6_Autenticacao/policies" },
            { id: 3, name: "Middleware", page: "/laravel/M6_Autenticacao/middleware" },
          ]
        },
        {
          id: 7,
          name: "Trabalhando com Requests",
          open: true,
          subItems: [
            { id: 1, name: "Request Básico", page: "/laravel/M7_Requests/requestBasico" },
            { id: 2, name: "Request Avançado", page: "/laravel/M7_Requests/requestAvancado" },
          ]
        },
        {
          id: 8,
          name: "Sessões e Cookies",
          open: true,
          subItems: [
            { id: 1, name: "Gerenciamento de Sessões", page: "/laravel/M8_Sessoes/sessoes" },
            { id: 2, name: "Cookies", page: "/laravel/M8_Sessoes/cookies" },
          ]
        },
        {
          id: 9,
          name: "Envio de Emails",
          open: true,
          subItems: [
            { id: 1, name: "Configuração de Email", page: "/laravel/M9_Email/configuracaoEmail" },
            { id: 2, name: "Envio de Emails", page: "/laravel/M9_Email/envioEmails" },
          ]
        },
        {
          id: 10,
          name: "Armazenamento e Upload de Arquivos",
          open: true,
          subItems: [
            { id: 1, name: "Armazenamento de Arquivos", page: "/laravel/M10_Armazenamento/armazenamentoArquivos" },
            { id: 2, name: "Uploads", page: "/laravel/M10_Armazenamento/uploads" },
          ]
        },
        {
          id: 11,
          name: "API e API Resources",
          open: true,
          subItems: [
            { id: 1, name: "Construção de APIs", page: "/laravel/M11_API/construcaoAPIs" },
            { id: 2, name: "API Resources", page: "/laravel/M11_API/apiResources" },
          ]
        },
        {
          id: 12,
          name: "Testes em Laravel",
          open: true,
          subItems: [
            { id: 1, name: "Testes Unitários", page: "/laravel/M12_Testes/testesUnitarios" },
            { id: 2, name: "Testes de Integração", page: "/laravel/M12_Testes/testesIntegracao" },
          ]
        },
        {
          id: 13,
          name: "Jobs e Queues",
          open: true,
          subItems: [
            { id: 1, name: "Introdução a Jobs", page: "/laravel/M13_Jobs/introducaoJobs" },
            { id: 2, name: "Trabalhando com Queues", page: "/laravel/M13_Jobs/trabalhandoQueues" },
          ]
        },
        {
          id: 14,
          name: "Eventos e Listeners",
          open: true,
          subItems: [
            { id: 1, name: "Eventos", page: "/laravel/M14_Eventos/eventos" },
            { id: 2, name: "Listeners", page: "/laravel/M14_Eventos/listeners" },
          ]
        },
        {
          id: 15,
          name: "Trabalhando com Caching",
          open: true,
          subItems: [
            { id: 1, name: "Introdução ao Caching", page: "/laravel/M15_Caching/introducaoCaching" },
            { id: 2, name: "Cache em Consultas", page: "/laravel/M15_Caching/cacheConsultas" },
          ]
        },
        {
          id: 16,
          name: "Jobs e Queues",
          open: true,
          subItems: [
            { id: 1, name: "Introdução a Jobs", page: "/laravel/M16_Jobs/introducaoJobs" },
            { id: 2, name: "Configuração de Queues", page: "/laravel/M16_Jobs/configuracaoQueues" },
          ]
        },
        {
          id: 17,
          name: "Autorização e Policies",
          open: true,
          subItems: [
            { id: 1, name: "Definindo Policies", page: "/laravel/M17_Autorizacao/policies" },
            { id: 2, name: "Autorização de Ações", page: "/laravel/M17_Autorizacao/autorizacaoAcoes" },
          ]
        },
        {
          id: 18,
          name: "Migrations Avançadas",
          open: true,
          subItems: [
            { id: 1, name: "Migrations Avançadas", page: "/laravel/M18_Migrations/avancadas" },
            { id: 2, name: "Alteração de Tabelas", page: "/laravel/M18_Migrations/alteracaoTabelas" },
          ]
        },
        {
          id: 19,
          name: "Testes e Cobertura",
          open: true,
          subItems: [
            { id: 1, name: "Testes Unitários", page: "/laravel/M19_Testes/testesUnitarios" },
            { id: 2, name: "Cobertura de Código", page: "/laravel/M19_Testes/coberturaCodigo" },
          ]
        },
        {
          id: 20,
          name: "Estrutura de Projeto",
          open: true,
          subItems: [
            { id: 1, name: "Organização de Pastas", page: "/laravel/M20_Estrutura/organizacaoPastas" },
            { id: 2, name: "Padrões de Projeto", page: "/laravel/M20_Estrutura/padroesProjeto" },
          ]
        },
        {
          id: 21,
          name: "Middleware Avançado",
          open: true,
          subItems: [
            { id: 1, name: "Criando Middlewares", page: "/laravel/M21_Middleware/criandoMiddlewares" },
            { id: 2, name: "Aplicando Middlewares", page: "/laravel/M21_Middleware/aplicandoMiddlewares" },
          ]
        },
        {
          id: 22,
          name: "Integrando com APIs Externas",
          open: true,
          subItems: [
            { id: 1, name: "Chamadas HTTP", page: "/laravel/M22_Integracao/chamadasHTTP" },
            { id: 2, name: "Autenticação em APIs", page: "/laravel/M22_Integracao/autenticacaoAPIs" },
          ]
        },
        {
          id: 23,
          name: "Segurança",
          open: true,
          subItems: [
            { id: 1, name: "Protegendo Aplicações", page: "/laravel/M23_Seguranca/protecaoAplicacoes" },
            { id: 2, name: "Criptografia", page: "/laravel/M23_Seguranca/criptografia" },
          ]
        },
        {
          id: 24,
          name: "Localização e Internacionalização",
          open: true,
          subItems: [
            { id: 1, name: "Localização", page: "/laravel/M24_Localizacao/localizacao" },
            { id: 2, name: "Internacionalização", page: "/laravel/M24_Localizacao/internacionalizacao" },
          ]
        },
        {
          id: 25,
          name: "Uso de Serviços Externos",
          open: true,
          subItems: [
            { id: 1, name: "Serviços de Pagamento", page: "/laravel/M25_ServicosExternos/servicosPagamento" },
            { id: 2, name: "Notificações", page: "/laravel/M25_ServicosExternos/notificacoes" },
          ]
        },
        {
          id: 26,
          name: "Deploy e Manutenção",
          open: true,
          subItems: [
            { id: 1, name: "Deploy em Servidores", page: "/laravel/M26_Deploy/deployServidores" },
            { id: 2, name: "Manutenção", page: "/laravel/M26_Deploy/manutencao" },
          ]
        },
        {
          id: 27,
          name: "Performance e Otimização",
          open: true,
          subItems: [
            { id: 1, name: "Otimização de Consultas", page: "/laravel/M27_Performance/otimizacaoConsultas" },
            { id: 2, name: "Melhorias de Performance", page: "/laravel/M27_Performance/melhoriasPerformance" },
          ]
        },
        {
          id: 28,
          name: "Eventos e Listeners",
          open: true,
          subItems: [
            { id: 1, name: "Definindo Eventos", page: "/laravel/M28_Eventos/definindoEventos" },
            { id: 2, name: "Criando Listeners", page: "/laravel/M28_Eventos/criandoListeners" },
          ]
        },
        {
          id: 29,
          name: "Recursos Avançados",
          open: true,
          subItems: [
            { id: 1, name: "Recursos de Desenvolvimento", page: "/laravel/M29_Recursos/recursosDesenvolvimento" },
            { id: 2, name: "Extensões e Pacotes", page: "/laravel/M29_Recursos/extensoesPacotes" },
          ]
        },
        {
          id: 30,
          name: "Melhores Práticas",
          open: true,
          subItems: [
            { id: 1, name: "Boas Práticas de Codificação", page: "/laravel/M30_BoasPraticas/boasPraticas" },
            { id: 2, name: "Documentação e Manutenção", page: "/laravel/M30_BoasPraticas/documentacaoManutencao" },
          ]
        },
      ]
    };
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