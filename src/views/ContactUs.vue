<template>
  <main role="main">
    <!-- Header -->
    <header class="masthead">
      <div class="container">
        <div class="intro-text">
          <div class="intro-heading text-uppercase">Contact Us</div>
        </div>
      </div>
    </header>
    <ContactDetails />
    <!-- Contact -->
    <section class="page-section" id="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <form id="contactForm" role="form" method="POST" @submit.prevent="sendEmail">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      class="form-control"
                      id="name"
                      v-model="name"
                      type="text"
                      placeholder="Your Name *"
                      required="required"
                      data-validation-required-message="Please enter your name."
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      id="email"
                      v-model="email"
                      type="email"
                      placeholder="Your Email *"
                      required="required"
                      data-validation-required-message="Please enter your email address."
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                  <div class="form-group">
                    <input
                      class="form-control"
                      id="phone"
                      v-model="phone"
                      type="tel"
                      placeholder="Your Phone *"
                      required="required"
                      data-validation-required-message="Please enter your phone number."
                    />
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      id="message"
                      v-model="message"
                      placeholder="Your Message *"
                      required="required"
                      data-validation-required-message="Please enter a message."
                    ></textarea>
                    <p class="help-block text-danger"></p>
                  </div>
                </div>
                <div class="col-md-6">
                  <!--LOADING MESSAGE-->
                  <div v-if="loadingTxt">
                    <p class="mb-8 text-success">Delivering your email...</p>
                  </div>
                  <div v-if="success">
                    <p
                      class="mb-8 text-success"
                    >Email sent! We will get back to you as soon as possible!</p>
                  </div>
                </div>
                <div class="col-md-6">
                  <!--SUBMIT BUTTON-->
                  <button
                    type="submit"
                    class="btn btn-primary"
                    style="width:100%;"
                    :disabled="!name || !email || !message"
                  >Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ContactDetails from "../components/ContactDetails";
import axios from "axios";

export default {
  name: "ContactUs",
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      message: "",
      loadingTxt: false,
      success: false
    };
  },
  components: {
    ContactDetails
  },
  methods: {
    sendEmail() {
      this.loadingTxt = true;
      axios
        .post("https://formspree.io/mdowezpe", {
          name: this.name,
          from: this.email,
          _subject: `${this.name} | Via Re-Experience`,
          phone: this.phone,
          message: this.message
        })
        .then(response => {
          this.name = "";
          this.email = "";
          this.phone = "";
          this.message = "";
          this.loadingTxt = false;
          //i redirect my app to '/success' route once payload completed.
          this.$router.push({ path: "/contact-us" });
          this.success = true;
        })
        .catch(error => {
          if (error.response) {
            alert(error.response.data); // => the response payload
          }
        });
    }
  }
};
</script>