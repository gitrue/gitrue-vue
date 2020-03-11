<template>
   <div class="container">
        <div class="columns">
          <card-body></card-body>
        </div>
  </div>   
</template>

<script>

import CardBody from "../components/common/CardBody.vue";
import Skeleton from "../components/common/Skeleton.vue";
import _ from "lodash";
// import a from "../utils/axios";
// window.onload = function what(){
// console.log(Pictogrify)
//   new Pictogrify('my text').render(document.querySelector('.pictogram'))

// };
export default {
  name: "NewBeeIndex",
  components: {  CardBody, Skeleton },
  data() {
    return {
      tag: "",
      type: "",
      blogs: [], //blogs分页缓存
      blogLoadingOk: false,
      tagList: ["java", "python", "node", "go", "javascript", "sql"]
    };
  },
  created() {
    const response =  this.axios.get(`/1`)
    return response.data
  },
  destroyed() {},
  mounted() {
  },
  methods: {
     
  },
  watch: {
    
  }
};
</script>

<style scoped>
.bd-star-icon {
  font-size: 1.2rem;
  color: #0a0a0a;
  opacity: 0.25;
  bottom: 10px;
  left: 30px;
  position: absolute;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

body {
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  color: #4A4A4A;
  background: #F7F7F7;
}

.a:hover{
  color : #fbca0a;      
}
</style>

 
