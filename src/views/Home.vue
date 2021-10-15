<template>
  <div class="containerHome text-center">
   
    <Mostrar 
    :perfiles="perfiles"
    />
    <Obtener 
    @perfil-action="getUsuario"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Obtener from "@/components/home/Obtener.vue";
import Mostrar from "@/components/home/Mostrar.vue";

import { mapState, mapActions} from "vuex";

export default {
  name: "Home",
  components: {
    Mostrar,
    Obtener,
  },
  computed: {
    ...mapState("UserStore", ["perfiles"]),
  },
  methods: {
    ...mapActions("UserStore", ["getUsuario"]),
  },
  created() {
    this.getUsuario();
  },
};
</script>
<style scoped>
.container {
  margin-top: 5rem;
}
</style>