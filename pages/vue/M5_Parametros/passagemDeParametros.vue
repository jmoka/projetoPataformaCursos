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
                            Em Vue.js, você pode passar parâmetros para métodos diretamente a partir de eventos de
                            interação do usuário. Além disso, você pode acessar o objeto `$event` para obter detalhes
                            sobre o evento que ocorreu. Nesta aula, vamos explorar como passar parâmetros e como usar
                            `$event` para manipulação de eventos.
                        </p>

                        <h3>Passagem de Parâmetros para Métodos</h3>
                        <p class="justificar">
                            Você pode passar parâmetros para métodos definidos em seus componentes Vue.js diretamente
                            a partir dos eventos do template. Aqui está um exemplo básico:
                        </p>
                        <pre>
<code>
&lt;template&gt;
  &lt;div&gt;
    &lt;button @click="handleClick('Olá, Mundo!')"&gt;Clique Aqui&lt;/button&gt;
    &lt;p&gt;Mensagem: {{ message }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      message: ''
    };
  },
  methods: {
    handleClick(param) {
      this.message = param;
    }
  }
};
&lt;/script&gt;
</code>
                        </pre>

                        <h3>Usando o Objeto `$event`</h3>
                        <p class="justificar">
                            O objeto `$event` é passado automaticamente para o método como o primeiro argumento quando
                            um evento ocorre. Você pode usar `$event` para obter informações detalhadas sobre o evento.
                            Veja um exemplo de como usar `$event` para acessar informações sobre um clique:
                        </p>
                        <pre>
<code>
&lt;template&gt;
  &lt;div&gt;
    &lt;button @click="handleClick($event)"&gt;Clique Aqui&lt;/button&gt;
    &lt;p&gt;Coordenadas do clique: X: {{ xCoordinate }}, Y: {{ yCoordinate }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      xCoordinate: 0,
      yCoordinate: 0
    };
  },
  methods: {
    handleClick(event) {
      this.xCoordinate = event.clientX;
      this.yCoordinate = event.clientY;
    }
  }
};
&lt;/script&gt;
</code>
                        </pre>

                        <h3>Combinar Parâmetros com `$event`</h3>
                        <p class="justificar">
                            Você pode combinar parâmetros adicionais com o objeto `$event` ao passar múltiplos valores
                            para o método. Aqui está um exemplo:
                        </p>
                        <pre>
<code>
&lt;template&gt;
  &lt;div&gt;
    &lt;button @click="handleClick('Olá!', $event)"&gt;Clique Aqui&lt;/button&gt;
    &lt;p&gt;Mensagem: {{ message }}, Coordenadas do clique: X: {{ xCoordinate }}, Y: {{ yCoordinate }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      message: '',
      xCoordinate: 0,
      yCoordinate: 0
    };
  },
  methods: {
    handleClick(message, event) {
      this.message = message;
      this.xCoordinate = event.clientX;
      this.yCoordinate = event.clientY;
    }
  }
};
&lt;/script&gt;
</code>
                        </pre>

                        <h3>Resumo da Aula</h3>
                        <p class="justificar">
                            - Você pode passar parâmetros diretamente para métodos a partir de eventos no Vue.js.
                            - O objeto `$event` é passado automaticamente para o método e contém detalhes sobre o
                            evento.
                            - É possível combinar parâmetros adicionais com `$event` para obter informações mais
                            detalhadas.
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
    name: "ParameterEvents",
    data: () => ({
        msg: "Passagem de Parâmetros e $event",
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
