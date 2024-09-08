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
                            Em GraphQL, você pode usar algo chamado <b>aliases</b> para dar nomes diferentes aos
                            resultados das suas consultas.
                            Isso é útil quando você quer pedir a mesma informação mais de uma vez, mas com diferentes
                            detalhes ou parâmetros.
                            Vamos explorar como isso funciona com alguns exemplos simples!
                        </p>

                        <h3>O Que São Aliases?</h3>
                        <p class="justificar">
                            Imagine que você está perguntando a um amigo sobre diferentes brinquedos, e você quer saber
                            qual brinquedo é
                            o favorito dele em diferentes categorias, como "brinquedos de verão" e "brinquedos de
                            inverno".
                            Se você quiser saber sobre dois brinquedos favoritos em uma só pergunta, você pode usar
                            alias para dar nomes
                            diferentes para as respostas. Assim, você consegue separar as informações e entender melhor
                            o que seu amigo
                            está dizendo.
                        </p>

                        <h3>Exemplo 1: Usando Aliases para Diferentes Heróis</h3>
                        <p class="justificar">
                            Vamos dizer que queremos saber os heróis favoritos em dois episódios diferentes de um filme.
                            Podemos usar
                            aliases para obter essas informações em uma única consulta:
                        </p>

                        <pre>
                            <code>
# Exemplo 1: Obtendo heróis favoritos em dois episódios diferentes
{
  empireHero: hero(episode: EMPIRE) {
    name
  }
  jediHero: hero(episode: JEDI) {
    name
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            No resultado, teremos:
                        </p>

                        <pre>
                            <code>
{
  "data": {
    "empireHero": {
      "name": "Luke Skywalker"
    },
    "jediHero": {
      "name": "R2-D2"
    }
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            Aqui, usamos os aliases <b>empireHero</b> e <b>jediHero</b> para diferenciar os heróis dos
                            dois episódios.
                            Sem aliases, não poderíamos ter esses dois resultados na mesma consulta, pois eles teriam o
                            mesmo nome.
                        </p>

                        <h3>Exemplo 2: Consultando Diferentes Informações do Mesmo Objeto</h3>
                        <p class="justificar">
                            Imagine que você quer saber não só o nome, mas também a altura dos heróis. Você pode usar
                            aliases para
                            pedir essas informações separadamente:
                        </p>

                        <pre>
                            <code>
# Exemplo 2: Obtendo nome e altura dos heróis
{
  heroName: hero(episode: EMPIRE) {
    name
  }
  heroHeight: hero(episode: EMPIRE) {
    height
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            O resultado seria:
                        </p>

                        <pre>
                            <code>
{
  "data": {
    "heroName": {
      "name": "Luke Skywalker"
    },
    "heroHeight": {
      "height": 1.72
    }
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            Aqui, usamos os aliases <b>heroName</b> e <b>heroHeight</b> para separar as informações
                            sobre o nome e a altura
                            do mesmo herói.
                        </p>

                        <h3>Exemplo 3: Consultando Vários Heróis com Diferentes Detalhes</h3>
                        <p class="justificar">
                            Se quisermos saber diferentes detalhes sobre vários heróis, podemos usar aliases para isso
                            também:
                        </p>

                        <pre>
                            <code>
# Exemplo 3: Obtendo diferentes detalhes de heróis
{
  heroOne: hero(id: "1") {
    name
    homePlanet
  }
  heroTwo: hero(id: "2") {
    name
    species
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            O resultado será:
                        </p>

                        <pre>
                            <code>
{
  "data": {
    "heroOne": {
      "name": "Luke Skywalker",
      "homePlanet": "Tatooine"
    },
    "heroTwo": {
      "name": "Han Solo",
      "species": "Human"
    }
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            Usamos <b>heroOne</b> e <b>heroTwo</b> para diferenciar os detalhes dos dois heróis
                            diferentes.
                        </p>

                        <h3>Exemplo 4: Consultas Aninhadas com Aliases</h3>
                        <p class="justificar">
                            Às vezes, você pode querer fazer consultas mais complexas. Veja como usar aliases com
                            consultas aninhadas:
                        </p>

                        <pre>
                            <code>
# Exemplo 4: Consultas aninhadas com aliases
{
  heroDetails: hero(id: "1") {
    name
    friends {
      friendName: name
    }
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            O resultado seria:
                        </p>

                        <pre>
                            <code>
{
  "data": {
    "heroDetails": {
      "name": "Luke Skywalker",
      "friends": [
        {
          "friendName": "Han Solo"
        },
        {
          "friendName": "Leia Organa"
        }
      ]
    }
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            Aqui, usamos o alias <b>friendName</b> para o campo aninhado <b>name</b> dentro da lista de
                            amigos.
                        </p>

                        <h3>Exemplo 5: Consultas com Múltiplos Tipos de Dados</h3>
                        <p class="justificar">
                            Finalmente, veja como podemos combinar diferentes tipos de dados com aliases:
                        </p>

                        <pre>
                            <code>
# Exemplo 5: Combinação de diferentes tipos de dados
{
  heroInfo: hero(id: "1") {
    name
    abilities
  }
  planetInfo: planet(id: "1") {
    name
    climate
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            O resultado seria:
                        </p>

                        <pre>
                            <code>
{
  "data": {
    "heroInfo": {
      "name": "Luke Skywalker",
      "abilities": ["Force", "Lightsaber"]
    },
    "planetInfo": {
      "name": "Tatooine",
      "climate": "Arid"
    }
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            Aqui, usamos <b>heroInfo</b> e <b>planetInfo</b> para diferenciar as informações sobre o
                            herói e o planeta.
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
    name: "AliasesGraphQL",
    data() {
        return {
            msg: "Aliases em GraphQL",
            linkAula: "https://graphql.org/learn/queries/#aliases", // Link para documentação adicional
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
