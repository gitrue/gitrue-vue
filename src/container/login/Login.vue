<template>
  <div>
    <br />
    <div class="container">
      <!-- <div class="notification"> -->
      <div class="tile is-ancestor">
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child box">
            <img
              class="login-city"
              src="http://www.gitrue.com:9000/image/gitrue/slack-slack-com.svg"
              alt=""
            />
          </div>
          <div class="tile is-child box">
            <img
              class="login-city"
              src="http://www.gitrue.com:9000/image/gitrue/slack-slack-com.svg"
              alt=""
            />
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child box login-content">
            <div class="hero is-fullheight is-warning is-relative">
              <div class="columns has-text-centered">
                <div class="column login-des">
                  <h2 class="title is-2 light-text">
                    From this moment
                  </h2>
                  <h3 class="subtitle is-5 light-text">
                    成为社区的一员,尽情的分享吧...
                  </h3>

                  <div class="mt-30 has-text-centered">
                    <a
                      @click="goRegister"
                      class="button button-cta btn-outlined is-bold light-btn rounded"
                      >没有账号,现在注册</a
                    >
                  </div>

                  <div class=" ">
                    <div class="column is-6 is-offset-3">
                      <div class="box">
                        <figure class="avatar">
                          <img src="https://placehold.it/128x128" />
                        </figure>
                        <form>
                          <div class="field">
                            <div class="control">
                              <input
                                class="input is-large"
                                type="email"
                                placeholder="Your Email"
                                autofocus=""
                              />
                            </div>
                          </div>

                          <div class="field">
                            <div class="control">
                              <input
                                class="input is-large"
                                type="password"
                                placeholder="Your Password"
                              />
                            </div>
                          </div>
                          <div class="field">
                            <label class="checkbox">
                              <input type="checkbox" />
                              Remember me
                            </label>
                          </div>
                          <button
                            class="button is-block is-info is-large is-fullwidth"
                          >
                            Login
                            <i class="fa fa-sign-in" aria-hidden="true"></i>
                          </button>
                        </form>
                      </div>
                      <p class="has-text-grey">
                        <a href="../">Sign Up</a> &nbsp;·&nbsp;
                        <a href="../">Forgot Password</a> &nbsp;·&nbsp;
                        <a href="../">Need Help?</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <img
                class="login-city"
                src="http://www.gitrue.com:9000/image/gitrue/slack-slack-com.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import BeeHeader from "../../components/common/BeeHeader.vue";

export default {
  components: { BeeHeader },
  name: "Login",
  components: {},
  data() {
    return {
      numberValidateForm: {
        age: ""
      }
    };
  },
  created() {
    let json = {
      username: "pkwenda@163.com_zsp_" + new Date().getTime(),
      pwd: "000000" + "_zsp_" + new Date().getTime()
    };
    console.log(EP);
    console.log(EP(json));
  },
  methods: {
    goRegister() {
      this.$router.push("/login/register");
    }
  }
};
</script>

<style lang="less">
.login-content {
  padding: 0px !important;
}
.login-des {
  color: white !important;
}
</style>
