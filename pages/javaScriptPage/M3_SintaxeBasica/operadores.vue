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
                <h1>Aula de Operadores</h1>
                <p class="justificar">
                  Olá! Hoje vamos aprender sobre <strong>operadores</strong> em JavaScript. Vamos fazer isso de uma forma bem divertida e fácil de entender!
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
                
                <h2><strong>O que são Operadores?</strong></h2>
                <p class="justificar">
                  Imagine que você tem uma caixa de brinquedos. Um operador é como uma ferramenta que você usa para fazer algo com os seus brinquedos. No JavaScript, os operadores ajudam o computador a entender o que ele deve fazer com os números e outras coisas que você escrever no código.
                </p>
  
                <h2><strong>Operadores Matemáticos</strong></h2>
                <ul>
                  <li><strong>Somar (+)</strong>: É como juntar mais brinquedos na sua caixa. Exemplo:
                    <v-code>
                      <pre><code>let brinquedos = 5 + 3; // Resultado: 8</code></pre>
                    </v-code>
                  </li>
                  <li><strong>Subtrair (-)</strong>: É como tirar alguns brinquedos da sua caixa. Exemplo:
                    <v-code>
                      <pre><code>let brinquedos = 10 - 4; // Resultado: 6</code></pre>
                    </v-code>
                  </li>
                  <li><strong>Multiplicar (*)</strong>: É como fazer várias cópias do mesmo brinquedo. Exemplo:
                    <v-code>
                      <pre><code>let brinquedos = 3 * 2; // Resultado: 6</code></pre>
                    </v-code>
                  </li>
                  <li><strong>Dividir (/)</strong>: É como dividir os brinquedos entre seus amigos. Exemplo:
                    <v-code>
                      <pre><code>let brinquedos = 8 / 2; // Resultado: 4</code></pre>
                    </v-code>
                  </li>
                </ul>
  
                <h2><strong>Operador de Igualdade (== e ===)</strong></h2>
                <ul>
                  <li><strong>Igual (==)</strong>: Ele verifica se os valores são iguais, mesmo que sejam um pouco diferentes. Exemplo:
                    <v-code>
                      <pre><code>let resultado = (5 == "5"); // Resultado: true</code></pre>
                    </v-code>
                  </li>
                  <li><strong>Igual e do Mesmo Tipo (===)</strong>: Ele verifica se os valores são iguais e do mesmo tipo. Exemplo:
                    <v-code>
                      <pre><code>let resultado = (5 === "5"); // Resultado: false</code></pre>
                    </v-code>
                  </li>
                </ul>
  
                <h2><strong>Operador de Comparação (> e <)</strong></h2>
                <ul>
                  <li><strong>Maior que (>)</strong>: Pergunta se o primeiro número é maior que o segundo. Exemplo:
                    <v-code>
                      <pre><code>let resultado = (7 > 5); // Resultado: true</code></pre>
                    </v-code>
                  </li>
                  <li><strong>Menor que (<)</strong>: Pergunta se o primeiro número é menor que o segundo. Exemplo:
                    <v-code>
                      <pre><code>let resultado = (3 < 10); // Resultado: true</code></pre>
                    </v-code>
                  </li>
                </ul>
  
                <h2><strong>Operador de Atribuição (=)</strong></h2>
                <ul>
                  <li><strong>Atribuição (=)</strong>: Coloca o valor do lado direito dentro da variável do lado esquerdo. Exemplo:
                    <v-code>
                      <pre><code>let minhaIdade = 8; // Minha idade agora é 8</code></pre>
                    </v-code>
                  </li>
                </ul>
  
                <h2><strong>Operadores Lógicos (&& e ||)</strong></h2>
                <ul>
                  <li><strong>E (&&)</strong>: Pergunta se duas coisas são verdadeiras ao mesmo tempo. Exemplo:
                    <v-code>
                      <pre><code>let possoBrincar = (termineiLicaoDeCasa && arrumeiQuarto);</code></pre>
                    </v-code>
                  </li>
                  <li><strong>Ou (||)</strong>: Pergunta se pelo menos uma coisa é verdadeira. Exemplo:
                    <v-code>
                      <pre><code>let possoComerSobremesa = (comiLegumes || bebiLeite);</code></pre>
                    </v-code>
                  </li>
                </ul>
  
                <h2><strong>Conclusão</strong></h2>
                <p class="justificar">
                  Os operadores são ferramentas muito poderosas no JavaScript que ajudam o computador a entender o que fazer com os números, textos e outras coisas no seu código. Agora que você já sabe um pouco sobre eles, pode começar a usar esses operadores nas suas brincadeiras com código!
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
    name:"operadores",
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
  