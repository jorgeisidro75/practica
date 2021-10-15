<template>
  <table class="table">
        <thead>
          <tr>
            <th>CheckMark Done</th>
            <th>Task Name</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" v-bind:key="index">
            <td>
              <input type="checkbox" v-model="task.done" />
            </td>
            <td>
              <span :class="{ taskDone: task.done }">
                {{ task.title }}
              </span>
            </td>
            <td> <!-- v-on:click="deleteTask(task)" -->
              <button
                 @click="$emit('deleteTarea', task)"
                class="btn btn-block btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
</template>

<script>
export default {
  name: "Tabla",
  props: {
    tasks: {
      type: Array,
      required: true,
    },
    tareas: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>

.app-form input {
  border-radius: 0;
}
.taskDone {
  text-decoration: line-through;
}
</style>