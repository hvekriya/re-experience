<template>
  <main role="main">
    <section
      class="jumbotron text-center text-white"
      v-bind:style="{ backgroundImage: 'url(' + this.cover.url + ')' }"
    >
      <div class="container animated pulse pulse">
        <h1 class="jumbotron-heading">Haresh Vekriya</h1>
        <p class="lead">UX Designer/Front-End Developer</p>
        <p>
          <a href="/experience" class="btn m-2">Experience timeline</a>
          <a
            href="https://drive.google.com/file/d/1yqg2e0DIoe9NPoNETT-d9vmuRfEaGR5O/view?usp=sharing"
            class="btn m-2"
            target="_blank"
          >See my latest CV</a>
        </p>
      </div>
    </section>

    <div class="album">
      <div class="container">
        <p class="h2 pb-4">Latest projects</p>
        <div class="row">
          <div
            class="col-md-4 animated pulse bounce"
            v-for="(item, index) in projects"
            :key="'project-' + index"
          >
            <div
              class="card mb-4 shadow p-3 mb-5 bg-white rounded"
              v-for="(title, index) in item.data.title"
              :key="'project-' + index"
            >
              <img
                class="bd-placeholder-img card-img-top"
                :src="item.data.cover.url"
                :alt="item.data.cover.alt"
              >
              <div class="card-body">
                <h5 class="card-title">{{ title.text }}</h5>
                <p class="card-text">{{ item.data.challenge | readMore(200, ' ...') }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group w-100">
                    <a :href="'/project/' + item.uid">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <a href="/projects" class="btn m-2">View all projects</a> -->
      </div>
    </div>

    <div class="album">
      <div class="container">
        <p class="h2 pb-4">Blog</p>
        <div class="row">
          <div
            class="col-md-4 animated pulse bounce"
            v-for="(item, index) in posts"
            :key="'project-' + index"
          >
            <div
              class="card mb-4 shadow p-3 mb-5 bg-white rounded"
              v-for="(title, index) in item.data.title"
              :key="'project-' + index"
            >
              <img
                class="bd-placeholder-img card-img-top"
                :src="item.data.cover.url"
                :alt="item.data.cover.alt"
              >
              <div class="card-body">
                <h5 class="card-title">{{ title.text }}</h5>
                <p class="card-text">{{ item.data.content | readMore(200, ' ...') }}</p>
                <p class="text-muted">Posted on {{ item.first_publication_date | formatDate() }}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group w-100">
                    <a :href="'/blog/post/' + item.uid">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <a href="/blog" class="btn m-2">View more posts</a> -->
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      projects: null,
      posts: null,
      cover: {
        url:
          "https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      }
    };
  },
  methods: {
    getProjects() {
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "projects"), {
          orderings: "[my.projects.date desc]"
        })
        .then(document => {
          if (document) {
            console.log(document);
            this.projects = document.results;
          } else {
            this.$router.push({
              name: "not-found"
            });
          }
        });
    },
    getBlogPosts() {
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "blog"), {
          orderings: "[document.last_publication_date]"
        })
        .then(document => {
          if (document) {
            console.log(document);
            this.posts = document.results;
          } else {
            this.$router.push({
              name: "not-found"
            });
          }
        });
    }
  },
  created() {
    this.getProjects();
    this.getBlogPosts();
  },
  beforeRouteUpdate(to, from, next) {
    this.getProjects();
    this.getBlogPosts();
    next();
  }
};
</script>
