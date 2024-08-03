<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="/logIn">Firebase Login</a>
      <div
        class="collapse navbar-collapse d-flex justify-content-end"
        id="navbarNav"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/LogIn">Iniciar sesión</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/SignIn">Registrarse</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  gap: 2rem;
}

nav {
  padding: 30px;
  margin-bottom: 3rem;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
