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
              <h1>Condicionais</h1>
              <p class="justificar">
                Olá! Hoje vamos aprender sobre <strong>condicionais</strong> em JavaScript. Condicionais são formas de
                fazer o computador tomar decisões baseadas em certas condições. Elas permitem que você controle o fluxo
                do seu programa de acordo com os valores de variáveis e expressões.
              </p>
              <v-container class="flex">
                <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                  <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                  </iframe>
                </v-responsive>
              </v-container>
              <h2><strong>O que são Condicionais?</strong></h2>
              <p class="justificar">
                Imagine que você está jogando um jogo de tabuleiro e precisa decidir se vai mover sua peça para frente
                ou para trás dependendo do número que saiu no dado. No JavaScript, as condicionais ajudam o computador a
                tomar decisões assim como você faz no jogo. Elas são essenciais para criar programas que respondem de
                forma dinâmica às diferentes situações.
              </p>
              <h2><strong>Tipos de Condicionais</strong></h2>
              <ul>
                <li><strong>if:</strong></li>
                <p> Usamos o <code>if</code> para dizer "Se algo é verdadeiro, faça isso". Se a condição entre
                  parênteses for avaliada como <code>true</code> (verdadeira), o bloco de código dentro do
                  <code>if</code> será executado.
                </p>
                <p> Exemplo:</p>
                <v-code>
                  <pre><code>let idade = 20;
if (idade >= 18) {
  console.log("Você é adulto!");
}</code></pre>
                </v-code>
                <p> Explicação: Neste exemplo, o código verifica se a variável <code>idade</code> é maior ou igual a 18.
                  Se for, a mensagem "Você é adulto!" será exibida no console.</p>
                <li><strong>else:</strong></li>
                <p> Usamos o <code>else</code> para fornecer uma alternativa caso a condição no <code>if</code> seja
                  falsa.</p>
                <p> Exemplo:</p>
                <v-code>
                  <pre><code>let idade = 16;
if (idade >= 18) {
  console.log("Você é adulto!");
} else {
  console.log("Você ainda não é adulto.");
}</code></pre>
                </v-code>
                <p> Explicação: Se a condição no <code>if</code> for falsa, o bloco de código dentro do
                  <code>else</code> será executado. Neste exemplo, a idade é 16, então a mensagem "Você ainda não é
                  adulto." será exibida.
                </p>
                <li><strong>else if:</strong></li>
                <p> Usamos o <code>else if</code> para verificar outra condição se a primeira condição do
                  <code>if</code> for falsa.
                </p>
                <p> Exemplo:</p>
                <v-code>
                  <pre><code>let idade = 15;
if (idade >= 18) {
  console.log("Você é adulto!");
} else if (idade >= 13) {
  console.log("Você é adolescente.");
} else {
  console.log("Você é criança.");
}</code></pre>
                </v-code>
                <p> Explicação: Aqui, o programa verifica várias condições. Se a idade for maior ou igual a 18, o
                  programa dirá que a pessoa é adulta. Se a idade for menor que 18, mas maior ou igual a 13, o programa
                  dirá que a pessoa é adolescente. Caso contrário, será exibida a mensagem de que a pessoa é criança.
                </p>
                <li><strong>switch:</strong></li>
                <p> O <code>switch</code> é útil quando há muitas condições para verificar. Ele compara uma expressão
                  com diferentes valores possíveis e executa o código correspondente ao primeiro valor correspondente.
                </p>
                <p> Exemplo:</p>
                <v-code>
                  <pre><code>let cor = "amarelo";
switch (cor) {
  case "vermelho":
    console.log("Pare!");
    break;
  case "amarelo":
    console.log("Atenção!");
    break;
  case "verde":
    console.log("Siga!");
    break;
  default:
    console.log("Cor desconhecida.");
}</code></pre>
                </v-code>
                <p> Explicação: O valor da variável <code>cor</code> é comparado com cada <code>case</code>. Se o valor
                  corresponder a um dos casos, o bloco correspondente será executado. Se nenhum dos valores
                  corresponder, o código dentro de <code>default</code> será executado.</p>
                 <v-code>
                  <pre><code>let coratual = "amarelo";
function verificarCor (cor){
    switch (cor) {
        case "vermelho":
          console.log("Pare!");
          break;
        case "amarelo":
          console.log("Atenção!");
          break;
        case "verde":
          console.log("Siga!");
          break;
        default:
          console.log("Cor desconhecida.");
      }
}
verificarCor(coratual);
}</code></pre>
                </v-code>
                <p>
  Neste exemplo, criamos uma função chamada <code>verificarCor</code>, que recebe um parâmetro chamado <code>cor</code>. A função utiliza uma estrutura condicional <code>switch</code> para verificar o valor passado e determinar qual bloco de código deve ser executado.
</p>
<p>
  <strong>Parâmetro da Função:</strong> A função <code>verificarCor</code> recebe um argumento (neste caso, a variável <code>coratual</code>, que possui o valor <code>"amarelo"</code>). Este argumento é passado para o <code>switch</code>.
