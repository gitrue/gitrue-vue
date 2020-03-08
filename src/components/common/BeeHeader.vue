<template>
 <nav id="navbar" class="bd-navbar navbar has-shadow is-spaced gitrue-header">
  <div class="container">
  <div class="navbar-brand">
    <a class="logo" @click="handleMenuCommand('/')">
      <img src="http://www.gitrue.com:9000/image/gitrue/7811583656157_.pic.jpg" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="200" height="50">
    </a>

    

    <div id="navbarBurger" class="navbar-burger burger" data-target="navMenuDocumentation">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>

  <div id="navMenuDocumentation" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item bd-navbar-item-documentation  is-active" href="https://bulma.io/documentation">
         
        <span class="is-hidden-touch is-hidden-widescreen">
          Docs
        </span>
        <!-- 占位 -->
        <a class="bd-navbar-icon navbar-item"   target="_blank"></a>

        <a class="bd-navbar-icon navbar-item"   target="_blank"></a>

        <span class="is-hidden-desktop-only">
          社区共建
        </span>
      </a>

      
        
        <a class="navbar-item bd-navbar-item-videos " href="https://bulma.io/videos/">
           
          <span>沙雕新闻</span>
        </a>
      
        
        <a class="navbar-item bd-navbar-item-expo " href="https://bulma.io/expo/">
           

          <span>英语角</span>
        </a>
      
        
        <router-link class="navbar-item bd-navbar-item-love" to="/book">

          <span>书评</span>
        </router-link>
      
        
        <a class="navbar-item bd-navbar-item-backers " href="https://bulma.io/backers/">
          

          <span>好站分享</span>
        </a>
       
    </div>

    <div class="navbar-end">
      
      <div class="navbar-item">
        <div class="field is-grouped is-grouped-multiline">
          <p class="control">
            <div class="navbar-item is-hidden-mobile gitrue-search">
               <div class="field has-addons"  >
                 <div class="control" >
                   <input   type="input" class="input" name="email" placeholder="搜索一下" required="required"  >
                   <input   type="hidden" name="redirect" id="name" value="/fr/#thanks"></div><div class="control"  >
                     <input  type="submit" class="button is-warning" value="GO">
                  </div>
                </div>
            </div>
          
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
    this.auth();
    this.auto();
  },
  methods: {
    auth() {
      let code = getQueryString("code");
      //github返回code码
      if (!_.isEmpty(code)) {
        console.log("test production");
        this.loading = true;
        oAutoApi.getUser(code, response => {
          let user = github2newBee(response);
          userApi.saveUser(user, response => {
            let loginJson = {
              userName: response.data.userName,
              githubNodeId: response.data.githubNodeId
            };
            this.login(loginJson);
          });
        });
      }
    },
    getUserInfo(userName) {
      userApi.getUserInfoByUserName(userName, response => {
        this.userInfo = this.$store.state.user.userInfo = response.data;
      });
    },
    goLogin() {
      this.$router.push("/login");
    },
    goUserPage() {
      this.$router.push(`/user/${getUserName()}`);
    },
    auto() {
      if (!_.isEmpty(getToken())) {
        this.isLogin = true; //应该放到vuex中
        this.user.email = getToken();
        this.userInfo = this.$store.state.user.userInfo;
        if (this.$store.state.user.userInfo == null)
          this.getUserInfo(getUserName());
        return;
      }
      this.isLogin = false;
    },
    login(loginJson) {
      let loginJsonCopy = { ...loginJson };
      let token = {
        token: EP(loginJson)
      };
      userApi.login(token, response => {
        loginJsonCopy.id = response.data.id;
        setToken(EP(loginJsonCopy));
        setInfo(JSON.stringify({ userName: response.data.userName }));
        window.location.href = "/";
        // this.$router.push("/");
      });
    },
    exit() {
      removeToken();
    },
    handleMenuCommand(router) {
      if (router === "exit") {
        this.exit();
        this.auto();
        return;
      }
      if (router === "/user" || router === "/setting")
        router += `/${getUserName()}`;
      this.$router.push(router);
    },
    openPopup() {
      this.popupShow = true;
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
  
</style>

 