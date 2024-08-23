<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuJs />
        </v-navigation-drawer>
        <v-main>
            <div>
                <h1>{{ msg }}</h1>
            </div>
            <h4><b>Objetivo:</b></h4>
            <p>
                Nesta aula, você aprenderá sobre diferentes maneiras de definir propriedades para objetos em JavaScript.
                Vamos explorar a notação de ponto, notação de colchetes, o literal de objeto, métodos como
                <code>Object.defineProperty()</code> e <code>Object.defineProperties()</code>, e também propriedades
                acessoras.
            </p>
            <v-container video>
                <v-responsive :aspect-ratio="16 / 9">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>


            <h2>Definindo Propriedades de Objetos</h2>

            <h3>1. Notação de Ponto</h3>
            <p>
                A notação de ponto é a forma mais comum e simples de acessar e definir propriedades de um objeto. Usando
                a notação de ponto, você pode criar e atribuir valores diretamente às propriedades do objeto.
            </p>
            <ul>
                <li>
                    <p><code>let pessoa = {};</code> - Cria um objeto vazio chamado <code>pessoa</code>.</p>
                    <p><code>pessoa.nome = "João";</code> - Adiciona uma propriedade <code>nome</code> ao objeto e
                        define seu valor como "João".</p>
                    <p><code>pessoa.idade = 30;</code> - Adiciona uma propriedade <code>idade</code> e define seu valor
                        como 30.</p>
                    <p><code>console.log(pessoa.nome); // João</code> - Acessa e exibe o valor da propriedade
                        <code>nome</code>.
                    </p>
                    <p><code>console.log(pessoa.idade); // 30</code> - Acessa e exibe o valor da propriedade
                        <code>idade</code>.
                    </p>
                </li>
            </ul>

            <h3>2. Notação de Colchetes</h3>
            <p>
                A notação de colchetes permite acessar e definir propriedades usando uma string ou uma variável. É útil
                quando você precisa usar nomes de propriedades que são armazenados em variáveis ou que não são
                identificadores válidos.
            </p>
            <ul>
                <li>
                    <p><code>let pessoa = {};</code> - Cria um objeto vazio chamado <code>pessoa</code>.</p>
                    <p><code>pessoa["nome"] = "Maria";</code> - Adiciona uma propriedade <code>nome</code> ao objeto e
                        define seu valor como "Maria" usando notação de colchetes.</p>
                    <p><code>pessoa["idade"] = 25;</code> - Adiciona uma propriedade <code>idade</code> e define seu
                        valor como 25.</p>
                    <p><code>console.log(pessoa["nome"]); // Maria</code> - Acessa e exibe o valor da propriedade
                        <code>nome</code> usando notação de colchetes.
                    </p>
                    <p><code>console.log(pessoa["idade"]); // 25</code> - Acessa e exibe o valor da propriedade
                        <code>idade</code>.
                    </p>
                </li>
            </ul>

            <h3>3. Literal de Objeto</h3>
            <p>
                O literal de objeto é uma forma compacta de criar objetos com propriedades e valores definidos. Você
                pode definir todas as propriedades e seus valores ao criar o objeto.
            </p>
            <ul>
                <li>
                    <p><code>let pessoa = { nome: "Ana", idade: 28 };</code> - Cria um objeto com as propriedades
                        <code>nome</code> e <code>idade</code>, e seus respectivos valores.
                    </p>
                    <p><code>console.log(pessoa.nome); // Ana</code> - Acessa e exibe o valor da propriedade
                        <code>nome</code>.
                    </p>
                    <p><code>console.log(pessoa.idade); // 28</code> - Acessa e exibe o valor da propriedade
                        <code>idade</code>.
                    </p>
                </li>
            </ul>

            <h3>4. Definindo Propriedades com <code>Object.defineProperty()</code></h3>
            <p>
                O método <code>Object.defineProperty()</code> permite definir uma propriedade com configurações mais
                detalhadas, como se a propriedade pode ser modificada, enumerada ou deletada.
            </p>
            <ul>
                <li>
                    <p><code>let pessoa = {};</code> - Cria um objeto vazio chamado <code>pessoa</code>.</p>
                    <p><code>Object.defineProperty(pessoa, 'nome', {</code></p>
                    <p><code>&nbsp;&nbsp;value: 'Carlos',</code></p>
                    <p><code>&nbsp;&nbsp;writable: true,</code></p>
                    <p><code>&nbsp;&nbsp;enumerable: true,</code></p>
                    <p><code>&nbsp;&nbsp;configurable: true</code></p>
                    <p><code>});</code></p>
                    <p><code>console.log(pessoa.nome); // Carlos</code> - Acessa e exibe o valor da propriedade
                        <code>nome</code>.
                    </p>
                    <p><code>pessoa.nome = 'Paulo';</code> - Modifica o valor da propriedade <code>nome</code>.</p>
                    <p><code>console.log(pessoa.nome); // Paulo</code> - Exibe o valor atualizado da propriedade
                        <code>nome</code>.
                    </p>
                </li>
            </ul>

            <h3>5. Definindo Múltiplas Propriedades com <code>Object.defineProperties()</code></h3>
            <p>
                O método <code>Object.defineProperties()</code> é usado para definir várias propriedades de um objeto de
                uma só vez, com configurações detalhadas para cada propriedade.
            </p>
            <ul>
                <li>
                    <p><code>let pessoa = {};</code> - Cria um objeto vazio chamado <code>pessoa</code>.</p>
                    <p><code>Object.defineProperties(pessoa, {</code></p>
                    <p><code>&nbsp;&nbsp;nome: {</code></p>
                    <p><code>&nbsp;&nbsp;&nbsp;&nbsp;value: 'Laura',</code></p>
                    <p><code>&nbsp;&nbsp;&nbsp;&nbsp;writable: true,</code></p>
                    <p><code>&nbsp;&nbsp;&nbsp;&nbsp;enumerable: true,</code></p>
                    <p><code>&nbsp;&nbsp;&nbsp;&nbsp;configurable: true</code></p>
                    <p><code>&nbsp;&nbsp;},</code></p>
                    <p><code>&nbsp;&nbsp;idade: {</code></p>
                    <p><code>&nbsp;&nbsp;&nbsp;&nbsp;value: 22,</code></p>
                    <p><code>&nbsp;&nbsp;&nbsp;&nbsp;writable: false,</code></p>
                    <p><code>&nbsp;&nbsp;&nbsp;&nbsp;enumerable: true,</code></p>
                    <p><code>&nbsp;&nbsp;&nbsp;&nbsp;configurable: true</code></p>
                    <p><code>&nbsp;&nbsp;}</code></p>
                    <p><code>});</code></p>
                    <p><code>console.log(pessoa.nome); // Laura</code> - Acessa e exibe o valor da propriedade
                        <code>nome</code>.
                    </p>
                    <p><code>console.log(pessoa.idade); // 22</code> - Acessa e exibe o valor da propriedade
                        <code>idade</code>.
                    </p>
                    <p><code>pessoa.idade = 23;</code> - Tenta modificar o valor da propriedade <code>idade</code>, mas
                        a modificação não é permitida.</p>
                    <p><code>console.log(pessoa.idade); // 22</code> - Exibe o valor da propriedade <code>idade</code>
                        que não foi alterado.</p>
                </li>
            </ul>

            <h3>6. Propriedades Acessoras</h3>
            <p>
                Propriedades acessoras permitem definir funções getter e setter para uma propriedade. Getter é usado
                para obter o valor da propriedade, enquanto setter é usado para definir o valor da propriedade.
            </p>
            <ul>
                <li>
                    <p><code>let pessoa = {</code></p>
                    <p><code>&nbsp;&nbsp;_nome: 'João',</code></p>
                    <p><code>&nbsp;&nbsp;get nome() {</code></p>
                    <p><code>&nbsp;&nbsp;&nbsp;&nbsp;return this._nome;</code></p>
                    <p><code>&nbsp;&nbsp;},</code></p>
                    <p><code>&nbsp;&nbsp;set nome(valor) {</code></p>
                    <p><code>&nbsp;&nbsp;&nbsp;&nbsp;this._nome = valor;</code></p>
                    <p><code>&nbsp;&nbsp;}</code></p>
                    <p><code>};</code></p>
                    <p><code>console.log(pessoa.nome); // João</code> - Acessa e exibe o valor da propriedade
                        <code>nome</code> através do getter.
                    </p>
                    <p><code>pessoa.nome = 'Ana';</code> - Usa o setter para modificar o valor da propriedade
                        <code>nome</code>.
                    </p>
                    <p><code>console.log(pessoa.nome); // Ana</code> - Exibe o valor atualizado da propriedade
                        <code>nome</code>.
                    </p>
                </li>
            </ul>

            <h3>7. Propriedades Dinâmicas</h3>
            <p>
                Propriedades dinâmicas permitem definir ou acessar propriedades usando variáveis. Isso é útil quando o
                nome da propriedade é determinado em tempo de execução.
            </p>
            <ul>
                <li>
                    <p><code>let propriedade = 'idade';</code> - Cria uma variável que contém o nome da propriedade.</p>
                    <p><code>let pessoa = {};</code> - Cria um objeto vazio chamado <code>pessoa</code>.</p>
                    <p><code>pessoa[propriedade] = 30;</code> - Define a propriedade com o nome armazenado na variável
                        <code>propriedade</code> e atribui o valor 30.
                    </p>
                    <p><code>console.log(pessoa.idade); // 30</code> - Acessa e exibe o valor da propriedade
                        <code>idade</code>.
                    </p>
                </li>
            </ul>
            <v-container video>
                <v-responsive :aspect-ratio="16 / 9">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>

        </v-main>
        <v-footer>
            <h3>Referências:</h3>
            <v-container class="d-block">
                <p v-for="(ref, index) in listaReferencias" :key="index">
                    <a :href="ref.link">{{ ref.name }}</a>
                </p>
            </v-container>
        </v-footer>

    </v-app>
</template>

<script>
import MenuJs from '~/components/js/menuJS.vue'
export default {
    name: "congalerobjetos",
    data() {
        return {
            msg: "O que á JavaScript ?",
            video: '/videos/js/aula1_js.mp4',
            propriedadesVideo: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            listaReferencias: [
                { id: 1, name: "w3schools", link: "https://www.w3schools.com/" },
                { id: 2, name: "MDN Web Docs", link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" },
                { id: 3, name: "ChatGPT", link: "https://chatgpt.com/" }
            ],
        }

    },
    components: {
        MenuJs
    }
}
</script>


<style scoped>
.video {
    max-width: 70%;
    max-height: 70%;
}
</style>
