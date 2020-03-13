<template>
  <section class="hero   is-fullheight">
    <div class="hero-head"></div>

    <div class="hero-body">
       
      <div class="container has-text-centered gitrue-editor">
        <div class="column is-6 is-offset-3">

          <a class=""><div class="control"><input type="text" placeholder="输入合适的标题 ..." class="input is-static post-title is-large"></div></a>
          <br>
          <quill-editor
            v-model="content"
            ref="quillEditorA"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @ready="onEditorReady($event)"
          >
          </quill-editor>
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
        "<h2> white Some thing ... </h2> <p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p><p><br></p>",
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

<style lang="less" scoped>
// .post-title {
//   border-color: #cccccc;
//   border-top-width: 1px;
//   border-left-width: 1px;
//   border-bottom-width: 1px;
//   border-right-width: 1px;
// }

.ql-editor {
  height: 400px !important;
}
</style>
