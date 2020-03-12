<template>
  <footer class="footer">
    <div class="container">
      <div class="columns is-mobile is-centered">
        <div class="field is-grouped is-grouped-multiline">
          <div class="control">
            <div class="tags has-addons">
              <a
                class="tag is-link"
                href="https://github.com/BulmaTemplates/bulma-templates"
                >Bulma Templates</a
              >
              <span class="tag is-info">MIT license</span>
            </div>
          </div>
          <div class="control">
            <div class="tags has-addons">
              <span class="tag is-dark">based on a pen</span>
              <span class="tag has-addons is-warning"
                ><a href="https://codepen.io/melanieseltzer/pen/odOXWM"
                  ><i class="fab fa-lg fa-codepen" aria-hidden="true"></i></a
              ></span>
            </div>
          </div>
        </div>
      </div>
      <div class="columns is-desktop text-small">
        <div class="column">
          <p>
            <span>About</span>
          </p>
          <p>
            SaaSHub is an independent software marketplace. Our goal is to be
            objective, simple and your first stop when researching for a new
            service to help you grow your business. We will help you find
            alternatives and reviews of the services you already use.
          </p>
        </div>
        <div class="column">
          <div class="columns">
            <div class="column">
              <p>
                <span>Sitemap</span>
              </p>
              <ul>
                <li><a href="/product-promotion">Free Product Promotion</a></li>
                <li><a href="/featured-products">Featured Products</a></li>
                <li><a href="/categories">Browse Categories</a></li>
                <li><a href="/compare">Compare Software</a></li>
                <li>
                  <a
                    target="_blank"
                    href="https://chrome.google.com/webstore/detail/alternative-to-by-saashub/bfllfmelefabahclnehpdocekedapcbj"
                    >Chrome Extension</a
                  >
                </li>
                <li><a href="/status-pages">Status Pages!</a></li>
                <li><a href="/tribune">SaaS Tribune</a></li>
              </ul>
            </div>
            <div class="column">
              <p>
                <span>Big Tech Alternatives</span>
              </p>
              <ul>
                <li><a href="/replace-facebook">Replace Facebook</a></li>
                <li>
                  <a href="/all-google-alternatives">Google Alternatives</a>
                </li>
                <li>
                  <a href="/all-atlassian-alternatives"
                    >Atlassian Alternatives</a
                  >
                </li>
              </ul>
              <p></p>
              <br />
              <p>
                <span>More</span>
              </p>
              <ul>
                <li><a href="/product-graveyard">Product Graveyard</a></li>
                <li><a href="/google-graveyard">Google Graveyard</a></li>
              </ul>
              <p></p>
            </div>
            <div class="column">
              <p>
                <span>Contacts</span>
              </p>
              <ul>
                <li>
                  <a rel="nofollow" href="https://twitter.com/SaaSHubCom"
                    >Twitter</a
                  >
                </li>
                <li><a href="/site/email">Email</a></li>
                <li>
                  <a
                    rel="nofollow"
                    href="https://saashub.typeform.com/to/gSej0f"
                    >Feedback</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom has-text-centered is-size-7">
        <span>SaaSHub</span>
        |
        <a href="/site/privacy">Privacy Policy</a>
        |
        <a href="/site/terms">Terms</a>
        |
        <span>CC BY-SA 4.0</span>
      </div>
    </div>
  </footer>
</template>

<script>
import _ from "lodash";
export default {
  name: "BeeFooter",
  data() {
    return {};
  },
  created() {},
  destroyed() {},
  mounted() {},
  methods: {}
};
</script>

<style lang="less">
//    .footer {
//        padding-bottom: 20px;
//        padding-top: 20px;
//        height : 180px;
//        background-color: #323539 ;
//    }
</style>
