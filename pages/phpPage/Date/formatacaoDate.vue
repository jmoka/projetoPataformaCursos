<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuPHP />
        </v-navigation-drawer>
        <v-main>
            <h1><b>{{ msg }}</b></h1>
            <h4><b>Objetivo:</b></h4>
            <p>
                Nesta seção, você aprenderá sobre como usar a função `date()` em PHP para formatar datas e horas. 
                Vamos explorar os diferentes caracteres (letras) que podem ser usados na função `date()` para construir o formato desejado.
            </p>
            <v-container class="flex">
                <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>
            <h1><b>Formatação de Datas e Horas com `date()`</b></h1>
            <li>Acesse o <nuxt-link to="/phpPage/playground">PHP Playground</nuxt-link> </li>
            <li>Execute os códigos abaixo</li>
            <ul>
                <li>
                    <h2><b>Uso de Letras na Função `date()`:</b></h2>
                </li>
                <p>
                    A função `date()` em PHP permite que você formate datas e horas usando diferentes letras que representam partes específicas da data e da hora.
                    Abaixo estão algumas das letras mais comuns que você pode usar:
                </p>
                <li><b>Dia:</b></li>
                <pre>
<code>
- `d`: Dia do mês, 2 dígitos com zeros à esquerda (01 a 31).
- `D`: Dia da semana, abreviado em três letras (Mon a Sun).
- `j`: Dia do mês sem zeros à esquerda (1 a 31).
- `l`: Dia da semana completo (Sunday a Saturday).
- `N`: Representação numérica do dia da semana (1 para segunda-feira a 7 para domingo).
- `S`: Sufixo ordinal do dia do mês, em inglês (st, nd, rd ou th). Exemplo: 1st, 2nd, 3rd.
- `w`: Representação numérica do dia da semana (0 para domingo a 6 para sábado).
- `z`: Dia do ano (0 a 365).
</code>
                </pre>
                <li><b>Mês:</b></li>
                <pre>
<code>
- `F`: Nome completo do mês (January a December).
- `m`: Mês, em dois dígitos com zeros à esquerda (01 a 12).
- `M`: Nome abreviado do mês, em três letras (Jan a Dec).
- `n`: Mês sem zeros à esquerda (1 a 12).
- `t`: Número de dias no mês dado.
</code>
                </pre>
                <li><b>Ano:</b></li>
                <pre>
<code>
- `Y`: Ano completo, 4 dígitos (e.g., 2024).
- `y`: Ano, 2 dígitos (e.g., 24).
</code>
                </pre>
                <li><b>Hora:</b></li>
                <pre>
<code>
- `a`: Ante meridiem e Post meridiem em minúsculas (am ou pm).
- `A`: Ante meridiem e Post meridiem em maiúsculas (AM ou PM).
- `g`: Hora em formato de 12 horas sem zeros à esquerda (1 a 12).
- `G`: Hora em formato de 24 horas sem zeros à esquerda (0 a 23).
- `h`: Hora em formato de 12 horas com zeros à esquerda (01 a 12).
- `H`: Hora em formato de 24 horas com zeros à esquerda (00 a 23).
- `i`: Minutos com zeros à esquerda (00 a 59).
- `s`: Segundos com zeros à esquerda (00 a 59).
</code>
                </pre>
                <li><b>Tempo Unix e Outros:</b></li>
                <pre>
<code>
- `U`: Timestamp Unix (segundos desde a Era Unix: 1 de Janeiro de 1970 00:00:00 GMT).
- `e`: Identificador do fuso horário (e.g., UTC, GMT, Atlantic/Azores).
- `T`: Abreviação do fuso horário (e.g., EST, MDT).
</code>
                </pre>
                <li><b>Exemplos de Uso:</b></li>
                <pre>
<code>
echo "Formato 1: " . date("Y-m-d") . "&lt;br&gt;";
echo "Formato 2: " . date("d/m/Y") . "&lt;br&gt;";
echo "Formato 3: " . date("l, F j, Y") . "&lt;br&gt;";
</code>
                </pre>
                <p>
                    Cada formato exibirá a data de forma diferente, utilizando as letras especificadas para representar os diversos componentes da data.
                </p>
            </ul>
            <h4><b>Exemplos Adicionais:</b></h4>
            <ul>
                <li>
                    <h3>Exibindo Data e Hora Completas:</h3>
                </li>
                <pre>
<code>
echo date("d/m/Y H:i:s");
</code>
                </pre>
                <li><b>Explicação:</b><br>
                    Neste exemplo, a data e hora serão exibidas no formato `dd/mm/aaaa hh:mm:ss`, como `18/08/2024 14:35:20`.
                </li>
            </ul>
        </v-main>
    </v-app>
</template>

<script>
import MenuPHP from '@/components/php/menu.PHP.vue'
export default {
    name: "FormataçãoDataHora",
    data() {
        return {
            msg: 'Formatação de Datas e Horas com PHP',
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
