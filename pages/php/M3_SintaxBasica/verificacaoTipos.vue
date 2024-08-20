<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuPHP />
        </v-navigation-drawer>
        <v-main>
            <h1><b>{{ msg }}</b></h1>
            <h4><b>Objetivo:</b></h4>
            <p>
                Nesta seção, você aprenderá como verificar os tipos de dados em PHP usando diversas funções
                como <code>is_int()</code>, <code>is_string()</code>, <code>is_array()</code>, entre outras. Estas
                funções são essenciais para garantir que o dado esteja no formato esperado antes de manipulá-lo.
            </p>
            <v-container class="flex">
                <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>
            <h1><b>Verificação de Tipos de Dados</b></h1>
            <div class="grid">
                <div v-for="item in funcoes" :key="item.id" class="item"><a :href=item.ancora class="cor">{{ item.name }}</a></div>
            </div>
        
            <ul>
                <li>
                    <h2><b>Verificando se uma variável é um inteiro:</b></h2>
                </li>
                <p id="is_int">
                    A função <code>is_int()</code> verifica se uma variável é um número inteiro.
                </p>
                <li>Acesse o <nuxt-link :to=codigoWeb>Código PHP</nuxt-link></li>
                <p>Obs: Apague o código existente e execute o comando Abaixo</p>
                <pre>
<code>
&lt;?php
    $valor = 42;
    if (is_int($valor)) {
        echo "É um inteiro";
    } else {
        echo "Não é um inteiro";
    }
?&gt;
</code>
                </pre>
                <li><b>Explicação:</b><br>
                    Neste exemplo, a função <code>is_int()</code> retorna <code>true</code> se o valor for um inteiro,
                    caso contrário, retorna <code>false</code>.
                </li>

                <li>
                    <h2><b>Verificando se uma variável é um número de ponto flutuante:</b></h2>
                </li>
                <p>
                    A função <code>is_float()</code> verifica se uma variável é um número de ponto flutuante (float).
                </p>
                <li>Acesse o <nuxt-link :to=codigoWeb>Código PHP</nuxt-link></li>
                <p>Obs: Apague o código existente e execute o comando Abaixo</p>
                <pre>
<code>
&lt;?php
    $valor = 3.14;
    if (is_float($valor)) {
        echo "É um float";
    } else {
        echo "Não é um float";
    }
?&gt;
</code>
                </pre>
                <li><b>Explicação:</b><br>
                    A função <code>is_float()</code> verifica se <code>$valor</code> é um número de ponto flutuante. O
                    resultado será "É um float".
                </li>

                <li>
                    <h2><b>Verificando se uma variável é um número de ponto flutuante (alias):</b></h2>
                </li>
                <p>
                    A função <code>is_double()</code> é um alias para <code>is_float()</code> e também verifica se uma
                    variável é um número de ponto flutuante.
                </p>
                <li>Acesse o <nuxt-link :to=codigoWeb>Código PHP</nuxt-link></li>
                <p>Obs: Apague o código existente e execute o comando Abaixo</p>
                <pre>
<code>
&lt;?php
    $valor = 2.718;
    if (is_double($valor)) {
        echo "É um double";
    } else {
        echo "Não é um double";
    }
?&gt;
</code>
                </pre>
                <li><b>Explicação:</b><br>
                    A função <code>is_double()</code> é equivalente a <code>is_float()</code>. Verifica se
                    <code>$valor</code> é um número de ponto flutuante e o resultado será "É um double".
                </li>

                <li>
                    <h2><b>Verificando se uma variável é um número de ponto flutuante (alias):</b></h2>
                </li>
                <p>
                    A função <code>is_real()</code> é um alias para <code>is_float()</code> e também verifica se uma
                    variável é um número de ponto flutuante.
                </p>
                <li>Acesse o <nuxt-link :to=codigoWeb>Código PHP</nuxt-link></li>
                <p>Obs: Apague o código existente e execute o comando Abaixo</p>
                <pre>
<code>
&lt;?php
    $valor = 1.618;
    if (is_real($valor)) {
        echo "É um real";
    } else {
        echo "Não é um real";
    }
