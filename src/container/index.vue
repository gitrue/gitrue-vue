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
    
  },
  destroyed() {},
  mounted() {
    this.getBlogs();
  },
  methods: {
    tagEvent(tag) {
      this.tag = tag;
    },
    buttonEvent(type) {
      this.type = type;
    },
    goBlog(blog) {
      this.$router.push({ path: "/blog/" + blog.id });
    },
    getBlogs() {
      this.blogLoadingOk = false;
      let searchBlog = {};
      _.isEmpty(this.tag)
        ? (searchBlog.tag = "all")
        : (searchBlog.tag = this.tag);

      !_.isEmpty(this.type) ? (searchBlog.sort = this.type) : searchBlog;
      this.$http
        .post("/blog/getBlogByTag", searchBlog, {
          headers: {
            Accept: "application/json;charset=UTF-8"
          }
        })
        .then(res => {
          this.blogLoadingOk = true;
          this.blogs = res.data.data.content;
        });
    },
    sampleBackGroundColor() {
      return sampleBackGroundColor();
    }
  },
  watch: {
    tag(tag) {
      this.getBlogs();
    },
    type(type) {
      this.getBlogs();
    }
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

 
