<template>
  <section class="section is-medium intro-module--ciwb--3FG8L">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-6">
          <div class="content">
            <h1 id="ffTitle" class="title is-1 intro-module--title--3as8X">
              Creating interfaces with Bulma
            </h1>
            <p id="ffTagline" class="subtitle intro-module--tagline--2Q5P6">
              <span
                ><span>The</span>&nbsp;<strong>official</strong>&nbsp;<span
                  >Bulma book</span
                ></span
              >
            </p>
            <hr class="mini-hr-module--component--2Z_E4" />
            <p id="ffDescription" class="intro-module--description--3Usbe">
              Build an interface with Bulma components, customize it with Sass,
              and learn how to integrate it with your favourite JS environment
            </p>
            <div class="intro-module--icons--3Fa4K">
              <div
                class="logos-module--component--dmD_v logos-module--left--3QnNz logos-module--small--3zcvq"
              >
                <div class="logos-module--logo--3Y230">
                   <!-- svg -->
                </div>
                <div class="logos-module--logo--3Y230">
                    <!-- svg -->
                </div>
                <div class="logos-module--logo--3Y230">
                  <!-- svg -->
                </div>
                <div class="logos-module--logo--3Y230">
                  <!-- svg -->
                </div>
                <div class="logos-module--logo--3Y230">
                  <!-- svg -->
                </div>
              </div>
            </div>
            <div class="buttons-module--buttons--23F5D">
               <a
                href="https://www.amazon.com/Creating-Interfaces-Bulma-Jeremy-Thomas-ebook/dp/B079M1BJG4/"
                class="button is-large is-warning"
                target="_blank"
                >评价一下</a
              >
            </div>
          </div>
        </div>
        <div class="column is-offset-1 is-5">
          <div id="ffPreview" class="intro-module--preview--iSgF1">
            <img
              src="https://jgthms.com/books/bulma-book-cover.png"
              
              alt="Bulma book book cover"
              width="378"
              height="496"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Book",
  components: {},
  data() {
    return {
      content: ""
    };
  },
  created() {},
  mounted() {},
  destroyed() {},
  methods: {}
};
</script>

<style lang="less">
.logos-module--component--dmD_v {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
}
.intro-module--ciwb--3FG8L .intro-module--icons--3Fa4K {
    margin-bottom: 1rem;
}

 .mini-hr-module--component--2Z_E4 {
    background-color: #00d1b2;
    height: 2px;
    width: 4rem;
}

.intro-module--description--3Usbe {
    font-size: 1.5rem;
    max-width: 18em;
}

.buttons-module--buttons--23F5D {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
}
</style>
