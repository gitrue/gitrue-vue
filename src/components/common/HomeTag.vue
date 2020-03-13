<template>
  <section class=" above-main">
    <div class="container">
      <div class="text-center">
        <h2 class="title is-3 is-5-mobile">
          有活力的开源社区
        </h2>
        <!-- <div class="subtitle">
          117,568 products and growing. Is yours here?
        </div> -->
      </div>
      <br />
      <div class=" columns   is-mobile sitemap-links is-multiline gitrue-tags">
        <div
          class="column is-one-fifth-mobile gitrue-font-2"
          v-for="tag in moke.tags"
          v-bind:key="tag"
        >
          <a href="">{{ tag }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeTag",
  props: {},
  components: {},
  created() {
    // window.onload = function what(){
    // console.log(Pictogrify)
    //   new Pictogrify('my text').render(document.querySelector('.avatar'))
    // };
  },
  data() {
    return {
      moke: {
        cards: 10,
        tags: ["沙雕新闻", "远程工作", "创意", "想法", "分享", "团购", "极客"],
        users: [
          "庄文达",
          "郭萌萌",
          "mlh",
          "zxf",
          "nanocosa",
          "zfs",
          "asds",
          "ddd",
          "java",
          "hogu"
        ]
      }
    };
  },
  mounted() {},
  destroyed() {},
  methods: {}
};
</script>

<style lang="less">
.gitrue-tags {
  padding-bottom: 10px !important;
  padding-top: 10px !important;
}
</style>
