<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuPHP />
        </v-navigation-drawer>
        <v-main>
            <h1><b>{{msg}}</b></h1>
            
            <h4><b>Objetivo:</b></h4>
            <p>
                Nesta seção, vamos aprender sobre a estrutura básica de um script PHP. Isso inclui como começar a escrever código PHP e como mostrar uma mensagem na tela.
            </p>
            
            <v-container class="flex">
                <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>

            <h2><b>1. Estrutura de um Script PHP</b></h2>
            <p>
                <b>Tag de Abertura e Fechamento:</b><br>
                Para começar a escrever código PHP, usamos tags especiais que dizem ao servidor para interpretar o que está dentro delas como PHP. As tags são <code>&lt;?php</code> para começar e <code>?&gt;</code> para terminar.
            </p>
            
            <p>
                <b>Primeiro Script PHP:</b><br>
                Vamos ver um exemplo simples de código PHP que mostra uma mensagem na tela. Usamos a função <code>echo</code> para isso.
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
                <br>- <code>echo "Olá, Mundo!";</code>: O comando <code>echo</code> exibe a mensagem "Olá, Mundo!" na tela.
                <br>- <code>?&gt;</code>: Isso marca o fim do código PHP.
            </p>

            <h4><b>O que Acontece Quando Você Executa o Código:</b></h4>
            <p>
                Quando você executa esse código em um servidor PHP, a mensagem "Olá, Mundo!" será exibida na tela do navegador.
            </p>
        </v-main>
    </v-app>
</template>

<script>
import MenuPHP from '@/components/php/menu.PHP.vue'

export default {
    name: "EstruturaScriptPHP",
    data() {
        return {
            msg: 'Estrutura de um Script PHP',
            video: 'https://www.youtube.com/embed/VIDEO_ID', // Substitua VIDEO_ID pelo ID do seu vídeo
            propriedadesVideo: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        }
    },
    components: {
        MenuPHP
    }
}
</script>

<style scoped>
.v-main {
    padding: 10px 20px 10px 20px !important;
}
.flexItem {
    max-width: 70%;
    max-height: 70%;
}
</style>
