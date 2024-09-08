<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuVue />
        </v-navigation-drawer>
        <v-card class="TextMenu">
            <!-- Conteúdo adicional -->
        </v-card>
        <v-main>
            <div>
                <h1>{{ msg }}</h1>
            </div>
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <p class="justificar">
                            Vue.js é uma framework JavaScript progressiva usada para construir interfaces de usuário.
                            Com uma curva de aprendizado suave, o Vue.js é ideal para iniciantes, além de ser altamente
                            adaptável para desenvolvedores experientes que querem criar aplicações complexas.
                        </p>
                        <p class="justificar">
                            Vue.js se destaca por sua simplicidade e flexibilidade. Ele pode ser integrado de forma
                            incremental em qualquer projeto web existente, tornando-o uma escolha popular para
                            desenvolvedores que desejam adicionar interatividade sem reescrever todo o código do
                            front-end.
                        </p>
                        <p class="justificar">
                            Seja para projetos pequenos ou grandes aplicações de página única (SPAs), o Vue.js oferece
                            uma estrutura sólida e ferramentas úteis para facilitar o desenvolvimento.
                        </p>
                    </v-col>
                </v-row>
            </v-container>

            <v-container video>
                <v-responsive :aspect-ratio="16 / 9">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen></iframe>
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
import MenuVue from '~/components/vue/menuVue.vue'

export default {
    name: "oQueEhVueJs",
    data: () => ({
        msg: "O que é Vue.js?",
        video: 'https://www.youtube.com/embed/VIDEO_ID',
        propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        listaReferencias: [
            { id: 1, name: "Vue.js Official Documentation", link: "https://vuejs.org/v2/guide/" },
            { id: 2, name: "w3schools", link: "https://www.w3schools.com/" },
            { id: 3, name: "MDN Web Docs", link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" }
        ],
    }),
    components: {
        MenuVue
    }
}
</script>

<style scoped>
.video {
    max-width: 70%;
    max-height: 70%;
}
</style>
