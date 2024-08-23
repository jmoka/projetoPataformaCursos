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
            <v-container class="flex">
                <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>

            <h2><b>Conteúdo:</b></h2>

        </v-main>
    </v-app>
</template>

<script>
import MenuJs from '~/components/js/menuJS.vue'
export default {
    name: "instalacaoJS",
    data() {
        return {
            msg: "Instalação do Visual Estúdio Code",
            video: 'https://www.youtube.com/embed/VIDEO_ID',
            propriedadesVideo: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",

        }
    },
    components: {
        MenuJs
    }
}
</script>


<style scoped></style>
