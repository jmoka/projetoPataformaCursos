<template>
  <v-app>
    <v-navigation-drawer app>
      <Menu />
    </v-navigation-drawer>
    <v-main>
      <v-container-fluid>
        <v-row>
          <v-col cols="12">
            <h1>{{ msg }}</h1>
            <p class="justificar">
              Abaixo está uma aula completa sobre a funcionalidade de toggle em JavaScript puro, sem o uso de frameworks
              como Vue.js.
            </p>

            <h2>Introdução ao Conceito de Toggle</h2>
            <p class="justificar">
              O conceito de toggle em programação se refere à capacidade de alternar entre dois estados diferentes, como
              "ativo" e "inativo" ou "ligado" e "desligado". No JavaScript, podemos implementar essa funcionalidade para
              criar interfaces de usuário interativas, como mostrar e esconder elementos, mudar estilos, ou
              ativar/desativar funcionalidades.
            </p>
            <p class="justificar">
              Nesta aula, vamos aprender como criar um toggle usando JavaScript puro, sem o uso de bibliotecas ou
              frameworks externos.
            </p>

            <h3>Seção 1: Alternando a Visibilidade de Elementos</h3>
            <p class="justificar">
              Vamos começar com um exemplo simples de toggle que altera a visibilidade de um elemento HTML, como um
              parágrafo de texto.
            </p>

            <h4>Exemplo 1: Toggle Visibilidade com JavaScript</h4>
            <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Toggle Visibilidade&lt;/title&gt;
  &lt;style&gt;
      #texto {
          display: none;
      }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Exemplo de Toggle em JavaScript&lt;/h1&gt;
  &lt;button onclick="toggleTexto()"&gt;Mostrar Texto&lt;/button&gt;
  &lt;p id="texto"&gt;Este é um exemplo de parágrafo que será mostrado ou escondido com um clique no botão acima.&lt;/p&gt;

  &lt;script&gt;
      function toggleTexto() {
          var texto = document.getElementById("texto");
          if (texto.style.display === "none") {
              texto.style.display = "block";
              document.querySelector("button").innerText = "Esconder Texto";
          } else {
              texto.style.display = "none";
              document.querySelector("button").innerText = "Mostrar Texto";
          }
      }
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
                      </code></pre>
            <p class="justificar">
              <strong>Explicação:</strong>
              O parágrafo inicialmente está escondido, utilizando <code>display: none</code>. A função
              <code>toggleTexto()</code> é chamada quando o botão é clicado. A função verifica o estado atual do
              parágrafo e alterna entre mostrar (<code>display: block</code>) e esconder (<code>display: none</code>). O
              texto do botão também muda conforme o estado do parágrafo.
            </p>

            <h3>Seção 2: Toggle de Classes CSS</h3>
            <p class="justificar">
              Além de alterar a visibilidade, o toggle também pode ser utilizado para alternar classes CSS de um
              elemento, alterando sua aparência visual. Vamos ver um exemplo onde alternamos entre duas classes
              diferentes usando toggle.
            </p>

            <h4>Exemplo 2: Toggle de Classes CSS</h4>
            <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Toggle de Classes&lt;/title&gt;
  &lt;style&gt;
      .normal {
          color: black;
          background-color: white;
      }

      .invertido {
          color: white;
          background-color: black;
      }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1 class="normal"&gt;Texto com Toggle de Classes&lt;/h1&gt;
  &lt;button onclick="toggleClasse()"&gt;Inverter Cores&lt;/button&gt;

  &lt;script&gt;
      function toggleClasse() {
          var titulo = document.querySelector("h1");
          titulo.classList.toggle("invertido");
      }
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
                      </code></pre>
            <p class="justificar">
              <strong>Explicação:</strong>
              Definimos duas classes CSS, <code>.normal</code> e <code>.invertido</code>, que têm estilos opostos. A
              função <code>toggleClasse()</code> usa o método <code>classList.toggle()</code> para alternar entre as
              classes. Se a classe já está aplicada, ela é removida; se não está, ela é adicionada.
            </p>

            <h3>Seção 3: Toggle de Atributos</h3>
            <p class="justificar">
              O toggle também pode ser usado para alternar atributos HTML, como habilitar ou desabilitar um botão. Vamos
              ver um exemplo onde alternamos o atributo <code>disabled</code> de um botão.
            </p>

            <h4>Exemplo 3: Toggle de Atributos</h4>
            <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Toggle de Atributos&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;button id="toggleButton" onclick="toggleBotao()"&gt;Desabilitar Botão&lt;/button&gt;
  &lt;button id="botao"&gt;Botão&lt;/button&gt;

  &lt;script&gt;
      function toggleBotao() {
          var botao = document.getElementById("botao");
          if (botao.disabled) {
              botao.disabled = false;
              document.getElementById("toggleButton").innerText = "Desabilitar Botão";
          } else {
              botao.disabled = true;
              document.getElementById("toggleButton").innerText = "Habilitar Botão";
          }
      }
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
                      </code></pre>
            <p class="justificar">
              <strong>Explicação:</strong>
              O botão "Botão" pode ser habilitado ou desabilitado. A função <code>toggleBotao()</code> alterna o estado
              do atributo <code>disabled</code> do botão e altera o texto do botão de controle conforme o estado.
            </p>

            <h3>Seção 4: Toggle de Conteúdo</h3>
            <p class="justificar">
              Em alguns casos, você pode querer alternar o conteúdo de um elemento HTML. Vamos ver um exemplo onde
              alternamos o texto de um parágrafo.
            </p>

            <h4>Exemplo 4: Toggle de Conteúdo de Texto</h4>
            <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;Toggle de Conteúdo&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;button onclick="toggleConteudo()"&gt;Alterar Texto&lt;/button&gt;
  &lt;p id="conteudo"&gt;Este é o conteúdo original.&lt;/p&gt;

  &lt;script&gt;
      function toggleConteudo() {
          var conteudo = document.getElementById("conteudo");
          if (conteudo.innerText === "Este é o conteúdo original.") {
              conteudo.innerText = "Este é o novo conteúdo.";
          } else {
              conteudo.innerText = "Este é o conteúdo original.";
          }
      }
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
                      </code></pre>
            <p class="justificar">
              <strong>Explicação:</strong>
              A função <code>toggleConteudo()</code> verifica o texto atual do parágrafo e o alterna entre duas opções
              de conteúdo.
            </p>

          </v-col>
        </v-row>
      </v-container-fluid>
    </v-main>
    <v-footer>
      <footer_page />
    </v-footer>
  </v-app>
</template>

<script>
import Menu from '~/components/js/menuJS.vue'
import footer_page from '~/components/footer_page.vue'

export default {
  components: {
    Menu,
    footer_page
  },
  data() {
    return {
      msg: "Aula sobre Toggle em JavaScript"
    }
  }
}
</script>

<style scoped>
.justificar {
  text-align: justify;
}
</style>
