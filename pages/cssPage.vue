<template>
  <v-app class="theme--light">
    <v-navigation-drawer permanent>   
      <v-card>
        <v-card-title>Aulas CSS</v-card-title>   
      </v-card>
      <v-list>
        <v-list-item v-for="(item, index) in lista" :key="index">
          <a :href="item.page" :style="{ color: tcolor }">{{ item.name }}</a>
        </v-list-item>      
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      tcolor: "blue",
      lista: [
        {
          id: "01",
          name: "Introdução",
          page: "/introducao"
        },
        {
          id: "02",
          name: "História",
          page: "/historia"
        },
        {
          id: "03",
          name: "Instalação",
          page: "/instalacao"
        }
      ]
    };
  }
};
</script>

<style scoped>
/* Estilos específicos para o componente, se necessário */
.cor{
  color: brown;
}
</style>
