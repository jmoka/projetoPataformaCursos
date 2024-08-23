<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuJs />
        </v-navigation-drawer>
        <v-main>
            <h1><b>{{ msg }}</b></h1>

            <h4><b>Objetivo:</b></h4>
            <p>
                Nesta aula, você aprenderá como usar o comando <code>npm init</code> para iniciar um novo projeto
                Node.js e criar um arquivo <code>package.json</code>. Esse arquivo é essencial para gerenciar as
                dependências e as informações do seu projeto.
            </p>m JavaScript, incluindo a instalação de ferramentas essenciais e a criação de um projeto básico.
            <!-- Placeholder do vídeo -->
            <v-container video>
                <v-responsive :aspect-ratio="16 / 9">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>


            <h2><b>Conteúdo:</b></h2>
            <ol>
                <h3>
                    <li><b>Navegar até o diretório do projeto</b></li>
                </h3>
                <h3>
                    <li><b>Iniciar o processo de criação do <code>package.json</code></b></li>
                </h3>
                <h3>
                    <li><b>Preenchendo as informações do <code>package.json</code></b></li>
                </h3>
                <h3>
                    <li><b>Instalar dependências</b></li>
                </h3>
                <h3>
                    <li><b>Exemplo de um <code>package.json</code> gerado</b></li>
                </h3>
            </ol>

            <h2><b>1. Navegar até o diretório do projeto</b></h2>
            <p>
                Primeiro, você deve estar no diretório onde deseja criar seu projeto. Certifique-se de que o terminal
                esteja aberto no local correto, como mostrado abaixo:
            </p>
            <pre><code>D:\projetoAulaJS></code></pre>

            <h2><b>2. Iniciar o processo de criação do <code>package.json</code></b></h2>
            <p>
                Com o terminal aberto no diretório do projeto, execute o comando <code>npm init</code>. Isso iniciará um
                assistente interativo que guiará você na criação do arquivo <code>package.json</code>.
            </p>
            <pre><code>npm init</code></pre>

            <h2><b>3. Preenchendo as informações do <code>package.json</code></b></h2>
            <p>
                O utilitário <code>npm init</code> fará várias perguntas para configurar o arquivo
                <code>package.json</code>. Você pode pressionar <b>Enter</b> para aceitar os valores padrão ou fornecer
                suas próprias respostas. Aqui estão alguns exemplos das perguntas:
            </p>
            <pre><code>
        package name: (projetoaulajs)
        version: (1.0.0)
        description: Meu projeto JavaScript de exemplo
        entry point: (index.js)
        test command:
        git repository:
        keywords:
        author: Seu Nome
        license: (ISC)
      </code></pre>
            <p>
                Cada uma dessas perguntas configura uma parte do arquivo <code>package.json</code>, que armazenará
                informações importantes sobre o seu projeto.
            </p>

            <h2><b>4. Instalar dependências</b></h2>
            <p>
                Após a criação do <code>package.json</code>, você pode começar a adicionar dependências ao seu projeto.
                Por exemplo, para instalar o pacote <code>express</code>, execute:
            </p>
            <pre><code>npm install express</code></pre>
            <p>
                Isso adicionará <code>express</code> à seção de dependências do seu <code>package.json</code>.
            </p>

            <h2><b>5. Exemplo de um <code>package.json</code> gerado</b></h2>
            <p>
                Aqui está um exemplo de como o arquivo <code>package.json</code> pode parecer após o processo de
                configuração:
            </p>
            <pre><code>
        {
          "name": "projetoaulajs",
          "version": "1.0.0",
          "description": "Meu projeto JavaScript de exemplo",
          "main": "index.js",
          "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
          },
          "author": "Seu Nome",
          "license": "ISC",
          "dependencies": {
            "express": "^4.17.1"
          }
        }
      </code></pre>
            <p>
                Esse arquivo agora serve como o coração do seu projeto Node.js, gerenciando todas as suas dependências e
                configurações.
            </p>
            <v-container video>
                <v-responsive :aspect-ratio="16 / 9">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>

        </v-main>
        <v-footer>
            <h3>Referências:</h3>
            <v-container class="d-block">
                <p v-for="(ref, index) in listaReferencias" :key="index">
                    <a :href="ref.link">{{ ref.name }}</a>
                </p>
            </v-container>
        </v-footer>
    </v-app>
</template>

<script>
import MenuJs from '~/components/js/menuJS.vue'
export default {
    name: "npm_init",
    data() {
        return {
            msg: "Instalação e Configuração do Ambiente de Desenvolvimento JavaScript",
            video: 'https://www.youtube.com/embed/VIDEO_ID',
            propriedadesVideo: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            listaReferencias: [
                { id: 1, name: "w3schools", link: "https://www.w3schools.com/" },
                { id: 2, name: "MDN Web Docs", link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" },
                { id: 3, name: "ChatGPT", link: "https://chatgpt.com/" }
            ],
        }
    },
    components: {
        MenuJs
    }
}
</script>


<style scoped>
.video {
    max-width: 70%;
    max-height: 70%;
}
</style>
