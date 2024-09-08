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
                            Abaixo está uma aula detalhada sobre rotas no Laravel, incluindo definição, exemplos e
                            interações com o esquema do banco de dados.
                        </p>
                        <v-container video>
                            <v-responsive :aspect-ratio="16 / 9">
                                <iframe :src="video" :allow="propriedadesVideo" allowfullscreen></iframe>
                            </v-responsive>
                        </v-container>
                        <h2>1. O que são Rotas?</h2>
                        <p class="justificar">
                            Rotas são responsáveis por definir a URL de um aplicativo e mapear essas URLs para o código
                            que deve ser executado quando a URL é acessada. No Laravel, as rotas são definidas no
                            arquivo <code>routes/web.php</code> para rotas da web e <code>routes/api.php</code> para
                            rotas da API.
                        </p>

                        <h2>2. Configuração Básica de Rotas</h2>
                        <h3>Definindo uma Rota Simples</h3>
                        <p class="justificar">
                            Para definir uma rota básica, você pode usar o método <code>Route::get</code> no arquivo
                            <code>routes/web.php</code>:
                        </p>
                        <pre><code>// routes/web.php
import { Route } from 'laravel';

Route::get('/hello', function () {
    return 'Hello, World!';
});
                        </code></pre>

                        <h3>Rotas com Parâmetros</h3>
                        <p class="justificar">
                            Você pode definir rotas que aceitam parâmetros:
                        </p>
                        <pre><code>// routes/web.php
import { Route } from 'laravel';

Route::get('/user/{id}', function ($id) {
    return "User ID: " . $id;
});
                        </code></pre>

                        <h3>Rotas Nomeadas</h3>
                        <p class="justificar">
                            Você pode nomear rotas para referenciá-las facilmente:
                        </p>
                        <pre><code>// routes/web.php
import { Route } from 'laravel';

Route::get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');
                        </code></pre>

                        <h2>3. Controladores e Rotas</h2>
                        <h3>Criando um Controlador</h3>
                        <p class="justificar">
                            Use o comando Artisan para criar um controlador:
                        </p>
                        <pre><code>php artisan make:controller UserController</code></pre>

                        <h3>Definindo Rotas com Controladores</h3>
                        <p class="justificar">
                            No arquivo de rotas, você pode associar uma rota a um método no controlador:
                        </p>
                        <pre><code>// routes/web.php
import { Route } from 'laravel';
import UserController from '~/controllers/UserController';

Route::get('/user/{id}', [UserController::class, 'show']);
                        </code></pre>
                        <p class="justificar">
                            No controlador <code>UserController</code>, você define o método <code>show</code>:
                        </p>
                        <pre><code>// app/Http/Controllers/UserController.php
import { Controller } from 'laravel';

class UserController extends Controller
{
    public function show($id)
    {
        return "User ID: " . $id;
    }
}
                        </code></pre>

                        <h2>4. Rotas de Recursos</h2>
                        <p class="justificar">
                            Para criar rotas RESTful para um recurso, você pode usar o método
                            <code>Route::resource</code>:
                        </p>
                        <pre><code>// routes/web.php
import { Route } from 'laravel';
import PostController from '~/controllers/PostController';

Route::resource('posts', PostController::class);
                        </code></pre>

                        <p class="justificar">
                            Isso cria várias rotas para ações CRUD (Create, Read, Update, Delete) automaticamente:
                        </p>
                        <ul>
                            <li><strong>GET /posts</strong> - index</li>
                            <li><strong>GET /posts/create</strong> - create</li>
                            <li><strong>POST /posts</strong> - store</li>
                            <li><strong>GET /posts/{post}</strong> - show</li>
                            <li><strong>GET /posts/{post}/edit</strong> - edit</li>
                            <li><strong>PUT/PATCH /posts/{post}</strong> - update</li>
                            <li><strong>DELETE /posts/{post}</strong> - destroy</li>
                        </ul>

                        <h2>5. Middleware e Rotas</h2>
                        <p class="justificar">
                            Middleware permite adicionar filtros às suas rotas. Por exemplo, você pode proteger rotas
                            para
                            que apenas usuários autenticados possam acessá-las:
                        </p>
                        <pre><code>// routes/web.php
import { Route } from 'laravel';

Route::get('/profile', function () {
    return view('profile');
})->middleware('auth');
                        </code></pre>

                        <h2>6. Rotas e Esquema de Banco de Dados</h2>
                        <p class="justificar">
                            Embora rotas em si não interajam diretamente com o esquema do banco de dados, elas são
                            fundamentais para acessar e manipular dados armazenados. As rotas acionam métodos em
                            controladores que podem interagir com modelos e o banco de dados.
                        </p>
                        <h3>Exemplo de Interação com o Banco de Dados</h3>
                        <p class="justificar">
                            Imagine que você tem um modelo <code>Post</code> e deseja listar todos os posts:
                        </p>
                        <pre><code>// routes/web.php
import { Route } from 'laravel';
import PostController from '~/controllers/PostController';

Route::get('/posts', [PostController::class, 'index']);
                        </code></pre>
                        <p class="justificar">
                            No controlador <code>PostController</code>, o método <code>index</code> pode buscar todos os
                            posts do banco de dados:
                        </p>
                        <pre><code>// app/Http/Controllers/PostController.php
import { Controller } from 'laravel';
import Post from '~/models/Post';

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return view('posts.index', compact('posts'));
    }
}
                        </code></pre>

                        <h2>7. Testando Rotas</h2>
                        <p class="justificar">
                            Você pode usar o PHPUnit para testar suas rotas. No Laravel, isso é feito através da classe
                            <code>TestCase</code>.
                        </p>
                        <h3>Exemplo de Teste de Rota</h3>
                        <pre><code>// tests/Feature/ExampleTest.php
import { TestCase } from 'laravel';
import { RefreshDatabase } from 'laravel';

class ExampleTest extends TestCase
{
    use RefreshDatabase;

    public function testBasicRoute()
    {
        $response = $this->get('/hello');
        $response->assertStatus(200);
        $response->assertSee('Hello, World!');
    }
}
                        </code></pre>

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
                    </v-col>
                </v-row>
            </v-container-fluid>
            <v-container video>
                <v-responsive :aspect-ratio="16 / 9">
                    <iframe :src="video" :allow="propriedadesVideo" allowfullscreen></iframe>
                </v-responsive>
            </v-container>
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
        listaReferencias: [
            { id: 1, name: "Laravel Documentation - Artisan Console", link: "https://laravel.com/docs/artisan" },
            { id: 2, name: "Laravel News - Artisan Tips", link: "https://laravel-news.com/" },
            { id: 3, name: "Artisan Command Reference", link: "https://laravel.com/docs/artisan#available-commands" }
        ],
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
