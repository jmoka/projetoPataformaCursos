<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuTS />
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
import MenuTS from '~/components/ts/menuTS.vue'
export default {
    name: "codeTS",
    data() {
        return {
            url: "https://onecompiler.com/",
            linguagem: "typescript",
        }
    },
    components: {
        MenuTS
    }
}
</script>


<style scoped>
.video {
    max-width: 70%;
    max-height: 70%;
}
</style>