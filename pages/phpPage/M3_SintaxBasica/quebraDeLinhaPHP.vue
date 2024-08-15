<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuPHP />
        </v-navigation-drawer>
        <v-main>
            <h1><b>{{ msg }}</b></h1>
            <h4><b>Objetivo:</b></h4>
            <p>
                Nesta seção, você aprenderá sobre como realizar quebras de linha em PHP e como exibir texto formatado.
                Vamos explorar como adicionar quebras de linha tanto em scripts PHP quanto em HTML.
            </p>
            <v-container class="flex">
                <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>
            <h2><b>Quebra de Linha</b></h2>
            
            <ul>
                <li><b>Quebra de Linha em PHP (linha de Comando):</b><br>
                    Para criar uma quebra de linha em uma string em PHP, você pode usar o caractere especial
                    <code>\n</code>. Esse método é útil quando você está trabalhando com scripts PHP executados em 
                    <u>linha de comando (CLI)</u> ou deseja formatar o texto no console.
                </li>
                <pre>
<code>
    &lt;?php
        echo "Linha 1\nLinha 2\nLinha 3";
    ?&gt;
</code>
                </pre>
                <li><b>Explicação:</b><br>
                    No exemplo acima, cada <code>\n</code> representa uma quebra de linha, resultando em três linhas
                    separadas quando o texto é exibido no terminal.
                </li>
                
                <li><b>Quebra de Linha em HTML (página web):</b><br>
                    Em um contexto de HTML, você deve usar a tag <code>&lt;br&gt;</code> para inserir uma quebra de linha
                    dentro de uma <u>página web</u>. Esta tag é usada para separar linhas de texto no navegador.
                </li>
                <pre>
<code>
    &lt;?php
        echo "Linha 1&lt;br&gt;Linha 2&lt;br&gt;Linha 3";
    ?&gt;
</code>
                </pre>
                <li><b>Explicação:</b><br>
                    A tag <code>&lt;br&gt;</code> é um elemento HTML que força uma quebra de linha na renderização da página
                    web, então o texto será exibido em três linhas distintas no navegador.
                </li>
                
                <li><b>Função <code>nl2br()</code>:</b><br>
                    A função <code>nl2br()</code> é usada para converter quebras de linha em texto (representadas por
                    <code>\n</code>) em tags HTML <code>&lt;br&gt;</code>. Isso facilita a exibição de texto formatado
                    corretamente em uma página web.
                </li>
                <pre>
<code>
    &lt;?php
        $texto = "Linha 1\nLinha 2\nLinha 3";
        echo nl2br($texto);
    ?&gt;
</code>
                </pre>
                <li><b>Explicação:</b><br>
                    No exemplo acima, a função <code>nl2br()</code> transforma cada <code>\n</code> em uma tag
                    <code>&lt;br&gt;</code>, garantindo que o texto apareça corretamente em linhas separadas no HTML.
                </li>
            </ul>

            <h4><b>Exemplos Adicionais:</b></h4>
            <ul>
                <li><b>Exibindo Texto Formatado com Quebras de Linha:</b><br>
                    Veja como você pode usar <code>nl2br()</code> para exibir texto com quebras de linha em uma página HTML:
                </li>
                <pre>
<code>
    &lt;?php
        $mensagem = "Olá!\nComo você está?\nEspero que esteja bem.";
        echo nl2br($mensagem);
    ?&gt;
</code>
                </pre>
                <li><b>Explicação:</b><br>
                    Neste exemplo, a função <code>nl2br()</code> garante que cada linha da mensagem seja exibida em uma nova
                    linha no HTML.
                </li>
                
                <li><b>Utilizando Quebras de Linha em Texto Dinâmico:</b><br>
                    Imagine que você está gerando um relatório com múltiplas seções e precisa de quebras de linha para
                    formatar o texto. Veja como fazer isso:
                </li>
                <pre>
<code>
    &lt;?php
        $titulo = "Relatório";
        $corpo = "Seção 1: Dados\nSeção 2: Análise\nSeção 3: Conclusão";
        echo "<h1>" . $titulo . "</h1>";
        echo nl2br($corpo);
    ?&gt;
</code>
                </pre>
                <li><b>Explicação:</b><br>
                    Aqui, o título é exibido como um cabeçalho, e o corpo do texto é formatado com quebras de linha
                    apropriadas para uma leitura clara.
                </li>
            </ul>
            
        </v-main>
    </v-app>
</template>

<script>
import MenuPHP from '@/components/php/menu.PHP.vue'
export default {
    name: "QuebraLinha",
    data() {
        return {
            msg: 'Quebra de Linha',
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
