<template>
    <v-app>
        <!-- Menu de navegação lateral -->
        <v-navigation-drawer app>
            <Menu />
        </v-navigation-drawer>
        <v-main>
            <div>
                <h1>{{ msg }}</h1>
            </div>

            <!-- Container principal -->
            <v-container fluid>
                <v-row>
                    <v-col cols="12">
                        <!-- Introdução -->
                        <h3>Introdução ao GraphQL</h3>
                        <p class="justificar">
                            <par>GraphQL (Graph Query Language) é uma linguagem de consulta para APIs e um runtime que
                                processa essas consultas. Criado pelo Facebook em 2012 e lançado publicamente em 2015, o
                                GraphQL permite que os clientes solicitem exatamente os dados de que precisam, de
                                maneira eficiente e flexível, sem as limitações típicas das APIs REST.</par>
                        </p>

                        <!-- O que é GraphQL? -->
                        <h3>O que é GraphQL?</h3>
                        <p class="justificar">
                            <par>GraphQL é uma linguagem para consultar APIs que permite pedir exatamente os dados que
                                você precisa e nada mais. Ele utiliza um sistema de tipos fortemente tipado para definir
                                a estrutura dos dados que uma API pode fornecer. A principal unidade de operação em
                                GraphQL é a <strong>query</strong>, que descreve exatamente quais dados o cliente
                                precisa.</par>
                        </p>

                        <!-- Exemplo de Query -->
                        <h3>Exemplo de Query</h3>
                        <p class="justificar">
                            <par>Abaixo está um exemplo de query em GraphQL, que solicita informações específicas de um
                                usuário:</par>
                        </p>
                        <code>
                            query {<br>
                            &nbsp;&nbsp;user(id: "1") {<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;name<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;email<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;posts {<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;}<br>
                            &nbsp;&nbsp;}<br>
                            }
                        </code>

                        <!-- Principais Características -->
                        <h3>Principais Características do GraphQL</h3>
                        <p class="justificar">
                            <par>GraphQL permite solicitações flexíveis, oferecendo controle total ao cliente sobre os
                                dados solicitados. Além disso, utiliza tipagem estrita, o que garante a validade das
                                consultas, e organiza a resposta de dados de forma hierárquica, o que facilita a
                                interpretação e a manipulação dos dados.</par>
                        </p>

                        <!-- Comparação com REST -->
                        <h3>Comparação com REST</h3>
                        <p class="justificar">
                            <par>Diferentemente de REST, onde múltiplos endpoints podem ser necessários para obter
                                diferentes tipos de dados, o GraphQL permite uma requisição única para todos os dados
                                necessários, tornando-o mais eficiente. Enquanto REST pode resultar em
                                <em>overfetching</em> (dados em excesso) ou <em>underfetching</em> (dados
                                insuficientes), o GraphQL retorna apenas o que foi solicitado, garantindo uma melhor
                                performance e experiência para o desenvolvedor.</par>
                        </p>

                        <!-- Vantagens de Usar GraphQL -->
                        <h3>Vantagens de Usar GraphQL</h3>
                        <p class="justificar">
                            <par>O GraphQL oferece vantagens como eficiência na obtenção de dados, flexibilidade,
                                simplificação de requisições, evolução sem a necessidade de versões diferentes e suporte
                                a ferramentas modernas de desenvolvimento.</par>
                        </p>
                    </v-col>
                </v-row>
            </v-container>

            <!-- Vídeo explicativo -->
            <v-container>
                <v-responsive :aspect-ratio="16 / 9">
                    <iframe :src="video" :allow="propriedadesVideo" allowfullscreen></iframe>
                </v-responsive>
            </v-container>

        </v-main>
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
import Menu from '@/components/graphQL/menuGraphQL.vue';
import Footer from '@/components/footer_page.vue';

export default {
    name: "Watchers",
    data() {
        return {
            msg: "O que é GraphQL?",
            linkAula: "https://graphql.org/learn/", // Link para saber mais
            video: 'https://www.youtube.com/embed/VIDEO_ID', // Substitua VIDEO_ID pela ID real do vídeo explicativo
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
