<template>
    <v-app>

        <v-navigation-drawer app>
            <MenuJs />
        </v-navigation-drawer>
        <v-main>
            <h1><b>{{ msg }}</b></h1>
            <h4><b>Objetivo:</b></h4>
            <p>Nesta aula, você aprenderá os diferentes tipos de dados disponíveis em JavaScript, como declará-los,
                utilizá-los, e
                entender suas principais características.</p>

            <v-container video>
                <v-responsive :aspect-ratio="16 / 9">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>

            <section>
                <h2>Conteúdo</h2>

                <h3>1. Tipos de Dados Primitivos</h3>

                <h4>1.1 String</h4>
                <p><strong>Definição:</strong> Cadeia de caracteres, utilizada para representar texto.</p>
                <p><strong>Sintaxe:</strong></p>
                <pre><code>
let nome = "João";
let saudacao = 'Olá, mundo!';
let frase = `Este é um exemplo de string`;
      </code></pre>
                <p><strong>Nota:</strong> Strings podem ser definidas com aspas simples (<code>'</code>), aspas
                    duplas (<code>"</code>), ou crase (<code>`</code>) para interpolação de variáveis.</p>

                <h4>1.2 Number</h4>
                <p><strong>Definição:</strong> Representa valores numéricos, incluindo inteiros e decimais.</p>
                <p><strong>Sintaxe:</strong></p>
                <pre><code>
let idade = 25;
let preco = 19.99;
let temperatura = -5;
      </code></pre>
                <p><strong>Nota:</strong> Em JavaScript, não há distinção entre inteiros e pontos flutuantes; ambos
                    são considerados <code>number</code>.</p>

                <h4>1.3 Boolean</h4>
                <p><strong>Definição:</strong> Representa valores lógicos <code>true</code> ou <code>false</code>.
                </p>
                <p><strong>Sintaxe:</strong></p>
                <pre><code>
let isAdulto = true;
let temPermissao = false;
      </code></pre>
                <p><strong>Aplicação:</strong> Booleans são comumente usados em estruturas de controle, como
                    <code>if</code> e loops.
                </p>

                <h4>1.4 Null</h4>
                <p><strong>Definição:</strong> Representa a ausência intencional de qualquer valor.</p>
                <p><strong>Sintaxe:</strong></p>
                <pre><code>
let resposta = null;
      </code></pre>
                <p><strong>Nota:</strong> <code>null</code> é frequentemente usado para limpar uma variável ou
                    indicar que ela ainda não tem um valor útil.</p>

                <h4>1.5 Undefined</h4>
                <p><strong>Definição:</strong> Uma variável que foi declarada mas não inicializada tem o valor
                    <code>undefined</code>.
                </p>
                <p><strong>Sintaxe:</strong></p>
                <pre><code>
let indefinido;
console.log(indefinido); // undefined
      </code></pre>
                <p><strong>Nota:</strong> Difere de <code>null</code>, pois <code>undefined</code> é usado pelo
                    JavaScript para indicar que uma variável ainda não foi atribuída.</p>

                <h4>1.6 Symbol</h4>
                <p><strong>Definição:</strong> Um tipo de dado único e imutável, frequentemente usado como
                    identificador de propriedades de objetos.</p>
                <p><strong>Sintaxe:</strong></p>
                <pre><code>
let simbolo = Symbol('descricao');
      </code></pre>
                <p><strong>Aplicação:</strong> Utilizado em casos avançados, como a criação de identificadores
                    exclusivos que não colidem com outras propriedades.</p>

                <h3>2. Tipos de Dados Não Primitivos</h3>

                <h4>2.1 Object</h4>
                <p><strong>Definição:</strong> Um tipo de dado complexo que permite armazenar coleções de dados e
                    entidades mais complexas.</p>
                <p><strong>Sintaxe:</strong></p>
                <pre><code>
let pessoa = {
  nome: "Maria",
  idade: 30,
  endereco: {
    rua: "Rua ABC",
    numero: 123
  }
};
      </code></pre>
                <p><strong>Nota:</strong> Objetos podem conter propriedades e métodos (funções), e são usados para
                    representar entidades com várias características.</p>

                <h4>2.2 Array</h4>
                <p><strong>Definição:</strong> Um tipo de objeto especializado para armazenar listas ordenadas de
                    valores.</p>
                <p><strong>Sintaxe:</strong></p>
                <pre><code>
let numeros = [1, 2, 3, 4, 5];
let frutas = ["maçã", "banana", "laranja"];
      </code></pre>
                <p><strong>Nota:</strong> Arrays são zero-indexados, ou seja, o primeiro elemento está na posição
                    <code>0</code>.
                </p>

                <h3>3. Verificando Tipos de Dados</h3>

                <p><strong>Operador <code>typeof</code>:</strong> Em JavaScript, o operador <code>typeof</code> é
                    usado para verificar o tipo de dado de uma variável.</p>
                <pre><code>
console.log(typeof nome); // "string"
console.log(typeof idade); // "number"
console.log(typeof isAdulto); // "boolean"
console.log(typeof pessoa); // "object"
      </code></pre>

                <h3>4. Conversão de Tipos (Type Coercion)</h3>

                <h4>Conversão Automática</h4>
                <p>JavaScript pode converter tipos automaticamente em certos contextos, como em operações
                    matemáticas ou comparações.</p>
                <pre><code>
let numero = "5"; // String
let soma = numero + 2; // "52" (String)
console.log(typeof soma); // "string"
      </code></pre>

                <h4>Conversão Explícita:</h4>
                <p><strong>Para Number:</strong></p>
                <pre><code>
let stringNumero = "123";
let numero = Number(stringNumero);
console.log(numero); // 123
console.log(typeof numero); // "number"
      </code></pre>

                <p><strong>Para String:</strong></p>
                <pre><code>
let num = 100;
let texto = String(num);
console.log(texto); // "100"
console.log(typeof texto); // "string"
      </code></pre>
            </section>

            <section>
                <h2>Exercícios</h2>
                <ol>
                    <li>Declare variáveis usando cada um dos tipos de dados primitivos que você aprendeu.</li>
                    <li>Crie um objeto que represente um livro, com propriedades como título, autor, ano de
                        publicação e uma lista de capítulos.</li>
                    <li>Verifique o tipo de dado das variáveis criadas usando o operador <code>typeof</code>.</li>
                    <li>Converta uma string numérica para um número e faça uma operação matemática com ela.</li>
                </ol>
            </section>

            <section>
                <h2>Conclusão</h2>
                <p>Compreender os tipos de dados em JavaScript é fundamental para manipular informações de forma
                    eficaz. Com a prática, você se sentirá mais confiante para trabalhar com diferentes tipos de
                    dados e realizar operações complexas.</p>
            </section>
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
    name: "tipoDeDados",
    data() {
        return {
            msg: "Tipos de Dados em JavaScript",
            video: 'https://www.youtube.com/embed/VIDEO_ID',
            propriedadesVideo: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            listaReferencias: [
                { id: 1, name: "w3schools", link: "https://www.w3schools.com/" },
                { id: 2, name: "MDN Web Docs", link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" },
                { id: 3, name: "ChatGPT", link: "https://chatgpt.com/" }
            ],
        }
    },
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
