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
                            Em GraphQL, além de solicitar campos específicos em objetos, você pode passar argumentos
                            para
                            campos e objetos aninhados. Isso adiciona um nível adicional de flexibilidade e controle
                            sobre os
                            dados que você está solicitando. Vamos explorar como isso funciona e como pode ser aplicado
                            em suas
                            consultas.
                        </p>

                        <h3>Consultando com Argumentos</h3>
                        <p class="justificar">
                            Passar argumentos para consultas em GraphQL permite personalizar o resultado com base em
                            parâmetros
                            específicos. Isso é especialmente útil para obter dados de maneira mais eficiente e precisa.
                            Veja um exemplo básico:
                        </p>

                        <pre>
                            <code>
# Exemplo de consulta com argumento
{
  human(id: "1000") {
    name
    height
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            Aqui, a consulta está solicitando um humano específico com base em um ID. O servidor retorna
                            o nome
                            e a altura do humano com esse ID. O resultado seria:
                        </p>

                        <pre>
                            <code>
{
  "data": {
    "human": {
      "name": "Luke Skywalker",
      "height": 1.72
    }
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            Note que o ID é passado como um argumento para o campo <b>human</b>, o que permite buscar
                            informações
                            específicas de um indivíduo. Isso é diferente das APIs REST, onde você pode precisar
                            construir URLs
                            complexas para obter dados específicos.
                        </p>

                        <h3>Argumentos em Campos Escalares</h3>
                        <p class="justificar">
                            Argumentos também podem ser usados em campos escalares para ajustar a forma como os dados
                            são
                            retornados. Por exemplo, você pode querer converter unidades de medida. Veja o exemplo a
                            seguir, onde
                            um argumento é passado para converter a altura em diferentes unidades:
                        </p>

                        <pre>
                            <code>
# Exemplo de consulta com argumento em campo escalar
{
  human(id: "1000") {
    name
    height(unit: FOOT)
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
    "human": {
      "name": "Luke Skywalker",
      "height": 5.6430448
    }
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            Neste exemplo, o argumento <b>unit</b> é passado para o campo <b>height</b>, especificando
                            que a altura
                            deve ser retornada em pés (FOOT). O servidor faz a conversão e retorna o valor em pés.
                        </p>

                        <h3>Tipos de Argumentos</h3>
                        <p class="justificar">
                            GraphQL suporta diversos tipos de argumentos, incluindo tipos escalares, enumerados e
                            personalizados.
                            Veja um exemplo com um tipo Enum, que é uma forma de representar um conjunto finito de
                            opções:
                        </p>

                        <pre>
                            <code>
# Exemplo de tipo Enum
enum LengthUnit {
  METER
  FOOT
}

type Query {
  human(id: String!): Human
}

type Human {
  name: String
  height(unit: LengthUnit): Float
}
                            </code>
                        </pre>

                        <p class="justificar">
                            Neste exemplo, <b>LengthUnit</b> é um tipo Enum que define duas opções: METRE e FOOT. O
                            argumento <b>unit</b>
                            no campo <b>height</b> pode aceitar qualquer um desses valores. O uso de tipos Enum ajuda a
                            garantir que apenas
                            valores válidos sejam passados, melhorando a robustez e a segurança das consultas.
                        </p>

                        <p class="justificar">
                            Além dos tipos padrão e enums, você pode definir tipos personalizados em seu esquema
                            GraphQL. Esses tipos
                            personalizados podem ser usados como argumentos para fornecer mais flexibilidade e controle
                            sobre suas
                            consultas.
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
    name: "ArgumentosGraphQL",
    data() {
        return {
            msg: "Argumentos em GraphQL",
            linkAula: "https://graphql.org/learn/queries/#arguments", // Link para documentação adicional
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
