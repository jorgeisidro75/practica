<template>
  <div class="container">
    <h1>Herramientas</h1>
    <div
      id="taskApp"
      class="col-md-6 col-sm-6 col-lg-6 offset-md-3 offset-sm-3 offset-lg-3"
    >
      <Agregar :tarea="tarea" :tareas="tareas" @user-action="crearTarea" />
      <Tabla :tareas="tareas" :tasks="tasks" @deleteTarea="deleteTarea" />
    </div>
  </div>
</template>
<script>
import Agregar from "@/components/tareas/Agregar.vue";
import Tabla from "@/components/tareas/Tabla.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Tareas",
  components: {
    Agregar,
    Tabla,
  },
  computed: {
    ...mapState("TareaStore", ["tasks", "tarea", "tareas"]),
  },
  methods: {
    ...mapActions("TareaStore", ["crearTarea", "getTareas", "deleteTarea"]),
  },
  created() {
    this.getTareas();
  },
 
};
</script>
<style scoped>
.container {
  margin-top: 5rem;
}
.app-form input {
  border-radius: 0;
}
.taskDone {
  text-decoration: line-through;
}
</style>
