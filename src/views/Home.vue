<template>
  <main role="main">
    <!-- Header -->
    <header class="masthead">
      <div class="container">
        <div class="intro-text">
          <div class="intro-lead-in">Welcome to ReExperience!</div>
          <div class="intro-heading text-uppercase">We are very excited to work with you.</div>
          <a class="btn btn-primary btn-xl text-uppercase" href="/contact">Get in touch</a>
        </div>
      </div>
    </header>
    <OurServices />
    <OurRecentWork />
    <Clients />
  </main>
</template>

<script>
import OurRecentWork from "../components/OurRecentWork";
import OurServices from "../components/OurServices";
import Clients from "../components/Clients";
export default {
  name: "Home",
  components: {
    OurRecentWork,
    OurServices,
    Clients
  },
  data() {
    return {};
  }
};
</script>
