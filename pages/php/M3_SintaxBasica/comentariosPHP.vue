<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuPHP />
        </v-navigation-drawer>
        <v-main>
            <h1><b>{{ msg }}</b></h1>
            <h4><b>Objetivo:</b></h4>
            <p>
                Nesta seção, você aprenderá sobre a importância dos comentários no código PHP e como utilizá-los
                corretamente para tornar seu código mais legível e compreensível.
            </p>
            <v-container video>
                <v-responsive :aspect-ratio="16 / 9">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>
            <h2><b>4. Comentários no Código</b></h2>
            <p><b>Importância dos Comentários:</b><br>
                Comentários são partes do código que são ignoradas pelo interpretador PHP. Eles são usados para explicar
                o que o código faz, tornando-o mais fácil de entender para outras pessoas (ou para você mesmo no
                futuro). Comentários também podem ser usados para desativar partes do código temporariamente.
            </p>
            <p><b>Tipos de Comentários:</b></p>
            <ul>
                <li><b>Comentário de uma linha:</b><br>
                    Usado para adicionar uma breve explicação ou nota sobre o código. É iniciado com <code>//</code> ou
                    <code>#</code>.
                </li>
                <pre>
<code>
    &lt;?php
        // Este é um comentário de uma linha
        # Este também é um comentário de uma linha
    ?&gt;
</code>
                </pre>
                <li><b>Comentário de múltiplas linhas:</b><br>
                    Usado para comentários mais longos ou para desativar várias linhas de código. É iniciado com
                    <code>/*</code> e terminado com <code>*/</code>.
                </li>
                <pre>
<code>
    &lt;?php
        /*
         Este é um comentário de múltiplas linhas.
         Pode ser usado para fornecer uma explicação mais detalhada
         sobre o que o código está fazendo.
        */
    ?&gt;
</code>
                </pre>
            </ul>
            <p><b>Exemplo:</b><br>
                Vamos ver um exemplo prático de como você pode usar comentários no seu código PHP.
            </p>
            <pre>
<code>
    &lt;?php
        // Definindo uma variável para armazenar o nome
        $nome = "João";

        /*
         Abaixo, estamos exibindo uma mensagem com o nome da pessoa
         que foi definido anteriormente.
        */
        echo "Olá, " . $nome . "!";
    ?&gt;
</code>
            </pre>
            <p>
                Neste exemplo, o comentário de uma linha explica que a variável está sendo definida, enquanto o
                comentário de múltiplas linhas explica o propósito do código que segue.
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
import MenuPHP from '~/components/php/menuPHP.vue'
export default {
    name: "ComentariosCodigo",
    data() {
        return {
            msg: 'Comentários no Código',
            video: 'https://www.youtube.com/embed/VIDEO_ID',  // Substitua por um vídeo relevante
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