import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "@/store";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/SignIn",
    name: "SignIn",

    component: () => import("../views/SignInView.vue"),
  },
  {
    path: "/LogIn",
    name: "LogIn",

    component: () => import("../views/LogInView.vue"),
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
  if (to.meta.authRequired && !store.state.loggedUser) {
    next("/LogIn");
  } else {
    next();
  }
});

export default router;
