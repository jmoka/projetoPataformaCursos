<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuJs />
        </v-navigation-drawer>
        <v-main>
            <h1><b>{{msg}}</b></h1>

            <h4><b>Objetivo:</b></h4>
            <p>
                Nesta aula, você aprenderá sobre variáveis em JavaScript, incluindo como declará-las, atribuir valores,
                e entender os diferentes tipos de variáveis (<code>var</code>, <code>let</code>, <code>const</code>).
                Também discutiremos as boas práticas para nomeação de variáveis.
            </p>
            <v-container class="flex">
                <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>

            <h2><b>Conteúdo:</b></h2>
            <ol>
                <li><b>O que são Variáveis?</b></li>
                <li><b>Declaração de Variáveis em JavaScript</b></li>
                <li><b>Atribuição de Valores</b></li>
                <li><b>Tipos de Variáveis</b></li>
                <li><b>Escopo de Variáveis</b></li>
                <li><b>Boas Práticas para Nomeação de Variáveis</b></li>
                <li><b>Exercícios Práticos</b></li>
            </ol>

            <h2><b>1. O que são Variáveis?</b></h2>
            <p><b>Definição e Propósito:</b><br>
                Variáveis são "caixas" que armazenam valores. Elas permitem que você armazene dados que podem ser usados
                e manipulados ao longo do seu código. Exemplo: Imagine uma variável como uma caixa rotulada onde você
                guarda um valor, como um nome ou número, para usar mais tarde.
            </p>
            <p><b>Importância das Variáveis:</b><br>
                Elas facilitam a reutilização de valores e permitem que o código seja mais dinâmico e interativo.
            </p>

            <h2><b>2. Declaração de Variáveis em JavaScript</b></h2>
            <h4><b>Uso de Variavel daclarada com <code>var</code>:</b></h4><br>
            <p>
                Antes do ES6 (ECMAScript 2015), <code>var</code> era a principal forma de declarar variáveis. Variáveis
                declaradas com <code>var</code> têm escopo global ou de função dependendo de onde são declaradas.
            </p>
            <ul>
                <li>
                    <h3><b>Global</b></h3>
                </li>
                <p>Se você declara uma variável com var fora de uma função, ela é acessível em qualquer parte do código
                </p>
                <pre>
