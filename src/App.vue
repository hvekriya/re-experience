<template>
  <div id="app" v-bind:class="{ 'theme-dark' : mode }">
    <Header @nightMode-toggle="nightMode"/>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {
      mode: false
    };
  },
  methods: {
    // Gets the nightmode toggle information from the child component
    nightMode: function(params) {
      this.mode = params;
    }
  }
};
</script>

<style lang="sass">
  @import "./assets/styles/main.scss";

</style>