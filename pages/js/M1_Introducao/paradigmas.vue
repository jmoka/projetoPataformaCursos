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
                Um <strong>paradigma de programação</strong> é uma forma de estruturar e organizar o código.
                JavaScript é uma linguagem <strong>multiparadigma</strong>, o que significa que você pode usar
                diferentes
                estilos de programação dentro dela.
            </p>


            <v-container video>
                <v-responsive :aspect-ratio="16 / 9">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>

            <section>
                <h2>Principais Paradigmas em JavaScript</h2>
                <h3>Programação Procedural:</h3>
                <p>Foca em uma sequência de instruções que o computador deve seguir.</p>
                <pre>
        <code>
          let resultado = 0;
          function somar(a, b) {
              resultado = a + b;
          }
          somar(3, 4);
          console.log(resultado); // 7
        </code>
      </pre>

                <h3>Programação Orientada a Objetos (OOP):</h3>
                <p>Baseia-se em objetos que contêm propriedades e métodos.</p>
                <pre>
        <code>
          let carro = {
              cor: "vermelho",
              velocidade: 0,
              acelerar: function() {
                  this.velocidade += 10;
              }
          };
          carro.acelerar();
          console.log(carro.velocidade); // 10
        </code>
      </pre>

                <h3>Programação Funcional:</h3>
                <p>Enfatiza o uso de funções puras e imutabilidade.</p>
                <pre>
        <code>
          function somar(a, b) {
              return a + b;
          }
          let resultado = somar(3, 4);
          console.log(resultado); // 7
        </code>
      </pre>
            </section>

            <section>
                <h2>JavaScript como Linguagem Interpretada</h2>
                <p>
                    JavaScript é uma linguagem <strong>interpretada</strong>, o que significa que o código é executado
                    diretamente
                    pelo navegador ou ambiente de execução, linha por linha, sem a necessidade de ser compilado antes.
                </p>

                <ul>
                    <li><strong>Agilidade no desenvolvimento:</strong></li>
                    <p>Você pode escrever e testar o código rapidamente.</p>
                    <li><strong>Interatividade em tempo real:</strong> </li>
                    <p>Alterações no código JavaScript são refletidas
                        instantaneamente na web.</p>
                </ul>
            </section>

            <section>
                <h2>JavaScript como Linguagem Dinâmica</h2>
                <h3>Tipagem Dinâmica:</h3>
                <p>
                    Em JavaScript, você não precisa declarar o tipo de uma variável, que pode mudar de tipo em tempo de
                    execução.
                </p>
                <pre>
        <code>
          let x = 10;    // x é um número
          x = "Olá!";    // agora x é um texto
        </code>
      </pre>

                <h3>Flexibilidade:</h3>
                <p>
                    Você pode adicionar ou modificar propriedades e métodos em objetos durante a execução.
                </p>
                <pre>
        <code>
            let pessoa = {
                nome: "João"
            };
            pessoa.idade = 25; // Adiciona a propriedade 'idade'
            console.log(pessoa); // { nome: "João", idade: 25 }
        </code>
    </pre>
            </section>

            <section>
                <h2>Conclusão</h2>
                <p>
                    JavaScript é uma linguagem extremamente flexível que suporta múltiplos paradigmas de programação,
                    como o procedural,
                    orientado a objetos e funcional. Além disso, por ser interpretada e dinâmica, ela oferece grande
                    agilidade e versatilidade no
                    desenvolvimento web.
                </p>
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
    name: "paradigmas",
    data() {
        return {
            msg: "Paradigmas de Programação e JavaScript como Linguagem Interpretada e Dinâmica",
            video: 'https://www.youtube.com/embed/VIDEO_ID',
            propriedadesVideo: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",

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
.video {
    max-width: 70%;
    max-height: 70%;
}
</style>
