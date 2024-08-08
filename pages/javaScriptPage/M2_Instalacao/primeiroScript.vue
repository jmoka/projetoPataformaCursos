<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuJs />
        </v-navigation-drawer>
        <v-main>
            <div>
                <h1>{{ msg }}</h1>
            </div>
            <h4><b>Objetivo:</b></h4>
            <p>
                Nesta aula, você aprenderá a criar um projeto básico em JavaScript e escrever seu primeiro script.
                Este será o primeiro passo para configurar um ambiente de trabalho onde você poderá desenvolver suas
                habilidades em JavaScript.
            </p>
            <v-container class="flex">
                <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                    <iframe :src='video' :allow='propriedadesVideo' allowfullscreen>
                    </iframe>
                </v-responsive>
            </v-container>



            <h2><b>Conteúdo:</b></h2>
            <ol>
                <li><b>Criando um Projeto JavaScript</b></li>
                <li><b>Escrevendo Seu Primeiro Script JavaScript</b></li>
            </ol>

            <h2><b>1. Criando um Projeto JavaScript</b></h2>

            <h3><b>Estrutura de Diretórios</b></h3>
            <p>Primeiro, precisamos criar uma estrutura de diretórios para o nosso projeto. Essa estrutura ajudará a
                organizar o código e os arquivos de forma lógica.</p>
            <ul>
                <li><b>Passos:</b>
                    <ul>
                        <li>Abra o seu diretório do Windos de sua Preferência.</li>
                        <li>Crie uma nova pasta para o projeto. Por exemplo, nomeie-a como <code>meu-projeto-js</code></li>
                        <li>Abra o Visual Studio Code (ou outro editor de sua preferência).</li>
                        <li>Vá em File / Open Folder ou Ctrl+O</li>
                        <li>Abra a paste que você criou</li>
                        <li>Dentro da pasta <code>meu-projeto-js</code>, crie um novo arquivo chamado
                            <code>index.js</code>. Este será o arquivo principal onde escreveremos nosso código
                            JavaScript.</li>
                        
                    </ul>
                </li>
            </ul>

            <h3><b>Iniciando o Projeto com NPM</b></h3>
            <p>Agora, vamos configurar o projeto com o NPM (Node Package Manager), que permitirá gerenciar dependências
                e scripts.</p>
            <ul>
                <li><b>Passos:</b>
                    <ul>
                        <li>No terminal integrado do VS Code, navegue até o diretório do projeto usando o comando:
                            <pre><code>cd caminho/para/meu-projeto-js</code></pre>
                        </li>
                        <li>Inicie um novo projeto com o NPM:
                            <pre><code>npm init -y</code></pre>
                            Este comando cria um arquivo <code>package.json</code> com as configurações básicas do
                            projeto.
                        </li>
                    </ul>
                </li>
            </ul>

            <h2><b>2. Escrevendo Seu Primeiro Script JavaScript</b></h2>

            <h3><b>Criando o Arquivo <code>index.js</code></b></h3>
            <p>Com o projeto configurado, vamos escrever o nosso primeiro script JavaScript.</p>
            <ul>
                <li><b>Passos:</b>
                    <ul>
                        <li>No arquivo <code>index.js</code>, escreva o seguinte código:
                            <pre><code>console.log('Olá, mundo!');</code></pre>
                            Este simples comando imprimirá a mensagem "Olá, mundo!" no terminal.
                        </li>
                    </ul>
                </li>
            </ul>

            <h3><b>Executando o Script no Terminal</b></h3>
            <p>Agora, vamos executar o script para verificar se tudo está funcionando corretamente.</p>
            <ul>
                <li><b>Passos:</b>
                    <ul>
                        <li>No terminal integrado do VS Code, certifique-se de que você ainda está no diretório do
                            projeto.</li>
                        <li>Execute o script com o comando:
                            <pre><code>node index.js</code></pre>
                        </li>
                        <li>O terminal deve exibir:
                            <pre><code>Olá, mundo!</code></pre>
                        </li>
                    </ul>
                </li>
            </ul>

            <h2><b>Conclusão</b></h2>
            <p>Parabéns! Você criou seu primeiro projeto JavaScript e executou seu primeiro script. Esse é o ponto de
                partida para todo o seu aprendizado em JavaScript. A partir daqui, você poderá explorar mais
                funcionalidades e começar a construir projetos mais complexos.</p>

            <h2><b>Próximos Passos:</b></h2>
            <ul>
                <li>Experimente modificar o código no arquivo <code>index.js</code> e execute-o novamente para ver os
                    resultados.</li>
                <li>Explore como adicionar pacotes ao seu projeto usando o NPM.</li>
                <li>Continue para o próximo módulo onde aprenderemos sobre a <b>sintaxe básica do JavaScript</b>.</li>
            </ul>
            <h1>Usando o playcode.io </h1>
            <h4>O que é Playcode.io?</h4>
            <p>Playcode.io é um ambiente de desenvolvimento integrado (IDE) baseado na web que permite aos usuários
                escrever, executar e compartilhar código JavaScript em tempo real. Ele é útil para desenvolvimento
                rápido, prototipagem e testes de código sem a necessidade de instalar ferramentas adicionais.</p>             
            <p>Veja a imagem abaixo e tente Rodar o Código :<a href="https://playcode.io/" target="_blank">Acesse Aqui o Site</a></p>
            <v-container class="flex"> 
                <v-responsive :aspect-ratio="16/9" class="flexItem">          
                    <v-img src="/imgCod/msgCod1.png" clss="iframe " contain></v-img>   
                </v-responsive>                          
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
import MenuJs from '@/components/javaScript/menu.JavaScript.vue'
export default {
    name: "primeiroScript",
    components: {
        MenuJs
    }
}
</script>

<style scoped>
.v-main {
    padding: 10px 20px 10px 20px !important;
}
</style>

<script>
import MenuJs from '@/components/javaScript/menu.JavaScript.vue'
export default {
    name: "instalacaoJS",
    data() {
        return {
            msg:"Criando um Projeto JavaScript e Escrevendo Seu Primeiro Script",
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

.flexItem {
    max-width: 70%;
    max-height: 70%
}
</style>
