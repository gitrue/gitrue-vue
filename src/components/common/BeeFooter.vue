<template>
    <footer class="footer">
        <div class="content has-text-centered">
            <div class="columns is-mobile is-centered">
                <div class="field is-grouped is-grouped-multiline">
                    <div class="control">
                    <div class="tags has-addons"><a class="tag is-link" href="https://github.com/BulmaTemplates/bulma-templates">Bulma Templates</a>
                    <span class="tag is-info">MIT license</span>
                    </div>
                </div>
                <div class="control">
                    <div class="tags has-addons">
                    <span class="tag is-dark">based on a pen</span>
                    <span class="tag has-addons is-warning"><a href="https://codepen.io/melanieseltzer/pen/odOXWM"><i class="fab fa-lg fa-codepen" aria-hidden="true"></i></a></span>
                    </div>
                </div>
                </div>
            </div>
            <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </p>
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
  mounted() {
    this.auto();
  },
  methods: {}
};
</script>

<style lang="less">
   .footer {
       padding-bottom: 20px;
       padding-top: 20px;
       height : 180px;
       background-color: #323539 ;
   }
</style>
