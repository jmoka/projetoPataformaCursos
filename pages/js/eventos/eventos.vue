<template>
    <v-app>
        <v-layout>
            <v-navigation-drawer app>
                <MenuJs />
            </v-navigation-drawer>
            <v-main>
                <h1><b>{{ msg }}</b></h1>
                <h4><b>Objetivo:</b></h4>
            </v-main>
        </v-layout>       
    </v-app>
</template>

<script>
import MenuJs from '~/components/js/menuJS.vue'
    export default {
      data () {
            return{
                msg:"Sintax Básica"
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