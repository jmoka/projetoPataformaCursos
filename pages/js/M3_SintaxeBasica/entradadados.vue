<template>
    <v-app>
        <v-layout>
            <v-navigation-drawer app>
                <MenuJs />
            </v-navigation-drawer>
            <v-main>
                <h1>Entrada de Dados em JavaScript</h1>
                <p class="justificar">
                    Vamos aprender como o JavaScript pode pedir e usar informações que você digita. Vamos usar dois
                    métodos principais: <strong>prompt</strong> e <strong>readline</strong>.
                </p>
                <v-container fluid>
                    <v-row>
                        <v-col cols="12">
                            <v-container class="flex">
                                <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                                    <iframe :src="videoIntro" :allow="propriedadesVideo" allowfullscreen></iframe>
                                </v-responsive>
                            </v-container>

                            <h2><strong>O que é o <code>prompt()</code>?</strong></h2>
                            <p class="justificar">
                                O <code>prompt()</code> é uma maneira simples de pedir informações ao usuário em uma
                                caixa de diálogo na página web. É como um pequeno formulário que aparece na tela.
                            </p>
                            <h3>Exemplo de <code>prompt()</code></h3>
                            <p>Veja como usar o <code>prompt()</code> para pedir o nome do usuário:</p>
                            <v-code>
                                <pre><code>
                    // Pedir o nome do usuário
                    let nome = prompt("Qual é o seu nome?");
                    
                    // Mostrar uma mensagem de boas-vindas
                    alert("Olá, " + nome + "!");
                  </code></pre>
                            </v-code>
                            <p>Explicação: Neste exemplo, o <code>prompt()</code> pede o nome do usuário e armazena a
                                resposta na variável <code>nome</code>. Depois, usamos <code>alert()</code> para mostrar
                                uma mensagem de boas-vindas.</p>
                            <p> Esse código pode ser inserido de duas maneiras no HTML</p>
                            <h3>01: Inserindo o script direto no HTML</h3>
                            <code><pre>
  &lt;html&gt;
  &lt;body&gt;                    
      &lt;script&gt;
          // Pedir o nome do usuário
          let nome = prompt("Qual é o seu nome?");
          
          // Mostrar uma mensagem de boas-vindas
          alert("Olá, " + nome + "!");
      &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
                </pre></code>
                            <h3>02: Importando o Script no HTML</h3>
                            <code><pre>
  &lt;html&gt;
  &lt;body&gt;  
      <!-- Importar o arquivo JavaScript -->
      &lt;script src="script.js"&gt;&lt;/script&gt;     
  &lt;/body&gt;
  &lt;/html&gt;
                </pre></code>
                            <h2><strong>O que é o <code>readline()</code>?</strong></h2>
                            <p class="justificar">
                                O <code>readline()</code> é usado em ambientes de linha de comando, como o Node.js, para
                                ler entradas do usuário diretamente no terminal.
                            </p>
                            <h3>Exemplo de <code>readline()</code></h3>
                            <p>Veja como usar o <code>readline()</code> para pedir o nome do usuário em um ambiente
                                Node.js:</p>
                            <v-code>
                                <pre><code>
                    const readline = require('readline');
                    
                    const rl = readline.createInterface({
                      input: process.stdin,
                      output: process.stdout
                    });
                    
                    rl.question("Qual é o seu nome? ", function(nome) {
                      console.log("Olá, " + nome + "!");
                      rl.close();
                    });
                  </code></pre>
                                <p>Explicação: Aqui, usamos o módulo <code>readline</code> do Node.js para criar uma
                                    interface de leitura. O método <code>question()</code> pede o nome do usuário e
                                    depois imprime uma mensagem de boas-vindas.</p>
                                <h3>Jogo de Adivinha usando Redline e While</h3>
                                <code><pre>
                    &lt;!-- Código JavaScript para o jogo "Adivinhe o Número" --&gt;
&lt;script&gt;
  // Importa o módulo 'console' para usar o método 'log'
  const { log } = require('console');
  
  // Importa o módulo 'readline' para ler entradas do usuário
  const readline = require('readline');
  
  // Cria uma interface de leitura usando 'readline'
  const rl = readline.createInterface({
    input: process.stdin,    // Entrada padrão (terminal)
    output: process.stdout   // Saída padrão (terminal)
  });
  
  let numeroSecreto = 7;  // O número que o jogador deve adivinhar
  
  // Função para perguntar o palpite do usuário
  function perguntarPalpite() {
    // Pergunta ao usuário um palpite
    rl.question("Adivinhe o número entre 1 e 10: ", (palpite) => {
      // Converte o palpite para um número inteiro
      palpite = parseInt(palpite);
  
      // Verifica se o palpite está correto
      if (palpite === numeroSecreto) {
        log("Parabéns! Você adivinhou o número correto."); // Mostra mensagem de sucesso
        rl.close();  // Fecha a interface readline quando o jogo termina
      } else {
        log("Tente novamente.");  // Mostra mensagem de tentativa
        perguntarPalpite();  // Continua perguntando até acertar
      }
    });
  }
  
  // Inicia o jogo
  perguntarPalpite();
