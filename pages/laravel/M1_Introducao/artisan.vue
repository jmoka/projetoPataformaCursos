<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuLaravel />
        </v-navigation-drawer>
        <v-main>
            <div>
                <h1>{{ msg }}</h1>
            </div>
            <v-container fluid>
                <v-row>
                    <v-col cols="12">

                        <p class="justificar">
                            O Artisan é uma ferramenta de linha de comando integrada ao Laravel que fornece vários
                            comandos úteis para acelerar o desenvolvimento. Desde a criação de controladores, modelos,
                            migrações até o gerenciamento de tarefas de agendamento, Artisan é uma poderosa ferramenta
                            que ajuda a automatizar processos e a simplificar o trabalho do desenvolvedor.
                        </p>

                        <h3><strong>Principais Comandos do Artisan</strong></h3>
                        <ul class="justificar">
                            <li>
                                <strong>1. <code><span class='cor'>php artisan list</span></code>:</strong>
                                Exibe todos os comandos disponíveis no Artisan. É um bom ponto de partida para
                                explorar as funcionalidades disponíveis.
                            </li>
                            <li>
                                <strong>2. <code><span class="cor">php artisan help [command]</span></code>:</strong>
                                Fornece uma descrição
                                detalhada e as opções de um comando específico do Artisan.
                            </li>
                            <li>
                                <strong>3.
                                    <code><span class="cor"> php artisan make:controller NomeController</span></code>:</strong>
                                Cria um
                                novo controlador, facilitando a estruturação do código em uma aplicação MVC.
                            </li>
                            <li>
                                <strong>4.
                                    <code><span class="cor">php artisan make:model NomeModelo</span></code>:</strong>
                                Gera um novo modelo,
                                incluindo a estrutura de banco de dados e as relações entre tabelas.
                            </li>
                            <li>
                                <strong>5.
                                    <code><span class="cor">php artisan make:migration create_tabela</span></code>:</strong>
                                Cria uma nova migração para manipulação de tabelas no banco de dados.
                            </li>
                            <li>
                                <strong>6. <code><span class="cor">php artisan migrate</span></code>:</strong> Executa
                                todas as migrações pendentes, criando ou alterando tabelas conforme necessário.
                            </li>
                            <li>
                                <strong>7. <code><span class="cor">php artisan route:list</span></code>:</strong> Lista
                                todas as rotas registradas na aplicação, exibindo informações como o método HTTP, URI,
                                nome, e ação
                                associada.
                            </li>
                            <li>
                                <strong>8. <code><span class="cor">php artisan tinker</span></code>:</strong> Inicia um
                                REPL (Read-Eval-Print Loop) interativo para executar comandos PHP diretamente na
                                aplicação,
                                útil para testes rápidos e manipulação de dados.
                            </li>
                            <li>
                                <strong>9. <code><span class="cor">php artisan schedule:run</span></code>:</strong>
                                Executa as tarefas agendadas definidas na aplicação. Muito usado para automatizar
                                processos recorrentes.
                            </li>
                            <li>
                                <strong>10. <code><span class="cor">php artisan queue:work</span></code>:</strong>
                                Inicia o processamento de jobs da fila, essencial para aplicações que utilizam
                                filas para processar tarefas em segundo
                                plano.
                            </li>
                        </ul>

                        <h3><strong>Exemplo de Código: Criando um Controlador com Artisan</strong></h3>
                        <pre>
                <code class="language-bash">
                  // Comando para criar um controlador chamado ProductController
                  php artisan make:controller ProductController
                </code>
              </pre>

                        <h4><strong>Explicação:</strong></h4>
                        <ul class="justificar">
                            <li>
                                <strong>php artisan:</strong> Este é o comando principal que invoca o Artisan.
                            </li>
                            <li>
                                <strong>make:controller:</strong> Subcomando que especifica a criação de um novo
                                controlador.
                            </li>
                            <li>
                                <strong>ProductController:</strong> O nome do controlador que será criado na pasta
                                <code>app/Http/Controllers</code>.
                            </li>
                        </ul>

                        <h3><strong>Exemplo de Uso Avançado: Manipulando Tabelas com Migrações</strong></h3>
                        <pre>
                <code class="language-bash">
                  // Comando para criar uma migração para a tabela de produtos
                  php artisan make:migration create_products_table --create=products
                </code>
              </pre>

                        <h4><strong>Explicação:</strong></h4>
                        <ul class="justificar">
                            <li>
                                <strong>make:migration:</strong> Comando para criar uma nova migração.
                            </li>
                            <li>
                                <strong>create_products_table:</strong> Nome da migração, que indica que será criada uma
                                tabela de produtos.
                            </li>
                            <li>
                                <strong>--create=products:</strong> Especifica que esta migração criará a tabela
                                <code>products</code>.
                            </li>
                        </ul>
                    </v-col>
                </v-row>
            </v-container>

            <v-container video>
                <v-responsive :aspect-ratio="16 / 9">
                    <iframe :src="video" :allow="propriedadesVideo" allowfullscreen></iframe>
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
import MenuLaravel from '~/components/laravel/menuLaravel.vue'
export default {
    name: "ArtisanConsoleLaravel",
    data: () => ({
        msg: "Artisan Console",
        video: 'https://www.youtube.com/embed/VIDEO_ID', // Substitua 'VIDEO_ID' pelo ID do vídeo correspondente.
        propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        listaReferencias: [
            { id: 1, name: "Laravel Documentation - Artisan Console", link: "https://laravel.com/docs/artisan" },
            { id: 2, name: "Laravel News - Artisan Tips", link: "https://laravel-news.com/" },
            { id: 3, name: "Artisan Command Reference", link: "https://laravel.com/docs/artisan#available-commands" }
        ],
    }),
    components: {
        MenuLaravel
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

.cor {
    color: #894200;
}
</style>