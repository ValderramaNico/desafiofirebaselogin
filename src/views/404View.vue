<template>
    <NavBarComponent />
  <div>
    <section class="mainView">
      <h2 class="title">404</h2>
      <h2 class="subTitle">
        Al parecer un drag<span class="tildes">ó</span>n destruy<span
          class="tildes"
          >ó</span
        >
        esta p<span class="tildes">á</span>gina...
      </h2>
    </section>
    <div>
      <img
        src="https://framerusercontent.com/images/bWqyBVQ9PpHocmCLtqcwUXAV8.jpg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent";

export default {
  components: {
    NavBarComponent,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 98%;
  height: 100%;
  background-color: white;
}

@font-face {
  font-family: "GameofThrones";
  src: local("Trickster"),
    url("../assets/font/GameofThrones.ttf") format("truetype");
}

.mainView {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  column-gap: 6rem;
  color: black;
  margin-top: 12%;
  margin-bottom: 5rem;
  font-family: "GameofThrones";
}

.title {
  font-size: 120px;
}

.tildes {
  font-size: 45px;
  font-family: sans-serif;
  font-family: Cinzel Decorative;
  font-weight: 500;
}
</style>
