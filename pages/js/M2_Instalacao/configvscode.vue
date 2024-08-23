<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuJs />
        </v-navigation-drawer>
        <v-main>
            <h1><b>{{ msg }}</b></h1>

            <h4><b>Objetivo:</b></h4>
            <p>
                Nesta aula, você aprenderá como configurar um ambiente de desenvolvimento adequado para trabalhar
                com JavaScript, incluindo a instalação de ferramentas essenciais e a criação de um projeto básico.
            </p>
            <!-- Placeholder do vídeo -->
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
    name: "instalacaoJS",
    data() {
        return {
            msg: "Configuração do Visual Estúdio",
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
