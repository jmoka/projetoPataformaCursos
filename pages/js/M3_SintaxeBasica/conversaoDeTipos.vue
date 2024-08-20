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
                Nesta aula, você aprenderá sobre a conversão de tipos em JavaScript, incluindo como e quando o
                JavaScript converte tipos automaticamente e como realizar conversões manuais.
            </p>
            <v-container class="flex">
                <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>
            <h2><b>Conteúdo:</b></h2>
            <ol>
                <h3>
                    <li><b>O que é Conversão de Tipos?</b></li>
                </h3>
                <h3>
                    <li><b>Conversão Automática (Coerção)</b></li>
                </h3>
                <h3>
                    <li><b>Conversão Manual (Casting)</b></li>
                </h3>
                <h3>
                    <li><b>Exemplos Práticos</b></li>
                </h3>
                <h3>
                    <li><b>Conclusão</b></li>
                </h3>
            </ol>

            <h2><b>1. O que é Conversão de Tipos?</b></h2>
            <p>
                Conversão de tipos em JavaScript refere-se ao processo de transformar um valor de um tipo de dado para
                outro, como converter uma string em um número ou vice-versa.
            </p>

            <h2><b>2. Conversão Automática (Coerção)</b></h2>
            <p>
                A conversão automática, ou coerção, acontece quando o JavaScript converte tipos de forma implícita. Isso
                pode ocorrer em operações matemáticas, onde strings são convertidas em números ou vice-versa.
            </p>
            <h3><b>Exemplo:</b></h3>
            <pre><code>
          console.log("5" - 2); // 3 (string "5" é convertida para número)
          console.log("5" + 2); // "52" (número 2 é convertido para string)
        </code></pre>

            <h2><b>3. Conversão Manual (Casting)</b></h2>
            <p>
                A conversão manual, ou casting, é quando você explicitamente converte um valor de um tipo para outro,
                utilizando funções como <code>Number()</code>, <code>String()</code>, ou <code>Boolean()</code>.
            </p>
            <h3><b>Exemplo:</b></h3>
            <pre><code>
          let num = "123";
          console.log(Number(num)); // 123 (string convertida para número)
  
          let bool = 0;
          console.log(Boolean(bool)); // false (0 convertido para booleano)
        </code></pre>

            <h2><b>4. Exemplos Práticos</b></h2>
            <p>Abaixo estão alguns exemplos adicionais de conversão de tipos.</p>

            <h3><b>Exemplo 1: Convertendo String para Número</b></h3>
            <pre><code>
          let str = "42";
          let num = Number(str);
          console.log(typeof num); // "number"
        </code></pre>

            <h3><b>Exemplo 2: Convertendo Número para String</b></h3>
            <pre><code>
          let num = 100;
          let str = String(num);
          console.log(typeof str); // "string"
        </code></pre>

            <h3><b>Exemplo 3: Convertendo Valores para Booleano</b></h3>
            <pre><code>
          let value = "";
          console.log(Boolean(value)); // false (string vazia é false)
  
          value = "Hello";
          console.log(Boolean(value)); // true (string não vazia é true)
        </code></pre>

            <h2><b>5. Conclusão</b></h2>
            <p>
                A conversão de tipos em JavaScript é uma parte essencial do desenvolvimento, permitindo que você
                trabalhe de forma eficaz com diferentes tipos de dados. Compreender quando o JavaScript faz conversões
                automáticas e como realizar conversões manuais é fundamental para evitar erros e garantir que seu código
                funcione conforme o esperado.
            </p>
        </v-main>
    </v-app>
</template>

<script>
import MenuJs from '~/components/js/menuJS.vue'
export default {
    name: "conversaoDeTipos",
    data() {
        return {
            msg: "Conversão de Tipos em JavaScript",
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
}

li {
    color: #894200;
}

.flexItem {
    max-width: 70%;
    max-height: 70%;
}
</style>