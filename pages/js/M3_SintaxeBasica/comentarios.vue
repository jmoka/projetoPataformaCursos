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
                <h1>Aula de Comentários</h1>
                <p class="justificar">
                  Olá! Hoje vamos aprender sobre <strong>comentários</strong> em JavaScript. Comentários são como pequenas notas que você deixa no seu código para te ajudar a lembrar o que ele faz.
                </p>
  
                <v-container class="flex">
                  <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                    <iframe 
                      :src='video'
                      :allow='propriedadesVideo'
                      allowfullscreen                        
                    >
                    </iframe>
                  </v-responsive>
                </v-container>
  
                <h2><strong>O que são Comentários?</strong></h2>
                <p class="justificar">
                  Imagine que você está escrevendo uma história e, no meio dela, você deixa um recado para você mesmo ou para outra pessoa que vai ler a história depois. Esse recado é um comentário. No JavaScript, os comentários não são lidos pelo computador, mas podem te ajudar a entender o que o seu código faz.
                </p>
  
                <h2><strong>Tipos de Comentários</strong></h2>
                <ul>
                  <li><strong>Comentário de Linha Única:</strong> Para escrever um comentário de uma linha só, você usa <code>//</code> no início da linha. Exemplo:
                    <v-code>
                      <pre><code>// Esse é um comentário de uma linha</code></pre>
                    </v-code>
                  </li>
                  <li><strong>Comentário de Múltiplas Linhas:</strong> Para escrever um comentário que ocupa várias linhas, você usa <code>/*</code> no início e <code>*/</code> no final. Exemplo:
                    <v-code>
                      <pre><code>
  /*
  Este é um comentário
  de múltiplas linhas
  */
                      </code></pre>
                    </v-code>
                  </li>
                </ul>
  
                <h2><strong>Por que Usar Comentários?</strong></h2>
                <p class="justificar">
                  Comentários são muito úteis para lembrar o que o seu código faz, especialmente quando ele começa a ficar grande. Eles também ajudam outras pessoas que vão ler o seu código a entender melhor o que você fez.
                </p>
  
                <h2><strong>Conclusão</strong></h2>
                <p class="justificar">
                  Agora você sabe o que são comentários e como usá-los! Eles são uma ferramenta simples, mas poderosa, para te ajudar a escrever um código mais claro e fácil de entender.
                </p>
              </v-col>
            </v-row>
          </v-container>
  
          <v-container class="flex">
            <v-responsive :aspect-ratio="16 / 9" class="flexItem">
              <iframe 
                :src='videoConclusao'
                :allow='propriedadesVideo'
                allowfullscreen
              >
              </iframe>
            </v-responsive>
          </v-container>
        </v-main>
      </v-layout>
    </v-app>
  </template>
  
  <script>
import MenuJs from '~/components/js/menuJS.vue'
  export default {
    name:"comentarios",
    data: () => ({
      video: 'https://www.youtube.com/embed/VIDEO_ID',
      videoConclusao: 'https://www.youtube.com/embed/VIDEO_ID',
      propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    }),
    components: {
      MenuJs
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
  .flexItem {
    max-width: 70%;
    max-height: 70%;
  }
  </style>
  