<template>
  <main role="main">
    <section
      class="jumbotron masthead text-center text-white"
      v-bind:style="{ backgroundImage: 'url(' + this.article.cover.url + ')' }"
    >
      <div class="overlay"></div>
      <div class="container animated pulse pulse">
        <h1 class="jumbotron-heading">
          <prismic-rich-text :field="article.title"/>
        </h1>
        <p>
          <a href="/" class="btn m-2">Go back</a>
        </p>
      </div>
    </section>

    <div class="album">
      <div class="container">
        <h2>
          <prismic-rich-text :field="article.title"/>
        </h2>
        <prismic-rich-text :field="article.content"/>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Post",
  data() {
    return {
      article: null
    };
  },
  methods: {
    getContent(uid) {
      this.$prismic.client.getByUID("blog", uid).then(document => {
        if (document) {
          this.article = document.data;
        } else {
          this.$router.push({
            name: "not-found"
          });
        }
      });
    }
  },
  created() {
    this.getContent(this.$route.params.uid);
  },
  beforeRouteUpdate(to, from, next) {
    this.getContent(to.params.uid);
    next();
  }
};
</script>
