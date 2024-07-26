<template>
  <v-app :class="isDarkTheme">
    <v-app-bar app fixed>
      <v-row >
        <!-- Logo Column (Aligned to the Left) -->
        <v-col cols="2">
          <Logo />
        </v-col>

        <!-- Centralized Navigation Items (Aligned to the Right and Centered) -->
        <v-col cols="10" class="d-flex justify-center">
          <v-list class="d-flex justify-center corFundoBarra pl-16">
            <v-list-item
              v-for="item in cursos"
              :key="item.id"  
              class="d-flex justify-center align-center"           
            >
              <nuxt-link :to="item.to" class="no-wrap text-center" :style="{ color: color_item }">
                {{ item.name }}
              </nuxt-link>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Logo from '../components/logoJota.vue';
export default {
  data() {
    return {
      color_item: 'blue',
      isDarkTheme: 'theme--dark',
      cursos: [
        { id: 1, name: 'Java Script', to: '/javaScriptPage' },
        { id: 2, name: 'CSS', to: '/cssPage' },
        { id: 3, name: 'HTML', to: '/htmlPage' },
        { id: 4, name: 'Node', to: '/nodePage' },
        { id: 5, name: 'Vue.js', to: '/vuePage' },
        { id: 6, name: 'Vuetify', to: '/vuetifyPage' },
        { id: 7, name: 'Vuex', to: '/vuexPage' },
        { id: 8, name: 'Nuxt', to: '/nuxtPage' },
        { id: 9, name: 'Docker', to: '/dockerPage' },
      
      ],
    };
  },
  components: {
    Logo,
  },
};
</script>

<style scoped>

.no-wrap {
  white-space: nowrap;
}
.text-center {
  text-align: center;
}
.v-toolbar__content {
  width: 100% !important;
}
.tm {
  border: 3px solid black;
  width: 1000px;
}
</style>
