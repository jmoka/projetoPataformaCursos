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
                            A diretiva <strong>v-show</strong> é usada para controlar a visibilidade de um elemento no
                            Vue.js. Ao contrário da diretiva <strong>v-if</strong>, que adiciona ou remove elementos do
                            DOM, <strong>v-show</strong> apenas altera a propriedade de estilo `display` do elemento.
                        </p>

                        <h2><strong>O que é o `v-show`?</strong></h2>
                        <p class="justificar">
                            A diretiva <strong>v-show</strong> permite exibir ou ocultar um elemento com base em uma
                            condição. Quando a condição é falsa, o elemento é ocultado usando a propriedade CSS
                            `display: none;`. Quando a condição é verdadeira, o elemento é exibido normalmente.
                        </p>

                        <h2><strong>Diferença entre `v-show` e `v-if`</strong></h2>
                        <p class="justificar">
                            - `v-show`: Apenas oculta ou exibe o elemento com base na propriedade CSS `display`. O
                            elemento sempre está presente no DOM, mesmo quando oculto.
                            - **`v-if`**: Adiciona ou remove o elemento do DOM com base na condição. O elemento não está
                            presente no DOM quando a condição é falsa, o que pode ser mais eficiente para renderizações
                            condicionais complexas.
                        </p>

                        <h2><strong>Exemplo 1: Uso Básico do `v-show`</strong></h2>
                        <p class="justificar">
                            Vamos ver um exemplo básico de como usar <strong>v-show</strong> para exibir ou ocultar um
                            parágrafo:
                        </p>
                        <pre>
                <code>
                  &lt;template&gt;
                    &lt;div&gt;
                      &lt;button @click="toggle"&gt;Mostrar/Ocultar&lt;/button&gt;
                      &lt;p v-show="isVisible"&gt;Eu sou visível quando &lt;code&gt;isVisible&lt;/code&gt; é verdadeiro!&lt;/p&gt;
                    &lt;/div&gt;
                  &lt;/template&gt;
                  
                  &lt;script&gt;
                  export default {
                    data() {
                      return {
                        isVisible: true
                      }
                    },
                    methods: {
                      toggle() {
                        this.isVisible = !this.isVisible;
                      }
                    }
                  }
                  &lt;/script&gt;
                </code>
              </pre>

                        <h2><strong>Exemplo 2: Condicional com `v-show`</strong></h2>
                        <p class="justificar">
                            Neste exemplo, utilizamos <strong>v-show</strong> para mostrar uma mensagem condicionalmente
                            com base na escolha do usuário:
                        </p>
                        <pre>
                <code>
                  &lt;template&gt;
                    &lt;div&gt;
                      &lt;select v-model="selectedOption"&gt;
                        &lt;option value="show"&gt;Mostrar Mensagem&lt;/option&gt;
                        &lt;option value="hide"&gt;Ocultar Mensagem&lt;/option&gt;
                      &lt;/select&gt;
                      &lt;p v-show="selectedOption === 'show'"&gt;Esta mensagem é exibida quando a opção selecionada é "Mostrar Mensagem".&lt;/p&gt;
                    &lt;/div&gt;
                  &lt;/template&gt;
                  
                  &lt;script&gt;
                  export default {
                    data() {
                      return {
                        selectedOption: 'hide'
                      }
                    }
                  }
                  &lt;/script&gt;
                </code>
              </pre>

                        <h2><strong>Cuidados ao Usar `v-show`</strong></h2>
                        <p class="justificar">
                            -Performance: Embora <strong>v-show</strong> seja mais eficiente do que
                            <strong>v-if</strong> para exibir/ocultar elementos frequentemente, o elemento ainda está
                            presente no DOM e pode afetar a performance em casos de muitos elementos ou elementos
                            complexos.
                            - Estilos: Certifique-se de que a visibilidade do elemento é corretamente gerenciada
                            através do CSS. Como o elemento está sempre presente no DOM, é importante garantir que ele
                            não afete o layout ou a experiência do usuário quando oculto.
                        </p>

                        <h2><strong>Resumo da Aula</strong></h2>
                        <p class="justificar">
                            - A diretiva <strong>v-show</strong> controla a visibilidade de um elemento, ocultando-o ou
                            exibindo-o com base na condição fornecida.
                            - Ao contrário de <strong>v-if</strong>, <strong>v-show</strong> apenas altera o estilo
                            `display` do elemento, mantendo-o no DOM.
                            - Vimos exemplos básicos de uso e discutimos cuidados importantes ao usar
                            <strong>v-show</strong>.
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
    name: "DirectivesVShow",
    data: () => ({
        msg: "Diretiva: v-show",
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