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
                            A diretiva <strong>v-html</strong> é uma diretiva poderosa do Vue.js que permite renderizar
                            conteúdo HTML dinâmico dentro de um elemento. Isso é útil quando você precisa inserir HTML
                            diretamente a partir de dados, como quando você está gerando conteúdo dinâmico ou
                            renderizando conteúdo proveniente de uma fonte externa.
                        </p>

                        <h2><strong>O que é o `v-html`?</strong></h2>
                        <p class="justificar">
                            A diretiva <strong>v-html</strong> substitui o conteúdo de um elemento pelo HTML fornecido
                            na expressão. Diferentemente de <strong>v-text</strong>, que apenas substitui o texto,
                            <strong>v-html</strong> permite a inclusão de tags HTML e é capaz de interpretar HTML.
                        </p>

                        <h2><strong>Exemplo 1: Uso Básico</strong></h2>
                        <p class="justificar">
                            Vamos ver um exemplo básico de como usar <strong>v-html</strong> para inserir conteúdo HTML
                            dentro de um parágrafo:
                        </p>
                        <pre>
                <code>
                  &lt;template&gt;
                    &lt;div&gt;
                      &lt;p v-html="htmlContent"&gt;&lt;/p&gt;
                    &lt;/div&gt;
                  &lt;/template&gt;
                  
                  &lt;script&gt;
                  export default {
                    data() {
                      return {
                        htmlContent: '&lt;strong&gt;Olá, Vue.js!&lt;/strong&gt;'
                      }
                    }
                  }
                  &lt;/script&gt;
                </code>
              </pre>

                        <h2><strong>Exemplo 2: Renderizando HTML Dinâmico</strong></h2>
                        <p class="justificar">
                            Aqui está um exemplo onde o HTML é gerado dinamicamente a partir de uma variável:
                        </p>
                        <pre>
                <code>
                  &lt;template&gt;
                    &lt;div&gt;
                      &lt;p v-html="dynamicHtml"&gt;&lt;/p&gt;
                      &lt;button @click="changeHtml"&gt;Alterar Conteúdo&lt;/button&gt;
                    &lt;/div&gt;
                  &lt;/template&gt;
                  
                  &lt;script&gt;
                  export default {
                    data() {
                      return {
                        dynamicHtml: '&lt;em&gt;Texto inicial&lt;/em&gt;'
                      }
                    },
                    methods: {
                      changeHtml() {
                        this.dynamicHtml = '&lt;u&gt;Texto alterado!&lt;/u&gt;';
                      }
                    }
                  }
                  &lt;/script&gt;
                </code>
              </pre>

                        <h2><strong>Cuidados ao Usar `v-html`</strong></h2>
                        <p class="justificar">
                            - Segurança: Ao usar <strong>v-html</strong>, é importante garantir que o HTML inserido
                            não contenha scripts maliciosos. Use <strong>v-html</strong> com cuidado e evite injeções de
                            HTML não confiável para prevenir vulnerabilidades de segurança como XSS (Cross-Site
                            Scripting).
                            - Performance: O uso de <strong>v-html</strong> pode afetar a performance em aplicações
                            que renderizam grandes quantidades de HTML dinâmico ou frequentemente alteram o conteúdo.
                        </p>

                        <h2><strong>Resumo da Aula</strong></h2>
                        <p class="justificar">
                            - A diretiva <strong>v-html</strong> substitui o conteúdo de um elemento pelo HTML fornecido
                            na expressão.
                            - Ela permite a inserção de tags HTML e é útil para renderizar conteúdo dinâmico.
                            - Vimos exemplos de uso básico e dinâmico, além de discutirmos cuidados importantes ao
                            utilizar <strong>v-html</strong>.
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
    name: "DirectivesVHtml",
    data: () => ({
        msg: "Diretiva: v-html",
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