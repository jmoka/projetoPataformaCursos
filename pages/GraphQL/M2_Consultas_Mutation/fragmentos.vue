<template>
    <v-app>
        <!-- Menu de navegação lateral -->
        <v-navigation-drawer app>
            <Menu />
        </v-navigation-drawer>
        <v-main>
            <!-- Cabeçalho -->
            <div>
                <h1>{{ msg }}</h1>
            </div>

            <!-- Container principal -->
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <!-- Introdução -->
                        <p class="justificar">
                            Em GraphQL, você pode precisar buscar a mesma informação várias vezes em diferentes partes
                            da sua aplicação.
                            Repetir a mesma consulta pode ser complicado e bagunçado. Para ajudar com isso, usamos algo
                            chamado <b>fragmentos</b>.
                            Fragmentos permitem que você defina um "pedaço" de consulta que pode ser reutilizado em
                            diferentes partes da sua consulta, tornando o código mais limpo e organizado.
                        </p>

                        <h3>O Que São Fragmentos?</h3>
                        <p class="justificar">
                            Imagine que você está montando um quebra-cabeça grande, onde várias peças se repetem. Em vez
                            de pegar uma peça nova toda vez, você usa a mesma peça várias vezes.
                            Fragmentos em GraphQL funcionam de forma semelhante. Você cria um fragmento uma vez e pode
                            usá-lo sempre que precisar, sem ter que repetir o mesmo código.
                        </p>

                        <h3>Exemplo 1: Comparando Heróis com Fragmentos</h3>
                        <p class="justificar">
                            Vamos comparar dois heróis lado a lado, mostrando informações sobre eles e seus amigos. Sem
                            fragmentos, teríamos que repetir os mesmos campos para cada herói.
                            Com fragmentos, podemos definir um conjunto de campos uma vez e reutilizá-lo:
                        </p>

                        <pre>
                            <code>
# Exemplo 1: Comparando Heróis com Fragmentos
{
  primeira: heroi(episodio: EMPIRE) {
    ...comparisonFields
  }
  segunda: heroi(episodio: JEDI) {
    ...comparisonFields
  }
}

