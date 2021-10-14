<template>
  <div class="containerAbout">
    <h1>This is an about page</h1>
    <ul>
      <li v-for="usuario in usuarios" v-bind:key="usuario">
        {{ usuario.name }} -- {{ usuario.address.street }} -- - -
        {{ usuario.company.name }}
      </li>
    </ul>
    <pre>{{ $data }}</pre>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {
      usuarios: [],
    };
  },
  created() {
    var url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((respuesta) => (this.usuarios = respuesta));
  },
};
</script>
<style scoped>
.container {
  margin-top: 5rem;
}
</style>