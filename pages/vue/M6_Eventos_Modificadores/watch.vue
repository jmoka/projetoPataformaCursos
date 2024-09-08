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
                            No Vue.js, os watchers são uma maneira de observar e reagir a mudanças em dados reativos.
                            Eles são úteis quando você precisa executar alguma ação em resposta a mudanças em
                            variáveis específicas.
                        </p>

                        <!-- Exemplo Básico de Watcher -->
                        <h3>Exemplo Básico: Contador</h3>
                        <p class="justificar">
                            Aqui está um exemplo simples de como usar um watcher para monitorar mudanças em uma
                            variável:
                        </p>

                        <pre v-pre>
                <code>
                  &lt;!DOCTYPE html&gt;
  &lt;html lang="pt-br"&gt;
  
  &lt;head&gt;
      &lt;meta charset="UTF-8"&gt;
      &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
      &lt;script src="https://cdn.jsdelivr.net/npm/vue@3.2.47/dist/vue.global.js"&gt;&lt;/script&gt;
      &lt;link href="https://cdn.jsdelivr.net/npm/vuetify@3.1.3/dist/vuetify.min.css" rel="stylesheet"&gt;
      &lt;script src="https://cdn.jsdelivr.net/npm/vuetify@3.1.3/dist/vuetify.js"&gt;&lt;/script&gt;
  &lt;/head&gt;
  
  &lt;body&gt;
      &lt;div id="app"&gt;
          &lt;button @click="contar++"&gt;Incrementar&lt;/button&gt;
          &lt;button @click="contar--"&gt;Decrementar&lt;/button&gt;
  
          &lt;br&gt;
          &lt;div&gt;Contador: {{ contar }}&lt;/div&gt;
      &lt;/div&gt;
  
      &lt;script&gt;
          const { createApp } = Vue;
          const vuetify = Vuetify.createVuetify();
  
          createApp({
              data() {
                  return {
                      contar: 0
                  };
              },
              watch: {
                  contar(newValue, oldValue) {
                      console.log(`O valor do contador mudou de ${oldValue} para ${newValue}`);
                  }
              }
          }).use(vuetify).mount('#app');
      &lt;/script&gt;
  &lt;/body&gt;
                </code>
              </pre>

                        <!-- Exemplo Avançado com Objeto -->
                        <h3>Exemplo Avançado: Monitorando um Objeto</h3>
                        <p class="justificar">
                            Neste exemplo, utilizamos um watcher para observar mudanças em um objeto:
                        </p>

                        <pre v-pre>
                <code>
    &lt;template&gt;
      &lt;div&gt;
        &lt;input v-model="pessoa.nome" placeholder="Digite o nome"&gt;
        &lt;p&gt;Nome: {{ pessoa.nome }}&lt;/p&gt;
      &lt;/div&gt;
    &lt;/template&gt;
  
    &lt;script&gt;
    export default {
      data() {
        return {
          pessoa: {
            nome: 'Maria'
          }
        };
      },
      watch: {
        'pessoa.nome'(novoValor, valorAntigo) {
          console.log(`O nome mudou de ${valorAntigo} para ${novoValor}`);
        }
      }
    };
    &lt;/script&gt;
                </code>
              </pre>

                        <!-- Exemplo com Array -->
                        <h3>Exemplo com Array</h3>
                        <p class="justificar">
                            Aqui está um exemplo de como observar mudanças em um array:
                        </p>

                        <pre v-pre>
                <code>
                    &lt;!DOCTYPE html&gt;
&lt;html lang="pt-br"&gt;

&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
    &lt;title&gt;Lista de Tarefas com Watch&lt;/title&gt;
    &lt;script src=&quot;https://cdn.jsdelivr.net/npm/vue@3.2.47/dist/vue.global.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;div id=&quot;app&quot;&gt;
        &lt;!-- Input para adicionar tarefa --&gt;
        &lt;input v-model=&quot;novaTarefa&quot; placeholder=&quot;Digite uma nova tarefa&quot;&gt;
        &lt;button @click=&quot;adicionarTarefa&quot;&gt;Adicionar Tarefa&lt;/button&gt;

        &lt;!-- Lista de tarefas --&gt;
        &lt;ul&gt;
            &lt;li v-for=&quot;tarefa in tarefas&quot; :key=&quot;tarefa&quot;&gt;{{ tarefa }}&lt;/li&gt;
        &lt;/ul&gt;

        &lt;!-- Exibe o número total de tarefas --&gt;
        &lt;p&gt;Total de tarefas: {{ totalTarefas }}&lt;/p&gt;
    &lt;/div&gt;

    &lt;script&gt;
        const { createApp } = Vue;

        createApp({
            data() {
                return {
                    tarefas: [&#39;Estudar&#39;, &#39;Ler um livro&#39;],
                    novaTarefa: &#39;&#39;
                };
            },
            computed: {
                totalTarefas() {
                    return this.tarefas.length;
                }
            },
            watch: {
                tarefas: {
                    handler(novoArray, arrayAntigo) {
                        console.log(&#39;Lista de tarefas mudou:&#39;, novoArray);
                    },
                    deep: true
                }
            },
            methods: {
                adicionarTarefa() {
                    if (this.novaTarefa.trim() !== &#39;&#39;) {
                        this.tarefas.push(this.novaTarefa);
                        this.novaTarefa = &#39;&#39;;
                    }
                }
            }
        }).mount(&#39;#app&#39;);
    &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;

                </code>
              </pre>

                        <!-- Resumo da Aula -->
                        <h3>Resumo da Aula</h3>
                        <p class="justificar">
                            - **Watchers** são usados para observar e reagir a mudanças em dados reativos.
                            - Você pode definir watchers para propriedades específicas ou para objetos e arrays.
                            - Eles são úteis quando você precisa executar lógica adicional em resposta a mudanças em
                            dados.
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
    name: "Watchers",
    data() {
        return {
            msg: "Watchers em Vue.js",
            video: 'https://www.youtube.com/embed/VIDEO_ID', // Substitua VIDEO_ID pela ID real do vídeo
            propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
            novaTarefa: '',
            tarefas: ['Estudar', 'Ler um livro'],
            pessoa: {
                nome: 'Maria'
            },
            contar: 0
        };
    },
    watch: {
        contar(newValue, oldValue) {
            console.log(`O valor do contador mudou de ${oldValue} para ${newValue}`);
        },
        'pessoa.nome'(novoValor, valorAntigo) {
            console.log(`O nome mudou de ${valorAntigo} para ${novoValor}`);
        },
        tarefas(novoArray, arrayAntigo) {
            console.log(`Tarefas mudaram: ${arrayAntigo} para ${novoArray}`);
        }
    },
    methods: {
        adicionarTarefa() {
            if (this.novaTarefa.trim() !== '') {
                this.tarefas.push(this.novaTarefa);
                this.novaTarefa = '';
            }
        }
    },
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

button {
    border: 2px black solid;
    color: white;
    background-color: dimgray;
    margin: 5px;
    padding: 5px;
}
</style>