<code>  
    var nome = "João";
    console.log(nome); // "João" - acessível globalmente</code>
                </pre>
                <br>
                <li>
                    <h3><b>Função</b></h3>
                </li>
                <p>Se você declara uma variável com var fora de uma função, ela é acessível em qualquer parte do código
                </p>
                <pre>
                    <code>
    function saudar() {
        var saudacao = "Olá!";
        console.log(saudacao); // "Olá!" - acessível dentro da função
        }
    saudar();
    console.log(saudacao); // Erro: saudacao não está definida
                    </code>
                </pre>
            </ul>
            <p><b>Uso de <code>let</code>:</b><br>
                Introduzido no ES6, <code>let</code> permite declarar variáveis com escopo de bloco, ou seja, elas só
                existem dentro do bloco onde foram declaradas.
            </p>
            <pre><code>
    let cidade = "São Paulo"; 
    let idade = 25;
            </code></pre>
            <p><b>Uso de <code>const</code>:</b><br>
                <code>const</code> também foi introduzido no ES6 e é usado para declarar constantes, ou seja, valores
                que não podem ser reatribuídos.
            </p>
            <pre><code>
    const PI = 3.14159;
    const nome = "Ana";
            </code></pre>
            <p><b>Diferenças entre <code>var</code>, <code>let</code>, e <code>const</code>:</b><br>
                <code>var</code> tem escopo global ou de função, enquanto <code>let</code> e <code>const</code> têm
                escopo de bloco. <code>const</code> não permite reatribuição do valor após a declaração, ao contrário de
                <code>var</code> e <code>let</code>.
            </p>

            <h2><b>3. Atribuição de Valores</b></h2>
            <p><b>Atribuição Inicial:</b><br>
                Ao declarar uma variável, você pode atribuir um valor inicial a ela.
            </p>
            <pre><code>
                    let nome = "Carlos";
            </code></pre>
            <p><b>Reatribuição de Valores:</b><br>
                Variáveis declaradas com <code>let</code> e <code>var</code> podem ter seus valores reatribuídos.
            </p>
            <pre><code>let idade = 22;
    idade = 23; // Reatribuição</code></pre>
            <p>Nota: Variáveis declaradas com <code>const</code> não podem ser reatribuídas.</p>
            <h2><b>4. Tipos de Variáveis</b></h2>
            <p><b>Tipos Primitivos:</b><br>
                <b><code>string</code>:</b> Texto, como <code>"Olá, mundo!"</code>.<br>
                <b><code>number</code>:</b> Números, como <code>42</code> ou <code>3.14</code>.<br>
                <b><code>boolean</code>:</b> Verdadeiro ou falso, como <code>true</code> ou <code>false</code>.
            </p>
            <pre><code>let nome = "Maria";   // string
  let idade = 20;       // number
  let aprovado = true;  // boolean</code></pre>
            <p><b>Tipos Complexos:</b><br>
                <b><code>object</code>:</b> Estruturas de dados que podem conter várias propriedades.<br>
                <b><code>array</code>:</b> Lista ordenada de valores.
            </p>
            <pre><code>let pessoa = {nome: "João", idade: 25}; // object
  let numeros = [1, 2, 3, 4, 5];          // array</code></pre>

            <h2><b>5. Escopo de Variáveis</b></h2>
            <p><b>Escopo Global:</b><br>
                Variáveis declaradas fora de qualquer função ou bloco têm escopo global e podem ser acessadas em
                qualquer lugar do código.
            </p>
            <p><b>Escopo de Função:</b><br>
                Variáveis declaradas dentro de uma função só podem ser acessadas dentro dessa função.
            </p>
            <p><b>Escopo de Bloco:</b><br>
                <code>let</code> e <code>const</code> têm escopo de bloco, ou seja, são acessíveis apenas dentro do
                bloco <code>{}</code> em que foram declaradas.
            </p>
            <pre><code>function exemplo() {
                let x = 10; // Escopo de função
                if (x > 5) {
                    let y = 20; // Escopo de bloco
                    console.log(y); // 20
                }
                // console.log(y); // Erro: y não está definido aqui
            }</code></pre>
            <h2><b>6. Boas Práticas para Nomeação de Variáveis</b></h2>
            <p><b>Convenções de Nomenclatura:</b><br>
                Use camelCase para nomes de variáveis, por exemplo, <code>minhaVariavel</code>.<br>
                Nomes de variáveis devem ser descritivos e indicar claramente o que o valor representa.
            </p>
            <p><b>Dicas para Nomes Descritivos:</b><br>
                Evite usar nomes genéricos como <code>x</code>, <code>y</code>, ou <code>data</code> a menos que sejam
                realmente apropriados.<br>
                Prefira nomes mais longos e descritivos a nomes curtos e obscuros.
            </p>

            <h2><b>7. Exercícios Práticos</b></h2>
            <ol>
                <li>Declare uma variável <code>nome</code> com o valor <code>"Lucas"</code> e uma variável
                    <code>idade</code> com o valor <code>30</code>. Depois, reatribua o valor de <code>idade</code> para
                    <code>31</code>.
                </li>
                <li>Crie uma constante <code>PI</code> com o valor <code>3.14</code>. Tente reatribuir o valor de
                    <code>PI</code> e observe o que acontece.
                </li>
                <li>Crie um objeto <code>pessoa</code> com as propriedades <code>nome</code> (string) e
                    <code>idade</code> (número). Acesse as propriedades do objeto e exiba no console.
                </li>
            </ol>

            <h2><b>Conclusão</b></h2>
            <p>
                Nesta aula, você aprendeu como declarar, atribuir e usar variáveis em JavaScript, bem como a importância
                de entender os diferentes tipos de variáveis e seus escopos. Variáveis são fundamentais para qualquer
                programação, e dominar seu uso é crucial para o desenvolvimento em JavaScript. No próximo módulo,
                exploraremos os operadores e como utilizá-los para manipular valores e expressões.
            </p>
        </v-main>
    </v-app>
</template>

<script>
import MenuJs from '~/components/js/menuJS.vue'
export default {
    name: "variaveis",
    data() {
        return {
            msg: 'Variáveis em JavaScript',
            video: 'https://www.youtube.com/embed/VIDEO_ID',
            propriedadesVideo: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        }
    },
    components: {
        MenuJs
    }

}
</script>

<style scoped>
.v-main {
    padding: 10px 20px 10px 20px !important;
    /* Ajuste o padding conforme necessário */
}

.flexItem {
    max-width: 70%;
    max-height: 70%
}
</style>