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
                Nesta aula, você aprenderá sobre o uso do modo estrito ("use strict") em JavaScript, por que ele é
                importante, como ele pode ajudar a evitar erros comuns, e como aplicá-lo em seu código.
            </p>
            <v-container class="flex">
                <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>
            <h2><b>Conteúdo:</b></h2>
            <ol>
                <li><b>O que é "use strict"?</b></li>
                <li><b>Por que usar "use strict"?</b></li>
                <li><b>Como ativar o modo estrito</b></li>
                <li><b>Principais mudanças e restrições</b></li>
                <li><b>Exemplos práticos</b></li>
                <li><b>Conclusão</b></li>
            </ol>

            <h2><b>1. O que é "use strict"?</b></h2>
            <p>
                O <code>"use strict"</code> é uma diretiva introduzida no ECMAScript 5 (ES5) que permite optar por uma
                versão mais restritiva do JavaScript. Ao ativar o modo estrito, você informa ao JavaScript para operar
                de maneira mais rigorosa, evitando o uso de certas práticas que podem levar a erros ou comportamentos
                inesperados.
            </p>

            <h2><b>2. Por que usar "use strict"?</b></h2>
            <p>
                O modo estrito oferece diversas vantagens:
            </p>
            <ul>
                <li><b>Evita Erros Silenciosos:</b></li>
                <p>Em modo estrito, erros que normalmente seriam ignorados ou
                    silenciosamente tratados, como o uso de variáveis não declaradas, são convertidos em erros
                    explícitos.</p>
                <li><b>Evita a Criação Acidental de Variáveis Globais:</b></li>
                <p> No modo estrito, a tentativa de atribuir
                    valores a variáveis não declaradas resulta em erro, evitando assim a criação acidental de variáveis
                    globais.</p>
                <li><b>Desativa Recursos Obsoletos:</b></li>
                <p> Alguns recursos antigos do JavaScript, considerados inseguros ou
                    propensos a erros, são desativados.</p>
                <li><b>Melhorias de Performance:</b> </li>
                <p>O código em modo estrito pode ser otimizado mais facilmente pelos
                    motores JavaScript.</p>
            </ul>

            <h2><b>3. Como ativar o modo estrito</b></h2>
            <p>
                O modo estrito é ativado através da declaração <code>"use strict";</code>, que deve ser colocada no
                início de um arquivo ou de uma função. A diretiva deve estar na primeira linha do código ou no início de
                uma função, caso contrário, ela será ignorada.
            </p>
            <ul>
                <li><b>Modo Estrito Globalmente:</b></li>
                <pre><code>"use strict";

// Todo o código neste arquivo está em modo estrito
</code></pre>
                <li><b>Modo Estrito em Funções:</b></li>
                <pre><code>function minhaFuncao() {
    "use strict";
    // Somente este código está em modo estrito
}
</code></pre>
            </ul>

            <h2><b>4. Principais mudanças e restrições</b></h2>
            <p>
                Aqui estão algumas das principais mudanças que ocorrem quando o modo estrito está ativado:
            </p>
            <ul>
                <li><b>Proibição de Variáveis Não Declaradas:</b></li>
                <pre><code>"use strict";
nome = "João"; // Erro: Variável não declarada
</code></pre>
                <li><b>Proibição de Deletar Propriedades Não Deletáveis:</b></li>
                <pre><code>"use strict";
delete Object.prototype; // Erro: Não é permitido deletar esta propriedade
</code></pre>
                <li><b>Erros ao Duplicar Nomes de Parâmetros:</b></li>
                <pre><code>"use strict";
function duplicar(a, a) { // Erro: Parâmetros duplicados não são permitidos
    return a;
}
</code></pre>
                <li><b>Proibição de Propriedades em Objetos Literais Duplicadas:</b></li>
                <pre><code>"use strict";
var obj = { a: 1, a: 2 }; // Erro: Propriedades duplicadas em objetos literais
</code></pre>
                <li><b>Erros ao Atribuir a Propriedades de Somente Leitura:</b></li>
                <pre><code>"use strict";
var obj = {};
Object.defineProperty(obj, "prop", {
    value: 42,
    writable: false
});
obj.prop = 77; // Erro: Não pode alterar uma propriedade somente leitura
</code></pre>
            </ul>

            <h2><b>5. Exemplos práticos</b></h2>

            <h3><b>Exemplo 1: Evitando variáveis globais não intencionais</b></h3>
            <pre><code>"use strict";

function teste() {
    msg = "Olá, mundo!"; // Erro: Variável não declarada
}
teste();
</code></pre>

            <h3><b>Exemplo 2: Erro ao usar uma palavra reservada</b></h3>
            <pre><code>"use strict";

var implements = 10; // Erro: "implements" é uma palavra reservada
</code></pre>

            <h3><b>Exemplo 3: Tratando com mais rigor a definição de propriedades</b></h3>
            <pre><code>"use strict";

var pessoa = Object.freeze({ nome: "João" });
pessoa.nome = "Maria"; // Erro: Não pode modificar um objeto congelado
</code></pre>

            <h2><b>6. Conclusão</b></h2>
            <p>
                O <code>"use strict"</code> ajuda a escrever código JavaScript mais seguro e confiável, forçando o
                desenvolvedor a evitar práticas problemáticas e a adotar melhores padrões de codificação. Embora o modo
                estrito não seja obrigatório, seu uso é altamente recomendado, especialmente em projetos novos ou ao
                refatorar código existente.
            </p>
        </v-main>
    </v-app>
</template>

<script>
import MenuJs from '@/components/javaScript/menu.JavaScript.vue'
export default {
    name: "useStrict",
    components: {
        MenuJs
    }
}
</script>

<style scoped>
.v-main {
    padding: 10px 20px 10px 20px !important;
}
</style>

<script>
import MenuJs from '@/components/javaScript/menu.JavaScript.vue'
export default {
    name: "instalacaoJS",
    data() {
        return {
            msg:"Modo Estrito em JavaScript ('use strict')",
            video: 'https://www.youtube.com/embed/VIDEO_ID',
            propriedadesVideo: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",

        }
    },
    components: {
        MenuJs
    }
}
</script>


<style scoped>
.v-main {
    padding: 10px 20px 10px 20px !important;
    /* Ajuste o padding conforme necessário */
}
li{
    color:#894200
}

.flexItem {
    max-width: 70%;
    max-height: 70%
}
</style>
