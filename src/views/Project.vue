<template>
  <main role="main">
    <section
      class="jumbotron masthead text-center text-white"
      v-bind:style="{ backgroundImage: 'url(' + project.cover.url + ')' }"
    >
      <div class="overlay"></div>
      <div class="container animated pulse pulse">
        <h1 class="jumbotron-heading">
          <prismic-rich-text :field="project.title"/>
        </h1>
        <p>
          <a href="/" class="btn m-2">Back to projects</a>
        </p>
      </div>
    </section>

    <div class="album">
      <div class="container">
        <h2>Overview</h2>
        <br>
        <h5>Client</h5>
        <prismic-rich-text :field="project.client"/>

        <h5>Challenge</h5>
        <prismic-rich-text :field="project.challenge"/>

        <h5>Outcome</h5>
        <prismic-rich-text :field="project.outcome"/>

        <h5>Length of project</h5>
        <prismic-rich-text :field="project.length"/>

        <h5>My role in the project</h5>
        <prismic-rich-text :field="project.role"/>

        <br>
        <prismic-rich-text :field="project.content"/>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Project",
  data() {
    return {
      project: null
    };
  },
  methods: {
    getContent(uid) {
      this.$prismic.client.getByUID("projects", uid).then(document => {
        if (document) {
          this.project = document.data;
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
