import { createStore } from "vuex";
import { auth, signInWithEmailAndPassword } from "firebase/auth";
import router from "@/router";

export default createStore({
  state: {
    loggedUser: null,
  },
  getters: {},
  mutations: {
    isLogged(state, userData) {
      state.loggedUser = userData;
    },
  },
  actions: {
    async login(context, data) {
      console.log(data);
      try {
        const loginResponse = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        context.commit("isLogged", loginResponse);
        router.push("/home");
      } catch (error) {
        console.log("Error en inicio de sesión", error);
      }
    },
  },
  modules: {},
});
