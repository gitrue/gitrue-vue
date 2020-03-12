<template>
 <nav id="navbar" class="bd-navbar navbar   is-spaced gitrue-header">
  <div class="container">
  <div class="navbar-brand">
    <a class="logo " @click="handleMenuCommand('/')">
      <img class="gitrue-logo" src="http://www.gitrue.com:9000/image/gitrue/7811583656157_.pic.jpg" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="200" height="50">
    </a>


    <div id="navbarBurger" class="navbar-burger burger" data-target="navMenuDocumentation">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navMenuDocumentation" class="navbar-menu">
    <div class="navbar-start">
      <span class="navbar-item bd-navbar-item-documentation   " >
         
        <span class="is-hidden-touch is-hidden-widescreen gitrue-font">
          菜单
        </span>
        <!-- 占位 -->
        <!-- <a class="bd-navbar-icon navbar-item"   target="_blank"></a>

        <a class="bd-navbar-icon navbar-item"   target="_blank"></a> -->

         <!-- <a class="bd-navbar-icon navbar-item"   target="_blank">
            

            <div class="dropdown " v-bind:class="{ 'is-active': menuActive }" @click="menuClick()"  >
              <div class="dropdown-trigger">
                <span   aria-haspopup="true" aria-controls="dropdown-menu">
                  <span>Menu</span>
                  <span class="icon is-small">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </span>
              </div>
              <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                <div class="dropdown-content">
                  <a href="#" class="dropdown-item">
                    Dropdown item
                  </a>
                  <a class="dropdown-item">
                    Other dropdown item
                  </a>
                  <a href="#" class="dropdown-item is-active">
                    Active dropdown item
                  </a>
                  <a href="#" class="dropdown-item">
                    Other dropdown item
                  </a>
                  <hr class="dropdown-divider">
                  <a href="#" class="dropdown-item">
                    With a divider
                  </a>
                </div>
              </div>
            </div>
         </a> -->

        
      </span>

          <a class="navbar-item bd-navbar-item-videos " href="https://bulma.io/videos/">
           
          <span class="gitrue-font">沙雕新闻</span>
        </a>
      
        
        <a class="navbar-item bd-navbar-item-expo " href="https://bulma.io/expo/">
           

          <span class="gitrue-font">英语角</span>
        </a>
      
        
        <router-link class="navbar-item bd-navbar-item-love" to="/book">

          <span class="gitrue-font" >书评</span>
        </router-link>
      
        
        <a class="navbar-item bd-navbar-item-backers " href="https://bulma.io/backers/">
          

          <span class="gitrue-font">好站分享</span>
        </a>
      
        <a class="bd-navbar-icon navbar-item"   target="_blank"></a>
        <a class="gitrue-input is-static">
          <div class="control">
            <input class="input is-static gitrue-font" type="text" placeholder="搜索一下 ...">
          </div>
        </a>
      
        <!-- <p class="control gitrue-login" style="position: relative;right: 80px;"><a class="button is-warning"><strong>搜索</strong></a></p> -->
    </div>

    <div class="navbar-end">
      
      <div class="navbar-item">
        <div class="field is-grouped is-grouped-multiline">
        
          
          <p class="control gitrue-login">
            <a class="button is-warning" @click="goLogin" v-show="!isLogin"  >
              <strong>登录</strong>
            </a>
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
    Popup,Login
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
    menuClick(){
      this.menuActive = !this.menuActive;
      console.log(this.menuActive)
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
    color:#ffffff !important;
  }
  .gitrue-search {
    padding-top:0px !important;
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

 