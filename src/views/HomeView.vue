<template>
  <div class="home">
  <NavBarComponent />
  <nav class="homeNav">
    <router-link class="router" to="/home">home</router-link>
  </nav>
    <h2 class="homeTitle">Este es el Home</h2>
  </div>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent'


export default {
  name: "HomeView",
  components: {
    NavBarComponent,
  },
};
</script>

<style scoped>

.homeNav {
  display: flex;
  align-items: center;
  padding: 6%;
  width: 100%;
  height: 45px;
  background-color: lightgray;
}

.router{
  padding-top: 9%;
}

.homeTitle{
  margin-top: 4%;
  color: black;
}
</style>
