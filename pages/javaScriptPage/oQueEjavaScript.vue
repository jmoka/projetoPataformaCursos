<template>
    <v-app>
     <v-navigation-drawer permanent app>
         <Menu />
     </v-navigation-drawer>
     <v-main>
       
         <h1>Palavras Chaves</h1>
         <v-container fluid>
            <v-app-bar class="corFundoBarra">
                <v-list v-for="(pchave, index) in palavrachaves" :key="index">
                    <v-list-item> <a :href="pchave.ancola">{{pchave.palavra }}</a></v-list-item>
                </v-list>
            </v-app-bar>           

         </v-container>
       
    
         <h2>O que é JavaScript?</h2>
         <p class="formatText">
             JavaScript é a linguagem de programação mais popular do mundo.
             JavaScript® (às vezes abreviado para JS) é uma linguagem leve, 
             <strong><a href="#interpretada">interpretada</a></strong> e baseada em objetos com <strong><a href="#primeiraClasse">funções de primeira classe</a></strong>,
             mais conhecida como a linguagem de script para páginas Web, mas usada também em vários outros ambientes sem browser, tais como node.js, 
             Apache CouchDB e Adobe Acrobat. O JavaScript é uma linguagem baseada em <strong><a href="#prototipos">protótipos</a></strong>, 
             <strong><a href="#multi-paradigma">multi paradigma</a></strong> e <strong><a href="#dinâmica">dinâmica</a></strong>, suportando estilos de orientação a objetos, imperativos e declarativos 
             (como por exemplo a programação funcional).
         </p>
         <br>
         <h2 id="ECMAScript">O que é ECMAScript?</h2>
         <p class="formatText">
             ECMAScript é o <b>padrão subjacente ao JavaScript</b>, uma das linguagens de programação mais populares do mundo. Desde 2012, todos os 
             navegadores modernos oferecem suporte completo ao ECMAScript 5.1, e os navegadores mais antigos suportam pelo menos o ECMAScript 3. 
             A evolução do padrão continuou a partir daí, com a ECMA International publicando a sexta versão do ECMAScript em 17 de junho de 2015, 
             oficialmente conhecida como ECMAScript 2015 (anteriormente ECMAScript 6 ou ES6). Desde então, 
             novas versões do ECMAScript são lançadas anualmente, trazendo melhorias e novos recursos para desenvolvedores.
         </p>
         <h2 id="ECMAScript?">Por que o ECMAScript é Importante?</h2>
         <p class="formatText">
             A importância do ECMAScript reside em sua capacidade de <b>padronizar a sintaxe e os recursos do JavaScript</b>, 
             garantindo que os desenvolvedores possam criar aplicações web consistentes e confiáveis. Com cada nova versão, 
             o ECMAScript introduz funcionalidades que simplificam o desenvolvimento, melhoram o desempenho e tornam o código mais legível e sustentável.
         </p>
         <h2 id="interpretada">O que é linguagem Interpretada?</h2>
         <p class="formatText">
             Uma linguagem interpretada é aquela cujo código é <b>executado diretamente por um interpretador</b>, ao invés de ser compilado para código de máquina 
             antes de ser executado. Linguagens interpretadas permitem a execução linha por linha do código, o que pode facilitar a depuração e o desenvolvimento rápido.
         </p>
         <h5>Exemplos:</h5>
         <div v-for="(code, index) in filteredCodes_ex1" :key="index">
             <pre>
                 <code v-html="code.code"></code>
             </pre>
         </div>
         <br>
         <h2 id="primeiraClasse">O que são funções de Primeira Classe?</h2>
         <p class="formatText">
            Funções de primeira classe são funções que são tratadas como cidadãos de primeira classe. Isso significa que podem ser atribuídas a variáveis, 
            passadas como argumentos para outras funções, e retornadas por outras funções. Em JavaScript, funções são de primeira classe.
        </p>
        <h5>Exemplos:</h5>
         <div v-for="(code, index) in filteredCodes_ex2" :key="index">
             <pre>
                 <code v-html="code.code"></code>
             </pre>
         </div>
         <br>
         <h2 id="aplicacao">Quais suas Aplicações?</h2>
         <p class="formatText">
            Linguagens interpretadas têm uma ampla gama de aplicações devido à sua flexibilidade e facilidade de uso. São frequentemente usadas para scripts de 
            automação, desenvolvimento web, prototipagem rápida, e em ambientes onde a portabilidade do código é importante.
         </p>
         <h5>Exemplos:</h5>
         <p class="formatText">
            JavaScript é amplamente utilizado no desenvolvimento web para criar páginas dinâmicas e interativas. Python, outra linguagem interpretada, 
            é muito popular para automação de tarefas, desenvolvimento de back-end web, análise de dados, aprendizado de máquina, e mais.
         </p>
         
         <br>
         <h2 id="prototipos">Baseada em Protótipos?</h2>
         <p class="formatText">
            Linguagens baseadas em protótipos utilizam a herança prototípica, onde objetos podem herdar propriedades e métodos diretamente de outros objetos. 
            Em vez de classes, essas linguagens usam protótipos para definir o comportamento dos objetos.
         </p>
         <h5>Exemplos:</h5>
         <div v-for="(code, index) in filteredCodes_ex3" :key="index">
             <pre>
                 <code v-html="code.code"></code>
             </pre>
         </div>
         <br>
         <h2 id="multi-paradigma">O que é Multi-Paradigma?</h2>
         <p class="formatText">
            Uma linguagem de programação multi-paradigma é aquela que suporta mais de um paradigma de programação, permitindo que os desenvolvedores 
            escolham o estilo que melhor se adapta ao problema que estão resolvendo. JavaScript, por exemplo, suporta programação imperativa, funcional 
            e orientada a objetos.
         </p>
         <h5>Exemplos:</h5>
         <div v-for="(code, index) in filteredCodes_ex4" :key="index">
             <pre>
                 <code v-html="code.code"></code>
             </pre>
         </div>
         <br>
         <h2 id="dinâmica">O que é uma Linguagem Dinâmica?</h2>
         <p class="formatText">
            Uma linguagem dinâmica é aquela que realiza muitas verificações de tipo e outras operações em tempo de execução. Isso significa que o tipo das variáveis 
            pode mudar durante a execução do programa, e novos métodos e propriedades podem ser adicionados aos objetos em tempo de execução.
         </p>
         <h5>Exemplos:</h5>
         <div v-for="(code, index) in filteredCodes_ex5" :key="index">
             <pre>
                 <code v-html="code.code"></code>
             </pre>
         </div>
     </v-main>
     <v-footer>
         <div>
             <v-title>Referência:</v-title>            
             <p v-for="(ref, index) in listaReferencias" :key="ref.id">
                 <a :href="ref.link">{{ ref.name }}</a> 
             </p> 
         </div>                
     </v-footer>
    </v-app>
