<template>
  <div id="app" v-bind:class="{ 'theme-dark' : mode }">
    <Header @nightMode-toggle="nightMode" />
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <router-view />
    </transition>
    <footer class="text-muted mt-4">
      <div class="container">
        <p class="float-right">
          <a href="#">Back to top</a>
        </p>
        <p>
          Developed using Vue.js, Prismic.io and Bootstrap by Haresh Vekriya
          <!-- <script>
            var CurrentYear = new Date().getFullYear();
            document.write(CurrentYear);
          </script>-->
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import auth from "./auth";
export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {
      mode: this.$session.get("nightMode") || false,
      loggedIn: auth.loggedIn()
    };
  },
  methods: {
    // Gets the nightmode toggle information from the child component
    nightMode: function(params) {
      this.mode = params;
    }
  },
  created() {
    auth.onChange = loggedIn => {
      this.loggedIn = loggedIn;
    };
  }
};
</script>

<style lang="sass">
  @import "./assets/styles/main.scss";

</style>