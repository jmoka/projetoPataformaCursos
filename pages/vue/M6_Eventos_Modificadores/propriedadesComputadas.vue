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
              As propriedades computadas são uma funcionalidade poderosa no Vue.js que permitem realizar
              cálculos e manipulações de dados de forma eficiente e reativa. Elas são úteis para calcular
              valores derivados com base nos dados existentes, sem a necessidade de replicar a lógica em
              várias partes do código.
            </p>

            <!-- Exemplo Básico de Propriedades Computadas -->
            <h3>Uso de um Contador</h3>
            <p class="justificar">
              Vamos começar com um exemplo simples onde calculamos o uso de um contador:
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
        &lt;button @Click="somar()"&gt;Somar 1&lt;/button&gt;
        &lt;button @Click="subtrair()"&gt;Subtrai 1&lt;/button&gt;

        &lt;button @Click="contar2++"&gt;Somar 2&lt;/button&gt;

        &lt;br&gt;
        &lt;div&gt;Contador1: {{contar1}} | Contador2: {{contar2}} &lt;/div&gt;
        &lt;p&gt;{{resultado}}&lt;/p&gt;

    &lt;/div&gt;

    &lt;script&gt;
        const { createApp } = Vue;
        const vuetify = Vuetify.createVuetify();

        createApp({
            data() {
                return {
                    contar1: 0,
                    contar2: 0
                };
            },
            methods: {
                somar() {
                    this.contar1++
                    console.log("chamou somar");
                },
                subtrair() {
                    this.contar1--
                }
            },
            computed: {
                resultado() {
                    console.log("chamou resultado computed....");
                    return this.contar1 >= 3 ? "maior que 3" : "menor que 3"
                }
            }
        }).use(vuetify)
            .mount('#app');
    &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;

&lt;style&gt;
    button {
        border: 2px black solid;
        color: white;
        background-color: dimgray;
        margin: 5px;
        padding: 5px;
    }
&lt;/style&gt;

    
             </code>
            </pre>


            <!-- Exemplo Básico de Propriedades Computadas -->
            <h3>Uso do Get</h3>
            <p class="justificar">
              Saudação personalizada baseada no nome do usuário:
            </p>

            <pre v-pre>
  <code>
  &lt;template&gt;
    &lt;div&gt;
      &lt;input v-model="firstName" placeholder="Digite seu primeiro nome"&gt;
      &lt;input v-model="lastName" placeholder="Digite seu último nome"&gt;
      &lt;p&gt;{{ greeting }}&lt;/p&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  
  &lt;script&gt;
  export default {
    data() {
      return {
        firstName: 'João',
        lastName: 'Silva'
      };
    },
    computed: {
      greeting() {
        return `Olá, ${this.firstName} ${this.lastName}!`;
      }
    }
  };
  &lt;/script&gt;
  </code>
              </pre>
            <p class="justificar">
              No exemplo acima, a propriedade computada `greeting` combina `firstName` e `lastName` para
              criar uma saudação personalizada. Sempre que o nome ou sobrenome mudar, o valor da saudação
              será atualizado automaticamente.
            </p>

            <!-- Propriedades Computadas com Getter e Setter -->
            <h3>Getter e Setter</h3>
            <p class="justificar">
              Além de oferecer uma maneira eficiente de calcular valores derivados, as propriedades
              computadas em Vue.js também suportam <strong>getters</strong> e <strong>setters</strong>.
              Isso permite uma flexibilidade adicional ao permitir que você não apenas leia um valor
              computado, mas também altere os dados subjacentes de maneira controlada.
            </p>

            <p class="justificar">
              <strong>Getter</strong>: É a função responsável por retornar o valor da propriedade
              computada. Sempre que você acessar a propriedade no template ou em algum lugar do seu
              código, o getter será chamado.
            </p>

            <p class="justificar">
              <strong>Setter</strong>: É a função responsável por definir o valor da propriedade
              computada. Quando você tenta atribuir um valor à propriedade, o setter é chamado, permitindo
              que você controle como esse novo valor afeta os dados subjacentes.
            </p>

            <p class="justificar">
              Vamos ver um exemplo prático. Imagine que você deseja armazenar o `firstName` e o `lastName`
              separadamente no estado do componente, mas também quer que o campo de entrada funcione como
              um nome completo:
            </p>

            <pre v-pre>
  <code>
  &lt;template&gt;
    &lt;div&gt;
      &lt;input v-model="fullName" placeholder="Digite o nome completo"&gt;
      &lt;p&gt;Nome Completo: {{ fullName }}&lt;/p&gt;
    &lt;/div&gt;
  &lt;/template&gt;
  
  &lt;script&gt;
  export default {
    data() {
      return {
        firstName: 'John',
        lastName: 'Doe'
      };
    },
    computed: {
      fullName: {
        // Getter: Retorna o nome completo combinando firstName e lastName
        get() {
          return `${this.firstName} ${this.lastName}`;
        },
        // Setter: Divide o nome completo em firstName e lastName
        set(newValue) {
          const names = newValue.split(' ');
          this.firstName = names[0];  // Define o primeiro nome
          this.lastName = names[names.length - 1];  // Define o último nome
        }
      }
    }
  };
  &lt;/script&gt;
  </code>
              </pre>

            <p class="justificar">
              Neste exemplo, o getter é usado para combinar `firstName` e `lastName` e exibir o nome
              completo, enquanto o setter divide o nome completo em partes e atualiza as propriedades
              correspondentes.
            </p>

            <p class="justificar">
              O uso de getters e setters permite maior controle sobre como os dados são manipulados,
              mantendo a reatividade e a coerência dos dados no componente.
            </p>

            <!-- Resumo da Aula -->
            <h3>Resumo da Aula</h3>
            <p class="justificar">
              - As propriedades computadas são uma maneira eficiente de calcular valores derivados no
              Vue.js.
              - Getters e setters oferecem controle adicional sobre como esses valores são exibidos e
              manipulados.
              - As propriedades computadas são uma ferramenta essencial para manter o código organizado e
              reativo, permitindo a separação clara entre lógica de dados e lógica de apresentação.
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
  name: "ComputedProperties",
  data() {
    return {
      msg: "Propriedades Computadas",
      firstName: "John",
      lastName: "Doe",
      video: 'https://www.youtube.com/embed/VIDEO_ID', // Substitua VIDEO_ID pela ID real do vídeo
      propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
    };
  },
  computed: {
    fullName: {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(newValue) {
        const names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
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
</style>