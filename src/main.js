// src/main.js
import Vue from "vue"; // ← Importante: primero Vue
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Font Awesome
import "@fortawesome/fontawesome-free/css/all.min.css";

Vue.config.productionTip = false;

// Configuración global de API
Vue.prototype.$apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://backend.irina-rivera.workers.dev/api" // Cambia por tu URL de producción
    : "/api";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
