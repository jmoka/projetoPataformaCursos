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
                            Em sua forma mais simples, o GraphQL é sobre pedir campos específicos em objetos. A grande
                            vantagem do
                            GraphQL é que ele permite que você solicite apenas os dados de que precisa, economizando
                            largura de banda
                            e processamento. Vamos começar olhando para uma consulta simples e o resultado que obtemos
                            ao executá-la.
                        </p>

                        <h3>Consultando Campos Específicos</h3>
                        <p class="justificar">
                            Veja o exemplo de uma consulta muito simples em GraphQL:
                        </p>

                        <pre>
                            <code>
# Exemplo de consulta para buscar o nome de um herói
{
  hero {
    name
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            E o resultado que recebemos ao executar a consulta:
                        </p>

                        <pre>
                            <code>
{
  "data": {
    "hero": {
      "name": "R2-D2"
    }
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            A consulta possui exatamente o mesmo formato que o resultado, o que é essencial para o
                            GraphQL,
                            pois você sempre obtém o que espera, e o servidor sabe exatamente quais campos o cliente
                            está
                            solicitando. Neste caso, o campo <b>name</b> retorna um valor do tipo <i>String</i>, o nome
                            do
                            herói "R2-D2".
                        </p>

                        <h3>Interatividade das Consultas</h3>
                        <p class="justificar">
                            O GraphQL permite consultas interativas, o que significa que você pode modificá-las para
                            solicitar
                            dados adicionais. Por exemplo, vamos adicionar o campo <b>appearsIn</b> ao objeto
                            <b>hero</b>:
                        </p>

                        <pre>
                            <code>
# Exemplo de consulta adicionando um campo
{
  hero {
    name
    appearsIn
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            Ao adicionar o campo <b>appearsIn</b>, o servidor agora retornará também os filmes em que o
                            herói
                            "R2-D2" aparece.
                        </p>

                        <h3>Campos Referentes a Objetos</h3>
                        <p class="justificar">
                            No exemplo anterior, pedimos apenas o nome do herói, que retornou uma <i>String</i>. No
                            entanto, os
                            campos em GraphQL também podem se referir a objetos. Neste caso, podemos fazer uma
                            subseleção de
                            campos para esse objeto. As consultas GraphQL podem percorrer objetos relacionados e seus
                            campos,
                            permitindo que os clientes busquem muitos dados relacionados em uma única solicitação.
                        </p>

                        <pre>
                            <code>
# Consulta com subseleção de campos
{
  hero {
    name
    # As consultas podem ter comentários!
    friends {
      name
    }
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            Resultado da consulta:
                        </p>

                        <pre>
                            <code>
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "friends": [
        {
          "name": "Luke Skywalker"
        },
        {
          "name": "Han Solo"
        },
        {
          "name": "Leia Organa"
        }
      ]
    }
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            Observe que neste exemplo o campo <b>friends</b> retorna uma lista de objetos. As consultas
                            GraphQL
                            são consistentes para itens únicos ou listas de itens; o esquema define o que esperar em
                            cada caso.
                        </p>

                        <h3>Vantagens de Utilizar Campos em GraphQL</h3>
                        <p class="justificar">
                            O uso de campos específicos em GraphQL oferece diversas vantagens:
                        </p>
                        <ul>
                            <li>Você sempre obtém exatamente os dados que solicitou.</li>
                            <li>Redução na quantidade de dados transferidos pela rede.</li>
                            <li>Maior controle sobre o formato e a estrutura da resposta.</li>
                            <li>Possibilidade de buscar dados relacionados em uma única solicitação.</li>
                        </ul>
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
    name: "CamposGraphQL",
    data() {
        return {
            msg: "Campos em GraphQL",
            linkAula: "https://graphql.org/learn/queries/#fields", // Link para documentação adicional
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
