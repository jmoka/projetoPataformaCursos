<template>
  <v-app ajsutePagina>
    <v-container fluid app>
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <h1>Curso Completo de JavaScript e Ferramentas Vue</h1>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <h4>Aprimore suas habilidades com Vue.js, Vuex, Nuxt, CSS, HTML e Docker</h4>
        </v-col>
        <v-col class="d-flex justify-center">
          <v-img src="/icon/js.png" :width="300" :height="300" contain></v-img>
        </v-col>
        <v-col class="d-flex justify-center">
          <v-img src="/icon/vue.png" :width="300" :height="300" contain></v-img>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <p style="color: red;">
            Desenvolva sua expertise em front-end com nosso curso completo de JavaScript e ferramentas Vue. Aprenda a
            criar interfaces reativas com Vue.js, gerenciar estados complexos com Vuex e implementar renderização do
            lado do servidor com Nuxt. Inclui também módulos detalhados de CSS, HTML e Docker. Projetado para iniciantes
            e desenvolvedores experientes, nosso curso oferece uma experiência prática para transformar seu conhecimento
            em aplicações web robustas e modernas.
          </p>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid>
      <div class="titleTable">
        <h1>Primeira Fase</h1>
        <h3>Ideal 4 meses</h3>
      </div>
    </v-container>

    <v-container fluid>
      <div>
        <v-table>
          <thead>
            <tr>
              <th>Horários</th>
              <th>Segunda</th>
              <th>Terça</th>
              <th>Quarta</th>
              <th>Quinta</th>
              <th>Sexta</th>
              <th>Sábado</th>
              <th>Domingo</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in cronograma" :key="index">
              <td class="horario">{{ item.horario }}</td>
              <td>{{ item.materias[0] }}</td>
              <td>{{ item.materias[1] }}</td>
              <td>{{ item.materias[2] }}</td>
              <td>{{ item.materias[3] }}</td>
              <td>{{ item.materias[4] }}</td>
              <td>{{ item.materias[5] }}</td>
              <td>{{ item.materias[6] }}</td>
            </tr>
          </tbody>
        </v-table>

      </div>

    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      cronograma: [
        { horario: '06:00 - 09:00', materias: ['JAVASCRIPT', 'TYPESCRIPT', 'GRAPHQL API', 'GRAPHQL API', 'JAVASCRIPT', 'TS_DESINNER_PATTERNS', 'DOCKER'] },
        { horario: '13:00 - 17:00', materias: ['PHP7', 'LARAVEL', 'LARAVEL-API-REST', 'LARAVEL', 'HTML5', 'PYTHON-DESKTOP/STREAMLIT', 'PYTHON3'] },
        { horario: '18:00 - 19:00', materias: ['VUE', 'NUXT', 'VUE', 'NUXT', 'VUE', 'NUXT', 'SITE'] },
        { horario: '21:00 - 11:00', materias: ['CSS', 'TAILWINDCSS', 'CSS', 'API REST', 'JQUERY', 'AJAX', 'LIVRE'] },

      ],
    };
  },
};
</script>

<style>
.titleTable {
  align-items: center !important;
  text-align: center !important;
}


.container {
  display: flex;
  justify-content: center;

  /* Alinha a tabela horizontalmente ao centro */

}


.imgSize c {
  /* size: auto; */
  height: 30px;
  width: 10px;
}

table {
  width: 100%;
  font-size: 18px;
}

.horario {
  background-color: #894200;
}

th,
td {
  padding: 12px 15px;
  border: 1px solid #ddd;
}

th {
  font-weight: bold;
  text-align: center;
  background-color: #894200;
}

td {
  text-align: center;
}

tr:nth-child(even) {
  background-color: #e3800872;
}

tr:nth-child(odd) {
  background-color: #ff8c00;
}

tr:hover {
  background-color: black;
}

@media (max-width: 768px) {
  table {
    font-size: 14px;
  }

  th,
  td {
    padding: 10px 12px;
  }

  h1 {
    font-size: 24px;
  }

  h4 {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  table {
    font-size: 12px;
  }

  th,
  td {
    padding: 8px 10px;
  }

  h1 {
    font-size: 20px;
  }

  h4 {
    font-size: 16px;
  }
}
</style>
