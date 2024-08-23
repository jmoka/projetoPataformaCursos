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
              Olá! Hoje vamos aprender sobre <strong>Laços de Repetição</strong> em JavaScript. Essas estruturas ajudam
              o computador a tomar decisões e repetir tarefas. Vamos entender como elas funcionam com exemplos
              divertidos!
            </p>

            <v-container video>
              <v-responsive :aspect-ratio="16 / 9">
                <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                </iframe>
              </v-responsive>
            </v-container>

            <h2><strong>Laços de Repetição</strong></h2>
            <p class="justificar">
              Laços de repetição são como quando você repete um jogo várias vezes. No JavaScript, usamos laços para
              repetir uma tarefa várias vezes sem precisar escrever o mesmo código várias vezes. Vamos ver os principais
              tipos:
            </p>

            <h3><strong>1. Laço <code>for</code></strong></h3>
            <p class="justificar">
              O laço <code>for</code> é como uma contagem. Imagine que você quer contar de 1 até 5. Você pode usar o
              <code>for</code> para fazer isso:
            </p>
            <v-code>
              <pre><code>
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Resultado: 1, 2, 3, 4, 5
                </code></pre>
            </v-code>
            <p class="justificar">
              No código acima, <code>let i = 1</code> começa a contagem em 1. O <code>i <= 5</code> diz até onde
              queremos contar, e <code>i++</code> aumenta o número em 1 a cada vez. O código mostra cada número na tela.
            </p>

            <h3><strong>2. Laço <code>while</code></strong></h3>
            <p class="justificar">
              O laço <code>while</code> repete algo enquanto uma condição for verdadeira. Imagine que você quer repetir
              algo enquanto
              a condição que você implementou for verdadeira ou se for diferente de 0
            </p>
            <v-code>
              <pre><code>
let balas = 3;

while (balas > 0) {
  console.log("Ainda tenho balas!");
  balas--;
}
// Resultado: "Ainda tenho balas!" será mostrado 3 vezes
                </code></pre>
            </v-code>
            <p class="justificar">
              No código acima, enquanto a variável <code>balas</code> for maior que 0, o computador continua mostrando a
              mensagem e diminuindo o número de balas.
            </p>

            <h3><strong>3. Laço <code>do-while</code></strong></h3>
            <p class="justificar">
              O laço <code>do-while</code> é semelhante ao <code>while</code>, mas ele sempre executa pelo menos uma
              vez, mesmo que a condição não seja verdadeira. Vamos ver um exemplo:
            </p>
            <v-code>
              <pre><code>
let contador = 0;

do {
  console.log("Contador:", contador);
  contador++;
} while (contador < 3);
// Resultado: "Contador: 0", "Contador: 1", "Contador: 2"
                </code></pre>
            </v-code>
            <p class="justificar">
              No código acima, o <code>do</code> executa o código dentro do bloco e depois verifica a condição no
              <code>while</code>. O contador começa em 0 e aumenta até ser menor que 3.
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
  name: "estruturasControle",
  data: () => ({
    msg: "Laços de Repetição",
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