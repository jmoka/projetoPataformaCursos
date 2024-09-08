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
                            A tag <code>&lt;script&gt;</code> é essencial para incorporar ou referenciar scripts
                            JavaScript em um documento HTML. É usada para adicionar interatividade, manipular elementos
                            HTML, validar formulários, realizar requisições HTTP, entre outras funcionalidades na web.
                        </p>

                        <!-- Exemplo Básico: Contador -->
                        <h3>Exemplo Básico: Contador</h3>
                        <p class="justificar">
                            Vamos demonstrar o uso básico da tag <code>&lt;script&gt;</code> criando um contador simples
                            que incrementa cada vez que um botão é clicado.
                        </p>
                        <v-card class="mb-4">
                            <v-card-title>Exemplo de Código: Contador</v-card-title>
                            <v-card-text>
                                <pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="pt"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Contador&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Contador Simples&lt;/h1&gt;
    &lt;p id="contador"&gt;0&lt;/p&gt;
    &lt;button onclick="incrementar()"&gt;Incrementar&lt;/button&gt;

    &lt;script&gt;
        function incrementar() {
            var contadorElemento = document.getElementById("contador");
            var contador = parseInt(contadorElemento.textContent);
            contador++;
            contadorElemento.textContent = contador;
        }
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
                                </pre>
                            </v-card-text>
                        </v-card>

                        <!-- Diferença entre Localizações da Tag Script -->
                        <h3>Diferença entre Usar o Script no &lt;head&gt;, no Final do &lt;body&gt;, ou Fora do
                            &lt;body&gt;</h3>
                        <p class="justificar">
                            Existem diferentes formas de incluir scripts em um documento HTML, e a localização do script
                            afeta o comportamento e o desempenho da página:
                        </p>
                        <ul>
                            <li><b>No &lt;head&gt;:</b> Scripts colocados no cabeçalho da página são executados antes do
                                conteúdo ser carregado, o que pode causar bloqueio de renderização até que o script seja
                                baixado e executado.</li>
                            <li><b>No Final do &lt;body&gt;:</b> Scripts colocados aqui permitem que o conteúdo da
                                página seja carregado primeiro, melhorando a experiência do usuário, pois o script só é
                                executado após o carregamento completo da página.</li>
                            <li><b>Fora do &lt;body&gt; ou &lt;head&gt;:</b> Colocar scripts fora dessas seções pode
                                levar a comportamento imprevisível e não é recomendado.</li>
                        </ul>

                        <!-- Scripts Inseridos Diretamente -->
                        <h3>Scripts Inseridos diretamente em Elementos HTML</h3>
                        <p class="justificar">
                            Scripts podem ser inseridos diretamente em elementos HTML usando atributos de eventos, como
                            <code>onclick</code>. Essa abordagem, embora funcional, é geralmente desaconselhada por
                            razões de segurança e manutenção.
                        </p>
                        <v-card class="mb-4">
                            <v-card-title>Exemplo de Script Inserido</v-card-title>
                            <v-card-text>
                                <pre>
&lt;button onclick="alert('Botão clicado!')"&gt;Clique Aqui&lt;/button&gt;
                                </pre>
                            </v-card-text>
                        </v-card>

                        <!-- Explicação dos Atributos da Tag Script -->
                        <h3>Atributos Comuns da Tag &lt;script&gt;</h3>
                        <p class="justificar">
                            A tag <code>&lt;script&gt;</code> pode ter vários atributos que influenciam seu
                            comportamento:
                        </p>
                        <ul>
                            <li><b>src</b>: Define a URL de um arquivo JavaScript externo.</li>
                            <li><b>type</b>: Especifica o tipo MIME do script. Normalmente
                                <code>type="text/javascript"</code>.
                            </li>
                            <li><b>async</b>: Permite que o script seja executado de forma assíncrona.</li>
                            <li><b>defer</b>: Faz com que o script seja executado somente após a página ser totalmente
                                carregada.</li>
                            <li><b>crossorigin</b>: Controla a política de CORS para o script.</li>
                        </ul>

                        <!-- Exemplo de Uso de Atributos -->
                        <v-card class="mb-4">
                            <v-card-title>Exemplo de Uso de Atributos</v-card-title>
                            <v-card-text>
                                <pre>&lt;script src="app.js" defer&gt;&lt;/script&gt;</pre>
                            </v-card-text>
                        </v-card>

                        <!-- Exemplo de Manipulação de DOM -->
                        <h3>Exemplo de Manipulação de DOM com a Tag &lt;script&gt;</h3>
                        <p class="justificar">
                            Vamos criar um script que altera o conteúdo de um elemento HTML.
                        </p>
                        <v-card class="mb-4">
                            <v-card-title>Exemplo de Código</v-card-title>
                            <v-card-text>
                                <pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Manipulação de DOM&lt;/title&gt;
    &lt;script&gt;
        function alterarConteudo() {
            document.getElementById("mensagem").innerHTML = "O conteúdo foi alterado!";
        }
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2 id="mensagem"&gt;Texto Original&lt;/h2&gt;
    &lt;button onclick="alterarConteudo()"&gt;Clique para alterar&lt;/button&gt;
&lt;/body&gt;
&lt;/html&gt;
                                </pre>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>

            <!-- Vídeo explicativo -->
            <v-container>
                <v-responsive :aspect-ratio="16 / 9">
                    <iframe :src="video" :allow="propriedadesVideo" allowfullscreen></iframe>
                </v-responsive>
                <h3><a :href="linkAula">Saiba Mais</a></h3>
            </v-container>
            <div class="d-flex justify-center container-fluid">
                <h1><a :href="linkAula">Saiba Mais</a></h1>
            </div>

        </v-main>

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
            msg: "Tag Script",
            linkAula: "https://www.w3schools.com/js/js_whereto.asp",
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
