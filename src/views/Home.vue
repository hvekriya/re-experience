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
    <!-- <Clients /> -->
    <!-- Contact Section -->
    <section class="page-section" id="contact">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h2 class="mt-0">Get in touch with us now</h2>
            <hr class="divider my-4" />
            <p
              class="text-muted mb-5"
            >Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
            <i class="fas fa-phone fa-3x mb-3 text-muted"></i>
            <div>
              <a href="tel:+447412899041">+44 74128 99041</a>
            </div>
          </div>
          <div class="col-lg-4 mr-auto text-center">
            <i class="fas fa-envelope fa-3x mb-3 text-muted"></i>
            <!-- Make sure to change the email address in anchor text AND the link below! -->
            <a class="d-block" href="mailto:haresh.vekriya@gmail.com">haresh.vekriya@gmail.com</a>
          </div>
        </div>
      </div>
    </section>
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