# Definindo o Fragmento
fragment comparacao on Filmes { ## Filmes e o Type
  nome
  ano
  serie {
    name
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            No exemplo acima, criamos um fragmento chamado <code>comparisonFields</code> que inclui os
                            campos <code>name</code>, <code>appearsIn</code> e <code>friends</code>.
                            Usamos esse fragmento para obter informações sobre dois heróis diferentes,
                            <code>leftComparison</code> e <code>rightComparison</code>.
                            Isso evita a repetição dos mesmos campos e torna a consulta mais organizada e fácil de ler.
                        </p>

                        <h3>Exemplo 2: Reutilizando Fragmentos em Consultas</h3>
                        <p class="justificar">
                            Suponha que você queira mostrar a mesma informação em várias partes do seu aplicativo, mas
                            com diferentes contextos.
                            Você pode usar o mesmo fragmento para obter dados semelhantes em diferentes consultas:
                        </p>

                        <pre>
                            <code>
# Exemplo 2: Reutilizando Fragmentos
{
  hero1: hero(id: "1") {
    ...basicFields
  }
  hero2: hero(id: "2") {
    ...basicFields
  }
}

# Definindo o Fragmento
fragment basicFields on Character {  # Refere-se ao type Character
  name
  height
}
                            </code>
                        </pre>

                        <p class="justificar">
                            Aqui, usamos o fragmento <code>basicFields</code> para obter o <code>name</code> e a
                            <code>height</code> de dois heróis diferentes.
                            Dessa forma, podemos reutilizar o fragmento em diferentes consultas sem repetir o mesmo
                            código.
                        </p>

                        <h3>Exemplo 3: Fragmentos em Consultas Aninhadas</h3>
                        <p class="justificar">
                            Fragmentos também podem ser usados em consultas aninhadas para simplificar consultas mais
                            complexas:
                        </p>

                        <pre>
                            <code>
# Exemplo 3: Fragmentos em Consultas Aninhadas
{
  hero(id: "1") {
    ...heroDetails
    friends {
      ...friendDetails
    }
  }
}

# Definindo os Fragmentos
fragment heroDetails on Character { # Refere-se ao type Character
  name
  appearsIn
}

fragment friendDetails on Character {  # Refere-se ao type Character
  name
}
                            </code>
                        </pre>

                        <p class="justificar">
                            Neste exemplo, o fragmento <code>heroDetails</code> é usado para obter informações sobre o
                            herói, e o fragmento <code>friendDetails</code> é usado para obter os nomes dos amigos do
                            herói.
                            Isso torna a consulta mais modular e fácil de manter.
                        </p>

                        <h3>Exemplo 4: Fragmentos em Mutations</h3>
                        <p class="justificar">
                            Fragmentos também podem ser usados em mutations para simplificar a estrutura dos dados
                            retornados. Aqui está um exemplo onde usamos fragmentos para lidar com dados de um mutation:
                        </p>

                        <pre>
                            <code>
# Exemplo 4: Fragmentos em Mutations
mutation {
  addHero(name: "Leia Organa") {
    ...heroFields
  }
}

# Definindo o Fragmento
fragment heroFields on Hero {
  name
  id
}
                            </code>
                        </pre>

                        <p class="justificar">
                            No exemplo acima, usamos o fragmento <code>heroFields</code> para obter o <code>name</code>
                            e o <code>id</code> do herói adicionado.
                            Isso ajuda a manter a estrutura da consulta limpa e organizada.
                        </p>

                        <h3>Exemplo 5: Usando Fragmentos para Layouts Complexos</h3>
                        <p class="justificar">
                            Suponha que você tenha uma página que exibe vários detalhes sobre diferentes heróis. Usar
                            fragmentos permite que você defina e reutilize a estrutura dos dados de forma eficiente:
                        </p>

                        <pre>
                            <code>
# Exemplo 5: Usando Fragmentos para Layouts Complexos
{
  hero1: hero(id: "1") {
    ...heroDetails
  }
  hero2: hero(id: "2") {
    ...heroDetails
  }
}

# Definindo o Fragmento
fragment heroDetails on Hero {
  name
  appearsIn
  friends {
    name
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            Nesse exemplo, o fragmento <code>heroDetails</code> é utilizado para obter dados completos
                            sobre dois heróis diferentes.
                            O uso de fragmentos ajuda a evitar a repetição e simplifica a construção de consultas
                            complexas.
                        </p>
                    </v-col>
                </v-row>
            </v-container>

            <!-- Vídeo explicativo -->
            <v-container video>
                <v-responsive :aspect-ratio="16 / 9">
                    <iframe :src="video" :allow="propriedadesVideo" allowfullscreen></iframe>
                </v-responsive>
            </v-container>
        </v-main>

        <!-- Link para mais informações -->
        <div class="d-flex justify-center container-fluid">
            <h1><a :href="linkAula">Saiba Mais</a></h1>
        </div>

        <!-- Rodapé -->
        <v-footer>
            <Footer />
        </v-footer>
    </v-app>
</template>

<script>
import Menu from '@/components/graphQL/menuGraphQL.vue'
import Footer from '@/components/footer_page.vue'

export default {
    name: "Fragmentos",
    data() {
        return {
            msg: "Entendendo Fragmentos em GraphQL",
            linkAula: "https://graphql.org/learn/queries/#fragments", // Link para documentação adicional
            video: 'https://www.youtube.com/embed/VIDEO_ID', // Substitua VIDEO_ID pela ID real do vídeo
            propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        };
    },
    components: {
        Menu,
        Footer
    }
}
</script>

<style scoped>
.video {
    max-width: 70%;
    max-height: 70%;
}

.justificar {
    text-align: justify;
}
</style>
