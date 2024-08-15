<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuPHP />
        </v-navigation-drawer>
        <v-main>
            <h1><b>{{msg}}</b></h1>
            <h4><b>Objetivo:</b></h4>
            <p>
                Nesta seção, você aprenderá sobre os operadores aritméticos e de atribuição em PHP. Vamos explorar como usá-los para realizar operações matemáticas e atribuir valores às variáveis.
            </p>
            <v-container class="flex">
                <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>
            <h2><b>3. Operadores</b></h2>
            
            <h3><b>Operadores Aritméticos:</b></h3>
            <p>
                Os operadores aritméticos são usados para realizar operações matemáticas básicas. Aqui estão os operadores mais comuns:
            </p>
            <ul>
                <li><b>Adição (+):</b> Soma dois valores.</li>
                <li><b>Subtração (-):</b> Subtrai o segundo valor do primeiro.</li>
                <li><b>Multiplicação (*):</b> Multiplica dois valores.</li>
                <li><b>Divisão (/):</b> Divide o primeiro valor pelo segundo.</li>
                <li><b>Resto da Divisão (%):</b> Retorna o resto da divisão.</li>
            </ul>
            <p><b>Exemplos de Operadores Aritméticos:</b></p>
            <pre>
<code>
    &lt;?php
        $soma = 5 + 3;         // Resultado: 8
        $subtracao = 10 - 4;   // Resultado: 6
        $produto = 4 * 2;      // Resultado: 8
        $divisao = 20 / 4;     // Resultado: 5
        $resto = 7 % 3;        // Resultado: 1
        echo "Soma: " . $soma . "&lt;br&gt;";
        echo "Subtração: " . $subtracao . "&lt;br&gt;";
        echo "Produto: " . $produto . "&lt;br&gt;";
        echo "Divisão: " . $divisao . "&lt;br&gt;";
        echo "Resto: " . $resto;
    ?&gt;
</code>
            </pre>
            
            <h3><b>Operadores de Atribuição:</b></h3>
            <p>
                Os operadores de atribuição são usados para atribuir valores às variáveis. Eles podem ser usados em conjunto com operadores aritméticos para simplificar o código.
            </p>
            <ul>
                <li><b>=:</b> Atribui um valor a uma variável.</li>
                <li><b>+=:</b> Adiciona um valor à variável e atribui o resultado de volta.</li>
                <li><b>-=:</b> Subtrai um valor da variável e atribui o resultado de volta.</li>
                <li><b>*=:</b> Multiplica a variável por um valor e atribui o resultado de volta.</li>
                <li><b>/=:</b> Divide a variável por um valor e atribui o resultado de volta.</li>
                <li><b>%=:</b> Calcula o resto da divisão da variável por um valor e atribui o resultado de volta.</li>
            </ul>
            <p><b>Exemplos de Operadores de Atribuição:</b></p>
            <pre>
<code>
    &lt;?php
        $x = 10;      // Atribui 10 a $x
        $x += 5;      // Adiciona 5 a $x (agora $x é 15)
        $x -= 3;      // Subtrai 3 de $x (agora $x é 12)
        $x *= 2;      // Multiplica $x por 2 (agora $x é 24)
        $x /= 4;      // Divide $x por 4 (agora $x é 6)
        $x %= 3;      // Calcula o resto da divisão de $x por 3 (agora $x é 0)
        echo "Valor final de x: " . $x;
    ?&gt;
</code>
            </pre>
        </v-main>
    </v-app>
</template>

<script>
import MenuPHP from '@/components/php/menu.PHP.vue'
export default {
    name: "Operadores",
    data() {
        return {
            msg: 'Operadores em PHP',
            video: 'https://www.youtube.com/embed/VIDEO_ID', // Substitua pelo link do vídeo
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
    max-height: 70%
}
</style>
