import Vue from "vue";
import VueRouter from "vue-router";
 
 
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },

  {
    path: "/about/:id",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/caracteristicas/:id",
    name: "Caracteristicas",
    component: () =>
      import(
        /* webpackChunkName: "caracteristicas" */ "../views/Caracteristicas.vue"
      ),
  }, 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
