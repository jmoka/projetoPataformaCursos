<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuPHP />
        </v-navigation-drawer>
        <v-main>
            <h1><b>{{ msg }}</b></h1>
            <h4><b>Objetivo:</b></h4>
            <p>
                Nesta seção, você aprenderá como utilizar a função <code>date</code> em PHP, tanto dentro quanto fora do HTML, para exibir datas e horas formatadas em suas páginas e scripts.
            </p>
            <v-container class="flex">
                <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>
            <h1><b>Função `date` em PHP</b></h1>
            <ul>
                <li>
                    <h2><b>Uso da Função `date` Fora do HTML:</b></h2>
                </li>
                <p>
                    Quando você usa PHP fora de um contexto HTML, como em scripts CLI ou em arquivos `.php`, a função `date` pode ser usada para exibir a data e hora atuais. Veja o exemplo abaixo:
                </p>
                <h2>Linha de Comando</h2>
                <li>Acesse o <nuxt-link to="/phpPage/playground">PHP Playground</nuxt-link> </li>
                <li>Note que deixando a  "HTML Preview" selecionada ou não o codigo é executado</li>
                <li>Esse código é aceito tando no terminal quanto no browser</li>
                <li>Execute o código abaixo</li>
                <pre>
<code>
    &lt;?php
        echo date("Y-m-d H:i:s");
    ?&gt;
</code>
                </pre>
                <li><b>Explicação:</b><br>
                    Neste exemplo, o formato `"Y-m-d H:i:s"` é usado para exibir o ano, mês, dia, horas, minutos e segundos atuais.
                </li>
                <br>
                <li>
                    <h2><b>Uso da Função `date` Dentro do HTML:</b></h2>
                </li>
                <p>
                    Quando você deseja usar a função `date` dentro de um arquivo HTML, pode embutir código PHP para exibir a data. Veja o exemplo abaixo:
                </p>
                <h2>Página Web</h2>
                <li>Acesse o <nuxt-link to="/phpPage/playground">PHP Playground</nuxt-link> </li>
                <li>Deixe marcada a opção "HTML Preview"</li>
                <li>Dessa forma o interpretador será o Browser</li>
                <li>Execute o código abaixo</li>
                <pre>
<code>
&lt;?php
    echo "Hoje é: " . date("d/m/Y");
?&gt;
</code>
                </pre>
                <li><b>Explicação:</b><br>
                    Neste exemplo, o formato `"d/m/Y"` exibe a data no formato dia/mês/ano dentro de uma página web.
                </li>
                <br>
                <li>
                    <h2><b>Uso de Variáveis com `date`:</b></h2>
                </li>
                <p>
                    Você também pode armazenar o resultado da função `date` em uma variável para usar em diferentes partes do seu código. Veja o exemplo abaixo:
                </p>
                <h2>Página Web</h2>
                <li>Acesse o <nuxt-link to="/phpPage/playground">PHP Playground</nuxt-link> </li>
                <li>Deixe marcada a opção "HTML Preview"</li>
                <li>Execute o código abaixo</li>
                <pre>
<code>
&lt;?php
    $hoje = date("d/m/Y");
    echo "&lt;p&gt;Hoje é: " . $hoje . "&lt;/p&gt;";
?&gt;
</code>
                </pre>
                <li><b>Explicação:</b><br>
                    Aqui, a data atual é armazenada na variável `$hoje`, e então é usada para exibir a data na página.
                </li>
            </ul>
            <h4><b>Exemplos Adicionais:</b></h4>
            <ul>
                <li>
                    <h3>Exibindo Data e Hora em Formatos Diferentes:</h3>
                </li>
                <p>Você pode exibir a data e a hora em diversos formatos, utilizando diferentes parâmetros na função `date`. Veja o exemplo abaixo:</p>
                <li>Acesse o <nuxt-link to="/phpPage/playground">PHP Playground</nuxt-link> </li>
                <li>Execute o código abaixo</li>
                <pre>
<code>
    &lt;?php
        echo "Formato 1: " . date("Y-m-d") . "&lt;br&gt;";
        echo "Formato 2: " . date("d/m/Y") . "&lt;br&gt;";
        echo "Formato 3: " . date("l, F j, Y") . "&lt;br&gt;";
    ?&gt;
</code>
                </pre>
                <li><b>Explicação:</b><br>
                    Cada linha usa um formato diferente para exibir a data. O formato `"l, F j, Y"` exibe o dia da semana, o mês por extenso, o dia e o ano.
                </li>
            </ul>
        </v-main>
    </v-app>
</template>

<script>
import MenuPHP from '@/components/php/menu.PHP.vue'
export default {
    name: "DateFunction",
    data() {
        return {
            msg: 'Função date em PHP',
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
