<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuPHP />
        </v-navigation-drawer>
        <v-main>
            <h1><b>{{msg}}</b></h1>
            <h4><b>Objetivo:</b></h4>
            <p>
                Nesta seção, você aprenderá sobre a concatenação de strings em PHP, que permite combinar diferentes partes de texto para formar mensagens completas e dinâmicas. Vamos explorar como usar o operador de concatenação e ver exemplos práticos.
            </p>
            <v-container class="flex">
                <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>
            <h2><b>6. Concatenação de Strings</b></h2>
            <p><b>O que é Concatenação de Strings?</b><br>
                Em PHP, concatenar strings significa unir várias partes de texto em uma única string. O operador de concatenação <code>.</code> é usado para juntar essas partes. Isso é útil para criar mensagens dinâmicas e personalizadas.
            </p>
            <p><b>Usando o Operador de Concatenação:</b><br>
                O operador <code>.</code> combina duas ou mais strings. Veja o exemplo simples abaixo:
            </p>
            <pre>
<code>
    &lt;?php
        $nome = "João";
        $mensagem = "Olá, " . $nome . "!";
        echo $mensagem;  // Saída: Olá, João!
    ?&gt;
</code>
            </pre>
            <p>Neste exemplo, a variável <code>$nome</code> é concatenada com as strings <code>"Olá, "</code> e <code>"!"</code> para formar a mensagem completa <code>"Olá, João!"</code>.</p>

            <h4><b>Exemplos Adicionais:</b></h4>
            <p><b>1. Combinar Texto com Valores Numéricos:</b><br>
                Você também pode concatenar texto com números. Veja como:
            </p>
            <pre>
<code>
    &lt;?php
        $idade = 25;
        $mensagem = "Você tem " . $idade . " anos.";
        echo $mensagem;  // Saída: Você tem 25 anos.
    ?&gt;
</code>
            </pre>
            <p>Neste exemplo, o número armazenado na variável <code>$idade</code> é convertido para texto e combinado com a string <code>"Você tem "</code> e <code>" anos."</code> para formar a mensagem completa.</p>

            <p><b>2. Concatenação com Quebra de Linha:</b><br>
                Se você deseja incluir quebras de linha em sua mensagem, pode usar a função <code>nl2br()</code> para converter quebras de linha (\n) em tags HTML <code>&lt;br&gt;</code>.
            </p>
            <pre>
<code>
    &lt;?php
        $nome = "João";
        $mensagem = "Olá, " . $nome . "!\nBem-vindo ao curso de PHP.";
        // Transforma quebras de linha em HTML
        echo nl2br($mensagem);
    ?&gt;
</code>
            </pre>
            <p>Neste exemplo, a string contém uma quebra de linha (\n) que é convertida em uma tag <code>&lt;br&gt;</code> pelo <code>nl2br()</code>, permitindo que a mensagem seja exibida em linhas separadas no navegador.</p>

            <p><b>3. Concatenar Várias Strings:</b><br>
                Você pode concatenar várias strings em uma única expressão. Veja o exemplo abaixo:
            </p>
            <pre>
<code>
    &lt;?php
        $primeiroNome = "Maria";
        $ultimoNome = "Silva";
        $mensagem = "Olá, " . $primeiroNome . " " . $ultimoNome . "!";
        echo $mensagem;  // Saída: Olá, Maria Silva!
    ?&gt;
</code>
            </pre>
            <p>Aqui, as variáveis <code>$primeiroNome</code> e <code>$ultimoNome</code> são concatenadas com um espaço e a string <code>"Olá, "</code> para criar a mensagem completa.</p>

            <p><b>4. Concatenar Strings com HTML:</b><br>
                É possível combinar strings e HTML para gerar conteúdo dinâmico.
            </p>
            <pre>
<code>
    &lt;?php
        $titulo = "Bem-vindo";
        $corpo = "<p>Este é o seu primeiro curso de PHP!</p>";
        $mensagem = "<p>" . $titulo . "</p>" . $corpo;
        echo $mensagem;
    ?&gt;
</code>
            </pre>
            <p>Neste exemplo, a string HTML é combinada com o título para criar uma mensagem HTML completa.</p>

        </v-main>
    </v-app>
</template>

<script>
import MenuPHP from '~/components/php/menuPHP.vue'
export default {
    name: "ConcatenacaoStrings",
    data() {
        return {
            msg: 'Concatenação de Strings',
            video: 'https://www.youtube.com/embed/VIDEO_ID',  // Substitua por um vídeo relevante
            propriedadesVideo: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        }
    },
    components: {
        MenuPHP
    }
}
</script>

<style scoped>
.v-main {
    padding: 10px 20px 10px 20px !important;
}
.flexItem {
    max-width: 70%;
    max-height: 70%;
}
</style>
