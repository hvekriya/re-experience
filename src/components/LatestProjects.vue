<template>
  <div class="album">
    <div class="container">
      <p class="h2 pb-4">Latest projects</p>
      <div class="filter-pannel mb-4">
        <ul>
          <li v-for="(tag, index) in tags" :key="index" class="m-1">
            <input
              type="checkbox"
              :id="`checkbox-${index}`"
              :value="tag.value"
              v-model="tag.checked"
              v-on:change="getfilteredData"
            >
            <label :for="`checkbox-${index}`">{{tag.value}}</label>
          </li>
        </ul>
      </div>

      <p
        v-if="filteredProjects.length === 0"
      >No projects found with those tags &#128542; Try other tags</p>

      <div class="row">
        <div
          class="col-md-4 animated pulse bounce"
          v-for="(item, index) in filteredProjects"
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
              <span
                v-for="(tag, index) in item.tags"
                :key="index"
                class="badge badge-pill badge-light mt-2"
              >{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
      <!-- <a href="/projects" class="btn m-2">View all projects</a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "LatestProjects",
  data() {
    return {
      projects: "",
      filteredProjects: "",
      tags: []
    };
  },
  computed: {
    selectedFilters: function() {
      let filters = [];
      let checkedFiters = this.tags.filter(obj => obj.checked);
      checkedFiters.forEach(element => {
        filters.push(element.value);
      });
      return filters;
    }
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
            this.filteredProjects = this.projects;

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
    },
    getfilteredData: function() {
      // first check if filters where selected
      if (this.selectedFilters.length > 0) {
        this.filteredProjects = this.projects.filter(project =>
          this.selectedFilters.every(val => project.tags.indexOf(val) >= 0)
        );
      }
      if (this.selectedFilters.length === 0) {
        console.log("Empty");
        this.filteredProjects = this.projects;
      }
    }
  },
  mounted() {
    this.getfilteredData();
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
