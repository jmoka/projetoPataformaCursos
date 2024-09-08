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
                <h1 v-once>{{ msg }}</h1>
            </div>
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <p class="justificar">
                            No Vue.js, a diretiva <strong>v-once</strong> é uma ferramenta útil que permite renderizar
                            um elemento
                            apenas uma vez, evitando re-renderizações subsequentes. Isso pode ajudar a otimizar o
                            desempenho de
                            sua aplicação em cenários onde certos dados não mudam.
                        </p>

                        <h2><strong>O que é o `v-once`?</strong></h2>
                        <p class="justificar">
                            A diretiva <strong>v-once</strong> instrui o Vue.js a renderizar o elemento e seu conteúdo
                            apenas uma vez.
                            Após a renderização inicial, o Vue.js não atualizará o conteúdo desse elemento, mesmo que os
                            dados
                            reativos mudem.
                        </p>

                        <h2><strong>Exemplo 1: Renderização Simples</strong></h2>
                        <p class="justificar">
                            Aqui está um exemplo simples onde usamos <strong>v-once</strong> para renderizar um
                            parágrafo apenas uma vez:
                        </p>
                        <pre>
                <code>
                  &lt;template&gt;
                    &lt;div&gt;
                      &lt;p v-once&gt;Este texto será renderizado apenas uma vez.&lt;/p&gt;
                      &lt;p&gt;Este texto será re-renderizado a cada alteração de dados.&lt;/p&gt;
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

                        <h2><strong>Exemplo 2: Conteúdo Dinâmico</strong></h2>
                        <p class="justificar">
                            Se você tiver uma parte do conteúdo que não precisa atualizar, como um título estático, pode
                            usar <strong>v-once</strong> para evitar atualizações desnecessárias:
                        </p>
                        <pre>
                <code>
                  &lt;template&gt;
                    &lt;div&gt;
                      &lt;h1 v-once&gt;Título Estático&lt;/h1&gt;
                      &lt;p&gt;{{ dynamicText }}&lt;/p&gt;
                    &lt;/div&gt;
                  &lt;/template&gt;
                  
                  &lt;script&gt;
                  export default {
                    data() {
                      return {
                        dynamicText: 'Texto dinâmico que pode mudar.'
                      }
                    }
                  }
                  &lt;/script&gt;
                </code>
              </pre>

                        <h2><strong>Quando Usar `v-once`?</strong></h2>
                        <p class="justificar">
                            A diretiva <strong>v-once</strong> é ideal para:
                        <ul>
                            <li>Conteúdos que são estáticos e não precisam ser atualizados.</li>
                            <li>Otimização de desempenho em elementos que não mudam, reduzindo o custo de
                                re-renderização.</li>
                            <li>Elementos ou seções que são criados uma vez e não precisam reagir a mudanças de dados.
                            </li>
                        </ul>
                        </p>

                        <h2><strong>Resumo da Aula</strong></h2>
                        <p class="justificar">
                            - A diretiva <strong>v-once</strong> renderiza um elemento e seu conteúdo apenas uma vez.
                            - É útil para otimização de desempenho e para elementos que não precisam ser atualizados
                            dinamicamente.
                            - Vimos exemplos de como usar <strong>v-once</strong> em diferentes cenários, como texto
                            estático e conteúdo dinâmico.
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
    name: "DirectivesVOnce",
    data: () => ({
        msg: "Diretiva: v-once",
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