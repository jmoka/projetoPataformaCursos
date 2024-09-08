<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuLaravel />
        </v-navigation-drawer>
        <v-main>
            <div>
                <h1>{{ msg }}</h1>
            </div>
            <v-container video>
                <v-responsive :aspect-ratio="16 / 9">
                    <iframe :src="video" :allow="propriedadesVideo" allowfullscreen></iframe>
                </v-responsive>
            </v-container>
            <v-container fluid>
                <v-row>
                    <v-col cols="12">

                        <ul class="justificar">
                            <li>
                                <strong>1. Eloquent ORM:</strong> Um mapeador objeto-relacional (ORM) intuitivo e fácil
                                de usar para
                                trabalhar com bancos de dados.
                            </li>
                            <li>
                                <strong>2. Blade Template Engine:</strong> Um motor de template poderoso, que permite a
                                criação de layouts
                                dinâmicos e reutilizáveis.
                            </li>
                            <li>
                                <strong>3. Roteamento Simples:</strong> Sistema de rotas intuitivo que permite mapear
                                URLs para controladores
                                e ações.
                            </li>
                            <li>
                                <strong>4. Segurança Avançada:</strong> Proteções embutidas contra ataques como CSRF e
                                XSS, facilitando a
                                criação de aplicações seguras.
                            </li>
                            <li>
                                <strong>5. Teste Automatizado:</strong> Ferramentas integradas para testes unitários e
                                de integração,
                                garantindo a qualidade do software.
                            </li>
                            <li>
                                <strong>6. API Builder:</strong> Facilita a criação de APIs RESTful, com autenticação
                                JWT e rate limiting.
                            </li>
                        </ul>

                        <h3><strong>Exemplo de Código: Configuração Básica de Rota</strong></h3>
                        <pre>
                <code class="language-php">
                  // web.php - Arquivo de Rotas do Laravel
                  use App\Http\Controllers\HomeController;
  
                  Route::get('/', [HomeController::class, 'index'])->name('home');
                </code>
              </pre>

                        <h4><strong>Explicação:</strong></h4>
                        <ul class="justificar">
                            <li>
                                <strong>Route::get('/'):</strong> Define uma rota que responde a requisições GET na raiz
                                do site.
                            </li>
                            <li>
                                <strong>[HomeController::class, 'index']:</strong> Especifica que a ação para esta rota
                                está no método index
                                do HomeController.
                            </li>
                            <li>
                                <strong>name('home'):</strong> Atribui um nome à rota, facilitando seu uso em outras
                                partes da aplicação.
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
    name: "CaracteristicasPrincipaisLaravel",
    data: () => ({
        msg: "Características Principais",
        video: 'https://www.youtube.com/embed/VIDEO_ID', // Substitua 'VIDEO_ID' pelo ID do vídeo correspondente.
        propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        listaReferencias: [
            { id: 1, name: "Laravel Documentation", link: "https://laravel.com/docs" },
            { id: 2, name: "Laravel News", link: "https://laravel-news.com/" },
            { id: 3, name: "Laravel Routing", link: "https://laravel.com/docs/routing" }
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
</style>