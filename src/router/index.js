// src/router/index.js
import Vue from "vue"; // ← Importante: primero Vue
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AutosView from "../views/AutosView.vue";
import FabricantesView from "../views/FabricantesView.vue";
import CategoriasView from "../views/CategoriasView.vue";

// IMPORTANTE: Vue.use() debe ir DESPUÉS de importar Vue
Vue.use(VueRouter); // ← Esta línea debe estar aquí

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/autos",
    name: "Autos",
    component: AutosView,
  },
  {
    path: "/fabricantes",
    name: "Fabricantes",
    component: FabricantesView,
  },
  {
    path: "/categorias",
    name: "Categorias",
    component: CategoriasView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
