<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuLaravel />
        </v-navigation-drawer>
        <v-card class="TextMenu">

        </v-card>
        <v-main>
            <div>
                <h1>{{ msg }}</h1>
            </div>
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <p class="justificar">
                            Bem-vindo à introdução ao Laravel! Hoje vamos explorar o que é o Laravel e por que ele se
                            tornou uma das
                            frameworks mais populares para o desenvolvimento de aplicações web com PHP.
                        </p>

                        <h2><strong>Conheça o Laravel</strong></h2>
                        <p class="justificar">
                            Laravel é uma framework PHP de código aberto, desenhada para simplificar o desenvolvimento
                            de aplicações
                            web robustas, escaláveis e seguras. Ela utiliza o padrão MVC (Model-View-Controller), que
                            facilita a
                            organização do código e a manutenção da aplicação.
                        </p>

                        <h3><strong>Principais Características</strong></h3>
                        <ul class="justificar">
                            <li>
                                <strong>Simplicidade e Elegância:</strong> Laravel foi criado para ser simples de usar,
                                focando na
                                legibilidade e na elegância do código.
                            </li>
                            <li>
                                <strong>Poderosas Ferramentas:</strong> Inclui ferramentas poderosas como Eloquent ORM,
                                sistema de
                                autenticação e autorização, Blade templates, roteamento simples, entre outros.
                            </li>
                            <li>
                                <strong>Grande Comunidade:</strong> Conta com uma comunidade ativa que constantemente
                                desenvolve pacotes
                                e melhorias.
                            </li>
                        </ul>
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
import MenuLaravel from '~/components/laravel/menuLaravel.vue'
export default {
    name: "introducaoLaravel",
    data: () => ({
        msg: "O que é Laravel?",
        video: 'https://www.youtube.com/embed/VIDEO_ID',
        propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        listaReferencias: [
            { id: 1, name: "w3schools", link: "https://www.w3schools.com/" },
            { id: 2, name: "MDN Web Docs", link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" },
            { id: 3, name: "ChatGPT", link: "https://chatgpt.com/" }
        ],
    }),
    components: {
        MenuLaravel
    }
}
</script>

<style scoped>
.video {
    max-width: 70%;
    max-height: 70%;
}
</style>