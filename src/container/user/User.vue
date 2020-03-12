<template>
    <div class="section">
        <div class="container">

            <div class="columns">
          <div class="column">
          <div class="boxed boxed--more-space">
          <h2 class="title is-3">Profile</h2>
          <form action="/profile/update" accept-charset="UTF-8" method="post"><input type="hidden" name="authenticity_token" value="lLqZpJLPc4oOxvro6XbHcPeuH+Aa5lrt0e8An8H1jYBQG0GaiY65QmvF8fT91REY/rjcUBQcUYy/5hVXBsprqQ=="><div class="field info-field is-horizontal">
          <div class="field-label">
          <label class="label">Email</label>
          </div>
          <div class="field-body">
          pkwenda@163.com

          </div>
          </div>
          <div class="field info-field is-horizontal">
          <div class="field-label">
          <label class="label">Username</label>
          </div>
          <div class="field-body">
          pkwenda
          &nbsp;
          <a href="/u/pkwenda">My Toolbox</a>

          </div>
          </div>
          <div class="field is-horizontal">
          <div class="field-label is-normal">
          <label class="label">Avatar</label>
          </div>
          <div class="field-body">
          <div class="field">
          <div class="control"><div class="columns">
          <div class="column is-narrow">
          <div class="screenshot-thumbnail">
          <img src="https://www.gravatar.com/avatar/846ec8d51c6b50f7926464bb520b1c1c%3Fs=large_width&amp;d=identicon" style="height: 96px">
          </div>
          </div>
          <div class="column content">
          <p>
          We use <a href="https://en.gravatar.com/">Gravatar</a> for default images.
          </p>
          <p>
          </p><div data-react-class="UploadImage" data-react-props="{&quot;title&quot;:&quot;📎 Upload avatar&quot;,&quot;uploadPath&quot;:&quot;/profile/upload_avatar&quot;}" data-react-cache-id="UploadImage-0"><a>📎 Upload avatar</a></div>
          <p></p>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
          <div class="field is-horizontal">
          <div class="field-label is-normal">
          <label class="label">Name</label>
          </div>
          <div class="field-body">
          <div class="field">
          <div class="control"><input type="text" name="name" id="name" class="input">
          </div>
          </div>
          </div>
          </div>
          <div class="field is-horizontal">
          <div class="field-label is-normal">
          <label class="label">Bio</label>
          </div>
          <div class="field-body">
          <div class="field">
          <div class="control"><textarea name="bio" id="bio" class="textarea" rows="4"></textarea>
          </div>
          <p class="help">Will be shown on your public page</p>
          </div>
          </div>
          </div>
          <div class="field is-horizontal">
          <div class="field-label is-normal">
          </div>
          <div class="field-body">
          <div class="field">
          <div class="control"><input class="button is-success" type="submit" value="Update">
          </div>
          </div>
          </div>
          </div>
          <div class="content text-right">
          <a href="/profile/change_password">Change Password</a>
          </div>
          </form></div>
          <br>
          <div class="boxed boxed--more-space">
          <h3 class="title is-4">Your Tribune Exptert Stats</h3>
          <em>No ranking yet. Vote on nominations to increase your rank.</em>
          <br>
          <br>
          <div class="columns is-mobile">
          <div class="column">
          <a href="/tribune">Learn more</a>
          </div>
          <div class="column is-narrow">
          <a href="/tribune/nominate">👍 Vote on nominations</a>
          </div>
          </div>

          </div>
          </div>
          <div class="column">
          <h2 class="title is-3">Verified Products</h2>
          <div class="boxed">
          If you own or work on a product, go to its page and click <b>verify</b> to gain managing access.
          </div>
          </div>
          </div>

        </div>
      </div>

</template>

<script>
import BeeHeader from "../../components/common/BeeHeader.vue";

export default {
  name: "User",
  components: { BeeHeader },
  data() {
    return {
      userName: this.$route.params.userName || "",
      userInfo: {},
      blogs: []
    };
  },
  mounted() {
    // $("nav.tabs")
    //   .find("li")
    //   .click(function() {
    //     if (!$(this).hasClass("is-active")) {
    //       $("nav.tabs")
    //         .find("li")
    //         .each(function(k, v) {
    //           $(v).removeClass("is-active");
    //         });
    //       $(this).addClass("is-active");
    //       self.$emit("tagEvent", $(this).attr("type"));
    //       //todo:应该减少dom移出操作
    //       $("#index-main").hide();
    //       newBee("#index-type").animation(500, function() {
    //         $("#index-main").show();
    //       });
    //     }
    //   });
    // this.getUserInfo();
    // this.getBlogs();
  },
  destroyed() {},
  methods: {
     
  }
};
</script>
 
<style scoped>
/* body {
  background-color: #f7f7f7;
} */
.item {
  padding: 2.5rem;
  border-bottom: 1px solid hsla(0, 0%, 59%, 0.1);
}
.user-info-row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.thumb-row {
  position: relative;
  padding-top: 23.4%;
  margin-bottom: 2rem;
}

.abstract-row .abstract {
  width: 100%;
  max-height: 7.800000000000001rem;
  line-height: 1.5;
  letter-spacing: 0.02rem;
  color: #8b8b8b;
  cursor: pointer;
  overflow: hidden;
  font-size: 1.3rem;
}
.action-row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 1.5rem;
  color: rgba(24, 37, 50, 0.3);
}
.action,
.entry-action-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.abstract-row .title:visited {
  color: #909090;
}

.abstract-row .title {
  width: 100%;
  margin-bottom: 0.8rem;
  font-size: 2rem;
  color: #000;
  line-height: 1.3;
  font-weight: 600;
  letter-spacing: 0.04rem;
}

.action-row .action-list .action,
.action-row .action-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
}
ul {
  padding: 0;
  margin: 0;
}

user agent stylesheet ul ul,
ol ul {
  list-style-type: circle;
}
.action-row .action-list .action,
.action-row .action-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
}

ul {
  padding: 0;
  margin: 0;
}
.action-row .action-list .action.active {
  color: #fff;
  border-color: #83c73a;
  background-color: #83c73a;
}
.action-row .action-list .action {
  cursor: pointer;
  padding: 0 1rem;
  height: 25px;
  line-height: 25px;
  white-space: nowrap;
  border: 1px solid #f1f1f1;
  border-radius: 1px;
  background-color: #fff;
  transition: color, border-color, background-color 0.3s;
}
.action-row .action-list .action,
.action-row .action-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
}
li {
  list-style: none;
}
user agent stylesheet li {
  display: list-item;
  text-align: -webkit-match-parent;
}
</style>
