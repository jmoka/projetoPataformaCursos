<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuJs />
        </v-navigation-drawer>
        <v-main>
            <div>
                <h1>{{ msg }}</h1>
            </div>
            <h4><b>Objetivo:</b></h4>
            <p>
                JavaScript é uma linguagem de programação que foi criada para tornar as
                páginas da web interativas. Enquanto HTML define a estrutura de uma
                página e CSS define o estilo, JavaScript permite que as páginas façam
                coisas dinâmicas, como responder a cliques de botões, validar formulários
                e muito mais.
            </p>


            <v-container class="flex">
                <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>

            <section>
                <h2>Por que aprender JavaScript?</h2>
                <ul>
                    <li><b>Popularidade:</b></li>
                    <p>Uma das linguagens mais usadas no desenvolvimento web.</p>
                    <li><b>Versatilidade</b>:</li>
                    <p>Pode criar desde pequenas funcionalidades até aplicações
                        web completas.</p>
                    <li><b>Carreira:</b></li>
                    <p>Dominar JavaScript abre portas para muitas oportunidades no
                        desenvolvimento front-end.</p>
                </ul>
            </section>

            <section>
                <h2>Como funciona o JavaScript?</h2>
                <p>
                    JavaScript é uma linguagem de programação que é executada diretamente no
                    navegador. Quando você visita uma página da web, o JavaScript nela contido
                    é baixado junto com o HTML e o CSS e é executado no seu navegador.
                </p>

                <pre>
        <code>
        alert("Bem-vindo ao curso de JavaScript!");
        </code>
    </pre>
            </section>

            <section>
                <h2>Componentes Básicos do JavaScript</h2>
                <ul>
                    <li> <strong>Variáveis:</strong></li>
                    <p>Servem para armazenar dados.</p>
                    <pre><code>let nome = "João";</code></pre>

                    <li><strong>Funções:</strong> </li>
                    <p>Blocos de código que executam uma tarefa específica.</p>
                    <pre>
                <code>
                    function saudacao() {
                        alert("Olá, bem-vindo!");
                    }
                </code>
            </pre>

                    <li><strong>Eventos:</strong></li>
                    <p>Ações que acontecem em uma página, como um clique de mouse.</p>

                    <pre>
            <code>
                document.getElementById("meuBotao").addEventListener("click", function() {
                    alert("Você clicou no botão!");
                });
            </code>
        </pre>

                </ul>
            </section>

            <section>
                <h2>Conclusão</h2>
                <p>
                    JavaScript é uma linguagem de programação poderosa que permite tornar as
                    páginas da web mais dinâmicas e interativas. Esta foi uma introdução ao
                    JavaScript, e nos próximos passos, vamos explorar mais profundamente como
                    criar e manipular elementos na web usando JavaScript.
                </p>
            </section>

        </v-main>
        <v-footer>
            <div>
                <h2>Referência:</h2>
                <p v-for="(ref, index) in listaReferencias" :key="ref.id">
                    <a :href="ref.link">{{ ref.name }}</a>
                </p>
            </div>
        </v-footer>
    </v-app>
</template>

<script>
import MenuJs from "@/components/javaScript/menu.JavaScript.vue";

export default {
    name: "oQueEjavaScript",
    data() {
        return {
            msg: "O que á JavaScript ?",
            video: '/videos/js/aula1_js.mp4',
            propriedadesVideo: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            palavrachaves: [
                { id: 1, palavra: "Interpretada", ancola: "#interpretada" },
                { id: 2, palavra: "Funções de primeira classe", ancola: "#primeiraClasse" },
                { id: 3, palavra: "Protótipos", ancola: "#prototipos" },
                { id: 4, palavra: "Multi Paradigma", ancola: "#multi-paradigma" },
                { id: 5, palavra: "Dinâmica", ancola: "#dinâmica" },
                { id: 6, palavra: "ECMAScript", ancola: "#ECMAScript" }
            ],
            listaReferencias: [
                { id: 1, name: "w3schools", link: "https://www.w3schools.com/" },
                { id: 2, name: "MDN Web Docs", link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" },
                { id: 3, name: "ChatGPT", link: "https://chatgpt.com/" }
            ],
            codes: [
                {
                    id: 1,
                    code: `
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Outro Exemplo&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h2&gt;Exemplo de Código com Funções&lt;/h2&gt;
&lt;script&gt;
function greet(name) {
    alert("Olá, " + name);
}
greet("Mundo");
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
                    `
                },
                {
                    id: 2,
                    code: `
&lt;!-- Função atribuída a uma variável --&gt;
&lt;script&gt;
const sayHello = function() {
    console.log("Olá!");
};

// Passando uma função como argumento
function greet(fn) {
    fn();
}

greet(sayHello); // Saída: Olá!

// Retornando uma função de outra função
function createGreeter() {
    return function() {
        console.log("Olá de novo!");
    };
}

const greeter = createGreeter();
greeter(); // Saída: Olá de novo!
&lt;/script&gt;
                    `
                },
                {
                    id: 3,
                    code: `
&lt;!-- Exemplo de Herança e Métodos em JavaScript --&gt;
&lt;script&gt;
const animal = {
    falar: function() {
        console.log("O animal está fazendo um som");
    }
};

const cachorro = Object.create(animal);
cachorro.falar(); // Saída: O animal está fazendo um som

cachorro.latir = function() {
    console.log("O cachorro está latindo");
};

cachorro.latir(); // Saída: O cachorro está latindo
&lt;/script&gt;
                    `
                },
                {
                    id: 4,
                    code: `
&lt;!-- Exemplo de Programação Imperativa e Funcional em JavaScript --&gt;
&lt;script&gt;
&lt;!-- Programação Imperativa --&gt;
let numbers = [1, 2, 3, 4, 5];
let total = 0;

for (let i = 0; i &lt; numbers.length; i++) {
    total += numbers[i];
}

console.log(total); // Saída: 15

&lt;!-- Programação Funcional --&gt;
let numbers = [1, 2, 3, 4, 5];
let total = numbers.reduce((sum, number) =&gt; sum + number, 0);

console.log(total); // Saída: 15
&lt;/script&gt;
                    `
                },
                {
                    id: 5,
                    code: `
&lt;!-- Exemplo de Adição de Propriedade a um Objeto em JavaScript --&gt;
&lt;script&gt;
let pessoa = {
    nome: "Maria"
};

pessoa.idade = 30; // Adicionando nova propriedade

console.log(pessoa); // Saída: { nome: "Maria", idade: 30 }
&lt;/script&gt;
                    `
                }
            ]
        };
    },
    components: {
        MenuJs
    },
    computed: {
        filteredCodes_ex1() {
            return this.codes.filter(code => code.id === 1);
        },
        filteredCodes_ex2() {
            return this.codes.filter(code => code.id === 2);
        },
        filteredCodes_ex3() {
            return this.codes.filter(code => code.id === 3);
        },
        filteredCodes_ex4() {
            return this.codes.filter(code => code.id === 4);
        },
        filteredCodes_ex5() {
            return this.codes.filter(code => code.id === 5);
        }
    }
};
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

li {
    color: #894200
}
</style>
