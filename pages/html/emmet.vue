<template>
    <v-app>
      <v-layout>
        <v-navigation-drawer app>
         <h1>menu aqui</h1>>
        </v-navigation-drawer>
        <v-main>
          <v-container fluid>
            <v-row>
              <v-col cols="12">
                <h1>Atalhos de Escrita em HTML com Emmet</h1>
                <p class="justificar">
                  Olá! Nesta aula, vamos explorar todos os recursos que o Emmet oferece para agilizar a escrita de HTML e CSS. Desde os conceitos básicos até técnicas avançadas, você aprenderá a criar estruturas complexas rapidamente.
                </p>
  
                <h2><strong>1. Introdução ao Emmet</strong></h2>
                <p class="justificar">
                  Emmet é uma ferramenta essencial para desenvolvedores web, projetada para acelerar a escrita de HTML e CSS. Ele transforma abreviações em blocos de código completos, economizando tempo e reduzindo a repetição.
                </p>
  
                <h2><strong>2. Conceitos Básicos de Emmet</strong></h2>
                <v-code>
                  <pre><code>
                    <!-- Expansão de Tags -->
                    div       <!-- <div></div> -->
                    a         <!-- <a href=""></a> -->
  
                    <!-- IDs e Classes -->
                    div#header     <!-- <div id="header"></div> -->
                    p.lead         <!-- <p class="lead"></p> -->
  
                    <!-- Hierarquia -->
                    ul>li          <!-- <ul><li></li></ul> -->
  
                    <!-- Elementos Irmãos -->
                    h1+p           <!-- <h1></h1><p></p> -->
  
                    <!-- Multiplicação de Elementos -->
                    ul>li*5        <!-- <ul><li></li><li></li><li></li><li></li><li></li></ul> -->
  
                    <!-- Agrupamento de Elementos -->
                    div>(header>h1)+main+footer <!-- <div><header><h1></h1></header><main></main><footer></footer></div> -->
  
                    <!-- Adicionando Texto -->
                    a{Clique aqui} <!-- <a href="">Clique aqui</a> -->
                  </code></pre>
                </v-code>
  
                <h2><strong>3. Funcionalidades Avançadas</strong></h2>
                <v-code>
                  <pre><code>
                    <!-- Navegação entre Irmãos e Filhos -->
                    div>p>span+em^bq   <!-- <div><p><span></span><em></em></p><blockquote></blockquote></div> -->
  
                    <!-- Conteúdo de Texto com Incremento -->
                    ul>li.item$*3      <!-- <ul><li class="item1"></li><li class="item2"></li><li class="item3"></li></ul> -->
  
                    <!-- Atributos Personalizados -->
                    a[href="https://exemplo.com"]{Link} <!-- <a href="https://exemplo.com">Link</a> -->
                    input[type="text"][placeholder="Digite aqui"] <!-- <input type="text" placeholder="Digite aqui"> -->
  
                    <!-- Emmet com CSS -->
                    m10         <!-- margin: 10px; -->
                    p10-20      <!-- padding: 10px 20px; -->
                    bgc#f00     <!-- background-color: #f00; -->
                  </code></pre>
                </v-code>
  
                <h2><strong>4. Exemplos Práticos Complexos</strong></h2>
                <v-code>
                  <pre><code>
                    <!-- Estrutura Completa de Página -->
                    html:5>head>meta[charset="UTF-8"]+meta[name="viewport" content="width=device-width, initial-scale=1.0"]+title{Título da Página}+link[rel="stylesheet" href="styles.css"]^body>header>nav>ul>li*3>a{Link $}+main>section>h2{Seção $}+p{Texto de exemplo}+footer>p{© 2024 Nome da Empresa}
  
                    <!-- Criação de uma Galeria de Imagens -->
                    div.gallery>figure*4>img[src="img$.jpg" alt="Imagem $"]+figcaption{Imagem $}
                  </code></pre>
                </v-code>
  
                <h2><strong>5. Conclusão</strong></h2>
                <p class="justificar">
                  Dominar o Emmet permite criar HTML e CSS de forma rápida e eficiente. Use essas técnicas para aumentar sua produtividade e criar estruturas complexas em menos tempo.
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-layout>
    </v-app>
  </template>
  
  <script>
 
  
  export default {
    name: "emmetShortcuts",
    components: {
    
    }
  }
  </script>
  
  <style scoped>
  .v-main {
    padding: 10px 20px 10px 20px !important;
  }
  .justificar {
    text-align: justify;
  }
  </style>
  