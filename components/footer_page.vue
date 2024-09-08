<template>
    <div>
        <h3>Referências:</h3>
        <p v-for="(ref, index) in listaReferencias" :key="index">
            <a :href="ref.link">{{ ref.name }}</a>
        </p>
    </div>
</template>
<script>
export default {
    name: "footerPage",
    data: () => ({
        msg: "",
        video: 'https://www.youtube.com/embed/VIDEO_ID', // Substitua 'VIDEO_ID' pelo ID do vídeo correspondente.
        propriedadesVideo: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
        listaReferencias: [
            { id: 1, name: "Laravel Documentation - Artisan Console", link: "https://laravel.com/docs/artisan" },
            { id: 2, name: "Laravel News - Artisan Tips", link: "https://laravel-news.com/" },
            { id: 3, name: "Artisan Command Reference", link: "https://laravel.com/docs/artisan#available-commands" }
        ],
    }),
}
</script>