</template>
 
<script>
 import Menu from "@/components/javaScript/menu.JavaScript.vue";
 
 export default {
     data() {
         return {
             palavrachaves:[
                {
                    id:1,
                    palavra:"Interpretada",
                    ancola:"#interpretada"
                },
                {
                    id:2,
                    palavra:"Funções de primeira classe",
                    ancola:"#primeiraClasse"
                },
                {
                    id:3,
                    palavra:"Protótipos",
                    ancola:"#prototipos"
                },
                {
                    id:4,
                    palavra:"Multi Paradigma",
                    ancola:"#multi-paradigma"
                },
                {
                    id:5,
                    palavra:"Dinâmica",
                    ancola:"#dinâmica"
                },
                {
                    id:5,
                    palavra:"ECMAScript",
                    ancola:"#ECMAScript"
                },
             ],
             listaReferencias: [
                 {
                     id: 1,
                     name: "w3schools",
                     link: "https://www.w3schools.com/"
                 },
                 {
                     id: 2,
                     name: "MDN Web Docs",
                     link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
                 },
                 {
                     id: 3,
                     name: "ChatGPT",
                     link: "https://chatgpt.com/"
                 }
             ],
             codes: [
                 {
                     id: 1,
                     code: 
                     `
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
                    id:3,
                    code:
                    `
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
                    id:4,
                    code:
                    `
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
                    id:5,
                    code:
                    `
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
         Menu
     },
     computed:{
        filteredCodes_ex1() {
             // Por exemplo, exibir apenas o código com ID 1
             return this.codes.filter(code => code.id === 1);
         },

         filteredCodes_ex2() {
             // Por exemplo, exibir apenas o código com ID 1
             return this.codes.filter(code => code.id === 2);
         },
         filteredCodes_ex3() {
             // Por exemplo, exibir apenas o código com ID 1
             return this.codes.filter(code => code.id === 3);
         },
         filteredCodes_ex4() {
             // Por exemplo, exibir apenas o código com ID 1
             return this.codes.filter(code => code.id === 4);
         },
         filteredCodes_ex5() {
             // Por exemplo, exibir apenas o código com ID 1
             return this.codes.filter(code => code.id === 5);
         }
         
     }
 };
 </script>
 
 <style scoped>
 .v-main {
     padding: 10px 20px 10px 50px !important; /* Ajuste o padding conforme necessário */
 }
 </style>
