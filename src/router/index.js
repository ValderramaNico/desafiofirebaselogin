import { createRouter, createWebHistory } from "vue-router";
import LogInView from "../views/LogInView.vue";
import SignInView from "../views/SignInView.vue";
import HomeView from "@/views/HomeView.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "Login",
    component: LogInView,
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: SignInView,
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
    meta: {
      authRequired: true,
    },
  },
  {
    /* Ruta 404 */
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("../views/404View.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.authRequired)) {
    if (!store.state.loggedUser) {
      next("/");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
