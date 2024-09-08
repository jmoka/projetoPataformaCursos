<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuLaravel />
        </v-navigation-drawer>
        <v-main>
            <div>
                <h1>{{ msg }}</h1>
            </div>
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <p class="justificar">
                            Laravel foi criado por Taylor Otwell e lançado pela primeira vez em 2011. Sua criação foi
                            motivada pela
                            necessidade de uma alternativa mais avançada e moderna às frameworks existentes na época,
                            como CodeIgniter.
                        </p>

                        <h3><strong>Linha do Tempo</strong></h3>
                        <ul class="justificar">
                            <li><strong>2011:</strong> Lançamento da primeira versão do Laravel.</li>
                            <li><strong>2013:</strong> Introdução do Eloquent ORM e sistema de autenticação integrado.
                            </li>
                            <li><strong>2015:</strong> Lançamento do Laravel 5 com middleware e filas.</li>
                            <li><strong>2020:</strong> Chegada do Laravel 8 com melhorias no roteamento e introdução do
                                Jetstream.</li>
                        </ul>

                        <h3><strong>Filosofia do Laravel</strong></h3>
                        <p class="justificar">
                            A filosofia do Laravel é oferecer uma experiência de desenvolvimento prazerosa,
                            proporcionando um código
                            limpo e conciso, sem sacrificar funcionalidades robustas. Ele busca dar ao desenvolvedor as
                            melhores
                            ferramentas para que o foco esteja na criação de um código de qualidade.
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
import MenuLaravel from '~/components/laravel/menuLaravel.vue'
export default {
    name: "HistoriaFilosofiaLaravel",
    data: () => ({
        msg: "Historia e Filosofia Laravel",
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

.justificar {
    text-align: justify;
}
</style>