import Vue from "vue";
import axios, { AxiosStatic } from "axios";

Vue.use({
  install() {
    Vue.prototype.axios = axios.create({
      // process.env.VUE_APP_API_URL
      baseURL: "api"
    });
  }
});

declare module "vue/types/vue" {
  interface Vue {
    axios: AxiosStatic;
  }
}
