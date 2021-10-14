<template>
  <div class="mt-4 text-center">
    <h1>PERFIL</h1>
    <hr />
    <br />
    <div v-for="(perfil, index) in perfiles" :key="index">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{{ perfil.name.title }}</th>
            <td>{{ perfil.name.first }}</td>
            <td>{{ perfil.name.last }}</td>
            <td>{{ perfil.cell }}</td>
          </tr>
        </tbody>
      </table>

      <img
        v-bind:src="perfil.picture.large"
        class="img-fluid rounded-circle"
        width="360"
        height="245"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Mostrar",
  props: {
    perfiles: {
      type: Array,
      required: true,
    },
  },
};
</script>

