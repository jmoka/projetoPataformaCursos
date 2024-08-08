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
import MenuJs from '@/components/javaScript/menu.JavaScript.vue'
export default {
    name: "instalacaoJS",
    data() {
        return {
            msg: "Configuração do Visual Estúdio",
            video: 'https://www.youtube.com/embed/VIDEO_ID',
            propriedadesVideo: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",

        }
    },
    components: {
        MenuJs
    }
}
</script>


<style scoped>
.v-main {
    padding: 10px 20px 10px 20px !important;
    /* Ajuste o padding conforme necessário */
}
ul li {
    color: #894200
}
.flexItem {
    max-width: 70%;
    max-height: 70%
}
</style>
