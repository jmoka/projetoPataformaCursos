<template>
  <v-app>

    <v-navigation-drawer app>
      <MenuJs />
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="12">
            <h1>{{ msg }}</h1>
            <p class="justificar">
              Olá! Hoje vamos aprender sobre <strong>Controle de Fluxo</strong> em JavaScript. Essas estruturas ajudam
              o computador a tomar decisões e repetir tarefas. Vamos entender como elas funcionam com exemplos
              divertidos!
            </p>

            <v-container video>
              <v-responsive :aspect-ratio="16 / 9">
                <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                </iframe>
              </v-responsive>
            </v-container>


            <h2><strong>Controle de Fluxo</strong></h2>
            <p class="justificar">
              Controle de fluxo ajuda a decidir quando parar ou continuar em um laço. Vamos conhecer dois comandos
              importantes:
            </p>

            <h3><strong>1. <code>break</code></strong></h3>
            <p class="justificar">
              O comando <code>break</code> é como uma parada de emergência. Ele encerra o laço imediatamente, sem
              continuar a repetir. Veja um exemplo:
            </p>
            <v-code>
              <pre><code>
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; // Para o laço quando i é igual a 3
  }
  console.log(i);
}
// Resultado: 1, 2
                </code></pre>
            </v-code>
            <p class="justificar">
              No código acima, quando <code>i</code> é igual a 3, o <code>break</code> para o laço, então ele mostra
              apenas os números 1 e 2.
            </p>

            <h3>2. <code>continue</code></h3>
            <p class="justificar">
              O comando <code>continue</code> pula para a próxima iteração do laço, ignorando o restante do código.
              Veja um exemplo:
            </p>
            <v-code>
              <pre><code>
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Pula o código abaixo e vai para a próxima iteração
  }
  console.log(i);
}
// Resultado: 1, 2, 4, 5
                </code></pre>
            </v-code>
            <p class="justificar">
              No código acima, quando <code>i</code> é igual a 3, o <code>continue</code> faz com que o computador
              pule o <code>console.log(i)</code> e vá para a próxima iteração, então o número 3 não é mostrado.
            </p>

            <h2><strong>Conclusão</strong></h2>
            <p class="justificar">
              Agora você conhece os laços de repetição e o controle de fluxo! Eles ajudam a repetir tarefas e a
              controlar como o código é executado. Com essas ferramentas, você pode criar programas mais legais e
              complexos. Continue praticando para se tornar um mestre em JavaScript!
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
  name: "ControleDeFluxo",
  data: () => ({
    msg: "Controle de Fluxo",
    video: 'https://www.youtube.com/embed/VIDEO_ID',
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