?&gt;
</code>
                </pre>
                <li><b>Explicação:</b><br>
                    A função <code>is_real()</code> é equivalente a <code>is_float()</code>. Verifica se
                    <code>$valor</code> é um número de ponto flutuante e o resultado será "É um real".
                </li>

                <li>
                    <h2><b>Verificando se uma variável é um objeto:</b></h2>
                </li>
                <p>
                    A função <code>is_object()</code> verifica se uma variável é um objeto.
                </p>
                <li>Acesse o <nuxt-link :to=codigoWeb>Código PHP</nuxt-link></li>
                <p>Obs: Apague o código existente e execute o comando Abaixo</p>
                <pre>
<code>
&lt;?php
    class Pessoa {
        public $nome;
    }
    $pessoa = new Pessoa();
    if (is_object($pessoa)) {
        echo "É um objeto";
    } else {
        echo "Não é um objeto";
    }
?&gt;
</code>
                </pre>
                <li><b>Explicação:</b><br>
                    A função <code>is_object()</code> verifica se <code>$pessoa</code> é um objeto. O resultado será "É
                    um objeto".
                </li>

                <li>
                    <h2><b>Verificando se uma variável é um tipo escalar:</b></h2>
                </li>
                <p>
                    A função <code>is_scalar()</code> verifica se uma variável é um tipo escalar (integer, float,
                    string, boolean).
                </p>
                <li>Acesse o <nuxt-link :to=codigoWeb>Código PHP</nuxt-link></li>
                <p>Obs: Apague o código existente e execute o comando Abaixo</p>
                <pre>
<code>
&lt;?php
    $valor = "Texto";
    if (is_scalar($valor)) {
        echo "É um tipo escalar";
    } else {
        echo "Não é um tipo escalar";
    }
?&gt;
</code>
                </pre>
                <li><b>Explicação:</b><br>
                    A função <code>is_scalar()</code> verifica se <code>$valor</code> é um tipo escalar. No exemplo, a
                    variável contém uma string, então o resultado será "É um tipo escalar".
                </li>

                <li>
                    <h2><b>Verificando se uma variável é iterável:</b></h2>
                </li>
                <p>
                    A função <code>is_iterable()</code> verifica se uma variável pode ser iterada (por exemplo, arrays e
                    objetos que implementam a interface Traversable).
                </p>
                <li>Acesse o <nuxt-link :to=codigoWeb>Código PHP</nuxt-link></li>
                <p>Obs: Apague o código existente e execute o comando Abaixo</p>
                <pre>
<code>
&lt;?php
    $array = [1, 2, 3];
    if (is_iterable($array)) {
        echo "É iterável";
    } else {
        echo "Não é iterável";
    }
?&gt;
</code>
                </pre>
                <li><b>Explicação:</b><br>
                    A função <code>is_iterable()</code> verifica se <code>$array</code> pode ser iterado. O resultado
                    será "É iterável".
                    <span id="is_resource"/>
                </li>
              
                <br>             
                <br>
                <h1>is_resource()</h1>
                <li>                   
                    <h2><b>Verificando se uma variável é um recurso:</b></h2>
                </li>
                <p>
                    A função <code>is_resource()</code> verifica se uma variável é um recurso (por exemplo, uma conexão
                    de banco de dados, um arquivo aberto, etc.).
                </p>
                <li>Acesse o <nuxt-link :to=codigoWeb>Código PHP</nuxt-link></li>
                <p>Obs: Apague o código existente e execute o comando Abaixo</p>
                <pre>
<code>
&lt;?php
    $arquivo = fopen("exemplo.txt", "w");
    if (is_resource($arquivo)) {
        echo "É um recurso";
    } else {
        echo "Não é um recurso";
    }
    fclose($arquivo);
?&gt;
</code>
                </pre>
                <li><b>Explicação:</b><br>
                    A função <code>is_resource()</code> verifica se <code>$arquivo</code> é um recurso. No exemplo, o
                    resultado será "É um recurso".
                </li>
            </ul>
            <v-container class="flex">
                <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import MenuPHP from '~/components/php/menuPHP.vue'
