<template>
    <section class="section above-main">
        <div class="container">
          <div class="text-center">
              <h2 class="title is-3 is-5-mobile">
                Almost all software products are on SaaSHub
              </h2>
              <div class="subtitle">
                117,568
                products and growing. Is yours here?
              </div>
          </div>
        </div>
      </section>
</template>


<script>
export default {
  name: "HomeTag",
  props: {  },
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
        cards : 10,
        tags:["沙雕新闻","远程","创意","想法","分享","团购","极客"],
        users:['庄文达','郭萌萌','mlh','zxf','nanocosa','zfs','asds','ddd','java','hogu']
        }
    };

  },
  mounted() {
     
  },
  destroyed() {},
  methods: {
     
  }
};
</script>

<style lang="less">
   
</style>

