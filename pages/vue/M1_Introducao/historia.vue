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
                            Vue.js foi criado por Evan You em 2014. A motivação principal por trás do Vue.js foi a de
                            criar uma framework que combinasse as melhores partes de outras grandes ferramentas, como o
                            Angular e o React, sem as partes que as tornavam complexas de aprender e usar.
                        </p>
                        <p class="justificar">
                            A filosofia do Vue.js se baseia em ser progressivo, o que significa que você pode começar a
                            usar o Vue.js gradualmente, adicionando funcionalidades conforme necessário. Você não
                            precisa aprender toda a framework de uma vez; em vez disso, pode começar pequeno e expandir
                            conforme sua aplicação cresce.
                        </p>
                        <p class="justificar">
                            Outro princípio chave do Vue.js é sua simplicidade. Ele foi desenhado para ser fácil de
                            entender e implementar, o que o torna acessível a desenvolvedores de todos os níveis de
                            experiência. Além disso, o Vue.js promove boas práticas de desenvolvimento, ajudando a
                            manter o código limpo e modular.
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
    name: "historiaFilosofiaVueJs",
    data: () => ({
        msg: "História e Filosofia do Vue.js",
        video: 'https://www.youtube.com/embed/VIDEO_ID',
        propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        listaReferencias: [
            { id: 1, name: "Vue.js Official Documentation", link: "https://vuejs.org/v2/guide/" },
            { id: 2, name: "Vue.js Story - Medium", link: "https://medium.com/vuejs" },
            { id: 3, name: "Evan You - Creator of Vue.js", link: "https://evanyou.me/" }
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
