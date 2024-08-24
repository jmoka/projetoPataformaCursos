<template>
    <v-app>
        <v-navigation-drawer app>
            <MenuLaravel />
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
import MenuGraphQL from '@/components/graphQL/menuGraphQL.vue'
export default {
    name: "codeLaravel",
    data() {
        return {
            url: "https://onecompiler.com/",
            linguagem: "graphql",
        }
    },
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
</style>