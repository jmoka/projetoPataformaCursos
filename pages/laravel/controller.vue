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
                            Abaixo está uma aula detalhada sobre controladores no Laravel, incluindo definição,
                            criação, e exemplos de uso.
                        </p>
                        <v-container video>
                            <v-responsive :aspect-ratio="16 / 9">
                                <iframe :src="video" :allow="propriedadesVideo" allowfullscreen></iframe>
                            </v-responsive>
                        </v-container>

                        <h2>1. O que é um Controlador?</h2>
                        <p class="justificar">
                            Um controlador no Laravel é uma classe responsável por manipular a lógica de negócios da
                            aplicação. Ele age como um intermediário entre os modelos e as views, processando
                            requisições
                            HTTP e retornando respostas.
                        </p>

                        <h2>2. Criando um Controlador</h2>
                        <p class="justificar">
                            Para criar um controlador, você pode usar o comando Artisan `make:controller`. Por exemplo:
                        </p>
                        <pre><code>php artisan make:controller UserController</code></pre>
                        <p class="justificar">
                            Isso cria um arquivo `UserController.php` no diretório <code>app/Http/Controllers</code>.
                        </p>

                        <h2>3. Estrutura Básica de um Controlador</h2>
                        <p class="justificar">
                            Um controlador básico pode se parecer com o seguinte:
                        </p>
                        <pre><code>// app/Http/Controllers/UserController.php
import { Controller } from 'laravel';

class UserController extends Controller
{
    public function index()
    {
        return "Displaying all users";
    }

    public function show($id)
    {
        return "Displaying user with ID: " . $id;
    }
}
                        </code></pre>

                        <h2>4. Métodos de um Controlador</h2>
                        <p class="justificar">
                            Em um controlador, você pode definir métodos que correspondem às ações que deseja realizar.
                            Aqui estão alguns exemplos comuns:
                        </p>

                        <h3>Método `index`</h3>
                        <p class="justificar">
                            O método `index` geralmente é usado para listar todos os recursos.
                        </p>
                        <pre><code>public function index()
{
    $users = User::all();
    return view('users.index', compact('users'));
}</code></pre>

                        <h3>Método `show`</h3>
                        <p class="justificar">
                            O método `show` exibe um recurso específico, geralmente identificado por um ID.
                        </p>
                        <pre><code>public function show($id)
{
    $user = User::findOrFail($id);
    return view('users.show', compact('user'));
}</code></pre>

                        <h3>Método `store`</h3>
                        <p class="justificar">
                            O método `store` é usado para criar um novo recurso no banco de dados.
                        </p>
                        <pre><code>public function store(Request $request)
{
    $user = User::create($request->all());
    return redirect()->route('users.index');
}</code></pre>

                        <h3>Método `update`</h3>
                        <p class="justificar">
                            O método `update` é usado para atualizar um recurso existente.
                        </p>
                        <pre><code>public function update(Request $request, $id)
{
    $user = User::findOrFail($id);
    $user->update($request->all());
    return redirect()->route('users.index');
}</code></pre>

                        <h3>Método `destroy`</h3>
                        <p class="justificar">
                            O método `destroy` é usado para deletar um recurso do banco de dados.
                        </p>
                        <pre><code>public function destroy($id)
{
    $user = User::findOrFail($id);
    $user->delete();
    return redirect()->route('users.index');
}</code></pre>

                        <h2>5. Controladores e Rotas</h2>
                        <p class="justificar">
                            Você pode associar rotas a métodos de controladores no arquivo de rotas. Aqui está um
                            exemplo
                            usando um controlador de recursos:
                        </p>
                        <pre><code>// routes/web.php
import { Route } from 'laravel';
import UserController from '~/controllers/UserController';

Route::resource('users', UserController::class);
                        </code></pre>
                        <p class="justificar">
                            Isso cria automaticamente rotas para ações CRUD (Create, Read, Update, Delete) no
                            controlador.
                        </p>

                        <h2>6. Controladores de Recurso</h2>
                        <p class="justificar">
                            Um controlador de recurso é um controlador que usa um conjunto padrão de métodos para
                            operações CRUD. Para criar um controlador de recurso:
                        </p>
                        <pre><code>php artisan make:controller PostController --resource</code></pre>
                        <p class="justificar">
                            O comando cria um controlador com métodos padrão como `index`, `create`, `store`, `show`,
                            `edit`, `update` e `destroy`.
                        </p>

                        <h2>7. Controladores e Injeção de Dependências</h2>
                        <p class="justificar">
                            O Laravel suporta injeção de dependências em métodos de controladores, permitindo que você
                            resolva e injete dependências automaticamente.
                        </p>
                        <pre><code>public function show(User $user)
{
    return view('users.show', compact('user'));
}</code></pre>
                        <p class="justificar">
                            O exemplo acima mostra como injetar um modelo diretamente no método do controlador.
                        </p>

                        <h2>8. Testando Controladores</h2>
                        <p class="justificar">
                            Você pode testar métodos de controladores usando testes de feature no Laravel. Aqui está um
                            exemplo básico:
                        </p>
                        <pre><code>// tests/Feature/UserControllerTest.php
import { TestCase } from 'laravel';
import { RefreshDatabase } from 'laravel';

class UserControllerTest extends TestCase
{
    use RefreshDatabase;

    public function testIndex()
    {
        $response = $this->get('/users');
        $response->assertStatus(200);
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
    name: "ControllersLesson",
    data: () => ({
        msg: "Controladores no Laravel",
        video: 'https://www.youtube.com/embed/VIDEO_ID', // Substitua 'VIDEO_ID' pelo ID do vídeo correspondente.
        propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
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
