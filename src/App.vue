<template>
  <div id="app">
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
export default {
  name: "App"
};
</script>

<style lang="sass">
  @import "./assets/styles/main.scss";

</style>