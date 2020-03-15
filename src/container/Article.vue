<template>
  <section class="hero   is-fullheight">
    <div class="hero-head"></div>

    <div class="hero-body">
       
      <div class="container has-text-centered gitrue-editor">
        <div class="column is-6 is-offset-3">
          <div id="gitrue-content" class="output ql-snow">
            <div class="ql-editor" v-html="content"></div>
          </div>
         
        <!-- {{content}} -->
          <!-- <h1 class="ql-align-center"><span style="background-color: rgb(240, 102, 102); color: rgb(255, 255, 255);"> I am snow example! </span></h1><p><br></p><p>W Can a man still be brave if he's afraid? That is the only time a man can be brave. </p><p><br></p><p><strong>Courage and folly is </strong><strong style="color: rgb(230, 0, 0);">always</strong><strong> just a fine line.</strong></p><p><br></p><p><u>There is only one God, and his name is Death. And there is only one thing we say to Death: "Not today."</u></p><p><br></p><p><em>Fear cuts deeper than swords.</em></p><p><br></p><p><br></p><pre class="ql-syntax" spellcheck="false">const a = 10; const editorOption = { highlight: text =&gt; hljs.highlightAuto(text).value }; </pre><p><br></p><p>Every flight begins with a fall.</p><p><br></p><p><a href="https://surmon.me/" rel="noopener noreferrer" target="_blank" style="color: rgb(230, 0, 0); background-color: transparent;"><u>A ruler who hides behind paid executioners soon forgets what death is. </u></a></p><p><br></p><iframe class="ql-video ql-align-center" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" height="238" width="560"></iframe><p><br></p><p>Hear my words, and bear witness to my vow. Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post. I am the sword in the darkness. I am the watcher on the walls. I am the fire that burns against the cold, the light that brings the dawn, the horn that wakes the sleepers, the shield that guards the realms of men. I pledge my life and honor to the Night’s Watch, for this night and all the nights to come.</p><p><br></p><p>We are born to suffer, to suffer can make us strong.</p><p><br></p><p>The things we love destroy us every time.</p> -->
          <!-- <ArticleHtml></ArticleHtml> -->
        </div>
      </div>
    </div>

  </section>
</template>

<script>
 function htmlspecialchars_decode(str){           
    str = str.replace(/&amp;/g, `&`);
    str = str.replace(/&lt;/g, `<`);
    str = str.replace(/&gt;/g, `>`);
    str = str.replace(/&quot;/g, `"`);  
    str = str.replace(/&#039;/g, `"`);  
    return str;  
}

export default {
  name: "Article",
  components: {},
  data() {
    return {
      article:{},
      content:"<h2> white Some thing ... </h2>  ",
    };
  },
  created() {
    this.getArticle()
  },
  methods: {
  },
  computed: {
  },
  mounted() {
  },
  destroyed() {},
  methods: {
    async getArticle() {
      this.article = await  this.axios.get(`/article/get/1`)
      this.content = htmlspecialchars_decode(this.article.content)
    } 
  } 
};
</script>

<style lang='scss' scoped>
 </style>
