import Vue from "vue";
import axios, { AxiosStatic,AxiosResponse } from "axios";

const HTTP = axios.create({
  // process.env.VUE_APP_API_URL
  baseURL: "api"
})
 
HTTP.interceptors.response.use( (response: AxiosResponse) => {
    console.log('=========== response ======= : ',response)        
    if (response.status === 200) {  
      return Promise.resolve(response.data)
    } else {            
      return Promise.reject(response);        
  }  
},
(error: any) => {
  //   if (error.response.status) { 
  //     switch (error.response.status) {                
          
  //         default:
               
  //     }
  // }
   return  Promise.reject(error)
  }
);
Vue.use({
  install() {
    Vue.prototype.axios = HTTP
  }
});

declare module "vue/types/vue" {
  interface Vue {
    axios: AxiosStatic;
  }
}
