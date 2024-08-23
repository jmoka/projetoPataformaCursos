<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuPHP />
        </v-navigation-drawer>
        <v-main>
            <h1><b>{{ msg }}</b></h1>

            <h4><b>Objetivo:</b></h4>
            <p>
                Nesta seção, vamos aprender sobre a estrutura básica de um script PHP. Isso inclui como começar a
                escrever código PHP e como mostrar uma mensagem na tela.
            </p>

            <v-container video>
                <v-responsive :aspect-ratio="16 / 9">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>

            <h2><b>1. Estrutura de um Script PHP</b></h2>
            <p>
                <b>Tag de Abertura e Fechamento:</b><br>
                Para começar a escrever código PHP, usamos tags especiais que dizem ao servidor para interpretar o que
                está dentro delas como PHP. As tags são <code>&lt;?php</code> para começar e <code>?&gt;</code> para
                terminar.
            </p>

            <p>
                <b>Primeiro Script PHP:</b><br>
                Vamos ver um exemplo simples de código PHP que mostra uma mensagem na tela. Usamos a função
                <code>echo</code> para isso.
            </p>

            <pre>
<code>
    &lt;?php
        // Aqui usamos echo para mostrar uma mensagem
        echo "Olá, Mundo!";
    ?&gt;
</code>
            </pre>

            <h3><b>Explicação do Código:</b></h3>
            <p>
                - <code>&lt;?php</code>: Isso marca o início do código PHP.
                <br>- <code>echo "Olá, Mundo!";</code>: O comando <code>echo</code> exibe a mensagem "Olá, Mundo!" na
                tela.
                <br>- <code>?&gt;</code>: Isso marca o fim do código PHP.
            </p>

            <h4><b>O que Acontece Quando Você Executa o Código:</b></h4>
            <p>
                Quando você executa esse código em um servidor PHP, a mensagem "Olá, Mundo!" será exibida na tela do
                navegador.
            </p>
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
import MenuPHP from '~/components/php/menuPHP.vue'

export default {
    name: "EstruturaScriptPHP",
    data() {
        return {
            msg: 'Estrutura de um Script PHP',
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
        MenuPHP
    }
}
</script>

<style scoped>
.video {
    max-width: 70%;
    max-height: 70%;
}
</style>
