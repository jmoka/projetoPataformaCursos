<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuLaravel />
        </v-navigation-drawer>
        <v-main>
            <v-container-fluid>
                <v-row>
                    <v-col cols="12">
                        <h1>{{ msg }}</h1>
                        <p class="justificar">
                            Abaixo estão listados os comandos disponíveis e suas descrições detalhadas.
                        </p>
                        <h3><strong>Uso:</strong></h3>
                        <p class="justificar">command [opções] [argumentos]</p>

                        <h3><strong>Opções:</strong></h3>
                        <ul class="justificar">
                            <li><strong>-h, --help:</strong> Exibe ajuda para o comando especificado. Se nenhum comando
                                for dado, exibe ajuda para o comando de listagem.</li>
                            <li><strong>-q, --quiet:</strong> Não exibe nenhuma mensagem.</li>
                            <li><strong>-V, --version:</strong> Exibe a versão desta aplicação.</li>
                            <li><strong>--ansi|--no-ansi:</strong> Força (ou desativa com --no-ansi) a saída em ANSI.
                            </li>
                            <li><strong>-n, --no-interaction:</strong> Não faz nenhuma pergunta interativa.</li>
                            <li><strong>--env[=ENV]:</strong> Define o ambiente em que o comando deve ser executado.
                            </li>
                            <li><strong>-v|vv|vvv, --verbose:</strong> Aumenta a verbosidade das mensagens: 1 para saída
                                normal, 2 para mais detalhes, e 3 para modo de depuração.</li>
                        </ul>

                        <h3><strong>Comandos Disponíveis:</strong></h3>
                        <ul class="justificar">
                            <li><strong>about:</strong> Exibe informações básicas sobre sua aplicação.</li>
                            <li><strong>clear-compiled:</strong> Remove o arquivo de classe compilado.</li>
                            <li><strong>completion:</strong> Exporta o script de conclusão do shell.</li>
                            <li><strong>db:</strong> Inicia uma nova sessão CLI do banco de dados.</li>
                            <li><strong>docs:</strong> Acessa a documentação do Laravel.</li>
                            <li><strong>down:</strong> Coloca a aplicação em modo de manutenção / demonstração.</li>
                            <li><strong>env:</strong> Exibe o ambiente atual do framework.</li>
                            <li><strong>help:</strong> Exibe ajuda para um comando.</li>
                            <li><strong>inspire:</strong> Exibe uma citação inspiradora.</li>
                            <li><strong>list:</strong> Lista os comandos.</li>
                            <li><strong>migrate:</strong> Executa as migrações do banco de dados.</li>
                            <li><strong>optimize:</strong> Cria cache de inicialização do framework, configuração e
                                metadados para aumentar o desempenho.</li>
                            <li><strong>serve:</strong> Serve a aplicação no servidor de desenvolvimento PHP.</li>
                            <li><strong>test:</strong> Executa os testes da aplicação.</li>
                            <li><strong>tinker:</strong> Interage com sua aplicação.</li>
                            <li><strong>up:</strong> Retira a aplicação do modo de manutenção.</li>
                            <li><strong>auth:clear-resets:</strong> Limpa tokens expirados de redefinição de senha.</li>
                            <li><strong>cache:clear:</strong> Limpa o cache da aplicação.</li>
                            <li><strong>cache:forget:</strong> Remove um item do cache.</li>
                            <li><strong>cache:prune-stale-tags:</strong> Remove tags de cache obsoletas (somente Redis).
                            </li>
                            <li><strong>channel:list:</strong> Lista todos os canais de broadcast privados registrados.
                            </li>
                            <li><strong>config:cache:</strong> Cria um arquivo de cache para carregar configurações mais
                                rapidamente.</li>
                            <li><strong>config:clear:</strong> Remove o arquivo de cache de configuração.</li>
                            <li><strong>config:publish:</strong> Publica arquivos de configuração na sua aplicação.</li>
                            <li><strong>config:show:</strong> Exibe todos os valores de um arquivo ou chave de
                                configuração.</li>
                            <li><strong>db:monitor:</strong> Monitora o número de conexões no banco de dados
                                especificado.</li>
                            <li><strong>db:seed:</strong> Popula o banco de dados com registros.</li>
                            <li><strong>db:show:</strong> Exibe informações sobre o banco de dados especificado.</li>
                            <li><strong>db:table:</strong> Exibe informações sobre uma tabela específica do banco de
                                dados.</li>
                            <li><strong>db:wipe:</strong> Exclui todas as tabelas, visualizações e tipos.</li>
                            <li><strong>env:decrypt:</strong> Descriptografa um arquivo de ambiente.</li>
                            <li><strong>env:encrypt:</strong> Criptografa um arquivo de ambiente.</li>
                            <li><strong>event:cache:</strong> Descobre e armazena em cache os eventos e listeners da
                                aplicação.</li>
                            <li><strong>event:clear:</strong> Limpa todos os eventos e listeners armazenados em cache.
                            </li>
                            <li><strong>event:list:</strong> Lista os eventos e listeners da aplicação.</li>
                            <li><strong>install:api:</strong> Cria um arquivo de rotas de API e instala o Laravel
                                Sanctum ou Passport.</li>
                            <li><strong>install:broadcasting:</strong> Cria um arquivo de rotas de canal de transmissão.
                            </li>
                            <li><strong>key:generate:</strong> Define a chave da aplicação.</li>
                            <li><strong>lang:publish:</strong> Publica todos os arquivos de idioma disponíveis para
                                personalização.</li>
                            <li><strong>make:cache-table:</strong> Cria uma migração para a tabela de cache do banco de
                                dados.</li>
                            <li><strong>make:cast:</strong> Cria uma nova classe de cast personalizada do Eloquent.</li>
                            <li><strong>make:channel:</strong> Cria uma nova classe de canal.</li>
                            <li><strong>make:class:</strong> Cria uma nova classe.</li>
                            <li><strong>make:command:</strong> Cria um novo comando Artisan.</li>
                            <li><strong>make:component:</strong> Cria uma nova classe de componente de visualização.
                            </li>
                            <li><strong>make:controller:</strong> Cria uma nova classe de controlador.</li>
                            <li><strong>make:enum:</strong> Cria um novo enum.</li>
                            <li><strong>make:event:</strong> Cria uma nova classe de evento.</li>
                            <li><strong>make:exception:</strong> Cria uma nova classe de exceção personalizada.</li>
                            <li><strong>make:factory:</strong> Cria uma nova fábrica de modelos.</li>
                            <li><strong>make:interface:</strong> Cria uma nova interface.</li>
                            <li><strong>make:job:</strong> Cria uma nova classe de trabalho.</li>
                            <li><strong>make:listener:</strong> Cria uma nova classe de listener de evento.</li>
                            <li><strong>make:mail:</strong> Cria uma nova classe de email.</li>
                            <li><strong>make:middleware:</strong> Cria uma nova classe de middleware.</li>
                            <li><strong>make:migration:</strong> Cria um novo arquivo de migração.</li>
                            <li><strong>make:model:</strong> Cria uma nova classe de modelo Eloquent.</li>
                            <li><strong>make:notification:</strong> Cria uma nova classe de notificação.</li>
                            <li><strong>make:notifications-table:</strong> Cria uma migração para a tabela de
                                notificações.</li>
                            <li><strong>make:observer:</strong> Cria uma nova classe de observer.</li>
                            <li><strong>make:policy:</strong> Cria uma nova classe de política.</li>
                            <li><strong>make:provider:</strong> Cria um novo provedor de serviços.</li>
                            <li><strong>make:queue-batches-table:</strong> Cria uma migração para a tabela de lotes de
                                filas.</li>
                            <li><strong>make:queue-failed-table:</strong> Cria uma migração para a tabela de falhas de
                                filas.</li>
                            <li><strong>make:queue-table:</strong> Cria uma migração para a tabela de filas de trabalho.
                            </li>
                            <li><strong>make:request:</strong> Cria uma nova classe de solicitação de formulário.</li>
                            <li><strong>make:resource:</strong> Cria um novo recurso.</li>
                            <li><strong>make:rule:</strong> Cria uma nova regra de validação personalizada.</li>
                            <li><strong>make:scope:</strong> Cria um novo escopo de consulta.</li>
                            <li><strong>make:seeder:</strong> Cria uma nova classe de semeador.</li>
                            <li><strong>make:session-table:</strong> Cria uma migração para a tabela de sessões.</li>
                            <li><strong>make:servico:</strong> Cria um novo serviço de classe.</li>
                            <li><strong>make:test:</strong> Cria uma nova classe de teste.</li>
                            <li><strong>make:view:</strong> Cria um novo arquivo de visualização.</li>
                            <li><strong>migrate:fresh:</strong> Remove todas as tabelas e executa todas as migrações
                                novamente.</li>
                            <li><strong>migrate:install:</strong> Cria o repositório de migrações.</li>
                            <li><strong>migrate:refresh:</strong> Reseta e executa todas as migrações novamente.
                            </li>
                            <li><strong>migrate:reset:</strong> Reverte todas as migrações do banco de dados.</li>
                            <li><strong>migrate:rollback:</strong> Reverte a última migração do banco de dados.</li>
                            <li><strong>migrate:status:</strong> Mostra o status de cada migração.</li>

                            <li><strong>model:prune:</strong> Remove os modelos que não são mais necessários.</li>
                            <li><strong>model:show:</strong> Mostra informações sobre um modelo Eloquent.</li>

                            <li><strong>optimize:clear:</strong> Remove os arquivos de inicialização em cache.</li>

                            <li><strong>package:discover:</strong> Reconstrói o manifesto de pacotes em cache.</li>

                            <li><strong>queue:clear:</strong> Exclui todos os trabalhos da fila especificada.</li>
                            <li><strong>queue:failed:</strong> Lista todos os trabalhos de fila que falharam.</li>
                            <li><strong>queue:flush:</strong> Limpa todos os trabalhos de fila que falharam.</li>
                            <li><strong>queue:forget:</strong> Exclui um trabalho de fila que falhou.</li>
                            <li><strong>queue:listen:</strong> Escuta uma fila específica.</li>
                            <li><strong>queue:monitor:</strong> Monitora o tamanho das filas especificadas.</li>
                            <li><strong>queue:prune-batches:</strong> Remove entradas obsoletas da tabela de lotes.
                            </li>
                            <li><strong>queue:prune-failed:</strong> Remove entradas obsoletas da tabela de
                                trabalhos falhados.</li>
                            <li><strong>queue:restart:</strong> Reinicia os daemons de trabalhadores de fila após o
                                trabalho atual.</li>
                            <li><strong>queue:retry:</strong> Reexecuta um trabalho de fila que falhou.</li>
                            <li><strong>queue:retry-batch:</strong> Reexecuta os trabalhos que falharam para um
                                lote.</li>
                            <li><strong>queue:work:</strong> Inicia o processamento dos trabalhos na fila como um
                                daemon.</li>

                            <li><strong>route:cache:</strong> Cria um arquivo de cache de rotas para registro de
                                rotas mais rápido.</li>
                            <li><strong>route:clear:</strong> Remove o arquivo de cache de rotas.</li>
                            <li><strong>route:list:</strong> Lista todas as rotas registradas.</li>

                            <li><strong>sail:add:</strong> Adiciona um serviço a uma instalação existente do Sail.
                            </li>
                            <li><strong>sail:install:</strong> Instala o arquivo Docker Compose padrão do Laravel
                                Sail.</li>
                            <li><strong>sail:publish:</strong> Publica os arquivos Docker do Laravel Sail.</li>

                            <li><strong>schedule:clear-cache:</strong> Exclui os arquivos mutex em cache criados
                                pelo agendador.</li>
                            <li><strong>schedule:interrupt:</strong> Interrompe a execução atual do agendamento.
                            </li>
                            <li><strong>schedule:list:</strong> Lista todas as tarefas agendadas.</li>
                            <li><strong>schedule:run:</strong> Executa os comandos agendados.</li>
                            <li><strong>schedule:test:</strong> Executa um comando agendado para teste.</li>
                            <li><strong>schedule:work:</strong> Inicia o trabalhador de agendamento.</li>

                            <li><strong>schema:dump:</strong> Faz o dump do esquema do banco de dados especificado.
                            </li>

                            <li><strong>storage:link:</strong> Cria os links simbólicos configurados para a
                                aplicação.</li>
                            <li><strong>storage:unlink:</strong> Exclui os links simbólicos configurados para a
                                aplicação.</li>

                            <li><strong>stub:publish:</strong> Publica todos os stubs disponíveis para
                                personalização.</li>

                            <li><strong>vendor:publish:</strong> Publica quaisquer ativos publicáveis de pacotes de
                                fornecedores.</li>

                            <li><strong>view:cache:</strong> Compila todos os templates Blade da aplicação.</li>
                            <li><strong>view:clear:</strong> Limpa todos os arquivos de visualização compilados.
                            </li>
                        </ul>

                    </v-col>
                </v-row>
            </v-container-fluid>
        </v-main>
        <v-footer>
            <footer_page />
        </v-footer>
    </v-app>
</template>

<script>
import MenuLaravel from '~/components/laravel/menuLaravel.vue'
import footer_page from '~/components/footer_page.vue';
export default {
    name: "ArtisanConsoleLaravel",
    data: () => ({
        msg: "Comandos Artisan",
        video: 'https://www.youtube.com/embed/VIDEO_ID', // Substitua 'VIDEO_ID' pelo ID do vídeo correspondente.
        propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
    }),
    components: {
        MenuLaravel,
        footer_page
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