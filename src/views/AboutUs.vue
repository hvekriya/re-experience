<template>
  <main role="main">
    <!-- Header -->
    <header class="masthead">
      <div class="container">
        <div class="intro-text">
          <div class="intro-heading text-uppercase">About Us</div>
        </div>
      </div>
    </header>
    <div class="container">
      <div class="page-section col-lg-12">
        <div class="row">
          <h2>We are changing the way digital products are being using with latest trends and technology.</h2>
          <br />
          <p>
            Re-Experience is a London based Design Consulting Company focusing on creating meaningful experiences.
            We specialise in CMS Development, responsive websites, PWA, SEO, E-commerce, Accessibility and UX/UI Design.
            The company was founded in 2020 by Haresh Vekriya with the vision to help local businesses.
          </p>

          <p>
            We have been working with local businesses to educate them and get them on path to their digital journey.
            We have team of freelancers that will work with you and your users. Our process is simple. Identify problem,
            gather requirements, UX/UI Design, Deliver the project. We work in agile environment so you don’t have worry about little changes.
            We will work with you deliver great user experience to your users.
          </p>
        </div>
      </div>
      <ContactDetails />
    </div>
  </main>
</template>

<script>
import ContactDetails from "../components/ContactDetails";
export default {
  name: "AboutUs",
  components: {
    ContactDetails
  },
  data() {
    return {};
  }
};
</script>