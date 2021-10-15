<template>
  <!-- form -->
  <div class="panel panel-default">
    <h2 class="text-center">Agregar nueva tarea</h2>
    <!-- <form @submit.prevent="$emit('user-action', data)" > -->
    <form @submit.prevent="$emit('user-action')" >
          <label class="form-label">Username</label>
          <input
            class="form-control mb-2"
            type="text"
            placeholder="Username"
            v-model="tareas.nombre"
            name="username"
          />
            <!-- v-model="data" -->
      <button type="submit" class="btn btn-block btn-primary" >Agregar</button>
    </form>
  </div>
</template>

<script>

export default {
  name: "Agregar",
  data(){
      return{
          data:""
      };
  },
  props: {
    tarea: {
      type: String,
      required: true,
    },
    tareas: {
      type: Object,
      required: true,
    },
  },
  
 
};
</script>