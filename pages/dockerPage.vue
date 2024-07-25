<template>
  <v-app class="theme--dark">
    <v-navigation-drawer permanent>
      <v-card>
        <v-card-title>Aulas Docker</v-card-title>   
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
      tcolor: "brown",
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

</style>
