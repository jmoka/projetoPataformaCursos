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
                            A diretiva <strong>v-for</strong> é usada para renderizar uma lista de elementos com base em
                            uma coleção de dados no Vue.js. Ela é uma ferramenta poderosa para gerar elementos dinâmicos
                            com base em arrays ou objetos.
                        </p>

                        <h3>O que é o `v-for`?</h3>
                        <p class="justificar">
                            A diretiva <strong>v-for</strong> permite iterar sobre arrays e objetos e criar elementos
                            para cada item na coleção. Você pode usá-la para criar listas, tabelas e outros elementos
                            repetitivos.
                        </p>

                        <h3>Exemplo Básico de `v-for`</h3>
                        <p class="justificar">
                            Vamos ver um exemplo simples onde usamos <strong>v-for</strong> para renderizar uma lista de
                            itens:
                        </p>
                        <pre v-pre>
  <code>
  &lt;template&gt;
    &lt;div&gt;
      &lt;ul&gt;
        &lt;li v-for="item in items" :key="item.id"&gt;{{ item.name }}&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  
  &lt;script&gt;
  export default {
    data() {
      return {
        items: [
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
          { id: 3, name: 'Item 3' }
        ]
      };
    }
  };
  &lt;/script&gt;
  </code>
              </pre>

                        <h3>Iterando sobre Objetos</h3>
                        <p class="justificar">
                            Você também pode usar <strong>v-for</strong> para iterar sobre as propriedades de um objeto.
                            Aqui está um exemplo de como exibir as chaves e valores de um objeto:
                        </p>
                        <pre v-pre>
  <code>
  &lt;template&gt;
    &lt;div&gt;
      &lt;ul&gt;
        &lt;li v-for="(value, key) in myObject" :key="key"&gt;{{ key }}: {{ value }}&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  
  &lt;script&gt;
  export default {
    data() {
      return {
        myObject: {
          name: 'Vue.js',
          version: '3.x',
          framework: 'JavaScript'
        }
      };
    }
  };
  &lt;/script&gt;
  </code>
              </pre>

                        <h3>Usando `v-for` com Index</h3>
                        <p class="justificar">
                            Às vezes, você pode precisar do índice do item na iteração. Isso pode ser obtido e utilizado
                            dentro do loop <strong>v-for</strong>:
                        </p>
                        <pre v-pre>
  <code>
  &lt;template&gt;
    &lt;div&gt;
      &lt;ul&gt;
        &lt;li v-for="(item, index) in items" :key="index"&gt;{{ index + 1 }}: {{ item.name }}&lt;/li&gt;
      &lt;/ul&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  
  &lt;script&gt;
  export default {
    data() {
      return {
        items: [
          { name: 'Item 1' },
          { name: 'Item 2' },
          { name: 'Item 3' }
        ]
      };
    }
  };
  &lt;/script&gt;
  </code>
              </pre>

                        <h3>Usando `v-for` em Componentes</h3>
                        <p class="justificar">
                            Você também pode usar <strong>v-for</strong> para gerar múltiplos componentes com base em
                            uma coleção de dados:
                        </p>
                        <pre v-pre>
  <code>
  &lt;template&gt;
    &lt;div&gt;
      &lt;item-component
        v-for="item in items"
        :key="item.id"
        :item="item"
      /&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  
  &lt;script&gt;
  import ItemComponent from './ItemComponent.vue';
  
  export default {
    components: {
      ItemComponent
    },
    data() {
      return {
        items: [
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
          { id: 3, name: 'Item 3' }
        ]
      };
    }
  };
  &lt;/script&gt;
  </code>
              </pre>

                        <h3>Resumo da Aula</h3>
                        <p class="justificar">
                            - A diretiva <strong>v-for</strong> é usada para iterar sobre arrays e objetos no Vue.js.
                            - Pode ser usada para gerar listas, tabelas e outros elementos dinâmicos.
                            - É possível acessar o índice da iteração e usar <strong>v-for</strong> em componentes.
                        </p>
                    </v-col>
                </v-row>
            </v-container>

            <v-container video>
                <v-responsive :aspect-ratio="16 / 9">
                    <iframe :src="video" :allow="propriedadesVideo" allowfullscreen></iframe>
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
    name: "VFor",
    data() {
        return {
            msg: "Diretiva: v-for",
            items: [
                { id: 1, name: 'Item 1' },
                { id: 2, name: 'Item 2' },
                { id: 3, name: 'Item 3' }
            ],
            video: 'https://www.youtube.com/embed/VIDEO_ID', // Substitua VIDEO_ID pela ID real do vídeo
            propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        };
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
</style>
