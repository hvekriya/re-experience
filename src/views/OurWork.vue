<template>
  <main role="main">
    <!-- Header -->
    <header class="masthead">
      <div class="container">
        <div class="intro-text">
          <div class="intro-heading text-uppercase">Our Work</div>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="page-section col-lg-12">
        <!-- <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">Our Recent Projects</h2>
            <h3 class="section-subheading text-muted">We have been busy just like you!</h3>
          </div>
        </div>-->
        <div class="row">
          <div
            class="col-md-4 animated pulse bounce"
            v-for="(item, index) in projects"
            :key="'project-' + index"
          >
            <a href="/project/calipsa">
              <div class="card mb-4 shadow mb-5 bg-white rounded">
                <img
                  :src="item.data.cover.url"
                  :alt="item.data.cover.alt"
                  class="bd-placeholder-img card-img-top"
                />
                <div
                  class="card-body"
                  v-for="(title, index) in item.data.title"
                  :key="'project-' + index"
                >
                  <h5 class="card-title">{{ title.text }}</h5>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group w-100">
                      <a :href="'/project/' + item.uid" class="card-link">Read more</a>
                    </div>
                  </div>
                  <span
                    v-for="(tag, index) in item.tags"
                    :key="index"
                    class="badge badge-pill badge-light mt-2"
                  >{{ tag }}</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "OurWork",
  data() {
    return {
      projects: null,
      tags: null
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
            this.projects = document.results;

            var tags = document.results
              .map(project => project.tags)
              .map(tags => tags);
            var merged = [].concat.apply([], tags);
            var uniqueTags = [];

            $.each(merged, function(i, el) {
              if ($.inArray(el, uniqueTags) === -1) uniqueTags.push(el);
            });

            this.tags = uniqueTags.map(tags => {
              return { checked: false, value: tags };
            });
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
  },
  beforeRouteUpdate(to, from, next) {
    this.getProjects();
    next();
  }
};
</script>
