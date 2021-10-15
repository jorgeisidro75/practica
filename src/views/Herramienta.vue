<template>
  <div class="container">
    <h1>Herramientas</h1>
    <div id="taskApp" class="col-md-6 col-sm-6 col-lg-6 offset-md-3 offset-sm-3 offset-lg-3">
      

      <!-- form -->
      <div class="panel panel-default">
        <h2 class="text-center">Agregar nueva tarea</h2>
        <form v-on:submit="addTask" class="app-form">
          <input type="text" class="form-control" v-model="tasks.title" />
          <input type="submit" value="Add" class="btn btn-block btn-primary" />
        </form>
      </div>

      <!-- table -->
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
            <td>
              <button
                v-on:click="deleteTask(task)"
                class="btn btn-block btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "Herramienta",
  data() {
    return {
      tasks: [
        {
          title: "task1",
          done: true,
        },
        {
          title: "task2",
          done: false,
        },
        {
          title: "task3",
          done: false,
        },
        {
          title: "task4",
          done: false,
        },
      ],
    };
  },
  methods: {
    addTask: function (e) {
      e.preventDefault();
      this.tasks.push({
        title: this.tasks.title,
        done: false,
      });
      this.tasks.title = "";
    },
    deleteTask: function (task) {
      this.tasks.splice(this.tasks.indexOf(task), 1);
    },
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
