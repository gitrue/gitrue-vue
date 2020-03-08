<template>
    <div class="card-body tile is-ancestor">
        <div class="app-content tile is-vertical is-8">
            <div class="tabs" style="margin-bottom: 0px;background-color: white !important;">
              <ul>
                <li class="is-active"><a>全部</a></li>
                <li v-for="tag in moke.tags" v-bind:key="tag"  ><a>{{tag}}</a></li>
              </ul>
            </div>
          <div class="card-content">
            <div class="media" v-for="item in moke.cards" v-bind:key="item">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img class="is-rounded" src="http://www.gitrue.com:9000/image/avatar.png" alt="Placeholder image">
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <div class="post-title">
                    <a href="#" style="color:#7B7B7B;" >【新人必看】希望你在社区得到价值的同时，也能尊重社区的规则。</a>
                  </div>
                  <a href="#">#css</a> <a href="#">#responsive</a>
                  <br>
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
              </div>

              
            </div>

            
          </div>
           
 
 
        </div>
        <!-- todo 根据页面优化宽度细节 -->
        <div class="app-sider tile is-parent is-3">
          <article class="tile is-child notification is-success">
            <div class="content">
              <p class="title">Tall tile</p>
              <p class="subtitle">With even more content</p>
              <div class="content">
                <!-- Content -->
              </div>
            </div>
          </article>

          
        </div>
      </div>
</template>


<script>
export default {
  name: "Section",
  props: { tagList: Array },
  data() {
    return {
      moke: {cards : 10,tags:["沙雕新闻","远程","创意","想法","远程","分享","团购","极客"]}
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
  .card {
    padding-left: 5px !important;
    padding-right: 5px !important;

  }
  .card-body {
    margin-top: 5px !important;
  }  
  .app-content {
    // background-color: white;
    // height: 1000px;
  }
  .app-sider {
    background-color: white;
    height: 1000px;
    padding-left: 24px;
    padding-right: 24px;
    border-left-width: 20px;
    margin-left: 20px;
  }
  .card-content {
    background-color: white !important;
  }
  // .tags {
  //   margin-bottom: 0px;
  //   background-color: white !important;
  // }
</style>

