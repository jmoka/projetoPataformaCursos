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
                            Nesta aula, vamos explorar tudo sobre a instância do Vue.js, desde a sua criação no Vue 2 e
                            Vue 3 até a importação via CDN.
                        </p>

                        <h2><strong>Instância no Vue 2</strong></h2>
                        <p class="justificar">
                            No Vue 2, a instância é criada utilizando o construtor <code>new Vue()</code>. Abaixo está
                            um exemplo básico:
                        </p>

                        <pre>
                            <code>
                                &lt;!-- Exemplo Vue 2 --&gt;
                                &lt;script src="https://cdn.jsdelivr.net/npm/vue@2"&gt;&lt;/script&gt;
                                &lt;div id="app"&gt;{{ mensagem }}&lt;/div&gt;
                                &lt;script&gt;
                                  var app = new Vue({
                                    el: '#app',
                                    data: {
                                      mensagem: 'Olá, Vue 2!'
                                    }
                                  });
                                &lt;/script&gt;
                            </code>
                        </pre>

                        <h2><strong>Instância no Vue 3</strong></h2>
                        <p class="justificar">
                            No Vue 3, a instância é criada com o método <code>createApp()</code>. Veja o exemplo abaixo:
                        </p>

                        <pre>
                            <code>
                                &lt;!-- Exemplo Vue 3 --&gt;
                                &lt;script src="https://unpkg.com/vue@next"&gt;&lt;/script&gt;
                                &lt;div id="app"&gt;{{ mensagem }}&lt;/div&gt;
                                &lt;script&gt;
                                  const { createApp } = Vue;
                                  createApp({
                                    data() {
                                      return {
                                        mensagem: 'Olá, Vue 3!'
                                      };
                                    }
                                  }).mount('#app');
                                &lt;/script&gt;
                            </code>
                        </pre>

                        <h2><strong>Importação via CDN</strong></h2>
                        <p class="justificar">
                            Para importar o Vue.js em seus projetos sem instalação local, você pode utilizar a CDN. Veja
                            abaixo como fazer isso:
                        </p>

                        <h3>Vue 2</h3>
                        <pre>
                            <code>
                                &lt;script src="https://cdn.jsdelivr.net/npm/vue@2"&gt;&lt;/script&gt;
                            </code>
                        </pre>

                        <h3>Vue 3</h3>
                        <pre>
                            <code>
                                &lt;script src="https://unpkg.com/vue@next"&gt;&lt;/script&gt;
                            </code>
                        </pre>

                        <h2><strong>Comparando Vue 2 e Vue 3</strong></h2>
                        <p class="justificar">
                            - Vue 2: Utiliza <code>new Vue()</code> para criar a instância.
                            - Vue 3: Utiliza <code>createApp()</code> e a função <code>mount()</code>.
                            - Reatividade: Melhorias significativas no sistema de reatividade do Vue 3.
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
            <Footer />
        </v-footer>
    </v-app>
</template>

<script>
import MenuVue from '~/components/vue/menuVue.vue'
import Footer from '@/components/footer_page.vue'

export default {
    name: "InstanciaVue",
    data: () => ({
        msg: "Instância do Vue.js",
        video: 'https://www.youtube.com/embed/VIDEO_ID',
        propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
    }),
    components: {
        MenuVue,
        Footer
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
