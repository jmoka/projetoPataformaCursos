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
              A diretiva <strong>v-model</strong> é uma funcionalidade poderosa no Vue.js que permite criar
              uma ligação bidirecional entre os dados do componente e os elementos do DOM, como inputs, selects,
              checkboxes e componentes personalizados. Isso significa que qualquer alteração nos dados será refletida
              no DOM e vice-versa. Vamos explorar como usar essa diretiva com diferentes tipos de elementos.
            </p>

            <!-- Exemplo Básico com Input de Texto -->
            <h3>Exemplo Básico de `v-model` com Input de Texto</h3>
            <p class="justificar">
              Neste exemplo, usamos <strong>v-model</strong> para ligar o valor de um campo de entrada de texto
              a uma propriedade do componente:
            </p>
            <pre v-pre>
<code>
&lt;template&gt;
  &lt;div&gt;
    &lt;input v-model="message" placeholder="Digite uma mensagem"&gt;
    &lt;p&gt;Mensagem: {{ message }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      message: ''
    };
  }
};
&lt;/script&gt;
</code>
            </pre>
            <p class="justificar">
              O valor do campo de entrada de texto é automaticamente atualizado na variável `message` quando o usuário
              digita algo.
            </p>

            <!-- Exemplo com Checkbox -->
            <h3>Usando `v-model` com Checkbox</h3>
            <p class="justificar">
              O `v-model` também pode ser usado para ligar checkboxes a variáveis booleanas:
            </p>
            <pre v-pre>
<code>
&lt;template&gt;
  &lt;div&gt;
    &lt;input type="checkbox" v-model="checked"&gt; Aceitar termos e condições
    &lt;p&gt;Checkbox está {{ checked ? 'marcado' : 'desmarcado' }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      checked: false
    };
  }
};
&lt;/script&gt;
</code>
            </pre>
            <p class="justificar">
              A variável `checked` será verdadeira ou falsa, dependendo se o checkbox está marcado ou desmarcado.
            </p>

            <!-- Exemplo com Select -->
            <h3>Usando `v-model` com Select</h3>
            <p class="justificar">
              O `v-model` também funciona com elementos `select` para permitir que o usuário selecione uma opção:
            </p>
            <pre v-pre>
<code>
&lt;template&gt;
  &lt;div&gt;
    &lt;select v-model="selected"&gt;
      &lt;option disabled value=""&gt;Por favor, selecione uma opção&lt;/option&gt;
      &lt;option&gt;Opção 1&lt;/option&gt;
      &lt;option&gt;Opção 2&lt;/option&gt;
      &lt;option&gt;Opção 3&lt;/option&gt;
    &lt;/select&gt;
    &lt;p&gt;Opção selecionada: {{ selected }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      selected: ''
    };
  }
};
&lt;/script&gt;
</code>
            </pre>
            <p class="justificar">
              A variável `selected` será atualizada com o valor da opção selecionada no dropdown.
            </p>

            <!-- Exemplo com Radio Buttons -->
            <h3>Usando `v-model` com Radio Buttons</h3>
            <p class="justificar">
              `v-model` pode ser utilizado com grupos de radio buttons para selecionar uma única opção:
            </p>
            <pre v-pre>
<code>
&lt;template&gt;
  &lt;div&gt;
    &lt;input type="radio" id="optionA" value="Opção A" v-model="picked"&gt;
    &lt;label for="optionA"&gt;Opção A&lt;/label&gt;
    &lt;input type="radio" id="optionB" value="Opção B" v-model="picked"&gt;
    &lt;label for="optionB"&gt;Opção B&lt;/label&gt;
    &lt;p&gt;Opção selecionada: {{ picked }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      picked: ''
    };
  }
};
&lt;/script&gt;
</code>
            </pre>
            <p class="justificar">
              A variável `picked` será atualizada com o valor do radio button selecionado.
            </p>

            <!-- Exemplo com Vários Inputs Simultaneamente -->
            <h3>Usando `v-model` com Vários Inputs Simultaneamente</h3>
            <p class="justificar">
              Demonstra como utilizar `v-model` com diferentes tipos de inputs em um único template:
            </p>
            <pre v-pre>
<code>
&lt;template&gt;
  &lt;div&gt;
    &lt;input v-model="name" placeholder="Digite seu nome"&gt;
    &lt;p&gt;Nome: {{ name }}&lt;/p&gt;
    
    &lt;input type="checkbox" v-model="agreed"&gt; Aceitar termos e condições
    &lt;p&gt;Aceito: {{ agreed ? 'Sim' : 'Não' }}&lt;/p&gt;
    
    &lt;select v-model="favoriteColor"&gt;
      &lt;option disabled value=""&gt;Escolha sua cor favorita&lt;/option&gt;
      &lt;option&gt;Vermelho&lt;/option&gt;
      &lt;option&gt;Verde&lt;/option&gt;
      &lt;option&gt;Azul&lt;/option&gt;
    &lt;/select&gt;
    &lt;p&gt;Cor favorita: {{ favoriteColor }}&lt;/p&gt;
    
    &lt;input type="radio" id="optionA" value="Opção A" v-model="selectedOption"&gt;
    &lt;label for="optionA"&gt;Opção A&lt;/label&gt;
    &lt;input type="radio" id="optionB" value="Opção B" v-model="selectedOption"&gt;
    &lt;label for="optionB"&gt;Opção B&lt;/label&gt;
    &lt;p&gt;Opção selecionada: {{ selectedOption }}&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      name: '',
      agreed: false,
      favoriteColor: '',
      selectedOption: ''
    };
  }
};
&lt;/script&gt;
</code>
            </pre>
            <p class="justificar">
              Utiliza-se `v-model` para vincular diferentes tipos de inputs a variáveis distintas.
            </p>

            <!-- Exemplo com Componentes Personalizados -->
            <h3>Usando `v-model` com Componentes Personalizados</h3>
            <p class="justificar">
              O `v-model` pode ser usado em componentes personalizados para criar uma ligação bidirecional
              entre o valor de um componente e os dados do pai. No exemplo a seguir, o componente personalizado
              `custom-input` deve emitir o evento `input` para que o `v-model` funcione corretamente.
            </p>
            <pre v-pre>
<code>
&lt;template&gt;
  &lt;custom-input v-model="customValue"&gt;&lt;/custom-input&gt;
  &lt;p&gt;Valor customizado: {{ customValue }}&lt;/p&gt;
&lt;/template&gt;

&lt;script&gt;
import CustomInput from './CustomInput.vue';

export default {
  components: {
    CustomInput
  },
  data() {
    return {
      customValue: ''
    };
  }
};
&lt;/script&gt;
</code>
            </pre>
            <p class="justificar">
              A variável `customValue` será atualizada com o valor emitido pelo componente personalizado.
            </p>

            <!-- Resumo da Aula -->
            <h3>Resumo da Aula</h3>
            <p class="justificar">
              - A diretiva <strong>v-model</strong> é usada para criar uma ligação bidirecional entre os
              dados e os elementos do DOM no Vue.js.
              - Ela pode ser utilizada com vários tipos de inputs, como texto, checkbox, select, e
              componentes personalizados.
              - É uma ferramenta essencial para formular e gerenciar dados de entrada de usuários de forma eficiente.
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
  name: "VModel",
  data() {
    return {
      msg: "Diretiva: v-model",
      message: "",
      checked: false,
      selected: "",
      customValue: "",
      picked: "",
      name: '',
      agreed: false,
      favoriteColor: '',
      selectedOption: '',
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
