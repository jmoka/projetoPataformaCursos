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
              Saiba mais sobre o GraphQL, como ele funciona e como usá-lo. Procurando documentação sobre
              como criar um serviço GraphQL? Existem bibliotecas para ajudá-lo a implementar o GraphQL em
              muitas linguagens diferentes. Para uma experiência de aprendizado aprofundada com tutoriais
              práticos, consulte os cursos de treinamento disponíveis.
            </p>

            <h3>História e Filosofia</h3>
            <p class="justificar">
              O GraphQL foi criado em 2012 pelo Facebook como uma alternativa ao REST para facilitar a
              construção de APIs mais eficientes. A motivação inicial foi melhorar a experiência do usuário
              em dispositivos móveis, reduzindo a quantidade de dados enviados pela rede e melhorando o
              desempenho geral. Em 2015, o Facebook lançou o GraphQL como um projeto de código aberto, o que
              levou a uma adoção crescente pela comunidade de desenvolvedores.
            </p>
            <p class="justificar">
              A filosofia por trás do GraphQL é permitir que os clientes (como aplicações frontend) tenham
              mais controle sobre quais dados precisam de um servidor, eliminando a sobrecarga de dados
              desnecessários que geralmente ocorre com as APIs REST tradicionais. Isso resulta em um uso de
              rede mais eficiente e uma melhor experiência do usuário.
            </p>

            <h3>O que é GraphQL?</h3>
            <p class="justificar">
              O GraphQL é uma linguagem de consulta para sua API e um tempo de execução do lado do
              servidor para executar consultas usando um sistema de tipos que você define para seus dados
              de API. O GraphQL não está vinculado a nenhum banco de dados ou mecanismo de armazenamento
              específico; em vez disso, ele é apoiado pelo seu código e dados existentes.
            </p>

            <h3>Vantagens sobre REST</h3>
            <p class="justificar">
              Embora tanto o GraphQL quanto o REST sejam usados para construir APIs, o GraphQL oferece várias
              vantagens importantes:
            </p>
            <ul>
              <li><b>Consulta Flexível:</b> O GraphQL permite que o cliente solicite exatamente os dados
                que precisa, e nada mais. Com REST, muitas vezes é necessário fazer múltiplas requisições para
                obter dados de diferentes endpoints.</li>
              <li><b>Menor Sobrecarga de Dados:</b> Como o cliente controla a consulta, o GraphQL pode reduzir
                significativamente a quantidade de dados transferidos entre o cliente e o servidor.</li>
              <li><b>Atualizações Mais Rápidas:</b> O GraphQL permite adicionar novos campos ou tipos ao seu
                esquema sem afetar os clientes existentes, tornando mais fácil evoluir sua API ao longo do tempo.</li>
              <li><b>Documentação Implícita:</b> O sistema de tipos do GraphQL também serve como documentação,
                permitindo que ferramentas como o GraphiQL ofereçam uma interface exploratória para desenvolvedores.
              </li>
              <li><b>Maior Eficiência de Rede:</b> Como o GraphQL usa uma única endpoint para todas as
                consultas, ele pode reduzir o número de requisições HTTP, otimizando a eficiência da rede.</li>
            </ul>

            <h3>Como funciona o GraphQL?</h3>
            <p class="justificar">
              Um serviço GraphQL é criado definindo tipos e campos nesses tipos e, em seguida, fornecendo
              funções chamadas resolvers para cada campo em cada tipo. Por exemplo, um serviço GraphQL que
              informa quem é o usuário conectado, bem como o nome desse usuário, pode ser definido da
              seguinte forma:
            </p>

            <pre>
                          <code>
const { ApolloServer } = require('apollo-server');

const typeDefs = `
type User {
  id: ID
  name: String
}

type Query {
  ola: String
  num: Int
  me: User
}
`;

const resolvers = {
Query: {
  ola() {
    return "Hello World";
  },
  num() {
    return 2;
  },
  me() {
    return { id: 1, name: "joao" };
  }
}
};

const server = new ApolloServer({
typeDefs,
resolvers,
});

server.listen().then(({ url }) => {
console.log(\`Executando em \${url}\`);
});
                          </code>
                      </pre>

            <p class="justificar">
              Depois que um serviço GraphQL está em execução (normalmente em uma URL em um serviço Web),
              ele pode receber consultas GraphQL para validar e executar. O serviço primeiro verifica uma
              consulta para garantir que ela se refira apenas aos tipos e campos definidos e, em seguida,
              executa as funções fornecidas para produzir um resultado.
            </p>

            <h3>Exemplo de Consulta e Resultado</h3>
            <p class="justificar">
              Por exemplo, a consulta:
            </p>

            <pre>
                          <code>
{
me {
  name
}
}
                          </code>
                      </pre>

            <p class="justificar">
              Pode produzir o seguinte resultado JSON:
            </p>

            <pre>
                          <code>
{
"me": {
  "name": "Luke Skywalker"
}
}
                          </code>
                      </pre>
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
  name: "Watchers",
  data() {
    return {
      msg: "Introdução ao GraphQL",
      linkAula: "https://graphql.org/learn/", // Link para documentação adicional
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
