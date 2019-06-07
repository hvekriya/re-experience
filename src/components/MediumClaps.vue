<template>
  <div class="album">
    <div class="container">
      <p class="h2 pb-4">Medium claps 👏</p>
      <p>{{this.posts.description}}</p>
      <div class="row">
        <div
          class="col-md-4 animated pulse bounce"
          v-for="(item, index) in posts.items"
          :key="index"
        >
          <!-- <img
              class="bd-placeholder-img card-img-top"
              :src="item.data.cover.url"
              :alt="item.data.cover.alt"
          >-->
          <div class="card-body">
            <h5 class="card-title">
              <a :href="item.url" target="_blank">{{ item.title }}</a>
            </h5>
          </div>
        </div>
      </div>
      <!-- <a href="https://medium.com/@hvekriya/has-recommended">View all</a> -->
    </div>
  </div>
</template>

<script>
import feed from "rss-to-json";
export default {
  name: "MediumClaps",
  data() {
    return {
      posts: ""
    };
  },
  methods: {
    getMediumData() {
      feed.load(
        "https://cors-anywhere.herokuapp.com/https://medium.com/feed/@hvekriya/has-recommended",
        (err, data) => {
          this.posts = data;
        }
      );
    }
  },
  created() {
    this.getMediumData();
  },
  beforeRouteUpdate(to, from, next) {
    this.getMediumData();
    next();
  }
};
</script>
