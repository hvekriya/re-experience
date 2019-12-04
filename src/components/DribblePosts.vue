<template>
  <div class="album">
    <div class="container">
      <p class="h2 pb-4">Latest on my Dribble</p>
      <div class="row mb-4" id="shots">
        <template v-for="(item, index) in posts">
          <a class="shot" target="_blank" :href="item.html_url" :title="item.title">
            <div class="title">{{item.title}}</div>
            <img class="rounded" :src="item.images.hidpi" />
          </a>
        </template>
      </div>
      <!-- <a href="www.dribble.com/hvekriya" class="btn mt-4 mb-4">View more on Dribble</a> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DribblePosts",
  data() {
    return {
      posts: ""
    };
  },
  methods: {
    getBlogPosts() {
      axios
        .get(
          `https://api.dribbble.com/v2/user/shots?access_token=${process.env.VUE_APP_DRIBBLE}`
        )
        .then(response => (this.posts = response.data));
    }
  },
  created() {
    this.getBlogPosts();
  }
};
</script>
