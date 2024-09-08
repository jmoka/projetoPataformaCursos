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
                            Em GraphQL, você pode usar <b>variáveis</b> dentro de fragmentos para tornar suas consultas
                            mais flexíveis e dinâmicas.
                            Variáveis permitem que você defina valores fora da consulta e os use dentro dela, evitando a
                            necessidade de modificar o código de consulta sempre que precisar de diferentes parâmetros.
                            Vamos aprender como usar variáveis dentro de fragmentos com alguns exemplos.
                        </p>

                        <h3>Como Usar Variáveis em Fragmentos</h3>
                        <p class="justificar">
                            Para usar variáveis dentro de fragmentos, você deve declarar as variáveis na própria
                            consulta ou mutação e passar essas variáveis para onde o fragmento será utilizado.
                            Fragmentos em si não podem declarar variáveis, mas podem acessar variáveis declaradas na
                            consulta.
                        </p>

                        <h3>Exemplo 1: Consultando com Variáveis em Fragmentos</h3>
                        <p class="justificar">
                            Vamos criar uma consulta que usa variáveis para buscar informações de heróis com diferentes
                            episódios.
                            Usaremos um fragmento para definir quais campos queremos buscar e passaremos variáveis para
                            especificar o episódio.
                        </p>

                        <pre>
                            <code>
# Exemplo 1: Consultando com Variáveis em Fragmentos
query HeroInfo($episode1: Episode!, $episode2: Episode!) {
  hero1: hero(episode: $episode1) {
    ...heroDetails
  }
  hero2: hero(episode: $episode2) {
    ...heroDetails
  }
}

# Definindo o Fragmento
fragment heroDetails on Character {
  name
  appearsIn
  friends {
    name
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            No exemplo acima, usamos duas variáveis <code>$episode1</code> e <code>$episode2</code> para
                            definir os episódios dos heróis que queremos buscar.
                            O fragmento <code>heroDetails</code> é usado para especificar os campos que queremos para
                            cada herói.
                            Ao passar diferentes valores de variáveis, podemos obter informações dinâmicas sem modificar
                            o fragmento.
                        </p>

                        <h3>Exemplo 2: Usando Variáveis em Mutações com Fragmentos</h3>
                        <p class="justificar">
                            Variáveis também podem ser usadas em mutações para tornar as atualizações de dados mais
                            dinâmicas.
                            Vamos criar um exemplo de mutação que adiciona um herói ao banco de dados usando variáveis.
                        </p>

                        <pre>
                            <code>
# Exemplo 2: Usando Variáveis em Mutações com Fragmentos
mutation AddHero($name: String!, $appearsIn: [Episode!]!) {
  addHero(name: $name, appearsIn: $appearsIn) {
    ...heroFields
  }
}

# Definindo o Fragmento
fragment heroFields on Hero {
  id
  name
  appearsIn
}
                            </code>
                        </pre>

                        <p class="justificar">
                            Neste exemplo, a mutação <code>AddHero</code> usa duas variáveis, <code>$name</code> e
                            <code>$appearsIn</code>, para adicionar um novo herói ao banco de dados.
                            O fragmento <code>heroFields</code> é usado para especificar os campos que queremos receber
                            de volta após a mutação.
                        </p>

                        <h3>Exemplo 3: Fragmentos Aninhados com Variáveis</h3>
                        <p class="justificar">
                            Podemos usar fragmentos aninhados com variáveis para criar consultas ainda mais dinâmicas e
                            complexas.
                            No exemplo abaixo, usaremos variáveis para buscar informações detalhadas sobre os amigos de
                            um herói.
                        </p>

                        <pre>
                            <code>
# Exemplo 3: Fragmentos Aninhados com Variáveis
query HeroFriends($episode: Episode!) {
  hero(episode: $episode) {
    ...heroInfo
    friends {
      ...friendInfo
    }
  }
}

# Definindo os Fragmentos
fragment heroInfo on Character {
  name
  appearsIn
}

fragment friendInfo on Character {
  name
  appearsIn
}
                            </code>
                        </pre>

                        <p class="justificar">
                            Neste exemplo, a variável <code>$episode</code> é usada para especificar qual herói queremos
                            buscar.
                            Os fragmentos <code>heroInfo</code> e <code>friendInfo</code> são usados para obter
                            informações sobre o herói e seus amigos, respectivamente.
                        </p>

                        <h3>Exemplo 4: Utilizando Variáveis em Consultas de Busca Múltipla</h3>
                        <p class="justificar">
                            Suponha que você queira buscar detalhes sobre múltiplos heróis de uma vez.
                            Podemos usar variáveis e fragmentos para definir campos de forma flexível.
                        </p>

                        <pre>
                            <code>
# Exemplo 4: Utilizando Variáveis em Consultas de Busca Múltipla
query MultipleHeroes($ids: [ID!]!) {
  heroes(ids: $ids) {
    ...heroInfo
  }
}

# Definindo o Fragmento
fragment heroInfo on Character {
  name
  appearsIn
  friends {
    name
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            Aqui, passamos uma lista de IDs de heróis na variável <code>$ids</code> para buscar
                            múltiplos heróis ao mesmo tempo.
                            O fragmento <code>heroInfo</code> é usado para obter os campos desejados para cada herói.
                        </p>

                        <h3>Exemplo 5: Aplicando Variáveis em Consultas Condicionais com Fragmentos</h3>
                        <p class="justificar">
                            Você pode até usar variáveis em consultas condicionais que utilizam fragmentos. Vamos ver
                            como isso funciona:
                        </p>

                        <pre>
                            <code>
# Exemplo 5: Aplicando Variáveis em Consultas Condicionais com Fragmentos
query HeroConditional($includeFriends: Boolean!, $episode: Episode!) {
  hero(episode: $episode) {
    ...heroInfo
    friends @include(if: $includeFriends) {
      ...friendInfo
    }
  }
}

# Definindo os Fragmentos
fragment heroInfo on Character {
  name
  appearsIn
}

fragment friendInfo on Character {
  name
}
                            </code>
                        </pre>

                        <p class="justificar">
                            Neste exemplo, usamos a variável <code>$includeFriends</code> para decidir se queremos
                            incluir os amigos do herói na consulta.
                            O diretivo <code>@include(if: $includeFriends)</code> permite que a parte da consulta seja
                            condicional, dependendo do valor da variável.
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
    name: "VariáveisEmFragmentos",
    data() {
        return {
            msg: "Usando Variáveis em Fragmentos em GraphQL",
            linkAula: "https://graphql.org/learn/queries/#variables", // Link para documentação adicional
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
