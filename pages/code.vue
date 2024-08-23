<template>
  <v-app>
    <v-main>
      <container>
        <iframe :src="url + linguagem" frameborder="0" allowfullscreen>
        </iframe>
      </container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: "code",
  data() {
    return {
      url: "https://onecompiler.com/",
      linguagem: "",
    }
  },
  components: {

  }
}
</script>

<style scoped>
.v-main {
  padding: 10px 20px 10px 20px !important;
}

.flexItem {
  max-width: 70%;
  max-height: 70%;
}
</style>
