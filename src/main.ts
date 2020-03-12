import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bulma/css/bulma.css";
import "./registerServiceWorker";
import "./utils/axios";
require("../static/style.css");
require("../static/newBee.css");

Vue.config.productionTip = false;
process.env.VUE_APP_API_URL = "/api";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
