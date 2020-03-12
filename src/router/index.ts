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
const User = () =>
  import(/* webpackChunkName: "user" */ "../container/user/User.vue");
const Setting = () =>
  import(/* webpackChunkName: "user" */ "../container/user/Setting.vue");
const Life = () =>
  import(/* webpackChunkName: "life" */ "../container/life/Life.vue");
const Book = () =>
  import(/* webpackChunkName: "book" */ "../container/book/Book.vue");
const Editor = () =>
  import(/* webpackChunkName: "book" */ "../container/Editor.vue");

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
    component: Editor
  },
  {
    path: "/blog/:id",
    name: "blog",
    component: Blog
  },
  {
    path: "/life",
    name: "life",
    component: Life
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
    component: Book
  },
  {
    path: "/user",
    name: "用户页",
    component: User
  },
  {
    path: "/setting/:userName",
    name: "Setting",
    component: Setting
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
