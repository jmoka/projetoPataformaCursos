<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuTS />
        </v-navigation-drawer>
        <v-main>
        <container>      
        <iframe :src="url+linguagem"
         frameborder="0" allowfullscreen>
        </iframe>
        </container>   
      </v-main>
    </v-app>
</template>

<script>
import MenuTS from '~/components/ts/menuTS.vue'
export default {
    name: "codeTS",
    data() {
        return {
            msg: 'Concatenação de Strings',
            video: 'https://www.youtube.com/embed/VIDEO_ID',  // Substitua por um vídeo relevante
            propriedadesVideo: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            url:"https://onecompiler.com/",
            linguagem:"typescript",
          }
    },
    components: {
        MenuTS
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
