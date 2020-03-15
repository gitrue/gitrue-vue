<template>
  <section class=" above-main">
    <div class="container">

      <div class="text-center">
       <h1 class="title  is-size-3-desktop is-size-4-mobile" v-if="title != ''">{{title}}</h1>
      <br />
      <h2 class="subtitle is-size-5-desktop" v-if="des != ''">
        {{des}}
        <a href="mailto:matt@pendeavor.com"> Email me </a>.
      </h2>
        
      </div>
      <br />
      <div class=" columns   is-mobile sitemap-links is-multiline gitrue-tags">
        <div
          class="column is-one-fifth-mobile gitrue-font-2"
          v-for="(tag, index) in tags"
          v-bind:key="index"
        >
          <a href="">{{ tag.value }}</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeTag",
   props: {
     title: {
      type: String,
      default: ""
    },
    des: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: ""
    }
    // ,
    // tags: {
    //   type: Array,
    //   default: []
    // }
  },
  components: {},
  created() {
    this.getInfo()
  },
  data() {
     return {
       tags :[]
     }
  },
  mounted() {},
  destroyed() {},
  methods: {
    async getInfo() {
     this.tags = await  this.axios.get(`/setting/get/${this.type}`)
    }
  }
};
</script>

<style lang="less">
.gitrue-tags {
  padding-bottom: 10px !important;
  padding-top: 10px !important;
}
</style>
