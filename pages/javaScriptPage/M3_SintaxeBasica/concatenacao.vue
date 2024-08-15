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
              <h1>Concatenação de Strings em JavaScript</h1>
              <p class="justificar">
                Olá! Hoje vamos aprender sobre <strong>concatenação de strings</strong> em JavaScript. Vamos explorar como combinar strings para criar mensagens e dados dinâmicos.
              </p>

              <v-container class="flex">
                <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                  <iframe 
                    :src='videoIntro'
                    :allow='propriedadesVideo'
                    allowfullscreen
                  >
                  </iframe>
                </v-responsive>
              </v-container>

              <h2><strong>O que é Concatenação de Strings?</strong></h2>
              <p class="justificar">
                Concatenação de strings é o processo de combinar duas ou mais strings em uma única string. No JavaScript, você pode usar o operador <code>+</code> para fazer isso.
              </p>

              <h2><strong>Exemplo Básico de Concatenação</strong></h2>
              <p>Veja como combinar duas strings usando o operador <code>+</code>:</p>
              <v-code>
                <pre><code>
const saudacao = "Olá";
const nome = "João";

const mensagem = saudacao + ", " + nome + "!";
console.log(mensagem); // Saída: Olá, João!
                </code></pre>
              </v-code>

              <h2><strong>Concatenação com Variáveis</strong></h2>
              <p>Você pode concatenar strings com variáveis para criar mensagens dinâmicas:</p>
              <v-code>
                <pre><code>
const cidade = "São Paulo";
const temperatura = 28;

const reporte = "A temperatura em " + cidade + " é de " + temperatura + " graus Celsius.";
console.log(reporte); // Saída: A temperatura em São Paulo é de 28 graus Celsius.
                </code></pre>
              </v-code>

              <h2><strong>Concatenação com Funções</strong></h2>
              <p>Funções também podem ser usadas para criar strings dinâmicas:</p>
              <v-code>
                <pre><code>
function criarMensagem(nome) {
  return "Bem-vindo, " + nome + "!";
}

const nome = "Maria";
const mensagem = criarMensagem(nome);
console.log(mensagem); // Saída: Bem-vindo, Maria!
                </code></pre>
              </v-code>

              <h2><strong>Comparação com Template Literais</strong></h2>
              <p>Antes dos Template Literals, usamos concatenação de strings com o operador <code>+</code>. Veja a comparação:</p>
              <h3>Concatenação:</h3>
              <v-code>
                <pre><code>
const nome = "Ana";
const idade = 25;

const mensagem = "Olá, meu nome é " + nome + " e eu tenho " + idade + " anos.";
console.log(mensagem); // Saída: Olá, meu nome é Ana e eu tenho 25 anos.
                </code></pre>
              </v-code>
              <h3>Template Literais:</h3>
              <v-code>
                <pre><code>
const nome = "Ana";
const idade = 25;

const mensagem = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
console.log(mensagem); // Saída: Olá, meu nome é Ana e eu tenho 25 anos.
                </code></pre>
              </v-code>

              <h2><strong>Conclusão</strong></h2>
              <p class="justificar">
                A concatenação de strings é uma técnica fundamental para criar mensagens e dados dinâmicos em JavaScript. Embora o operador <code>+</code> seja útil, considere explorar Template Literals para uma abordagem mais poderosa e legível na construção de strings complexas.
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
  name: "concatenacao",
  data: () => ({
    videoIntro: 'https://www.youtube.com/embed/VIDEO_ID', // Substitua com o ID do vídeo introdutório
    videoConclusao: 'https://www.youtube.com/embed/VIDEO_ID', // Substitua com o ID do vídeo de conclusão
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