export default {
    name: "verificacaoTipos",
    data() {
        return {
            msg: 'Funções de Verificação de Tipos de Dados em PHP',
            video: 'https://www.youtube.com/embed/videoID', // Substitua 'videoID' pelo ID do vídeo desejado
            propriedadesVideo: 'autoplay; encrypted-media',
            codigoWeb: "/phpPage/codePHP",
            funcoes: [
    { id: 1, name: "is_int()", ancora: "#is_int" },
    { id: 2, name: "is_string()", ancora: "#is_string" },
    { id: 3, name: "is_bool()", ancora: "#is_bool" },
    { id: 4, name: "is_array()", ancora: "#is_array" },
    { id: 5, name: "is_null()", ancora: "#is_null" },
    { id: 6, name: "is_callable()", ancora: "#is_callable" },
    { id: 7, name: "is_float()", ancora: "#is_float" },
    { id: 8, name: "is_double()", ancora: "#is_double" },
    { id: 9, name: "is_real()", ancora: "#is_real" },
    { id: 10, name: "is_object()", ancora: "#is_object" },
    { id: 11, name: "is_scalar()", ancora: "#is_scalar" },
    { id: 12, name: "is_iterable()", ancora: "#is_iterable" },
    { id: 13, name: "is_resource()", ancora: "#is_resource" },
    { id: 14, name: "is_countable()", ancora: "#is_countable" },
    { id: 15, name: "is_long()", ancora: "#is_long" },
    { id: 16, name: "is_infinite()", ancora: "#is_infinite" },
    { id: 17, name: "is_finite()", ancora: "#is_finite" },
    { id: 18, name: "is_nan()", ancora: "#is_nan" },
    { id: 19, name: "is_uploaded_file()", ancora: "#is_uploaded_file" },
    { id: 20, name: "is_executable()", ancora: "#is_executable" },
    { id: 21, name: "is_readable()", ancora: "#is_readable" },
    { id: 22, name: "is_writable()", ancora: "#is_writable" },
    { id: 23, name: "is_dir()", ancora: "#is_dir" },
    { id: 24, name: "is_file()", ancora: "#is_file" },
    { id: 25, name: "is_link()", ancora: "#is_link" },
    { id: 26, name: "is_serialized()", ancora: "#is_serialized" },
    { id: 27, name: "is_instanceof()", ancora: "#is_instanceof" },
    { id: 28, name: "is_a()", ancora: "#is_a" },
    { id: 29, name: "is_json()", ancora: "#is_json" },
    { id: 30, name: "is_binary()", ancora: "#is_binary" },
    { id: 31, name: "is_base64()", ancora: "#is_base64" },
    { id: 32, name: "is_prime()", ancora: "#is_prime" },
    { id: 33, name: "is_multiple()", ancora: "#is_multiple" },
    { id: 34, name: "is_power_of_two()", ancora: "#is_power_of_two" },
    { id: 35, name: "is_leap_year()", ancora: "#is_leap_year" },
    { id: 36, name: "is_weekend()", ancora: "#is_weekend" },
    { id: 37, name: "is_working_day()", ancora: "#is_working_day" },
    { id: 38, name: "is_holiday()", ancora: "#is_holiday" },
    { id: 39, name: "is_uuid()", ancora: "#is_uuid" },
    { id: 40, name: "is_ip()", ancora: "#is_ip" },
    { id: 41, name: "is_ipv4()", ancora: "#is_ipv4" },
    { id: 42, name: "is_ipv6()", ancora: "#is_ipv6" },
    { id: 43, name: "is_email()", ancora: "#is_email" }
]

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

.grid{
    background-color: rgba(105, 105, 105, 0.549);
    padding: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr ;
    gap: 10px;
    overflow: scroll;
}
.item {
            background-color:#E38108;          
            padding: 5px;         
            text-align: center;          
            border: 2px solid greenyellow;  
            color: green;  
        }
.cor{
    color: black;
}
</style>
