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
                            As diretivas <strong>v-if</strong>, <strong>v-else-if</strong> e <strong>v-else</strong>
                            são usadas para controle condicional na renderização de elementos no Vue.js. Elas permitem
                            que você exiba diferentes partes da interface com base em condições específicas.
                        </p>

                        <h3>Diretiva `v-if`</h3>
                        <p class="justificar">
                            A diretiva <strong>v-if</strong> é usada para renderizar um elemento somente se a condição
                            especificada for verdadeira.
                        </p>
                        <pre>
                            <code>
&lt;template&gt;
  &lt;div&gt;
    &lt;p v-if="isVisible"&gt;Este texto será exibido apenas se isVisible for verdadeiro.&lt;/p&gt;
    &lt;button @click="toggleVisibility"&gt;Alternar Visibilidade&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      isVisible: true
    };
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    }
  }
};
&lt;/script&gt;
                            </code>
                        </pre>

                        <h3>Diretiva `v-else-if`</h3>
                        <p class="justificar">
                            A diretiva <strong>v-else-if</strong> é usada para criar uma cadeia de condições, permitindo
                            que você defina várias condições que serão verificadas em sequência.
                        </p>
                        <pre>
                            <code>
&lt;template&gt;
  &lt;div&gt;
    &lt;p v-if="status === 'loading'"&gt;Carregando...&lt;/p&gt;
    &lt;p v-else-if="status === 'success'"&gt;Dados carregados com sucesso!&lt;/p&gt;
    &lt;p v-else-if="status === 'error'"&gt;Ocorreu um erro ao carregar os dados.&lt;/p&gt;
    &lt;p v-else&gt;Estado desconhecido.&lt;/p&gt;
    &lt;button @click="setStatus('loading')"&gt;Carregar Dados&lt;/button&gt;
    &lt;button @click="setStatus('success')"&gt;Dados OK&lt;/button&gt;
    &lt;button @click="setStatus('error')"&gt;Erro&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      status: ''
    };
  },
  methods: {
    setStatus(newStatus) {
      this.status = newStatus;
    }
  }
};
&lt;/script&gt;
                            </code>
                        </pre>

                        <h3>Diretiva `v-else`</h3>
                        <p class="justificar">
                            A diretiva <strong>v-else</strong> deve sempre ser usada após um <strong>v-if</strong> ou
                            <strong>v-else-if</strong>. Ela renderiza o conteúdo quando todas as condições anteriores
                            não
                            são satisfeitas.
                        </p>
                        <pre>
                            <code>
&lt;template&gt;
  &lt;div&gt;
    &lt;p v-if="isLoggedIn"&gt;Bem-vindo, usuário!&lt;/p&gt;
    &lt;p v-else&gt;Por favor, faça login.&lt;/p&gt;
    &lt;button @click="toggleLogin"&gt;Alternar Login&lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      isLoggedIn: false
    };
  },
  methods: {
    toggleLogin() {
      this.isLoggedIn = !this.isLoggedIn;
    }
  }
};
&lt;/script&gt;
                            </code>
                        </pre>

                        <h3>Resumo da Aula</h3>
                        <p class="justificar">
                            - As diretivas <strong>v-if</strong>, <strong>v-else-if</strong> e <strong>v-else</strong>
                            são usadas para controle condicional na renderização de elementos no Vue.js.
                            - <strong>v-if</strong> renderiza o elemento somente se a condição for verdadeira.
                            - <strong>v-else-if</strong> permite encadear várias condições para verificação.
                            - <strong>v-else</strong> renderiza o conteúdo quando todas as condições anteriores falham.
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
    name: "DirectivesVIf",
    data: () => ({
        msg: "Diretivas: v-if, v-else-if e v-else",
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
x'