<template>
  <v-app>
    <!-- Menu -->
    <v-navigation-drawer app>
      <MenuLaravel />
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <!-- Course Introduction -->
            <h1>{{ msg }}</h1>
            <p class="justificar">
              Bem-vindo ao curso de Laravel! Neste curso, você aprenderá a criar aplicações web robustas e escaláveis
              utilizando o framework PHP mais popular do mercado. O Laravel oferece uma sintaxe expressiva e elegante,
              facilitando o desenvolvimento de soluções complexas de forma ágil e eficiente.
            </p>

            <!-- Embedded Video -->
            <v-container video>
              <v-responsive :aspect-ratio="16 / 9">
                <iframe :src="video" :allow="propriedadesVideo" allowfullscreen></iframe>
              </v-responsive>
            </v-container>

            <!-- Course Content -->
            <h2><strong>1. Introdução ao Laravel</strong></h2>
            <ul>
              <li>O que é Laravel?</li>
              <li>História e Filosofia</li>
              <li>Características Principais</li>
            </ul>

            <h2><strong>2. Configuração do Ambiente de Desenvolvimento</strong></h2>
            <ul>
              <li>Instalação do Composer</li>
              <li>Instalação do Laravel</li>
              <li>Configuração do Servidor Local</li>
            </ul>

            <h2><strong>3. Estrutura do Projeto Laravel</strong></h2>
            <ul>
              <li>Visão Geral dos Diretórios</li>
              <li>Configuração Básica</li>
              <li>Arquivos de Rotas e Controladores</li>
            </ul>

            <h2><strong>4. Rotas e Controladores</strong></h2>
            <ul>
              <li>Definindo Rotas</li>
              <li>Controladores e Métodos</li>
              <li>Middlewares</li>
            </ul>

            <h2><strong>5. Blade Templates</strong></h2>
            <ul>
              <li>Introdução ao Blade</li>
              <li>Diretivas e Componentes</li>
              <li>Layouts e Seções</li>
            </ul>

            <h2><strong>6. Banco de Dados e Eloquent ORM</strong></h2>
            <ul>
              <li>Configuração do Banco de Dados</li>
              <li>Migrations</li>
              <li>Seeders e Factories</li>
              <li>Introdução ao Eloquent ORM</li>
            </ul>

            <h2><strong>7. Relacionamentos no Eloquent</strong></h2>
            <ul>
              <li>Relacionamentos One-to-One</li>
              <li>Relacionamentos One-to-Many</li>
              <li>Relacionamentos Many-to-Many</li>
              <li>Relacionamentos Polimórficos</li>
            </ul>

            <h2><strong>8. Autenticação e Autorização</strong></h2>
            <ul>
              <li>Sistema de Autenticação Integrado</li>
              <li>Criação de Módulos de Login</li>
              <li>Autorização de Acesso e Policies</li>
            </ul>

            <h2><strong>9. APIs RESTful</strong></h2>
            <ul>
              <li>Introdução a APIs no Laravel</li>
              <li>Construção de APIs RESTful</li>
              <li>Autenticação de APIs</li>
              <li>Rate Limiting e Segurança</li>
            </ul>

            <h2><strong>10. Testes Automatizados</strong></h2>
            <ul>
              <li>Testes Unitários com PHPUnit</li>
              <li>Testes de Integração</li>
              <li>Testes de APIs</li>
            </ul>

            <h2><strong>11. Filas e Jobs</strong></h2>
            <ul>
              <li>Introdução às Filas</li>
              <li>Processamento Assíncrono com Jobs</li>
              <li>Drivers de Filas</li>
            </ul>

            <h2><strong>12. Eventos e Listeners</strong></h2>
            <ul>
              <li>Conceitos de Eventos</li>
              <li>Criando e Despachando Eventos</li>
              <li>Listeners e Manipuladores de Eventos</li>
            </ul>

            <h2><strong>13. Email e Notificações</strong></h2>
            <ul>
              <li>Configuração de Emails</li>
              <li>Envio de Emails com Mailable</li>
              <li>Notificações via Email e SMS</li>
            </ul>

            <h2><strong>14. Trabalhando com Arquivos</strong></h2>
            <ul>
              <li>Upload de Arquivos</li>
              <li>Gerenciamento de Arquivos e Diretórios</li>
              <li>Serviços de Armazenamento Externo</li>
            </ul>

            <h2><strong>15. Serviços e Repositórios</strong></h2>
            <ul>
              <li>Introdução ao Padrão Repository</li>
              <li>Serviços e Classes Helper</li>
              <li>Injeção de Dependências</li>
            </ul>

            <h2><strong>16. Cache e Otimização</strong></h2>
            <ul>
              <li>Cache de Dados</li>
              <li>Otimização de Consultas</li>
              <li>Cache de Vistas</li>
            </ul>

            <h2><strong>17. Segurança no Laravel</strong></h2>
            <ul>
              <li>Proteção contra CSRF</li>
              <li>Validação de Dados</li>
              <li>Encriptação e Hashing</li>
            </ul>

            <h2><strong>18. Implementação de APIs com GraphQL</strong></h2>
            <ul>
              <li>Introdução ao GraphQL</li>
              <li>Construção de APIs com GraphQL</li>
              <li>Consultas e Mutations</li>
            </ul>

            <h2><strong>19. Internacionalização (i18n)</strong></h2>
            <ul>
              <li>Traduções de Vistas e Mensagens</li>
              <li>Gerenciamento de Idiomas</li>
              <li>Localização de Datas e Números</li>
            </ul>

            <h2><strong>20. Logs e Monitoramento</strong></h2>
            <ul>
              <li>Configuração de Logs</li>
              <li>Monitoramento de Aplicações</li>
              <li>Alertas e Notificações de Erros</li>
            </ul>

            <h2><strong>21. Implementação de WebSockets</strong></h2>
            <ul>
              <li>Introdução ao WebSockets</li>
              <li>Configuração e Uso</li>
              <li>Notificações em Tempo Real</li>
            </ul>

            <h2><strong>22. Deploy e Publicação</strong></h2>
            <ul>
              <li>Configuração de Ambiente de Produção</li>
              <li>Deploy Automatizado</li>
              <li>Integração Contínua (CI/CD)</li>
            </ul>

            <h2><strong>23. Desenvolvimento de Pacotes no Laravel</strong></h2>
            <ul>
              <li>Introdução ao Desenvolvimento de Pacotes</li>
              <li>Publicação de Pacotes no Packagist</li>
              <li>Versionamento e Atualização de Pacotes</li>
            </ul>

            <h2><strong>24. Laravel e Vue.js</strong></h2>
            <ul>
              <li>Integração do Laravel com Vue.js</li>
              <li>Construção de SPAs</li>
              <li>Gerenciamento de Estado com Vuex</li>
            </ul>

            <h2><strong>25. Laravel e Inertia.js</strong></h2>
            <ul>
              <li>O que é Inertia.js?</li>
              <li>Configuração e Uso com Laravel</li>
              <li>Criação de Aplicações Dinâmicas</li>
            </ul>

            <h2><strong>26. Laravel Livewire</strong></h2>
            <ul>
              <li>Construção de Interfaces Reativas com Livewire</li>
              <li>Integração com Blade</li>
              <li>Manutenção de Estado em Componentes</li>
            </ul>

            <h2><strong>27. Integração com Serviços Externos</strong></h2>
            <ul>
              <li>Conexão com Serviços de Terceiros</li>
              <li>APIs de Pagamento</li>
              <li>Integração com Redes Sociais</li>
            </ul>

            <h2><strong>28. Testes de Performance</strong></h2>
            <ul>
              <li>Testando a Performance de Aplicações Laravel</li>
              <li>Otimização de Código e Consultas</li>
              <li>Ferramentas de Benchmarking</li>
            </ul>

            <h2><strong>29. Laravel e WebAssembly</strong></h2>
            <ul>
              <li>Introdução ao WebAssembly</li>
              <li>Integração do Laravel com WebAssembly</li>
              <li>Execução de Códigos em WebAssembly</li>
            </ul>

            <h2><strong>30. Conclusão e Próximos Passos</strong></h2>
            <ul>
              <li>Recapitulação dos Conceitos</li>
              <li>Materiais Complementares</li>
              <li>Desafios e Projetos Finais</li>
            </ul>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MenuLaravel from '~/components/laravel/menuLaravel.vue'

export default {
  components: {
    MenuLaravel
  },
  data: () => ({
    msg: "Introdução ao Laravel",
    video: 'https://www.youtube.com/embed/VIDEO_ID',
    propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
  })
}
</script>
<style scoped>
.video {
  max-width: 70%;
  max-height: 70%;
}
</style>
