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
                            No GraphQL, "Queries" e "Mutations" são dois dos principais conceitos usados para interagir
                            com uma API. Eles definem como os dados são solicitados e modificados respectivamente. Esta
                            aula fornece uma visão geral de como Queries e Mutations funcionam, sua sintaxe, e exemplos
                            básicos de uso.
                        </p>

                        <h3>O que são Queries?</h3>
                        <p class="justificar">
                            Queries são usadas no GraphQL para buscar dados do servidor. Elas especificam os campos que
                            o
                            cliente deseja obter e o servidor responde apenas com os dados solicitados. As queries são
                            semelhantes a requisições HTTP GET no REST, mas com maior flexibilidade, permitindo ao
                            cliente
                            definir a forma exata da resposta.
                        </p>

                        <pre>
                            <code>
# Exemplo de Query para buscar o nome de um usuário
{
  user(id: "1") {
    id
    name
    email
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            A query acima busca as informações do usuário com ID "1" e retorna os campos "id", "name" e
                            "email" do usuário.
                        </p>

                        <h3>O que são Mutations?</h3>
                        <p class="justificar">
                            Mutations são usadas no GraphQL para modificar dados no servidor, como criar, atualizar ou
                            excluir dados. As mutations são semelhantes a requisições HTTP POST, PUT, PATCH ou DELETE no
                            REST. Elas permitem que o cliente envie dados ao servidor para realizar operações de escrita
                            e, muitas vezes, retornam o estado atualizado após a operação.
                        </p>

                        <pre>
                            <code>
# Exemplo de Mutation para criar um novo usuário
mutation {
  createUser(input: {name: "John Doe", email: "john@example.com"}) {
    id
    name
    email
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            A mutation acima cria um novo usuário com o nome "John Doe" e o email "john@example.com".
                            Ela
                            retorna os dados do novo usuário criado, incluindo seu ID, nome e email.
                        </p>

                        <h3>Diferença entre Queries e Mutations</h3>
                        <p class="justificar">
                            A principal diferença entre Queries e Mutations é o tipo de operação que elas realizam:
                        </p>
                        <ul>
                            <li><b>Queries:</b> São usadas para leitura de dados. Elas não alteram o estado do servidor
                                e
                                são chamadas de "operações de leitura".</li>
                            <li><b>Mutations:</b> São usadas para operações de escrita que modificam dados no servidor,
                                como
                                criar, atualizar ou excluir informações.</li>
                        </ul>

                        <h3>Execução de Queries e Mutations</h3>
                        <p class="justificar">
                            Queries e Mutations são escritas de maneira declarativa e executadas em um serviço GraphQL
                            endpoint. Ao escrever uma query ou mutation, o cliente define o formato da resposta
                            desejada.
                            O servidor GraphQL processa a solicitação e retorna apenas os dados especificados.
                        </p>

                        <h3>Exemplo de Uso</h3>
                        <p class="justificar">
                            Um cliente pode usar uma query para buscar dados de um servidor, como uma lista de usuários,
                            e
                            então usar uma mutation para adicionar um novo usuário:
                        </p>

                        <pre>
                            <code>
# Query para listar todos os usuários
{
  users {
    id
    name
    email
  }
}

# Mutation para adicionar um novo usuário
mutation {
  addUser(input: {name: "Jane Doe", email: "jane@example.com"}) {
    id
    name
    email
  }
}
                            </code>
                        </pre>

                        <p class="justificar">
                            Esse exemplo demonstra como um cliente pode usar queries para recuperar dados existentes e
                            mutations para modificar dados no servidor.
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
    name: "QueriesAndMutations",
    data() {
        return {
            msg: "Queries e Mutations no GraphQL",
            linkAula: "https://graphql.org/learn/queries/", // Link para documentação adicional
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
