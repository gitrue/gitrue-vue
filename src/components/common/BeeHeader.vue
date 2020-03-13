<template>
  <nav id="navbar" class="bd-navbar navbar   is-spaced gitrue-header">
    <div class="container">
      <div class="navbar-brand">
        <a class="logo " @click="handleMenuCommand('/')">
          <img
            class="gitrue-logo"
            src="http://www.gitrue.com:9000/image/gitrue/7811583656157_.pic.jpg"
            alt="Bulma: Free, open source, and modern CSS framework based on Flexbox"
            width="200"
            height="50"
          />
        </a>

        <div
          id="navbarBurger"
          class="navbar-burger burger"
          data-target="navMenuDocumentation"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navMenuDocumentation" class="navbar-menu">
        <div class="navbar-start">
          <span class="navbar-item bd-navbar-item-documentation   ">
            <span class="is-hidden-touch is-hidden-widescreen gitrue-font">
              菜单
            </span>
          </span>

         
          <router-link class="navbar-item bd-navbar-item-love" to="/">
            <span class="gitrue-font">沙雕新闻</span>
          </router-link>


          <router-link class="navbar-item bd-navbar-item-love" to="/">
            <span class="gitrue-font">英语角</span>
          </router-link>
          

          <router-link class="navbar-item bd-navbar-item-love" to="/book">
            <span class="gitrue-font">书评</span>
          </router-link>

          <router-link class="navbar-item bd-navbar-item-love" to="/share">
            <span class="gitrue-font">好站推荐</span>
          </router-link>

          <a class="bd-navbar-icon navbar-item" target="_blank"></a>
          <a class="gitrue-input is-static">
            <div class="control">
              <input
                class="input is-static gitrue-font"
                type="text"
                placeholder="搜索一下 ..."
              />
            </div>
          </a>

          <!-- <p class="control gitrue-login" style="position: relative;right: 80px;"><a class="button is-warning"><strong>搜索</strong></a></p> -->
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped is-grouped-multiline">
              <p class="control gitrue-login">
                <!--  is-info is-light -->
                <button
                  class="button  is-info is-light gitrue-font"
                  @click="goLogin"
                  v-show="!isLogin"
                >
                  登录
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { TransferDom, Popup } from "vux";
import Login from "../../container/login/Login.vue";

import _ from "lodash";
import { debug } from "util";
export default {
  name: "BeeHeader",
  components: {
    Popup,
    Login
  },
  data() {
    return {
      menuActive: false,
      popupShow: false,
      isLogin: false,
      user: {},
      loading: false,
      userInfo: {}
    };
  },
  created() {},
  destroyed() {},
  mounted() {
    // oautoApi.getUser("ac07d320e8ca4f30eb92", response => {
    //   debugger;
    // });
  },
  methods: {
    handleMenuCommand(router) {
      // if (router === "/user" || router === "/setting")
      //   router += `/${getUserName()}`;
      this.$router.push(router);
    },
    menuClick() {
      this.menuActive = !this.menuActive;
      console.log(this.menuActive);
    }
  }
};
</script>

<style lang="less">
.gitrue-header {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
.logo {
  padding: 0 !important;
  margin-top: 8px;
}
.is-underline {
  background-color: white;
}

.container {
  padding-top: 5px;
  padding-bottom: 5px;
}
.navbar-item {
  font-size: 18px;
}
.navbar-item-home {
  background-color: #fbca0a;
  color: #ffffff !important;
}
.gitrue-search {
  padding-top: 0px !important;
}
.gitrue-login {
  margin-top: 2px !important;
}
.gitrue-logo {
  width: 210px !important;
}
// .gitrue-input {
//   position: absolute !important;
//   left: 0 !important;
//   top: 0 !important;
//   font-size: 20px !important;
//   color: #454545 !important;
//   z-index: 10 !important;
//   background: 0 0 !important;
//   border: 0 !important;
//   padding: 0 34px !important;
//   font-weight: 400 !important;
//   width: 300px !important;
// }
</style>
