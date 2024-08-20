<template>
  <v-app>
    <v-layout>
      <v-navigation-drawer app>
        <MenuPhp />
      </v-navigation-drawer>
      <v-main>
        <v-container fluid>
          <v-row>
            <v-col cols="12">
              <h1>Plano de Estudos em PHP</h1>
              <p class="justficar">Bem-vindo ao curso de PHP! Este curso é dividido em 30 sessões, cobrindo desde os
                conceitos básicos até tópicos avançados. A cada sessão, você avançará no seu conhecimento e habilidades
                em PHP.</p>
              <v-container class="flex">
                <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                  <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                  </iframe>
                </v-responsive>
              </v-container>
              <h2>Plano de Estudos:</h2>
              <h2><strong>Iniciante</strong></h2>
              <h3><strong>1. Introdução ao PHP</strong></h3>
              <li>Apresentação</li>
              <li>O que é PHP?</li>
              <li>História e Evolução</li>
              <br>
              <h3><strong>2. Instalação</strong></h3>
              <li>Configuração do Ambiente (XAMPP, MAMP)</li>
              <li>Configuração do Visual Studio Code</li>
              <br>
              <h3><strong>3. Sintaxe Básica</strong></h3>
              <li>Primeiro Script PHP</li>
              <li>Variáveis</li>
              <li>Tipos de dados</li>
              <li>Operadores</li>
              <li>Cometários</li>
              <li>Quebra de Linha</li>
              <li>Concatenação</li>
              <li>Verificacao de Tipos</li>
              <br>
              <h3><strong>4. Estruturas de Controle - Parte 1</strong></h3>
              <li>Condicionais (if, else)</li>
              <li>Uso de operadores lógicos e comparação</li>
              <br>
              <h3><strong>5. Estruturas de Controle - Parte 2</strong></h3>
              <li>Condicionais (switch)</li>
              <li>Laços de Repetição (for)</li>
              <br>
              <h3><strong>6. Estruturas de Controle - Parte 3</strong></h3>
              <li>Laços de Repetição (while, do-while)</li>
              <li>Controle de Fluxo (break, continue)</li>
              <br>
              <h3><strong>7. Funções Básicas</strong></h3>
              <li>Declaração e Chamada de Funções</li>
              <li>Parâmetros e Retorno</li>
              <br>
              <h3><strong>8. Arrays - Parte 1</strong></h3>
              <li>Arrays Indexados: Criação, Manipulação e Iteração</li>
              <br>
              <h3><strong>9. Arrays - Parte 2</strong></h3>
              <li>Arrays Associativos: Criação, Manipulação e Iteração</li>
              <br>
              <h3><strong>10. Manipulação de Strings - Parte 1</strong></h3>
              <li>Métodos de Strings</li>
              <li>Concatenamento e Interpolação</li>
              <br>
              <h3><strong>11. Manipulação de Strings - Parte 2</strong></h3>
              <li>Funções para Manipulação de Strings</li>
              <li>Expressões Regulares</li>
              <br>
              <h2><strong>Intermediário</strong></h2>
              <h3><strong>12. Trabalhando com Formulários - Parte 1</strong></h3>
              <li>Recebendo Dados de Formulários via GET e POST</li>
              <br>
              <h3><strong>13. Trabalhando com Formulários - Parte 2</strong></h3>
              <li>Validação e Sanitização de Dados</li>
              <li>Upload de Arquivos</li>
              <br>
              <h3><strong>14. Manipulação de Arquivos - Parte 1</strong></h3>
              <li>Abrindo e Lendo Arquivos</li>
              <br>
              <h3><strong>15. Manipulação de Arquivos - Parte 2</strong></h3>
              <li>Escrevendo e Fechando Arquivos</li>
              <li>Manipulação de Diretórios</li>
              <br>
              <h3><strong>16. Sessões e Cookies - Parte 1</strong></h3>
              <li>Introdução a Sessões: Início e Encerramento, Armazenamento de Dados</li>
              <br>
              <h3><strong>17. Sessões e Cookies - Parte 2</strong></h3>
              <li>Manipulação de Cookies: Criação, Leitura e Exclusão</li>
              <br>
              <h3><strong>18. Conexão com Banco de Dados - Parte 1</strong></h3>
              <li>Conexão com MySQL</li>
              <li>Realizando Consultas Básicas</li>
              <br>
              <h3><strong>19. Conexão com Banco de Dados - Parte 2</strong></h3>
              <li>CRUD (Create, Read, Update, Delete)</li>
              <li>Preparação de Consultas</li>
              <br>
              <h3><strong>20. Segurança Básica</strong></h3>
              <li>Proteção contra SQL Injection, XSS e CSRF</li>
              <br>
              <h3><strong>21. Programação Orientada a Objetos - Parte 1</strong></h3>
              <li>Conceitos de POO</li>
              <li>Classes e Objetos</li>
              <li>Propriedades e Métodos</li>
              <br>
              <h3><strong>22. Programação Orientada a Objetos - Parte 2</strong></h3>
              <li>Herança</li>
              <li>Polimorfismo</li>
              <li>Encapsulamento</li>
              <br>
              <h2><strong>Avançado</strong></h2>
              <h3><strong>23. Design Patterns - Parte 1</strong></h3>
              <li>Introdução a Design Patterns</li>
              <li>Singleton e Factory</li>
              <br>
              <h3><strong>24. Design Patterns - Parte 2</strong></h3>
              <li>Observer</li>
              <li>MVC (Model-View-Controller)</li>
              <br>
              <h3><strong>25. Frameworks PHP - Parte 1</strong></h3>
              <li>Introdução a Frameworks PHP</li>
              <li>Instalação e Configuração (Laravel, Symfony)</li>
              <br>
              <h3><strong>26. Frameworks PHP - Parte 2</strong></h3>
              <li>Estrutura e Rotas em Laravel</li>
              <li>Controle de Dependências e Middleware</li>
              <br>
              <h3><strong>27. APIs e RESTful Services - Parte 1</strong></h3>
              <li>Criação de APIs</li>
              <li>Introdução ao REST</li>
              <li>Métodos HTTP (GET, POST, PUT, DELETE)</li>
              <br>
              <h3><strong>28. APIs e RESTful Services - Parte 2</strong></h3>
              <li>Autenticação e Autorização</li>
              <li>Consumo de APIs com PHP</li>
              <br>
              <h3><strong>29. Testes e Qualidade de Código - Parte 1</strong></h3>
              <li>Testes Unitários com PHPUnit</li>
              <li>Configuração e Estrutura de Testes</li>
              <br>
              <h3><strong>30. Testes e Qualidade de Código - Parte 2</strong></h3>
              <li>Testes Funcionais</li>
              <li>Ferramentas de Análise de Código e Qualidade</li>
              <br>
              <h3><strong>31. Performance e Escalabilidade</strong></h3>
              <li>Otimização de Código PHP</li>
              <li>Cache (APCu, Redis)</li>
              <li>Técnicas de Escalabilidade e Monitoramento de Performance</li>
              <br>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>
<script>
import MenuPhp from "@/components/php/menu.PHP.vue";
export default {
  name: "planosEstudos",
  data() {
    return {
      isDark: true,
      video: 'https://www.youtube.com/embed/VIDEO_ID',
      propriedadesVideo: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    };
  },
  components: {
    MenuPhp
  }
};
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
