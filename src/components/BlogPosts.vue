<template>
  <div class="album">
    <div class="container">
      <p class="h2 pb-4">Blog</p>
      <div class="row">
        <div
          class="col-md-4 animated pulse bounce"
          v-for="(item, index) in posts"
          :key="'project-' + index"
        >
          <a :href="'/blog/post/' + item.uid">
            <div
              class="card mb-4 shadow p-3 mb-5 bg-white rounded"
              v-for="(title, index) in item.data.title"
              :key="'project-' + index"
            >
              <img
                class="bd-placeholder-img card-img-top"
                :src="item.data.cover.url"
                :alt="item.data.cover.alt"
              />
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
          </a>
        </div>
      </div>
      <!-- <a href="/blog" class="btn m-2">View more posts</a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPosts",
  data() {
    return {
      posts: ""
    };
  },
  methods: {
    getBlogPosts() {
      this.$prismic.client
        .query(this.$prismic.Predicates.at("document.type", "blog"), {
          orderings: "[document.last_publication_date]"
        })
        .then(document => {
          if (document) {
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
    this.getBlogPosts();
  },
  beforeRouteUpdate(to, from, next) {
    this.getBlogPosts();
    next();
  }
};
</script>
