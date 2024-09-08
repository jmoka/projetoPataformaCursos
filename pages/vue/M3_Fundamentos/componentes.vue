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
                            populares para o desenvolvimento frontend. Hoje, vamos focar em uma dessas características
                            essenciais: Componentes.
                        </p>

                        <h2><strong>O que são Componentes?</strong></h2>
                        <p class="justificar">
                            Imagine que você está construindo uma cidade com blocos de montar. Cada bloco pode ser uma
                            casa, uma árvore ou até um carro. Componentes no Vue.js são como esses blocos de montar.
                            Eles são pedaços de código que podemos usar para criar partes diferentes de um site, como
                            botões, menus ou imagens.
                        </p>

                        <h2><strong>Por que usar Componentes?</strong></h2>
                        <p class="justificar">
                            - Reutilização: Se você criar um componente de botão, pode usá-lo em várias partes do
                            seu site, sem precisar criar um botão novo toda vez.
                            - Organização: Componentes ajudam a deixar o código mais organizado, igual como você
                            organizaria seus blocos de montar.
                            - Facilidade de Manutenção: Se você quiser mudar a cor do botão, pode mudar no
                            componente, e todos os botões no seu site vão mudar juntos.
                        </p>

                        <h2><strong>Exemplo Prático 1: Criando um Componente Simples</strong></h2>
                        <p class="justificar">
                            Vamos começar com um exemplo de um componente bem simples. Ele vai ser um botão que mostra
                            uma mensagem quando clicado.
                        </p>

                        <pre>
                            <code>
                                &lt;template&gt;
                                  &lt;div&gt;
                                    &lt;p&gt;{{ message }}&lt;/p&gt;
                                    &lt;button @click="sayHello"&gt;Clique aqui&lt;/button&gt;
                                  &lt;/div&gt;
                                &lt;/template&gt;
                                
                                &lt;script&gt;
                                export default {
                                  data() {
                                    return {
                                      message: "Olá, Mundo!",
                                    };
                                  },
                                  methods: {
                                    sayHello() {
                                      this.message = "Você clicou no botão!";
                                    },
                                  },
                                };
                                &lt;/script&gt;
                                
                                &lt;style scoped&gt;
                                button {
                                  background-color: #4CAF50;
                                  color: white;
                                  padding: 10px;
                                  border: none;
                                  border-radius: 5px;
                                  cursor: pointer;
                                }
                                &lt;/style&gt;
                            </code>
                        </pre>

                        <h2><strong>Exemplo Prático 2: Componente de Título</strong></h2>
                        <p class="justificar">
                            Agora, vamos criar um componente para um título. Este componente será simples e poderá ser
                            reutilizado em qualquer parte do seu site.
                        </p>

                        <pre>
                            <code>
                                &lt;template&gt;
                                  &lt;h1&gt;{{ titleText }}&lt;/h1&gt;
                                &lt;/template&gt;
                                
                                &lt;script&gt;
                                export default {
                                  props: {
                                    titleText: {
                                      type: String,
                                      default: "Meu Título",
                                    },
                                  },
                                };
                                &lt;/script&gt;
                                
                                &lt;style scoped&gt;
                                h1 {
                                  color: #333;
                                  font-size: 24px;
                                }
                                &lt;/style&gt;
                            </code>
                        </pre>

                        <h2><strong>Resumo da Aula</strong></h2>
                        <p class="justificar">
                            - Componentes** são como blocos de montar, que você pode usar para criar diferentes partes
                            do seu site.
                            - Eles ajudam a organizar o código, reutilizar partes e manter tudo mais fácil de entender.
                            - Vimos como criar componentes simples, como um botão e um título.
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
    name: "Componentes",
    data: () => ({
        msg: "Componentes",
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
