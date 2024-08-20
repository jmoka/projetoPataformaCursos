<template>
  <v-app>    
        <!-- Componente para dispositivos móveis (Extra small e Small) -->
    <DafaultMob v-if="$vuetify. breakpoint.mobile" />
    <!-- Componente para dispositivos médios e maiores (Medium e acima) -->
    <DafaultPC v-if="$vuetify.breakpoint.mdAndUp" /> 
  </v-app>
</template>
<script>
import DafaultPC from "@/components/layouts/defaultPC.vue"
import DafaultMob from "@/components/layouts/defaultMob.vue"
export default {  
  components: {   
    DafaultPC,
    DafaultMob
  },
};
</script>