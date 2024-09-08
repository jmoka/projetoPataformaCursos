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
                            Nesta aula, vamos explorar como podemos manipular a entrada e saída de dados em JavaScript.
                            Vamos aprender como enviar dados para o usuário utilizando diferentes métodos de saída (como
                            <code>console.log</code>, <code>alert</code>, <code>document.write</code>, e
                            <code>innerHTML</code>), e também como coletar informações do usuário através do método de
                            entrada <code>prompt</code>.
                        </p>

                        <!-- Métodos de Saída -->
                        <h3>Métodos de Saída em JavaScript</h3>
                        <p class="justificar">
                            JavaScript oferece várias maneiras de mostrar informações para o usuário:
                        </p>
                        <ul>
                            <li><b>console.log()</b>: Exibe informações no console do navegador. Muito útil para
                                debugging e desenvolvimento.</li>
                            <li><b>alert()</b>: Mostra uma caixa de diálogo com uma mensagem e um botão "OK".</li>
                            <li><b>document.write()</b>: Escreve diretamente no documento HTML. Usado principalmente
                                para testes rápidos.</li>
                            <li><b>innerHTML</b>: Altera o conteúdo HTML de um elemento específico.</li>
                        </ul>

                        <!-- Exemplo de console.log -->
                        <h4>Exemplo de Uso de <code>console.log()</code></h4>
                        <v-card class="mb-4">
                            <v-card-title>Exemplo: Usando console.log</v-card-title>
                            <v-card-text>
                                <pre>
&lt;script&gt;
console.log('Olá, Mundo!');
&lt;/script&gt;
                                </pre>
                            </v-card-text>
                            <p class="justificar">Esse código exibe "Olá, Mundo!" no console do navegador, útil para
                                verificar variáveis ou o fluxo de execução de scripts.</p>
                        </v-card>

                        <!-- Exemplo de alert -->
                        <h4>Exemplo de Uso de <code>alert()</code></h4>
                        <v-card class="mb-4">
                            <v-card-title>Exemplo: Usando alert</v-card-title>
                            <v-card-text>
                                <pre>
&lt;script&gt;
alert('Bem-vindo à aula de JavaScript!');
&lt;/script&gt;
                                </pre>
                            </v-card-text>
                            <p class="justificar">Este código exibe uma mensagem de alerta no navegador com o texto
                                "Bem-vindo à aula de JavaScript!".</p>
                        </v-card>

                        <!-- Exemplo de document.write -->
                        <h4>Exemplo de Uso de <code>document.write()</code></h4>
                        <v-card class="mb-4">
                            <v-card-title>Exemplo: Usando document.write</v-card-title>
                            <v-card-text>
                                <pre>
&lt;script&gt;
document.write('Este texto foi adicionado pelo JavaScript.');
&lt;/script&gt;
                                </pre>
                            </v-card-text>
                            <p class="justificar">Este código escreve diretamente no documento HTML. É útil para testes
                                rápidos, mas deve ser evitado em scripts de produção.</p>
                        </v-card>

                        <!-- Exemplo de innerHTML -->
                        <h4>Exemplo de Uso de <code>innerHTML</code></h4>
                        <v-card class="mb-4">
                            <v-card-title>Exemplo: Usando innerHTML</v-card-title>
                            <v-card-text>
                                <pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="pt"&gt;
&lt;body&gt;
    &lt;div id="conteudo"&gt;Texto original&lt;/div&gt;
    &lt;script&gt;
        document.getElementById('conteudo').innerHTML = 'Texto atualizado com JavaScript';
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
                                </pre>
                            </v-card-text>
                            <p class="justificar">Este código altera o conteúdo do elemento com o ID "conteudo" para
                                "Texto atualizado com JavaScript".</p>
                        </v-card>

                        <!-- Métodos de Entrada -->
                        <h3>Métodos de Entrada em JavaScript</h3>
                        <p class="justificar">
                            Para coletar dados dos usuários, JavaScript fornece o método <code>prompt()</code>:
                        </p>
                        <ul>
                            <li><b>prompt()</b>: Exibe uma caixa de diálogo que solicita ao usuário a entrada de dados.
                                Retorna o valor inserido pelo usuário como uma string.</li>
                        </ul>

                        <!-- Exemplo de prompt -->
                        <h4>Exemplo de Uso de <code>prompt()</code></h4>
                        <v-card class="mb-4">
                            <v-card-title>Exemplo: Usando prompt</v-card-title>
                            <v-card-text>
                                <pre>
&lt;script&gt;
var nome = prompt('Qual é o seu nome?');
alert('Olá, ' + nome + '!');
&lt;/script&gt;
                                </pre>
                            </v-card-text>
                            <p class="justificar">Este código solicita ao usuário que insira seu nome e depois exibe uma
                                mensagem de saudação usando o valor inserido.</p>
                        </v-card>

                        <!-- Exemplos Combinados -->
                        <h3>Exemplos Combinados de Entrada e Saída</h3>
                        <p class="justificar">
                            Vamos combinar os métodos de entrada e saída para criar uma interação mais complexa:
                        </p>
                        <v-card class="mb-4">
                            <v-card-title>Exemplo: Entrada e Saída Combinadas</v-card-title>
                            <v-card-text>
                                <pre>
&lt;script&gt;
var idade = prompt('Qual é a sua idade?');
console.log('Idade informada: ' + idade);
document.write('Você informou que tem ' + idade + ' anos.');
&lt;/script&gt;
                                </pre>
                            </v-card-text>
                            <p class="justificar">Aqui, coletamos a idade do usuário com <code>prompt()</code>,
                                registramos no console com <code>console.log()</code>, e exibimos no documento HTML
                                usando <code>document.write()</code>.</p>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

            <!-- Vídeo explicativo -->
            <v-container>
                <v-responsive :aspect-ratio="16 / 9">
                    <iframe :src="video" :allow="propriedadesVideo" allowfullscreen></iframe>
                </v-responsive>
            </v-container>
        </v-main>

        <!-- Link para mais conteúdo -->
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
    name: "saidaDados",
    data() {
        return {
            msg: "Entrada e Saída de Dados em JavaScript",
            linkAula: "https://www.w3schools.com/js/js_output.asp",
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
