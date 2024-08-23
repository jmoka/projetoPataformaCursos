<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuJs />
        </v-navigation-drawer>
        <v-main>
            <div>
                <h1>{{ msg }} <code><u class="destaque">Object.freeze()</u></code></h1>
            </div>
            <h4><b>Objetivo:</b></h4>
            <p>
                Nesta aula, você aprenderá sobre o método <code><u class="destaque">Object.freeze()</u></code> em
                JavaScript e como ele pode ser
                usado para <u class="destaque">garantir a imutabilidade de objetos</u> e quais são as suas principais
                características e
                restrições.
            </p>
            <v-container video>
                <v-responsive :aspect-ratio="16 / 9">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>
            <h2><b>Conteúdo:</b></h2>
            <ol>
                <h3>
                    <li><b>O que é <code><u class="destaque">Object.freeze()</u></code>?</b></li>
                </h3>
                <h3>
                    <li><b>Como usar <code><u class="destaque">Object.freeze()</u></code></b></li>
                </h3>
                <h3>
                    <li><b>Exemplos Práticos</b></li>
                </h3>
                <h3>
                    <li><b>Conclusão</b></li>
                </h3>
                <h3>
                    <li><b>Propriedades de Definição: <code><u class="destaque">writable</u></code>,
                            <code><u class="destaque">enumerable</u></code> e
                            <code><u class="destaque">configurable</u></code></b></li>
                </h3>
            </ol>

            <h2><b>1. O que é <code><u class="destaque">Object.freeze()</u></code>?</b></h2>
            <p>
                O método <code><u class="destaque">Object.freeze()</u></code> é uma função nativa do JavaScript que
                permite congelar um objeto.
                Congelar um objeto significa que ele se torna imutável: suas propriedades não podem ser alteradas,
                adicionadas ou removidas.
            </p>
            <p>
                Após o congelamento, qualquer tentativa de modificar o objeto resultará em um erro em modo estrito ou
                será ignorada em outros modos.
            </p>

            <h2><b>2. Como usar <code><u class="destaque">Object.freeze()</u></code></b></h2>
            <p>
                Para congelar um objeto, você usa o método <code><u class="destaque">Object.freeze()</u></code> e passa
                o objeto que deseja
                congelar como argumento. Veja o exemplo a seguir:
            </p>

            <h3><b>Exemplo:</b></h3>
            <pre><code>
                var pessoa = Object.freeze({ nome: "João" });
                pessoa.nome = "Maria"; // Erro em modo estrito: Não pode modificar um objeto congelado
            </code></pre>
            <p>
                No exemplo acima, o objeto <code><u class="destaque">pessoa</u></code> é congelado usando
                <code><u class="destaque">Object.freeze()</u></code>.
                Tentativas de alterar a propriedade <code><u class="destaque">nome</u></code> resultam em erro se o modo
                estrito estiver
                ativado.
            </p>

            <h2><b>3. Exemplos Práticos</b></h2>
            <p>
                Vamos ver mais alguns exemplos de como <code><u class="destaque">Object.freeze()</u></code> pode ser
                usado.
            </p>

            <h3><b>Exemplo 1: Congelando um Objeto</b></h3>
            <pre><code>
                "use strict";

                var carro = Object.freeze({
                    marca: "Fusca",
                    ano: 1968
                });

                carro.ano = 1970; // Erro: Não pode modificar um objeto congelado
            </code></pre>

            <h3><b>Exemplo 2: Congelamento Superficial</b></h3>
            <pre><code>
                "use strict";

                var livro = Object.freeze({
                    titulo: "JavaScript Avançado",
                    autores: ["Ana", "Carlos"]
                });

                livro.autores.push("João"); // Permitido: o array não foi congelado
                livro.titulo = "JavaScript Básico"; // Erro: Não pode modificar um objeto congelado
            </code></pre>
            <p>
                Note que, no <code><u class="destaque">Exemplo 2</u></code>, embora o objeto
                <code><u class="destaque">livro</u></code> seja congelado, a propriedade
                <code><u class="destaque">autores</u></code> é um array que ainda pode ser modificado. O congelamento é
                superficial e não afeta
                objetos internos.
            </p>

            <h3><b>Exemplo 3: Congelamento Total</b></h3>
            <pre><code>
                "use strict";

                var livro = Object.freeze({
                    titulo: "JavaScript Avançado",
                    autores: Object.freeze(["Ana", "Carlos"])
                });

                livro.autores.push("João"); // Erro: O array é congelado e não pode ser modificado
                livro.titulo = "JavaScript Básico"; // Erro: Não pode modificar um objeto congelado
            </code></pre>
            <p>
                No <code><u class="destaque">Exemplo 3</u></code>, tanto o objeto
                <code><u class="destaque">livro</u></code> quanto a propriedade
                <code><u class="destaque">autores</u></code>
                são congelados. Neste caso, o congelamento é total, afetando tanto o objeto principal quanto todos os
                objetos internos, garantindo que nenhum valor seja alterado.
            </p>

            <h2><b>4. Propriedades de Definição: <code><u class="destaque">writable</u></code>,
                    <code><u class="destaque">enumerable</u></code> e
                    <code><u class="destaque">configurable</u></code></b></h2>
            <p>
                Quando você define propriedades de um objeto usando
                <code><u class="destaque">Object.defineProperty()</u></code> ou
                <code><u class="destaque">Object.defineProperties()</u></code>, você pode especificar características
                adicionais para essas
                propriedades. As principais características são <code><u class="destaque">writable</u></code>,
                <code><u class="destaque">enumerable</u></code> e
                <code><u class="destaque">configurable</u></code>.
            </p>

            <h3><b>Propriedade <code><u class="destaque">writable</u></code></b></h3>
            <p>
                A propriedade <code><u class="destaque">writable</u></code> determina se o valor da propriedade pode ser
                alterado. Se <code><u class="destaque">writable</u></code>
                estiver definido como <code>true</code>, o valor da propriedade pode ser modificado. Se estiver definido
                como
                <code>false</code>, o valor da propriedade não pode ser alterado.
            </p>
            <pre><code>
                var pessoa = {};
                Object.defineProperty(pessoa, 'nome', {
                    value: 'João',
                    writable: true // Valor pode ser alterado
                });
                pessoa.nome = 'Maria'; // Permitido
            </code></pre>

            <h3><b>Propriedade <code><u class="destaque">enumerable</u></code></b></h3>
            <p>
                A propriedade <code><u class="destaque">enumerable</u></code> determina se a propriedade aparece quando
                você itera sobre as propriedades
                do objeto usando um loop, como <code><u class="destaque">for...in</u></code> ou
                <code><u class="destaque">Object.keys()</u></code>. Se <code><u class="destaque">enumerable</u></code>
                estiver definido como <code>true</code>, a propriedade será incluída na iteração. Se estiver definido
                como
                <code>false</code>, a propriedade será ignorada.
            </p>
            <pre><code>
                var pessoa = {};
                Object.defineProperty(pessoa, 'nome', {
                    value: 'João',
                    enumerable: false // Propriedade não aparece na iteração
                });
                for (var prop in pessoa) {
                    console.log(prop); // 'nome' não será exibido
                }
            </code></pre>

            <h3><b>Propriedade <code><u class="destaque">configurable</u></code></b></h3>
            <p>
                A propriedade <code><u class="destaque">configurable</u></code> determina se a propriedade pode ser
                removida do objeto e se suas
                características podem ser modificadas. Se <code><u class="destaque">configurable</u></code> estiver
                definido como <code>true</code>,
                a propriedade pode ser removida e suas características podem ser alteradas. Se estiver definido como
                <code>false</code>, a propriedade não pode ser removida e suas características não podem ser
                modificadas.
            </p>
            <pre><code>
                var pessoa = {};
                Object.defineProperty(pessoa, 'nome', {
                    value: 'João',
                    configurable: false // Não pode remover ou alterar características
                });
                delete pessoa.nome; // Erro: Não pode remover uma propriedade não configurável
            </code></pre>

            <h2><b>5. Conclusão</b></h2>
            <p>
                O método <code><u class="destaque">Object.freeze()</u></code> é uma ferramenta poderosa para garantir
                que objetos permaneçam
                imutáveis, promovendo a segurança e a consistência no código. É importante lembrar que o congelamento é
                superficial, o que significa que objetos aninhados dentro do objeto congelado ainda podem ser
                modificados a menos que também sejam congelados.
            </p>
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
    name: "congelamentoObjetos",
    components: {
        MenuJs
    },
    data() {
        return {
            msg: "Congelamento de Objetos em JavaScript com",
            video: 'https://www.youtube.com/embed/VIDEO_ID',
            propriedadesVideo: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            listaReferencias: [
                { id: 1, name: "w3schools", link: "https://www.w3schools.com/" },
                { id: 2, name: "MDN Web Docs", link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" },
                { id: 3, name: "ChatGPT", link: "https://chatgpt.com/" }
            ],
        };
    }
};
</script>

<style scoped>
.video {
    max-width: 70%;
    max-height: 70%;
}
</style>