<template>
  <section class="section projects    has-text-centered">
    <div class="container is-narrow">
      <HomeTag :tags="api.tags" type="shareTags" title="好站推荐" des="我们推荐美丽实用、有创意的网站或工具，您有推荐 ?"></HomeTag>
      <div class="project-grid">
        <div class="columns is-multiline is-mobile">
          <div class="column is-12-mobile is-half-tablet is-one-third-desktop">
            <figure class="image is-3by2">
              <img
                class="project-thumb"
                src="https://i.ytimg.com/vi/6ONRM5Sn9w8/maxresdefault.jpg"
              />
              <figcaption>
                <h1 class="title is-size-5 is-size-4-widescreen">
                  在线演示代码神器，问题求助？解决方案？抛个链接给对方吧。
                </h1>
                <a
                  class="button is-primary is-outlined is-rounded"
                  href="https://jsfiddle.net/"
                  target="_blank"
                  ><span>Visit Website</span
                  > </a
                >
              </figcaption>
              <div class="overlay"></div>
            </figure>
          </div>
          <div class="column is-12-mobile is-half-tablet is-one-third-desktop">
            <figure class="image is-3by2">
              <img
                class="project-thumb"
                src="http://www.gitrue.com:9000/image/gitrue/share/coder.png"
              />
              <figcaption>
                <h1 class="title is-size-5 is-size-4-widescreen">
                  一行 docker 命令在服务器上搭建 Vs Code 在线版的开源项目
                </h1>
                <a
                  class="button is-primary is-outlined is-rounded"
                  href="http://awg2020.org/"
                  target="_blank"
                  ><span>Visit Website</span
                  ></a
                >
              </figcaption>
              <div class="overlay"></div>
            </figure>
          </div>
          <div class="column is-12-mobile is-half-tablet is-one-third-desktop">
            <figure class="image is-3by2">
              <img
                class="project-thumb"
                src="https://mattfarley.ca/img/projects/chronicled.png"
              />
              <figcaption>
                <h1 class="title is-size-5 is-size-4-widescreen">
                  Blockchain pioneers bringing transparency, trust, and security
                  to supply.
                </h1>
                <a
                  class="button is-primary is-outlined is-rounded"
                  href="https://www.chronicled.org/"
                  target="_blank"
                  ><span>Visit Website</span
                  ></a
                >
              </figcaption>
              <div class="overlay"></div>
            </figure>
          </div>
          <div class="column is-12-mobile is-half-tablet is-one-third-desktop">
            <figure class="image is-3by2">
              <img
                class="project-thumb"
                src="https://mattfarley.ca/img/projects/glcsolutions.png"
              />
              <figcaption>
                <h1 class="title is-size-5 is-size-4-widescreen">
                  Business savvy tech experts helping forward thinking companies
                  get things done.
                </h1>
                <a
                  class="button is-primary is-outlined is-rounded"
                  href="http://glcsolutions.ca"
                  ><span>Visit Website</span
                  > </a
                >
              </figcaption>
              <div class="overlay"></div>
            </figure>
          </div>
          <div class="column is-12-mobile is-half-tablet is-one-third-desktop">
            <figure class="image is-3by2">
              <img
                class="project-thumb"
                src="https://mattfarley.ca/img/projects/coupal.png"
              />
              <figcaption>
                <h1 class="title is-size-5 is-size-4-widescreen">
                  Vancouver's tower crane rental service and support leader
                  since 1974.
                </h1>
                <a
                  class="button is-primary is-outlined is-rounded"
                  href="http://coupalcranes.com/"
                  target="_blank"
                  ><span>Visit Website</span
                  > </a
                >
              </figcaption>
              <div class="overlay"></div>
            </figure>
          </div>
          <div class="column is-12-mobile is-half-tablet is-one-third-desktop">
            <figure class="image is-3by2">
              <img
                class="project-thumb"
                src="https://mattfarley.ca/img/projects/wedlerengineering.png"
              />
              <figcaption>
                <h1 class="title is-size-5 is-size-4-widescreen">
                  Results-oriented, responsive and flexible full service civil
                  engineering firm.
                </h1>
                <a
                  class="button is-primary is-outlined is-rounded"
                  href="http://wedler.com"
                  target="_blank"
                  ><span>View Website</span
                  > </a
                >
              </figcaption>
              <div class="overlay"></div>
            </figure>
          </div>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column">
          <a
            class="button is-primary is-outlined is-rounded is-medium"
            href="https://dribbble.com/mattfarley"
            > <span>See more on Dribbble</span></a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HomeTag from "@/components/common/HomeTag.vue";
export default {
  name: "Share",
  components: {HomeTag},
  data() {
    return {
      api: {
        tags: ["沙雕新闻", "远程", "创意", "想法", "分享", "团购", "极客"]
         
      }
    };
  },
  created() {
    this.getInfo()
  },
  mounted() {
  },
  destroyed() {},
  methods: {
    async getInfo() {
     this.api.tags = await  this.axios.get(`/setting/get/homeTags`)
    }
  }
};
</script>

<style>
.projects .button.is-primary.is-outlined.is-medium {
  padding: 1.25em 2em;
  font-weight: 400;
  border-width: 2px;
  margin-top: 2rem;
}

.projects .project-grid {
  padding: 2rem 0 4rem;
}

@media screen and (min-width: 769px) {
  .projects .project-grid {
    padding-top: 4rem;
  }
}

.projects .project-grid figure {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}

.projects .project-grid figure img.project-thumb {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

.projects .project-grid figure figcaption {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0rem 3rem;
  color: #fff;
  z-index: 1;
}

@media screen and (min-width: 769px) {
  .projects .project-grid figure figcaption {
    padding: 0rem 2rem;
  }
}

.projects .project-grid figure figcaption .tags {
  margin: 0 auto 0.6rem;
}

.projects .project-grid figure figcaption .tags span.tag {
  font-weight: 600;
}

.projects .project-grid figure figcaption h1.title {
  color: #fff;
  margin-bottom: 1.8rem;
  font-weight: 500;
}

.projects
  .project-grid
  figure
  figcaption
  a.button.is-primary.is-outlined.is-rounded {
  margin: 0 auto;
  font-size: 18px;
  padding: 1.2rem;
  font-weight: 400;
  border-width: 2px;
  color: white;
}

.projects
  .project-grid
  figure
  figcaption
  a.button.is-primary.is-outlined.is-rounded
  span.icon {
  margin-top: 4px;
  margin-left: 0px;
}

.projects
  .project-grid
  figure
  figcaption
  a.button.is-primary.is-outlined.is-rounded
  span.icon
  svg {
  width: 8px;
}

.projects .project-grid .overlay,
.projects .project-grid figcaption {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transition: 0.45s ease-in-out;
  transition: 0.45s ease-in-out;
}

.projects .project-grid .overlay {
  background-color: #141c3a;
}

.projects .project-grid figure:hover img {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.projects .project-grid figure:hover .overlay,
.projects .project-grid figure:hover figcaption {
  opacity: 1;
}

/*# sourceMappingURL=main.css.map */
</style>
