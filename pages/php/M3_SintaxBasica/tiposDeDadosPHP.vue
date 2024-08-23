<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuPHP />
        </v-navigation-drawer>
        <v-main>
            <h1><b>{{ msg }}</b></h1>
            <h4><b>Objetivo:</b></h4>
            <p>
                Nesta seção, você aprenderá sobre os diferentes tipos de dados em PHP, incluindo strings, inteiros,
                floats e booleanos.
            </p>
            <v-container video>
                <v-responsive :aspect-ratio="16 / 9">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>
            <h2><b>2. Tipos de Dados em PHP</b></h2>
            <p><b>Tipos de Dados:</b><br>
                Em PHP, você pode armazenar diferentes tipos de informações nas variáveis. Aqui estão alguns tipos de
                dados básicos.
            </p>
            <h3><b>String:</b></h3>
            <p>Uma string é uma sequência de caracteres. Pode ser um texto, um nome, ou qualquer outra combinação de
                letras e números.</p>
            <pre>
<code>
    &lt;?php
        $mensagem = "Olá, Mundo!";
        echo $mensagem;
    ?&gt;
</code>
            </pre>
            <h3><b>Integer:</b></h3>
            <p>Um integer é um número inteiro, sem casas decimais.</p>
            <pre>
<code>
    &lt;?php
        $idade = 25;
        echo "Idade: " . $idade;
    ?&gt;
</code>
            </pre>
            <h3><b>Float:</b></h3>
            <p>Um float é um número com casas decimais.</p>
            <pre>
<code>
    &lt;?php
        $preco = 19.99;
        echo "Preço: " . $preco;
    ?&gt;
</code>
            </pre>
            <h3><b>Boolean:</b></h3>
            <p>Um boolean pode ser <code>true</code> (verdadeiro) ou <code>false</code> (falso).</p>
            <pre>
<code>
    &lt;?php
        $ativo = true;
        $inativo = false;
        echo "Ativo: " . ($ativo ? 'Sim' : 'Não') . "&lt;br&gt;";
        echo "Inativo: " . ($inativo ? 'Sim' : 'Não');
    ?&gt;
</code>
            </pre>
            <p><b>Exemplo Completo:</b><br>
                Aqui está um exemplo mostrando todos os tipos de dados juntos.
            </p>
            <pre>
<code>
    &lt;?php
        $nome = "Maria";   // String
        $idade = 30;       // Integer
        $preco = 25.50;    // Float
        $ativo = true;     // Boolean
        
        echo "Nome: " . $nome . "&lt;br&gt;";
        echo "Idade: " . $idade . "&lt;br&gt;";
        echo "Preço: " . $preco . "&lt;br&gt;";
        echo "Ativo: " . ($ativo ? 'Sim' : 'Não');
    ?&gt;
</code>
            </pre>
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
import MenuPHP from '~/components/php/menuPHP.vue'
export default {
    name: "TiposDados",
    data() {
        return {
            msg: 'Tipos de Dados em PHP',
            video: 'https://www.youtube.com/embed/VIDEO_ID',
            propriedadesVideo: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            listaReferencias: [
                { id: 1, name: "w3schools", link: "https://www.w3schools.com/" },
                { id: 2, name: "MDN Web Docs", link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" },
                { id: 3, name: "ChatGPT", link: "https://chatgpt.com/" }
            ],
        }
    },
    components: {
        MenuPHP
    }
}
</script>
<style scoped>
.video {
    max-width: 70%;
    max-height: 70%;
}
</style>
