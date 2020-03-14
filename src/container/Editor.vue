<template>
  <section class="hero   is-fullheight">
    <div class="hero-head"></div>

    <div class="hero-body">
       
      <div class="container has-text-centered gitrue-editor">
        <div class="column is-6 is-offset-3">

          <a class=""><div class="control"><input type="text" placeholder="输入合适的标题 ..." class="input is-static post-title is-large"></div></a>
          <br>
          <quill-editor
            class="editor"
            v-model="content"
            ref="quillEditorA"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @ready="onEditorReady($event)"
          >
          </quill-editor>

          <h1 class="ql-align-center"><span style="background-color: rgb(240, 102, 102); color: rgb(255, 255, 255);"> I am snow example! </span></h1><p><br></p><p>W Can a man still be brave if he's afraid? That is the only time a man can be brave. </p><p><br></p><p><strong>Courage and folly is </strong><strong style="color: rgb(230, 0, 0);">always</strong><strong> just a fine line.</strong></p><p><br></p><p><u>There is only one God, and his name is Death. And there is only one thing we say to Death: "Not today."</u></p><p><br></p><p><em>Fear cuts deeper than swords.</em></p><p><br></p><p><br></p><pre class="ql-syntax" spellcheck="false">const a = 10; const editorOption = { highlight: text =&gt; hljs.highlightAuto(text).value }; </pre><p><br></p><p>Every flight begins with a fall.</p><p><br></p><p><a href="https://surmon.me/" rel="noopener noreferrer" target="_blank" style="color: rgb(230, 0, 0); background-color: transparent;"><u>A ruler who hides behind paid executioners soon forgets what death is. </u></a></p><p><br></p><iframe class="ql-video ql-align-center" frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" height="238" width="560"></iframe><p><br></p><p>Hear my words, and bear witness to my vow. Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post. I am the sword in the darkness. I am the watcher on the walls. I am the fire that burns against the cold, the light that brings the dawn, the horn that wakes the sleepers, the shield that guards the realms of men. I pledge my life and honor to the Night’s Watch, for this night and all the nights to come.</p><p><br></p><p>We are born to suffer, to suffer can make us strong.</p><p><br></p><p>The things we love destroy us every time.</p>
          {{content}}
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";

export default {
  name: "Editor",
  components: {
    quillEditor
  },
  data() {
    return {
      message: "Hi from Vue.",
      content:
        "<h2> white Some thing ... </h2>  ",
      editorOption: {
        size: "large"
      }
    };
  },
  methods: {
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    }
  },
  computed: {
    editorA() {
      return this.$refs.quillEditorA.quill;
    }
  },
  mounted() {
    console.log("this is quill A instance object", this.editorA);
  },
  destroyed() {},
  methods: {}
};
</script>

<style lang='scss' scoped>
// @import '../public/css/quill/quill.core.css';
// .post-title {
//   border-color: #cccccc;
//   border-top-width: 1px;
//   border-left-width: 1px;
//   border-bottom-width: 1px;
//   border-right-width: 1px;
// }

.editor {
  height: 500px;
}
</style>
