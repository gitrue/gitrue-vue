import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../container/index.vue";

const LoginIndex = () =>
  import(/* webpackChunkName: "login" */ "../container/login/Index.vue");
const Login = () =>
  import(/* webpackChunkName: "login" */ "../container/login/Login.vue");
const Register = () =>
  import(/* webpackChunkName: "login" */ "../container/login/Register.vue");
const Blog = () =>
  import(/* webpackChunkName: "blog" */ "../container/blog/Blog.vue");
const EditBlog = () =>
  import(/* webpackChunkName: "blog" */ "../container/blog/EditBlog.vue");
 
 

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    component: Login
    // children: [{
    //     path: '',
    //     redirect: 'index'
    // }, {
    //     path: 'index',
    //     name: 'login',
    //     component: Login
    // }, {
    //     path: 'register',
    //     name: 'register',
    //     component: Register
    // }]
  },
  {
    path: "/post",
    name: "post",
    component: () => import(/* webpackChunkName: "book" */ "../container/Editor.vue")
  },
  {
    path: "/blog/:id",
    name: "blog",
    component: Blog
  },
  {
    path: "/editor/post/new",
    name: "发文章",
    component: EditBlog
  },
  {
    path: "/editor/edit/:id",
    name: "编辑文章",
    component: EditBlog
  },

  {
    path: "/book",
    name: "book",
    component: () => import(/* webpackChunkName: "book" */ "../container/book/Book.vue")
  },
  {
    path: "/share",
    name: "分享导航",
    component: () => import(/* webpackChunkName: "book" */ "../container/Share.vue")
  },
  {
    path: "/user",
    name: "用户页",
    component: () => import(/* webpackChunkName: "user" */ "../container/user/User.vue")
  },
   {
    path: "/404",
    name: "404",
    component: () => import(/* webpackChunkName: "book" */ "../container/404.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
