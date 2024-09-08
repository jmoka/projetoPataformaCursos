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
                            Abaixo está uma aula completa sobre a funcionalidade de toggle no Vue.js, utilizando
                            componentes e diretivas do Vue para criar uma interface interativa.
                        </p>

                        <h2>Introdução ao Conceito de Toggle no Vue.js</h2>
                        <p class="justificar">
                            No Vue.js, o conceito de toggle é frequentemente utilizado para alternar estados e atualizar
                            a interface do usuário de forma reativa. Podemos usar propriedades reativas e métodos para
                            implementar a funcionalidade de toggle em nossos componentes Vue.
                        </p>
                        <p class="justificar">
                            Nesta aula, vamos explorar como criar diferentes tipos de toggle em Vue.js, incluindo a
                            alternância de visibilidade de elementos, classes CSS, e conteúdo dinâmico.
                        </p>

                        <h3>Seção 1: Alternando a Visibilidade de Elementos</h3>
                        <p class="justificar">
                            Vamos começar com um exemplo simples de como alternar a visibilidade de um elemento usando
                            uma propriedade reativa no Vue.js.
                        </p>

                        <h4>Exemplo 1: Toggle Visibilidade com Vue.js</h4>
                        <pre><code>
&lt;template&gt;
    &lt;div&gt;
        &lt;v-btn @click="toggleTexto"&gt;Mostrar/Esconder Texto&lt;/v-btn&gt;
        &lt;p v-if="mostrarTexto"&gt;Este é um exemplo de parágrafo que será mostrado ou escondido com um clique no botão acima.&lt;/p&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    data() {
        return {
            mostrarTexto: false
        }
    },
    methods: {
        toggleTexto() {
            this.mostrarTexto = !this.mostrarTexto;
        }
    }
}
&lt;/script&gt;

&lt;style scoped&gt;
p {
    margin-top: 20px;
}
&lt;/style&gt;
                        </code></pre>
                        <p class="justificar">
                            <strong>Explicação:</strong>
                            Utilizamos a diretiva <code>v-if</code> para condicionalmente renderizar o parágrafo com
                            base na propriedade reativa <code>mostrarTexto</code>. O método <code>toggleTexto()</code>
                            alterna o valor de <code>mostrarTexto</code> sempre que o botão é clicado.
                        </p>

                        <h3>Seção 2: Toggle de Classes CSS</h3>
                        <p class="justificar">
                            Podemos também usar o toggle para alternar entre classes CSS no Vue.js. Isso é útil para
                            alterar estilos dinamicamente com base no estado do componente.
                        </p>

                        <h4>Exemplo 2: Toggle de Classes CSS com Vue.js</h4>
                        <pre><code>
&lt;template&gt;
    &lt;div&gt;
        &lt;v-btn @click="toggleClasse"&gt;Alterar Estilo&lt;/v-btn&gt;
        &lt;h1 :class="{ 'normal': !isInvertido, 'invertido': isInvertido }"&gt;Texto com Toggle de Classes&lt;/h1&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    data() {
        return {
            isInvertido: false
        }
    },
    methods: {
        toggleClasse() {
            this.isInvertido = !this.isInvertido;
        }
    }
}
&lt;/script&gt;

&lt;style scoped&gt;
.normal {
    color: black;
    background-color: white;
}

.invertido {
    color: white;
    background-color: black;
}
&lt;/style&gt;
                        </code></pre>
                        <p class="justificar">
                            <strong>Explicação:</strong>
                            Utilizamos a diretiva <code>:class</code> para aplicar dinamicamente classes CSS com base na
                            propriedade reativa <code>isInvertido</code>. O método <code>toggleClasse()</code> alterna o
                            valor de <code>isInvertido</code>, trocando entre as classes <code>.normal</code> e
                            <code>.invertido</code>.
                        </p>

                        <h3>Seção 3: Toggle de Atributos</h3>
                        <p class="justificar">
                            No Vue.js, também podemos alternar atributos HTML, como desabilitar ou habilitar um botão.
                        </p>

                        <h4>Exemplo 3: Toggle de Atributos com Vue.js</h4>
                        <pre><code>
&lt;template&gt;
    &lt;div&gt;
        &lt;v-btn @click="toggleBotao"&gt;{{ botaoEstado }} Botão&lt;/v-btn&gt;
        &lt;v-btn :disabled="botaoDesabilitado"&gt;Botão&lt;/v-btn&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    data() {
        return {
            botaoDesabilitado: false
        }
    },
    computed: {
        botaoEstado() {
            return this.botaoDesabilitado ? 'Habilitar' : 'Desabilitar';
        }
    },
    methods: {
        toggleBotao() {
            this.botaoDesabilitado = !this.botaoDesabilitado;
        }
    }
}
&lt;/script&gt;
                        </code></pre>
                        <p class="justificar">
                            <strong>Explicação:</strong>
                            O atributo <code>:disabled</code> do botão é controlado pela propriedade reativa
                            <code>botaoDesabilitado</code>. A função <code>toggleBotao()</code> altera o estado do botão
                            entre habilitado e desabilitado. A propriedade computada <code>botaoEstado</code> altera o
                            texto do botão de controle com base no estado atual.
                        </p>

                        <h3>Seção 4: Toggle de Conteúdo Dinâmico</h3>
                        <p class="justificar">
                            Finalmente, podemos alternar o conteúdo de um elemento HTML de forma dinâmica com Vue.js.
                            Vamos ver como trocar o texto de um parágrafo com base em um estado.
                        </p>

                        <h4>Exemplo 4: Toggle de Conteúdo Dinâmico com Vue.js</h4>
                        <pre><code>
&lt;template&gt;
    &lt;div&gt;
        &lt;v-btn @click="toggleConteudo"&gt;Alterar Conteúdo&lt;/v-btn&gt;
        &lt;p&gt;{{ conteudo }}&lt;/p&gt;
    &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
    data() {
        return {
            conteudo: "Este é o conteúdo original."
        }
    },
    methods: {
        toggleConteudo() {
            this.conteudo = this.conteudo === "Este é o conteúdo original."
                ? "Este é o novo conteúdo."
                : "Este é o conteúdo original.";
        }
    }
}
&lt;/script&gt;
                        </code></pre>
                        <p class="justificar">
                            <strong>Explicação:</strong>
                            A propriedade reativa <code>conteudo</code> é alternada entre duas opções de texto com o
                            método <code>toggleConteudo()</code>. O parágrafo é atualizado automaticamente quando
                            <code>conteudo</code> muda. O texto exibido no parágrafo muda com base no valor atual de
                            <code>conteudo</code>.
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
import Menu from '~/components/vue/menuVue.vue'
import footer_page from '~/components/footer_page.vue'

export default {
    components: {
        Menu,
        footer_page
    },
    data() {
        return {
            msg: "Aula sobre Toggle no Vue.js"
        }
    }
}
</script>

<style scoped>
.justificar {
    text-align: justify;
}
</style>
