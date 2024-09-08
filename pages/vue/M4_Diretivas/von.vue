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
                            A diretiva <strong>v-on</strong> é usada para ouvir e responder a eventos no Vue.js. Ela é
                            uma maneira poderosa de adicionar interatividade às suas aplicações, permitindo que você
                            execute funções em resposta a eventos do usuário, como cliques, digitação, e muito mais.
                        </p>

                        <h3>O que é o `v-on`?</h3>
                        <p class="justificar">
                            A diretiva <strong>v-on</strong> é utilizada para escutar eventos no Vue.js e executar
                            métodos quando esses eventos ocorrem. Pode ser aplicada a qualquer elemento HTML e é usada
                            frequentemente para adicionar interatividade aos componentes.
                        </p>

                        <h3>Exemplo Básico de `v-on`</h3>
                        <p class="justificar">
                            Vamos ver um exemplo simples onde usamos <strong>v-on</strong> para responder a um clique em
                            um botão:
                        </p>
                        <pre>
                <code>
                  &lt;template&gt;
                    &lt;div&gt;
                      &lt;button v-on:click="handleClick"&gt;Clique em Mim&lt;/button&gt;
                      &lt;p v-text="message"&gt;&lt;/p&gt;
                    &lt;/div&gt;
                  &lt;/template&gt;
                  
                  &lt;script&gt;
                  export default {
                    data() {
                      return {
                        message: "Olá, Mundo!"
                      }
                    },
                    methods: {
                      handleClick() {
                        this.message = "Você clicou no botão!";
                      }
                    }
                  }
                  &lt;/script&gt;
                </code>
              </pre>

                        <h3>Atalhos de `v-on`</h3>
                        <p class="justificar">
                            Em vez de usar a forma completa <strong>v-on:event="handler"</strong>, você pode usar a
                            forma abreviada com o caractere de `@`. Aqui está o mesmo exemplo usando o atalho:
                        </p>
                        <pre>
                <code>
                  &lt;template&gt;
                    &lt;div&gt;
                      &lt;button @click="handleClick"&gt;Clique em Mim&lt;/button&gt;
                      &lt;p v-text="message"&gt;&lt;/p&gt;
                    &lt;/div&gt;
                  &lt;/template&gt;
                  
                  &lt;script&gt;
                  export default {
                    data() {
                      return {
                        message: "Olá, Mundo!"
                      }
                    },
                    methods: {
                      handleClick() {
                        this.message = "Você clicou no botão!";
                      }
                    }
                  }
                  &lt;/script&gt;
                </code>
              </pre>

                        <h3>Exemplo Avançado: `v-on` com Eventos de Teclado</h3>
                        <p class="justificar">
                            A diretiva <strong>v-on</strong> também pode ser usada para lidar com eventos de teclado.
                            Por exemplo, você pode responder a eventos de digitação como <code>keyup</code> e
                            <code>keydown</code>.
                        </p>
                        <pre>
                <code>
                  &lt;template&gt;
                    &lt;div&gt;
                      &lt;input v-on:keyup.enter="handleEnter" placeholder="Pressione Enter"&gt;
                      &lt;p v-text="message"&gt;&lt;/p&gt;
                    &lt;/div&gt;
                  &lt;/template&gt;
                  
                  &lt;script&gt;
                  export default {
                    data() {
                      return {
                        message: ""
                      }
                    },
                    methods: {
                      handleEnter(event) {
                        this.message = "Você pressionou Enter!";
                      }
                    }
                  }
                  &lt;/script&gt;
                </code>
              </pre>

                        <h3>Resumo da Aula</h3>
                        <p class="justificar">
                            - A diretiva <strong>v-on</strong> é usada para adicionar manipuladores de eventos aos
                            elementos HTML.
                            - Pode ser usada para responder a uma variedade de eventos, incluindo cliques, eventos de
                            teclado e muito mais.
                            - Vimos exemplos básicos e avançados de como utilizar <strong>v-on</strong> para adicionar
                            interatividade à sua aplicação Vue.js.
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
    name: "DirectivesVOn",
    data: () => ({
        msg: "Diretiva: v-on",
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