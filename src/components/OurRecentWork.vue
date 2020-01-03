<template>
  <!-- Portfolio Grid -->
  <section class="bg-light page-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">Our Recent Projects</h2>
          <h3 class="section-subheading text-muted">We have been busy just like you!</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4 animated pulse bounce">
          <a href="/project/calipsa">
            <div class="card mb-4 shadow mb-5 bg-white rounded">
              <img
                src="https://images.prismic.io/hvekriya%2F2d3796a1-6894-4a18-829a-d5cd76798cb4_calipsa+dashboard.gif?auto=compress,format"
                class="bd-placeholder-img card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">Dashboard</h5>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group w-100">
                    <a href="/our-work/calipsa" class="card-link">Read more</a>
                  </div>
                </div>
                <span class="badge badge-pill badge-light mt-2">UX/UI Design</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "OurRecentWork"
};
</script>
