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
                            Vue.js é conhecido por uma série de características que o tornam uma das frameworks mais
                            populares para o desenvolvimento frontend. Vamos explorar algumas das principais.
                        </p>

                        <h2><strong>Reatividade</strong></h2>
                        <p class="justificar">
                            O Vue.js possui um sistema reativo, o que significa que quando os dados da aplicação mudam,
                            a interface do usuário é automaticamente atualizada. Isso facilita a criação de UIs
                            dinâmicas e interativas sem a necessidade de manipulação direta do DOM.
                        </p>

                        <h2><strong>Componentes</strong></h2>
                        <p class="justificar">
                            O sistema de componentes do Vue.js permite que você divida a interface do usuário em partes
                            menores, reutilizáveis e modulares. Cada componente pode ter sua própria lógica, estilos e
                            templates, o que promove uma melhor organização do código.
                        </p>

                        <h2><strong>Flexibilidade</strong></h2>
                        <p class="justificar">
                            Vue.js é extremamente flexível. Ele pode ser usado tanto para pequenas interações em páginas
                            web existentes quanto para construir aplicações de página única (SPAs) completas. Além
                            disso, Vue se integra bem com outras bibliotecas ou projetos existentes, tornando-o uma
                            escolha versátil.
                        </p>

                        <h2><strong>Comunidade Ativa</strong></h2>
                        <p class="justificar">
                            O Vue.js conta com uma comunidade ativa e crescente que contribui para o desenvolvimento de
                            pacotes, extensões e melhorias para a framework. Isso garante que o Vue.js continue
                            evoluindo e atendendo às necessidades dos desenvolvedores.
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
    name: "caracteristicasPrincipaisVueJs",
    data: () => ({
        msg: "Características Principais do Vue.js",
        video: 'https://www.youtube.com/embed/VIDEO_ID',
        propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        listaReferencias: [
            { id: 1, name: "Vue.js Official Documentation", link: "https://vuejs.org/v2/guide/" },
            { id: 2, name: "Vue.js Features", link: "https://vuejs.org/features" },
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