</p>
<p>
  <strong>Estrutura <code>switch</code>:</strong> A estrutura <code>switch</code> compara o valor de <code>cor</code> com cada um dos casos (<code>case</code>). Quando um dos valores corresponde ao valor do parâmetro, o bloco de código associado a esse caso é executado. Por exemplo, se <code>cor</code> for <code>"amarelo"</code>, o código dentro de <code>case "amarelo":</code> será executado, exibindo a mensagem <code>"Atenção!"</code> no console.
</p>
<p>
  <strong>Caso Padrão (<code>default</code>):</strong> Se o valor do parâmetro não corresponder a nenhum dos casos definidos, o código dentro do bloco <code>default</code> será executado, exibindo <code>"Cor desconhecida."</code>.
</p>
<p>
  <strong>Saída da Função:</strong> Ao chamar <code>verificarCor(coratual)</code>, o valor <code>"amarelo"</code> é passado para a função. A função verifica esse valor usando o <code>switch</code>, e como o valor corresponde ao caso <code>"amarelo"</code>, a função imprime <code>"Atenção!"</code> no console.
</p>
              </ul>
              <h2><strong>Exemplos Adicionais</strong></h2>
              <p class="justificar">
                Vamos ver mais alguns exemplos práticos para solidificar o conhecimento sobre condicionais.
              </p>
              <h3><strong>Verificando múltiplas condições com operadores lógicos</strong></h3>
              <p>Usamos operadores lógicos como <code>&&</code> (e) e <code>||</code> (ou) para verificar múltiplas
                condições.</p>
              <h3>Estrutura Basica</h3>
              <code>
                let nome-variavel = (condição) ? "primeira-ação : "segunda-ação"
              </code>
              <v-code>
                <pre><code>let idade = 20;
let temCarteira = true;
if (idade >= 18 && temCarteira) {
  console.log("Você pode dirigir!");
} else {
  console.log("Você não pode dirigir.");
}</code></pre>
              </v-code>
              <p>Explicação: Aqui, o código verifica se a idade é maior ou igual a 18 <strong>e</strong> se a pessoa tem
                uma carteira de motorista. Ambas as condições devem ser verdadeiras para que a mensagem "Você pode
                dirigir!" seja exibida.</p>

              <h3><strong>Utilizando condicionais ternárias</strong></h3>
              <p>A expressão condicional ternária é uma maneira curta de escrever um <code>if</code> e <code>else</code>. É especialmente útil para atribuições simples.</p>
              <v-code>
                <pre><code>let idade = 17;
let status = (idade >= 18) ? "Adulto" : "Menor de idade";
console.log(status);</code></pre>
              </v-code>
              <p>Explicação: Aqui, se a idade for maior ou igual a 18, a variável <code>status</code> será "Adulto". Caso contrário, será "Menor de idade". O resultado é então exibido no console.</p>

              <h4><strong>Exemplos Adicionais</strong></h4>

              <!-- Exemplo 1 -->
              <h5>Verificando se um número é par ou ímpar</h5>
              <v-code>
                <pre><code>let numero = 10;
let tipo = (numero % 2 === 0) ? "Par" : "Ímpar";
console.log(tipo);</code></pre>
              </v-code>
              <p>Explicação: O operador <code>%</code> retorna o resto da divisão de <code>numero</code> por 2. Se o resto for 0, o número é par; caso contrário, é ímpar.</p>

              <!-- Exemplo 2 -->
              <h5>Avaliação de desempenho</h5>
              <v-code>
                <pre><code>let nota = 85;
let desempenho = (nota >= 70) ? "Aprovado" : "Reprovado";
console.log(desempenho);</code></pre>
              </v-code>
              <p>Explicação: A condicional ternária verifica se a nota é maior ou igual a 70. Se for, a mensagem "Aprovado" será exibida; caso contrário, "Reprovado".</p>

              <!-- Exemplo 3 -->
              <h5>Escolhendo entre singular e plural</h5>
              <v-code>
                <pre><code>let quantidade = 1;
let mensagem = (quantidade === 1) ? "item" : "itens";
console.log(quantidade + " " + mensagem);</code></pre>
              </v-code>
              <p>Explicação: A condicional ternária determina se a palavra deve ser "item" ou "itens" com base no valor de <code>quantidade</code>.</p>

              <h2><strong>Conclusão</strong></h2>
              <p class="justificar">
                As condicionais são essenciais em JavaScript para controlar o fluxo de um programa. Com elas, você pode criar aplicações que reagem de maneira diferente dependendo das condições. Experimente usar diferentes tipos de condicionais para ver como elas podem tornar seus programas mais dinâmicos e inteligentes!
              </p>
            </v-col>
          </v-row>
        </v-container>
        <v-container class="flex">
          <v-responsive :aspect-ratio="16 / 9" class="flexItem">
            <iframe :src='videoConclusao' :allow='propriedadesVideo' allowfullscreen>
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
  name: "condicionais",
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
