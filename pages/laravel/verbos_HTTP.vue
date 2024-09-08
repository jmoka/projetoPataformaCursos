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
                            Abaixo está uma aula detalhada sobre verbos HTTP, incluindo definição, exemplos e
                            explicações para cada um dos principais métodos utilizados em requisições HTTP.
                        </p>
                        <v-container video>
                            <v-responsive :aspect-ratio="16 / 9">
                                <iframe :src="video" :allow="propriedadesVideo" allowfullscreen></iframe>
                            </v-responsive>
                        </v-container>

                        <h2>1. Verbo `GET`</h2>
                        <p class="justificar">
                            O verbo `GET` é utilizado para solicitar dados do servidor. É uma requisição que não
                            modifica
                            o estado do servidor e é usada para buscar informações.
                        </p>
                        <pre><code>GET /users/123 HTTP/1.1
Host: example.com</code></pre>
                        <p class="justificar">
                            **Resposta Exemplo:**
                        </p>
                        <pre><code>HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 123,
  "name": "John Doe",
  "email": "john.doe@example.com"
}</code></pre>

                        <h2>2. Verbo `POST`</h2>
                        <p class="justificar">
                            O verbo `POST` é utilizado para enviar dados ao servidor, geralmente para criar um novo
                            recurso.
                        </p>
                        <pre><code>POST /users HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane.doe@example.com"
}</code></pre>
                        <p class="justificar">
                            **Resposta Exemplo:**
                        </p>
                        <pre><code>HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": 124,
  "name": "Jane Doe",
  "email": "jane.doe@example.com"
}</code></pre>

                        <h2>3. Verbo `PUT`</h2>
                        <p class="justificar">
                            O verbo `PUT` é utilizado para atualizar um recurso existente no servidor. Substitui o
                            recurso
                            atual com o novo.
                        </p>
                        <pre><code>PUT /users/123 HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "name": "John Smith",
  "email": "john.smith@example.com"
}</code></pre>
                        <p class="justificar">
                            **Resposta Exemplo:**
                        </p>
                        <pre><code>HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 123,
  "name": "John Smith",
  "email": "john.smith@example.com"
}</code></pre>

                        <h2>4. Verbo `DELETE`</h2>
                        <p class="justificar">
                            O verbo `DELETE` é utilizado para remover um recurso do servidor.
                        </p>
                        <pre><code>DELETE /users/123 HTTP/1.1
Host: example.com</code></pre>
                        <p class="justificar">
                            **Resposta Exemplo:**
                        </p>
                        <pre><code>HTTP/1.1 204 No Content</code></pre>

                        <h2>5. Verbo `PATCH`</h2>
                        <p class="justificar">
                            O verbo `PATCH` é utilizado para aplicar modificações parciais a um recurso existente.
                            Diferente
                            do `PUT`, que substitui o recurso inteiro, o `PATCH` faz alterações parciais.
                        </p>
                        <pre><code>PATCH /users/123 HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "email": "john.newemail@example.com"
}</code></pre>
                        <p class="justificar">
                            **Resposta Exemplo:**
                        </p>
                        <pre><code>HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 123,
  "name": "John Smith",
  "email": "john.newemail@example.com"
}</code></pre>

                        <h2>6. Verbo `OPTIONS`</h2>
                        <p class="justificar">
                            O verbo `OPTIONS` é utilizado para descrever as opções de comunicação para um recurso
                            específico.
                            Ele é frequentemente usado para verificar quais métodos HTTP são suportados pelo servidor
                            para um recurso.
                        </p>
                        <pre><code>OPTIONS /users HTTP/1.1
Host: example.com</code></pre>
                        <p class="justificar">
                            **Resposta Exemplo:**
                        </p>
                        <pre><code>HTTP/1.1 204 No Content
Allow: GET, POST, PUT, DELETE, OPTIONS</code></pre>

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
    name: "HttpVerbsLesson",
    data: () => ({
        msg: "Verbos HTTP",
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
