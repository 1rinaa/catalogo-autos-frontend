// src/main.js
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Font Awesome
import "@fortawesome/fontawesome-free/css/all.min.css";

Vue.config.productionTip = false;

// Configuración global de API - SIN barra final
Vue.prototype.$apiUrl =
  process.env.NODE_ENV === "production"
    ? "https://catalogo-autos-api-production.irina-rivera.workers.dev" // ← SIN barra al final
    : "/api";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
