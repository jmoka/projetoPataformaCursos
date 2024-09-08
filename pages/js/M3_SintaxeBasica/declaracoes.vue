<template>
    <v-app>
        <!-- Menu de navegação lateral -->
        <v-navigation-drawer app>
            <Menu />
        </v-navigation-drawer>
        <v-main>
            <div>
                <h1>{{ msg }}</h1>
            </div>

            <!-- Container principal -->
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <!-- Introdução -->
                        <p class="justificar">
                            Um <strong>programa de computador</strong> é uma sequência de instruções que o computador
                            executa para realizar uma tarefa específica. No JavaScript, essas instruções são chamadas de
                            <strong>instruções</strong>. As instruções JavaScript são compostas de valores, operadores,
                            expressões, palavras-chave e comentários.
                        </p>
                        <p class="justificar">
                            Um <strong>programa JavaScript</strong> é uma lista de instruções que é executada pelo
                            navegador da web ao carregar uma página HTML. Estas instruções são processadas na ordem em
                            que são escritas, linha por linha.
                        </p>

                        <h3>Estrutura de uma Instrução JavaScript</h3>
                        <p class="justificar">
                            As instruções JavaScript são compostas de diferentes elementos como:
                        <ul>
                            <li><strong>Valores:</strong> Constantes literais ou variáveis que armazenam dados.</li>
                            <li><strong>Operadores:</strong> Símbolos que realizam operações sobre os dados, como `+`
                                para adição.</li>
                            <li><strong>Expressões:</strong> Combinação de valores e operadores que resulta em um valor.
                            </li>
                            <li><strong>Palavras-chave:</strong> Comandos reservados que realizam ações específicas.
                            </li>
                        </ul>
                        </p>
                        <p class="justificar">
                            Exemplo de uma instrução que utiliza várias partes da sintaxe:
                        </p>
                        <pre><code>
document.getElementById("demo").innerHTML = "Hello, Mundo!";
                        </code></pre>

                        <h3>Ponto e Vírgula em JavaScript</h3>
                        <p class="justificar">
                            As instruções JavaScript são separadas por <strong>pontos e vírgulas (`;`)</strong>. Embora
                            o uso de ponto e vírgula não seja obrigatório em JavaScript, é altamente recomendado para
                            evitar ambiguidades e erros.
                        </p>
                        <pre><code>
let a, b, c;  // Declara 3 variáveis
a = 5;        // Atribui o valor 5 a 'a'
b = 6;        // Atribui o valor 6 a 'b'
c = a + b;    // Atribui a soma de 'a' e 'b' a 'c'
                        </code></pre>
                        <p class="justificar">
                            Você pode combinar várias instruções em uma única linha usando pontos e vírgulas:
                        </p>
                        <pre><code>
a = 5; b = 6; c = a + b;
                        </code></pre>

                        <h3>Espaço em Branco em JavaScript</h3>
                        <p class="justificar">
                            JavaScript ignora espaços em branco extras. Use espaços em branco para melhorar a
                            legibilidade do código. Por exemplo:
                        </p>
                        <pre><code>
let person = "Hege"; 
let person="Hege";
                        </code></pre>

                        <h3>Comprimento de Linha e Quebras de Linha</h3>
                        <p class="justificar">
                            Para melhorar a legibilidade, evite escrever linhas de código muito longas. Se uma instrução
                            não couber em uma única linha, quebre-a após um operador:
                        </p>
                        <pre><code>
document.getElementById("demo").innerHTML = 
"Hello, Dolly!";
                        </code></pre>

                        <h3>Blocos de Código JavaScript</h3>
                        <p class="justificar">
                            Instruções podem ser agrupadas em <strong>blocos de código</strong> utilizando chaves `{}`.
                            Blocos de código são usados, por exemplo, em funções para definir instruções que devem ser
                            executadas em conjunto:
                        </p>
                        <pre><code>
function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello, Dolly!";
  document.getElementById("demo2").innerHTML = "How are you?";
}
                        </code></pre>

                        <h3>Palavras-chave JavaScript</h3>
                        <p class="justificar">
                            JavaScript usa palavras-chave para definir ações específicas. Algumas palavras-chave que
                            você encontrará frequentemente incluem:
                        </p>
                        <ul>
                            <li><strong>var:</strong> Declara uma variável (não é mais recomendado)</li>
                            <li><strong>let:</strong> Declara uma variável de bloco</li>
                            <li><strong>const:</strong> Declara uma constante de bloco</li>
                            <li><strong>if:</strong> Marca um bloco de instruções para ser executado sob uma condição
                            </li>
                            <li><strong>switch:</strong> Marca um bloco de instruções a serem executadas em diferentes
                                casos</li>
                            <li><strong>for:</strong> Marca um bloco de instruções para ser executado em um loop</li>
                            <li><strong>function:</strong> Declara uma função</li>
                            <li><strong>return:</strong> Sai de uma função e retorna um valor</li>
                            <li><strong>try:</strong> Implementa o tratamento de erros</li>
                        </ul>
                    </v-col>
                </v-row>
            </v-container>

            <!-- Vídeo explicativo -->
            <v-container video>
                <v-responsive :aspect-ratio="16 / 9">
                    <iframe :src="video" :allow="propriedadesVideo" allowfullscreen></iframe>
                </v-responsive>
            </v-container>

        </v-main>

        <div class="d-flex justify-center container-fluid">
            <h1><a :href="linkAula">Saiba Mais</a></h1>
        </div>

        <!-- Rodapé -->
        <v-footer>
            <Footer />
        </v-footer>
    </v-app>
</template>

<script>
import Menu from '@/components/js/menuJS.vue'
import Footer from '@/components/footer_page.vue'

export default {
    name: "Watchers",
    data() {
        return {
            msg: "Instruções JavaScript",
            linkAula: "https://www.w3schools.com/js/js_statements.asp",
            video: 'https://www.youtube.com/embed/VIDEO_ID', // Substitua VIDEO_ID pela ID real do vídeo
            propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        };
    },
    components: {
        Menu,
        Footer
    }
}
</script>

<style scoped>
.video {
    max-width: 70%;
    max-height: 70%;
}

.justificar {
    text-align: justify;
}
</style>
