<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuJs />
        </v-navigation-drawer>
        <v-main>
            <h1><b>{{ msg }}</b></h1>

            <h4><b>Objetivo:</b></h4>
            <p>
                Nesta aula, você aprenderá como configurar um ambiente de desenvolvimento adequado para trabalhar
                com JavaScript, incluindo a instalação de ferramentas essenciais e a criação de um projeto básico.
            </p>
            <!-- Placeholder do vídeo -->
            <v-container class="flex">
                <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>

            <h2><b>Conteúdo:</b></h2>
            <ol>
                <li><b>Escolhendo um Editor de Código</b></li>
                <li><b>Instalação do Node.js</b></li>
                <li><b>Configuração do NPM (Node Package Manager)</b></li>
                <li><b>Configuração do Editor (VS Code)</b></li>
                <li><b>Criando um Projeto JavaScript</b></li>
                <li><b>Primeiro Script JavaScript</b></li>
            </ol>

            <h2><b>1. Escolhendo um Editor de Código</b></h2>
            <p>Um editor de código é uma ferramenta essencial para qualquer desenvolvedor. Para JavaScript,
                recomenda-se usar o <b>Visual Studio Code (VS Code)</b>, um editor gratuito e altamente
                personalizável.</p>
            <ol>
                <li><b>Download e Instalação do VS Code:</b>
                    <ul>
                        <li>Acesse o site oficial do <a href="https://code.visualstudio.com/">Visual Studio
                                Code</a>.</li>
                        <li>Baixe a versão compatível com o seu sistema operacional (Windows, macOS, ou Linux).</li>
                        <li>Siga as instruções de instalação padrão.</li>
                    </ul>
                </li>
            </ol>

            <h2><b>2. Instalação do Node.js</b></h2>
            <p>O Node.js permite que você execute JavaScript no lado do servidor, além de fornecer acesso ao NPM, o
                gerenciador de pacotes do Node.js.</p>
            <ol>
                <li><b>Download e Instalação do Node.js:</b>
                    <ul>
                        <li>Acesse o site oficial do <a href="https://nodejs.org/">Node.js</a>.</li>
                        <li>Baixe a versão LTS (Long Term Support) para maior estabilidade.</li>
                        <li>Siga as instruções de instalação padrão.</li>
                    </ul>
                </li>
                <li><b>Verificando a Instalação:</b>
                    <ul>
                        <li>Abra o terminal ou o prompt de comando.</li>
                        <li>Execute o comando: <code>node -v</code> para verificar a versão do Node.js.</li>
                        <li>Execute o comando: <code>npm -v</code> para verificar a versão do NPM.</li>
                    </ul>
                </li>
            </ol>

            <h2><b>3. Configuração do NPM (Node Package Manager)</b></h2>
            <nuxtlink to="/javaScriptPage/M1_Introducao//npm_init">link da aula</nuxtlink>
            <p>O NPM é uma ferramenta poderosa que permite gerenciar pacotes e bibliotecas JavaScript.</p>
            <ol>
                <li><b>Configurando um Projeto com NPM:</b>
                    <ul>
                        <li>No terminal, navegue até o diretório onde deseja criar o projeto.</li>
                        <li>Execute <code>npm init</code> para iniciar um novo projeto Node.js.</li>
                        <li>Responda às perguntas ou pressione <kbd>Enter</kbd> para aceitar os valores padrão.</li>
                        <li>Um arquivo <code>package.json</code> será criado, contendo as informações do projeto.
                        </li>
                    </ul>
                </li>
            </ol>

            <h2><b>4. Configuração do Editor (VS Code)</b></h2>
            <p>Agora que o editor de código está instalado, vamos configurá-lo para trabalhar eficientemente com
                JavaScript.</p>
            <ol>
                <li><b>Instalação de Extensões Úteis:</b>
                    <ul>
                        <li><b>ESLint:</b> Ajuda a identificar e corrigir problemas no código JavaScript.</li>
                        <li><b>Prettier:</b> Um formatador de código para garantir consistência no estilo de código.
                        </li>
                        <li><b>JavaScript (ES6) code snippets:</b> Fornece snippets úteis para facilitar a
                            codificação.</li>
                    </ul>
                </li>
                <li><b>Configuração do Terminal Integrado:</b>
                    <ul>
                        <li>No VS Code, você pode usar o terminal integrado para executar comandos.</li>
                        <li>Acesse o terminal via <b>Terminal > New Terminal</b>.</li>
                    </ul>
                </li>
            </ol>

            <h2><b>5. Criando um Projeto JavaScript</b></h2>
            <p>Vamos criar um projeto básico para testar a configuração.</p>
            <ol>
                <li><b>Criando Estrutura de Diretórios:</b>
                    <ul>
                        <li>No VS Code, crie uma nova pasta chamada <code>meu-projeto-js</code>.</li>
                        <li>Dentro dessa pasta, crie um arquivo chamado <code>index.js</code>.</li>
                    </ul>
                </li>
                <li><b>Estrutura Básica de um Arquivo JavaScript:</b>
                    <ul>
                        <li>No arquivo <code>index.js</code>, adicione o seguinte código:</li>
                    </ul>
                    <pre><code>console.log('Olá, mundo!');</code></pre>
                </li>
            </ol>

            <h2><b>6. Primeiro Script JavaScript</b></h2>
            <p>Agora que temos tudo configurado, vamos executar o nosso primeiro script JavaScript.</p>
            <ol>
                <li><b>Executando o Script:</b>
                    <ul>
                        <li>No terminal integrado do VS Code, execute o seguinte comando:</li>
                    </ul>
                    <pre><code>node index.js</code></pre>
                    <p>O terminal deve exibir <code>Olá, mundo!</code>, confirmando que o ambiente de
                        desenvolvimento está funcionando corretamente.</p>
                </li>
            </ol>

            <h2><b>Conclusão</b></h2>
            <p>Você configurou com sucesso um ambiente de desenvolvimento JavaScript, instalando as ferramentas
                necessárias e executando um primeiro script básico. Esse ambiente servirá de base para todo o seu
                aprendizado de JavaScript.</p>

            <h2><b>Próximos Passos:</b></h2>
            <ol>
                <li>Experimente modificar o código no arquivo <code>index.js</code> e execute-o novamente.</li>
                <li>Explore mais extensões no VS Code para aprimorar seu ambiente de desenvolvimento.</li>
                <li>Continue para o próximo módulo onde começaremos a explorar a sintaxe básica do JavaScript.</li>
            </ol>
        </v-main>
    </v-app>
</template>

<script>
import MenuJs from '~/components/js/menuJS.vue'
export default {
    name: "instalacaoJS",
    data() {
        return {
            msg: "Instalação e Configuração do Ambiente de Desenvolvimento JavaScript",
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
    /* Ajuste o padding conforme necessário */
}
ul li {
    color: #894200
}
.flexItem {
    max-width: 70%;
    max-height: 70%
}
</style>
