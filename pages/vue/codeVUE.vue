<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuVUE />
        </v-navigation-drawer>
        <v-main>
            <container>
                <iframe :src="url + linguagem" frameborder="0" allowfullscreen>
                </iframe>
            </container>
        </v-main>
    </v-app>
</template>

<script>
import MenuVUE from '~/components/vue/menuVue.vue'
export default {
    name: "codeVUE",
    data() {
        return {
            url: "https://onecompiler.com/",
            linguagem: "vue",
        }
    },
    components: {
        MenuVUE
    }
}
</script>


<style scoped>
.video {
    max-width: 70%;
    max-height: 70%;
}
</style>