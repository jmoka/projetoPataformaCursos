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
                            Hoje, vamos explorar uma dessas ferramentas fundamentais: a diretiva
                            <strong>v-bind</strong>.
                        </p>

                        <h2><strong>O que é o `v-bind`?</strong></h2>
                        <p class="justificar">
                            O <strong>v-bind</strong> é uma diretiva usada para vincular atributos do DOM a dados do
                            Vue.js.
                            Isso significa que você pode definir dinamicamente valores para atributos como
                            <code>href</code>,
                            <code>src</code>, <code>class</code>, e <code>style</code> com base nos dados da sua
                            aplicação.
                        </p>

                        <h2><strong>Exemplo 1: Ligando o atributo `href`</strong></h2>
                        <p class="justificar">
                            Aqui está um exemplo simples de como usar o <strong>v-bind</strong> para vincular o atributo
                            <code>href</code> a um link:
                        </p>
                        <pre>
                <code>
                  &lt;template&gt;
                    &lt;div&gt;
                      &lt;a v-bind:href="link" target="_blank"&gt;Visite o Vue.js&lt;/a&gt;
                    &lt;/div&gt;
                  &lt;/template&gt;
                  
                  &lt;script&gt;
                  export default {
                    data() {
                      return {
                        link: 'https://vuejs.org/'
                      }
                    }
                  }
                  &lt;/script&gt;
                </code>
              </pre>

                        <h2><strong>Exemplo 2: Classes Dinâmicas</strong></h2>
                        <p class="justificar">
                            Você também pode usar <strong>v-bind</strong> para definir classes CSS dinamicamente, com
                            base nos
                            dados do componente:
                        </p>
                        <pre>
                <code>
                  &lt;template&gt;
                    &lt;div&gt;
                      &lt;button v-bind:class="{ active: isActive }"&gt;Botão&lt;/button&gt;
                    &lt;/div&gt;
                  &lt;/template&gt;
                  
                  &lt;script&gt;
                  export default {
                    data() {
                      return {
                        isActive: true
                      }
                    }
                  }
                  &lt;/script&gt;
  
                  &lt;style scoped&gt;
                  .active {
                    background-color: green;
                    color: white;
                  }
                  &lt;/style&gt;
                </code>
              </pre>

                        <h2><strong>Exemplo 3: Ligando o `src` de uma Imagem</strong></h2>
                        <p class="justificar">
                            Outro uso comum do <strong>v-bind</strong> é para definir dinamicamente o <code>src</code>
                            de uma imagem:
                        </p>
                        <pre>
                <code>
                  &lt;template&gt;
                    &lt;div&gt;
                      &lt;img v-bind:src="imageSrc" alt="Imagem Vue.js"&gt;
                    &lt;/div&gt;
                  &lt;/template&gt;
                  
                  &lt;script&gt;
                  export default {
                    data() {
                      return {
                        imageSrc: 'https://vuejs.org/images/logo.png'
                      }
                    }
                  }
                  &lt;/script&gt;
                </code>
              </pre>

                        <h2><strong>Sintaxe Curta de `v-bind`</strong></h2>
                        <p class="justificar">
                            Para facilitar a escrita, você pode usar a sintaxe curta de <strong>v-bind</strong>,
                            substituindo
                            <code>v-bind:href</code> por apenas <code>:href</code>:
                        </p>
                        <pre>
                <code>
                  &lt;a :href="link"&gt;Visite o Vue.js&lt;/a&gt;
                  &lt;button :class="{ active: isActive }"&gt;Botão&lt;/button&gt;
                  &lt;img :src="imageSrc" alt="Imagem Vue.js"&gt;
                </code>
              </pre>

                        <h2><strong>Resumo da Aula</strong></h2>
                        <p class="justificar">
                            Nesta aula, aprendemos sobre a diretiva <strong>v-bind</strong> no Vue.js, que é usada para
                            vincular
                            atributos do DOM a dados dinâmicos da aplicação. Vimos como utilizá-la para atributos como
                            <code>href</code>,
                            <code>class</code>, e <code>src</code>, e também conhecemos a sintaxe curta para simplificar
                            nosso código.
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
    name: "Directives",
    data: () => ({
        msg: "Diretivas: v-bind",
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