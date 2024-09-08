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
                            A diretiva <strong>v-text</strong> é uma diretiva do Vue.js que permite atualizar o texto de
                            um elemento HTML de forma reativa. Em vez de usar a interpolação padrão com {{ }} para
                            inserir texto, você pode usar <strong>v-text</strong> para definir o conteúdo de texto de um
                            elemento HTML.
                        </p>

                        <h2><strong>O que é o `v-text`?</strong></h2>
                        <p class="justificar">
                            A diretiva <strong>v-text</strong> substitui o conteúdo de texto de um elemento pelo valor
                            da expressão fornecida. Ela é útil quando você deseja atualizar apenas o texto de um
                            elemento e não o HTML interno.
                        </p>

                        <h2><strong>Exemplo 1: Uso Básico</strong></h2>
                        <p class="justificar">
                            Vamos ver um exemplo básico de como usar <strong>v-text</strong> para definir o texto de um
                            parágrafo:
                        </p>
                        <pre>
                <code>
                  &lt;template&gt;
                    &lt;div&gt;
                      &lt;p v-text="message"&gt;&lt;/p&gt;
                    &lt;/div&gt;
                  &lt;/template&gt;
                  
                  &lt;script&gt;
                  export default {
                    data() {
                      return {
                        message: 'Olá, Vue.js!'
                      }
                    }
                  }
                  &lt;/script&gt;
                </code>
              </pre>

                        <h2><strong>Exemplo 2: Atualização Dinâmica</strong></h2>
                        <p class="justificar">
                            Aqui está um exemplo onde o texto do elemento é atualizado dinamicamente com base em uma
                            variável:
                        </p>
                        <pre>
                <code>
                  &lt;template&gt;
                    &lt;div&gt;
                      &lt;p v-text="dynamicText"&gt;&lt;/p&gt;
                      &lt;button @click="updateText"&gt;Atualizar Texto&lt;/button&gt;
                    &lt;/div&gt;
                  &lt;/template&gt;
                  
                  &lt;script&gt;
                  export default {
                    data() {
                      return {
                        dynamicText: 'Texto inicial'
                      }
                    },
                    methods: {
                      updateText() {
                        this.dynamicText = 'Texto atualizado!';
                      }
                    }
                  }
                  &lt;/script&gt;
                </code>
              </pre>

                        <h2><strong>Diferença entre `v-text` e Interpolação</strong></h2>
                        <p class="justificar">
                            - <strong>v-text:</strong> Atualiza apenas o texto de um elemento, substituindo todo o
                            conteúdo textual.
                            - <strong>Interpolação ({{ }})</strong>: Permite inserir texto dentro de outros conteúdos
                            HTML e é mais flexível para misturar HTML e texto.
                        </p>

                        <h2><strong>Quando Usar `v-text`?</strong></h2>
                        <p class="justificar">
                            A diretiva <strong>v-text</strong> é ideal para:
                        <ul>
                            <li>Definir ou atualizar texto de forma reativa.</li>
                            <li>Evitar injeção de HTML indesejado, pois não interpreta HTML.</li>
                            <li>Simples substituição de conteúdo textual, sem necessidade de manipulação HTML complexa.
                            </li>
                        </ul>
                        </p>

                        <h2><strong>Resumo da Aula</strong></h2>
                        <p class="justificar">
                            - A diretiva <strong>v-text</strong> substitui o conteúdo textual de um elemento pelo valor
                            da expressão fornecida.
                            - É útil para atualizar o texto de um elemento de forma reativa, sem manipulação HTML.
                            - Vimos exemplos de uso básico e dinâmico, além das diferenças entre <strong>v-text</strong>
                            e interpolação.
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
    name: "DirectivesVText",
    data: () => ({
        msg: "Diretiva: v-text",
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
