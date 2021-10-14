<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ hola }}</h1>
    <h1>{{ hola }}</h1>
    <ul>
      <li v-for="usuario in nombreCompleto" v-bind:key="usuario">
        {{ usuario | mayusculas | acortado(10) }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      url: "https://randomuser.me/api/?results=50",
      usuarios: [],
      hola:"hola"
    };
  },
  created() {
    fetch(this.url)
      .then((respuesta) => respuesta.json())
      .then(
        (respuesta) =>
          (this.usuarios = respuesta.results.map((usuario) => usuario.name))
      );
  },
  computed: {
    nombreCompleto() {
      //concatenacion para nombre completo nombre+apellido_p+apellido_m
      return this.usuarios.map(
        (usuario) =>
          `Nombre: ${usuario.title}: ${usuario.first} ${usuario.last}`
      );
    },
  },
  filters: {
    //se utilizan para alterar o transformar texto
    mayusculas(datos) {
      return datos.toUpperCase();
    },
    acortado(datos, cantidad) {
      return datos.substring(0, cantidad) + "...";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
