import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/grid",
    name: "Grid",
    component: () => import(/* webpackChunkName: "grid" */ "../views/Grid.vue"),
  },
  {
    path: "/card",
    name: "Card",
    component: () => import(/* webpackChunkName: "card" */ "../views/Card.vue"),
  },
  {
    path: "/formulario",
    name: "Formulario",
    component: () => import(/* webpackChunkName: "formulario" */ "../views/Formulario.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
