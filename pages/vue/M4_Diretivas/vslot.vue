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
                            O `v-slot` do Vue.js é uma diretiva que permite a criação e a personalização de slots em
                            componentes. Slots são áreas reservadas em um componente onde você pode injetar conteúdo,
                            tornando os componentes mais reutilizáveis e flexíveis.
                        </p>

                        <!-- Exemplo Básico de Slot -->
                        <h3>Exemplo Básico: Slot</h3>
                        <p class="justificar">
                            Neste exemplo, mostramos como usar um slot básico em um componente:
                        </p>

                        <pre v-pre>
                <code>
&lt;template&gt;
  &lt;div&gt;
    &lt;BaseCard&gt;
      &lt;template v-slot:header&gt;
        &lt;h2&gt;Cabeçalho do Cartão&lt;/h2&gt;
      &lt;/template&gt;

      &lt;template v-slot:default&gt;
        &lt;p&gt;Conteúdo do Cartão&lt;/p&gt;
      &lt;/template&gt;
    &lt;/BaseCard&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import BaseCard from './BaseCard.vue';

export default {
  components: {
    BaseCard
  }
}
&lt;/script&gt;
                </code>
              </pre>

                        <pre v-pre>
                <code>
&lt;template&gt;
  &lt;div class="card"&gt;
    &lt;header&gt;
      &lt;slot name="header"&gt;Cabeçalho padrão&lt;/slot&gt;
    &lt;/header&gt;
    &lt;main&gt;
      &lt;slot&gt;Conteúdo padrão&lt;/slot&gt;
    &lt;/main&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style&gt;
.card {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
}
&lt;/style&gt;
                </code>
              </pre>

                        <!-- Exemplo Avançado com Slots Nomeados -->
                        <h3>Exemplo Avançado: Slots Nomeados</h3>
                        <p class="justificar">
                            Slots nomeados permitem que você passe conteúdo para áreas específicas do componente:
                        </p>

                        <pre v-pre>
                <code>
&lt;template&gt;
  &lt;BaseCard&gt;
    &lt;template v-slot:header&gt;
      &lt;h2&gt;Cabeçalho Personalizado&lt;/h2&gt;
    &lt;/template&gt;
    &lt;template v-slot:footer&gt;
      &lt;button&gt;Saiba Mais&lt;/button&gt;
    &lt;/template&gt;
  &lt;/BaseCard&gt;
&lt;/template&gt;

&lt;script&gt;
import BaseCard from './BaseCard.vue';

export default {
  components: {
    BaseCard
  }
}
&lt;/script&gt;
                </code>
              </pre>

                        <pre v-pre>
                <code>
&lt;template&gt;
  &lt;div class="card"&gt;
    &lt;header&gt;
      &lt;slot name="header"&gt;Cabeçalho padrão&lt;/slot&gt;
    &lt;/header&gt;
    &lt;main&gt;
      &lt;slot&gt;Conteúdo padrão&lt;/slot&gt;
    &lt;/main&gt;
    &lt;footer&gt;
      &lt;slot name="footer"&gt;Rodapé padrão&lt;/slot&gt;
    &lt;/footer&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;style&gt;
.card {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
}
&lt;/style&gt;
                </code>
              </pre>

                        <!-- Exemplo com Slot Escopo -->
                        <h3>Exemplo com Slot com Escopo</h3>
                        <p class="justificar">
                            Slots com escopo permitem passar dados do componente filho para o componente pai:
                        </p>

                        <pre v-pre>
                <code>
&lt;template&gt;
  &lt;BaseList&gt;
    &lt;template v-slot:item="props"&gt;
      &lt;div&gt;
        &lt;strong&gt;{{ props.item.name }}&lt;/strong&gt;
        &lt;p&gt;{{ props.item.description }}&lt;/p&gt;
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/BaseList&gt;
&lt;/template&gt;

&lt;script&gt;
import BaseList from './BaseList.vue';

export default {
  components: {
    BaseList
  }
}
&lt;/script&gt;
                </code>
              </pre>

                        <pre v-pre>
                <code>
&lt;template&gt;
  &lt;div&gt;
    &lt;div v-for="item in items" :key="item.id"&gt;
      &lt;slot name="item" :item="item"&gt;&lt;/slot&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1', description: 'Descrição do Item 1' },
        { id: 2, name: 'Item 2', description: 'Descrição do Item 2' },
        { id: 3, name: 'Item 3', description: 'Descrição do Item 3' }
      ]
    };
  }
}
&lt;/script&gt;
                </code>
              </pre>

                        <!-- Resumo da Aula -->
                        <h3>Resumo da Aula</h3>
                        <p class="justificar">
                            - **Slots Básicos** permitem a injeção de conteúdo em um componente.
                            - **Slots Nomeados** permitem a personalização de áreas específicas do componente.
                            - **Slots com Escopo** permitem passar dados do componente filho para o pai.
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
    name: "Slots",
    data() {
        return {
            msg: "Compreendendo `v-slot` em Vue.js",
            video: 'https://www.youtube.com/embed/VIDEO_ID', // Substitua VIDEO_ID pela ID real do vídeo
            propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
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

button {
    border: 2px black solid;
    color: white;
    background-color: dimgray;
    margin: 5px;
    padding: 5px;
}
</style>
