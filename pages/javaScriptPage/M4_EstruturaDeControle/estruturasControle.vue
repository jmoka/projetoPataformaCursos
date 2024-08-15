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
              <h1>Estruturas de Controle</h1>
              <p class="justificar">
                Olá! Hoje vamos aprender sobre <strong>estruturas de controle</strong> em JavaScript. Essas estruturas ajudam o computador a tomar decisões e repetir tarefas. Vamos entender como elas funcionam com exemplos divertidos!
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

              <h2><strong>Laços de Repetição</strong></h2>
              <p class="justificar">
                Laços de repetição são como quando você repete um jogo várias vezes. No JavaScript, usamos laços para repetir uma tarefa várias vezes sem precisar escrever o mesmo código várias vezes. Vamos ver os principais tipos:
              </p>

              <h3><strong>1. Laço <code>for</code></strong></h3>
              <p class="justificar">
                O laço <code>for</code> é como uma contagem. Imagine que você quer contar de 1 até 5. Você pode usar o <code>for</code> para fazer isso:
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
                No código acima, <code>let i = 1</code> começa a contagem em 1. O <code>i <= 5</code> diz até onde queremos contar, e <code>i++</code> aumenta o número em 1 a cada vez. O código mostra cada número na tela.
              </p>

              <h3><strong>2. Laço <code>while</code></strong></h3>
              <p class="justificar">
                O laço <code>while</code> repete algo enquanto uma condição for verdadeira. Imagine que você quer repetir algo enquanto 
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
                No código acima, enquanto a variável <code>balas</code> for maior que 0, o computador continua mostrando a mensagem e diminuindo o número de balas.
              </p>

              <h3><strong>3. Laço <code>do-while</code></strong></h3>
              <p class="justificar">
                O laço <code>do-while</code> é semelhante ao <code>while</code>, mas ele sempre executa pelo menos uma vez, mesmo que a condição não seja verdadeira. Vamos ver um exemplo:
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
                No código acima, o <code>do</code> executa o código dentro do bloco e depois verifica a condição no <code>while</code>. O contador começa em 0 e aumenta até ser menor que 3.
              </p>

              <h2><strong>Controle de Fluxo</strong></h2>
              <p class="justificar">
                Controle de fluxo ajuda a decidir quando parar ou continuar em um laço. Vamos conhecer dois comandos importantes:
              </p>

              <h3><strong>1. <code>break</code></strong></h3>
              <p class="justificar">
                O comando <code>break</code> é como uma parada de emergência. Ele encerra o laço imediatamente, sem continuar a repetir. Veja um exemplo:
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
                No código acima, quando <code>i</code> é igual a 3, o <code>break</code> para o laço, então ele mostra apenas os números 1 e 2.
              </p>

              <h3>2. <code>continue</code></h3>
              <p class="justificar">
                O comando <code>continue</code> pula para a próxima iteração do laço, ignorando o restante do código. Veja um exemplo:
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
                No código acima, quando <code>i</code> é igual a 3, o <code>continue</code> faz com que o computador pule o <code>console.log(i)</code> e vá para a próxima iteração, então o número 3 não é mostrado.
              </p>

              <h2><strong>Conclusão</strong></h2>
              <p class="justificar">
                Agora você conhece os laços de repetição e o controle de fluxo! Eles ajudam a repetir tarefas e a controlar como o código é executado. Com essas ferramentas, você pode criar programas mais legais e complexos. Continue praticando para se tornar um mestre em JavaScript!
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
import MenuJs from "@/components/javaScript/menu.JavaScript.vue";  
export default {
  name: "estruturasControle",
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
