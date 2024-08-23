<template>
  <v-app>

    <v-navigation-drawer app>
      <MenuJs />
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <h1>Aula de Comentários</h1>
            <p class="justificar">
              Olá! Hoje vamos aprender sobre <strong>comentários</strong> em JavaScript. Comentários são como pequenas
              notas que você deixa no seu código para te ajudar a lembrar o que ele faz.
            </p>

            <v-container video>
              <v-responsive :aspect-ratio="16 / 9">
                <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                </iframe>
              </v-responsive>
            </v-container>

            <h2><strong>O que são Comentários?</strong></h2>
            <p class="justificar">
              Imagine que você está escrevendo uma história e, no meio dela, você deixa um recado para você mesmo ou
              para outra pessoa que vai ler a história depois. Esse recado é um comentário. No JavaScript, os
              comentários não são lidos pelo computador, mas podem te ajudar a entender o que o seu código faz.
            </p>

            <h2><strong>Tipos de Comentários</strong></h2>
            <ul>
              <li><strong>Comentário de Linha Única:</strong> Para escrever um comentário de uma linha só, você usa
                <code>//</code> no início da linha. Exemplo:
                <v-code>
                  <pre><code>// Esse é um comentário de uma linha</code></pre>
                </v-code>
              </li>
              <li><strong>Comentário de Múltiplas Linhas:</strong> Para escrever um comentário que ocupa várias
                linhas, você usa <code>/*</code> no início e <code>*/</code> no final. Exemplo:
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
              Comentários são muito úteis para lembrar o que o seu código faz, especialmente quando ele começa a ficar
              grande. Eles também ajudam outras pessoas que vão ler o seu código a entender melhor o que você fez.
            </p>

            <h2><strong>Conclusão</strong></h2>
            <p class="justificar">
              Agora você sabe o que são comentários e como usá-los! Eles são uma ferramenta simples, mas poderosa,
              para te ajudar a escrever um código mais claro e fácil de entender.
            </p>
          </v-col>
        </v-row>
      </v-container>

      <v-container video>
        <v-responsive :aspect-ratio="16 / 9">
          <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
          </iframe>
        </v-responsive>
      </v-container>

    </v-main>
    <v-footer>
      <h3>Referências:</h3>
      <v-container class="d-block">
        <p v-for="(ref, index) in listaReferencias" :key="index">
          <a :href="ref.link">{{ ref.name }}</a>
        </p>
      </v-container>
    </v-footer>

  </v-app>
</template>

<script>
import MenuJs from '~/components/js/menuJS.vue'
export default {
  name: "comentarios",
  data: () => ({
    video: 'https://www.youtube.com/embed/VIDEO_ID',
    videoConclusao: 'https://www.youtube.com/embed/VIDEO_ID',
    propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
    listaReferencias: [
      { id: 1, name: "w3schools", link: "https://www.w3schools.com/" },
      { id: 2, name: "MDN Web Docs", link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" },
      { id: 3, name: "ChatGPT", link: "https://chatgpt.com/" }
    ],
  }),
  components: {
    MenuJs
  }
}
</script>
<style scoped>
.video {
  max-width: 70%;
  max-height: 70%;
}
</style>