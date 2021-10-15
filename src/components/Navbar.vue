<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <router-link class="navbar-brand" to="/">HAMMETT</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item ">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
         
          <li class="nav-item dropdown ">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Herramienta
            </a>
            <ul class="dropdown-menu bg-dark " aria-labelledby="navbarDropdown">
              <li class="nav-item">
                <router-link class="nav-link dropdown-item " to="/tareas" aria-current="page">Tareas</router-link>
              </li>
              <li class="nav-item ">
                <router-link class="nav-link dropdown-item " to="/herramienta#" aria-current="page">Herramienta</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link dropdown-item " to="#" aria-current="page">other</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link dropdown-item " to="#" aria-current="page">practica</router-link>
              </li>
            </ul>
          </li>

        </ul>
      </div>
    </div>
  </nav>
  
</template>

<script>
export default {
  name: "Navbar",
 
};
</script>

<style scoped>
a.router-link-exact-active {
  color: white !important;
}
</style>