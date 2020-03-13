<template>
  <section class="hero is-primary">
  <div class="hero-body">
    <div class="container text-center">
      <h1 class="title is-2">(404) This is not the page you are looking for</h1>
    </div>
  </div>
</section>
</template>

<script>

export default {
  name: "404",
  components: {
  },
  data() {
    return {
       
    };
  },
  methods: {
    
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
 

</style>
