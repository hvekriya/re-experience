<template>
  <main role="main">
    <section
      class="jumbotron text-center text-white"
      v-bind:style="{ backgroundImage: 'url(' + this.cover.url + ')' }"
    >
      <div class="container animated pulse pulse">
        <h1 class="jumbotron-heading">Haresh Vekriya</h1>
        <p class="lead">UX/UI Designer</p>
        <p>
          <a href="/experience" class="btn m-2">Experience</a>
          <a
            href="https://drive.google.com/file/d/1yqg2e0DIoe9NPoNETT-d9vmuRfEaGR5O/view?usp=sharing"
            class="btn m-2"
            target="_blank"
          >See my latest CV</a>
        </p>
      </div>
    </section>

    <LatestProjects />
    <BlogPosts />
    <MediumClaps />
    <Tools />
  </main>
</template>

<script>
import LatestProjects from "../components/LatestProjects";
import BlogPosts from "../components/BlogPosts";
import MediumClaps from "../components/MediumClaps";
import Tools from "../components/Tools";

export default {
  name: "Home",
  components: {
    LatestProjects,
    BlogPosts,
    MediumClaps,
    Tools
  },
  data() {
    return {
      cover: {
        url:
          "https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      }
    };
  }
};
</script>
