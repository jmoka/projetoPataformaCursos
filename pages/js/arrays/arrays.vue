<template>
    <v-app>
        <v-layout>
            <v-navigation-drawer app>
                <MenuJs />
            </v-navigation-drawer>
            <v-main>
                <p>{{ msg }}</p>
            </v-main>
        </v-layout>       
    </v-app>
</template>

<script>
import MenuJs from '~/components/js/menuJS.vue'
    export default {
        name:"ConversaoDeTipos",
      data () {
            return{
                msg:"ConversaoDeTipos"
            }
      },
      components:{
        MenuJs
      }
    }
</script>

<style scoped>
.v-main {
  padding: 10px 20px 10px 20px !important; /* Ajuste o padding conforme necessário */
}
</style>