<template>
    <v-app>
        <!-- Menu de navegação lateral -->
        <v-navigation-drawer app>
            <MenuVue />
        </v-navigation-drawer>

        <!-- Card com conteúdo adicional -->
        <v-card class="TextMenu">
            <!-- Conteúdo adicional -->
        </v-card>

        <!-- Conteúdo principal -->
        <v-main>
            <div>
                <h1>{{ msg }}</h1>
            </div>

            <!-- Container principal -->
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <!-- Introdução -->
                        <p class="justificar">
                            Modificadores em Vue.js são sufixos especiais que você pode adicionar a diretivas para
                            alterar seu comportamento. Eles são extremamente úteis para controlar eventos e interações
                            com o DOM de maneira mais precisa e eficiente.
                        </p>

                        <!-- Modificadores para Eventos -->
                        <h3>Modificadores para Eventos</h3>
                        <p class="justificar">
                            Modificadores podem ser usados para modificar o comportamento dos eventos. Aqui estão alguns
                            dos mais comuns:
                        </p>
                        <ul>
                            <li><strong>.prevent</strong>: Impede o comportamento padrão do evento.</li>
                            <li><strong>.stop</strong>: Para a propagação do evento para elementos pai.</li>
                            <li><strong>.capture</strong>: Registra o evento na fase de captura.</li>
                            <li><strong>.once</strong>: Escuta o evento apenas uma vez.</li>
                        </ul>

                        <p class="justificar">
                            Veja o exemplo abaixo, onde usamos alguns desses modificadores para controlar o
                            comportamento de cliques e submits:
                        </p>
                        <pre v-pre>
  <code>
  &lt;template&gt;
    &lt;div&gt;
      &lt;button @click.prevent="handleClick"&gt;Clique aqui&lt;/button&gt;
      &lt;form @submit.stop.prevent="handleSubmit"&gt;
        &lt;input type="text" v-model="inputValue" /&gt;
        &lt;button type="submit"&gt;Enviar&lt;/button&gt;
      &lt;/form&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  
  &lt;script&gt;
  export default {
    data() {
      return {
        inputValue: ''
      };
    },
    methods: {
      handleClick() {
        alert('Botão clicado!');
      },
      handleSubmit() {
        alert('Formulário enviado com valor: ' + this.inputValue);
      }
    }
  };
  &lt;/script&gt;
  </code>
              </pre>

                        <!-- Modificadores para Diretivas -->
                        <h3>Modificadores para Diretivas</h3>
                        <p class="justificar">
                            Além dos eventos, os modificadores também podem ser aplicados às diretivas, como `v-model` e
                            `v-bind`. Aqui estão alguns exemplos de como utilizar esses modificadores com `v-model`:
                        </p>
                        <ul>
                            <li><strong>.lazy</strong>: Atualiza o valor do `v-model` apenas quando o campo perde o
                                foco.</li>
                            <li><strong>.number</strong>: Converte o valor do input para um número.</li>
                            <li><strong>.trim</strong>: Remove espaços em branco do início e do fim do valor.</li>
                        </ul>

                        <p class="justificar">
                            Aqui estão exemplos de cada um desses modificadores aplicados a diferentes campos de
                            entrada:
                        </p>
                        <pre v-pre>
  <code>
  &lt;template&gt;
    &lt;div&gt;
      &lt;input v-model.lazy="message" placeholder="Digite algo (atualiza ao perder o foco)" /&gt;
      &lt;input v-model.number="number" type="number" placeholder="Digite um número" /&gt;
      &lt;input v-model.trim="trimmedMessage" placeholder="Digite algo (espacos removidos)" /&gt;
      &lt;p&gt;Mensagem: {{ message }}&lt;/p&gt;
      &lt;p&gt;Número: {{ number }}&lt;/p&gt;
      &lt;p&gt;Mensagem com espaços removidos: {{ trimmedMessage }}&lt;/p&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  
  &lt;script&gt;
  export default {
    data() {
      return {
        message: '',
        number: 0,
        trimmedMessage: ''
      };
    }
  };
  &lt;/script&gt;
  </code>
              </pre>

                        <!-- Resumo da Aula -->
                        <h3>Resumo da Aula</h3>
                        <p class="justificar">
                            Nesta aula, você aprendeu sobre modificadores em Vue.js, que permitem ajustar o
                            comportamento de eventos e diretivas. Usando modificadores como `.prevent`, `.stop`,
                            `.lazy`, `.number` e `.trim`, você pode controlar como os eventos são tratados e como os
                            dados são manipulados de maneira mais eficiente.
                        </p>
                    </v-col>
                </v-row>
            </v-container>

            <!-- Vídeo explicativo -->
            <v-container video>
                <v-responsive :aspect-ratio="16 / 9">
                    <iframe :src="video" :allow="propriedadesVideo" allowfullscreen></iframe>
                </v-responsive>
            </v-container>
        </v-main>

        <!-- Rodapé -->
        <v-footer>
            <Footer />
        </v-footer>
    </v-app>
</template>

<script>
import MenuVue from '~/components/vue/menuVue.vue'
import Footer from '@/components/footer_page.vue'

export default {
    name: "ModificadoresVue",
    data() {
        return {
            msg: "Aula: Modificadores em Vue.js",
            message: "",
            number: 0,
            trimmedMessage: "",
            inputValue: "",
            video: 'https://www.youtube.com/embed/VIDEO_ID', // Substitua VIDEO_ID pela ID real do vídeo
            propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        };
    },
    components: {
        MenuVue,
        Footer
    },
    methods: {
        handleClick() {
            alert('Botão clicado!');
        },
        handleSubmit() {
            alert('Formulário enviado com valor: ' + this.inputValue);
        }
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