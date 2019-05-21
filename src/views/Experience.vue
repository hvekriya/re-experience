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
          <a href="/" class="btn m-2">Latest projects</a>
        </p>
      </div>
    </section>

    <div class="album">
      <div class="container">
        <p class="h2 pb-4">My experience</p>
        <section class="timeline animated slideInUp">
          <ul>
            <template v-for="(slice, index) in fields.slices">
              <template v-if="slice.slice_type === 'faq'">
                <li v-for="(item, index) in slice.items" :key="'photo-' + index">
                  <span></span>
                  <div>
                    <prismic-rich-text :field="item.job_title"/>
                  </div>
                  <div>
                    <prismic-rich-text :field="item.company"/>
                  </div>
                  <div>
                    <prismic-rich-text :field="item.job_description"/>
                  </div>
                  <div class="year">
                    <span>
                      <prismic-rich-text :field="item.end_date"/>
                    </span>
                    <span>
                      <prismic-rich-text :field="item.start_date"/>
                    </span>
                  </div>
                </li>
              </template>
            </template>
          </ul>
        </section>
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
      cover: {
        url:
          "https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      },
      fields: {
        title: null,
        ctaLink: null,
        ctaText: null,
        slices: []
      }
    };
  },
  methods: {
    getContent() {
      this.$prismic.client.getSingle("experience").then(document => {
        if (document) {
          this.fields.title = document.data.title;
          this.fields.ctaLink = document.data.cta_link;
          this.fields.ctaText = document.data.cta_text;
          this.fields.slices = document.data.body;
        } else {
          this.$router.push({
            name: "not-found"
          });
        }
      });
    }
  },
  created() {
    this.getContent();
  },
  beforeRouteUpdate(to, from, next) {
    this.getContent();
    next();
  }
};
</script>