&lt;/script&gt;


                  </pre></code>
                            </v-code>
                            <p>Explicação: </p>
                            <h3>Importação de Módulos:</h3>
                            <p>
                                <code>const { log } = require('console');</code> - Importa o método <code>log</code> do
                                módulo <code>console</code> para exibir mensagens no terminal.
                            </p>
                            <p>
                                <code>const readline = require('readline');</code> - Importa o módulo
                                <code>readline</code> para ler entradas do usuário no terminal.
                            </p>

                            <h3>Criação da Interface de Leitura:</h3>
                            <p>
                                <code>const rl = readline.createInterface({ input: process.stdin, output: process.stdout });</code>
                                - Cria uma interface que lê entradas do terminal e envia saídas para o terminal.
                            </p>

                            <h3>Função <code>perguntarPalpite()</code>:</h3>
                            <p>
                                <code>rl.question("Adivinhe o número entre 1 e 10: ", (palpite) => { ... });</code> -
                                Pergunta ao usuário um palpite e chama uma função de retorno com a resposta.
                            </p>
                            <p>
                                <code>palpite = parseInt(palpite);</code> - Converte a resposta do usuário para um
                                número inteiro.
                            </p>
                            <p>
                                <code>if (palpite === numeroSecreto) { ... }</code> - Verifica se o palpite está correto
                                e exibe uma mensagem de sucesso ou tenta novamente.
                            </p>

                            <h3>Início do Jogo:</h3>
                            <p>
                                <code>perguntarPalpite();</code> - Chama a função para iniciar o jogo e solicitar o
                                palpite do usuário.
                            </p>

                            <p>
                                Este código é adequado para ambientes Node.js e deve ser executado no terminal, não
                                diretamente em um navegador.
                            </p>

                            <v-code>
                                <h2><strong>Código HTML com <code>prompt()</code></strong></h2>
                                <p>Você pode usar o <code>prompt()</code> diretamente em um arquivo HTML para pedir
                                    entradas ao usuário.</p>
                            <pre><code>                                    
&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Entrada de Dados com JavaScript&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Entrada de Dados com JavaScript&lt;/h1&gt;
    &lt;button onclick="pedirNome()"&gt;Clique para entrar seu nome&lt;/button&gt;

    &lt;script&gt;
      function pedirNome() {
        // Pedir o nome do usuário
        let nome = prompt("Qual é o seu nome?");
        
        // Mostrar uma mensagem de boas-vindas
        alert("Olá, " + nome + "!");
      }
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
 </v-code>
                            <p>Explicação: Neste código HTML, criamos um botão que, quando clicado, chama a função
                                <code>pedirNome()</code>. Esta função usa <code>prompt()</code> para obter o nome do
                                usuário e <code>alert()</code> para mostrar uma mensagem.</p>

                        </v-col>
                        <v-col class="d-flex justify-center">
                            <button class="btn" @click="pedirNome">Teste o Código Acima</button>
                        </v-col>
                    </v-row>

                </v-container>
                <v-container class="flex">
                    <v-responsive :aspect-ratio="16 / 9" class="flexItem">
                        <iframe :src="videoConclusao" :allow="propriedadesVideo" allowfullscreen></iframe>
                    </v-responsive>
                </v-container>
            </v-main>
        </v-layout>
    </v-app>
</template>

<script>
import MenuJs from '~/components/js/menuJS.vue'

export default {
    name: "entradaDados",
    data() {
        return {
            videoIntro: 'https://www.youtube.com/embed/VIDEO_ID', // Substitua com o ID do vídeo introdutório
            videoConclusao: 'https://www.youtube.com/embed/VIDEO_ID', // Substitua com o ID do vídeo de conclusão
            propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        };
    },
    methods: {
        pedirNome() {
            // Pedir o nome do usuário
            let nome = prompt("Qual é o seu nome?");

            // Mostrar uma mensagem de boas-vindas
            alert("Olá, " + nome + "!");
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
}

.justificar {
    text-align: justify;
}

.flexItem {
    max-width: 70%;
    max-height: 70%;
}

/* Estilos personalizados para o botão */
.btn {
    background-color: #4CAF50;
    /* Cor de fundo verde */
    color: white;
    /* Cor do texto */
    border: none;
    /* Remove a borda padrão */
    padding: 10px 20px;
    /* Espaçamento interno */
    text-align: center;
    /* Centraliza o texto */
    text-decoration: none;
    /* Remove sublinhado do texto */
    display: inline-block;
    /* Faz com que o botão se ajuste ao texto */
    font-size: 16px;
    /* Tamanho da fonte */
    margin: 10px 2px;
    /* Margem em torno do botão */
    cursor: pointer;
    /* Muda o cursor para uma mãozinha ao passar sobre o botão */
    border-radius: 5px;
    /* Arredonda os cantos do botão */
    transition: background-color 0.3s, transform 0.3s;
    /* Transição suave para as mudanças */
}

.btn:hover {
    background-color: #45a049;
    /* Cor de fundo ao passar o mouse */
    transform: scale(1.05);
    /* Aumenta o tamanho do botão um pouco ao passar o mouse */
}

.btn:focus {
    outline: none;
    /* Remove o contorno padrão ao focar */
}
</style>