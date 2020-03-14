import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bulma/css/bulma.css";
import "./registerServiceWorker";
import "./utils/axios";
import'../public/newBee.css'
require("../public/style.css");
require("../public/mystyle.css");
import'../public/css/quill/quill.bubble.css'
import'../public/css/quill/quill.core.css'
import'../public/css/quill/quill.snow.css'

Vue.config.productionTip = false;
process.env.VUE_APP_API_URL = "/api";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
