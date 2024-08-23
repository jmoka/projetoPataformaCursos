<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuJS />
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
import MenuJS from '~/components/js/menuJS.vue'
export default {
    name: "codeJS",
    data() {
        return {
            url: "https://onecompiler.com/",
            linguagem: "nodejs",

        }
    },
    components: {
        MenuJS
    }
}
</script>
