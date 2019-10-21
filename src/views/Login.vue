<template>
  <main role="main">
    <section
      class="jumbotron text-center text-white"
      v-bind:style="{ backgroundImage: 'url(' + this.cover.url + ')' }"
    >
      <div class="container animated pulse pulse">
        <h1 class="jumbotron-heading">Login</h1>
        <p class="lead">To see protected projects.</p>
        <p>
          <a href="/" class="btn m-2">
            <span class="fas fa-arrow-alt-circle-left"></span> Back to home
          </a>
        </p>
      </div>
    </section>
    <div class="container">
      <center>
        <form class="form-signin col-6" @submit.prevent="checkForm">
          <h1 class="h3 mb-3 font-weight-normal">Sign in</h1>
          <label for="inputPassword" class="sr-only">Password</label>
          <input
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            v-model="password"
            required
          />
          <div v-if="errors.length" class="text-danger">
            <p v-for="error in errors">{{ error }}</p>
          </div>
          <br />
          <input class="btn btn-primary btn-block" type="submit" value="Submit" />
        </form>
      </center>
    </div>
  </main>
</template>

<script>
import auth from "../auth";
export default {
  name: "Login",
  data() {
    return {
      cover: {
        url:
          "https://images.unsplash.com/flagged/photo-1551301622-6fa51afe75a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      },
      password: null,
      errors: []
    };
  },
  methods: {
    checkForm() {
      auth.login(this.password, loggedIn => {
        this.errors = [];
        if (!loggedIn) {
          if (!this.password) {
            this.errors.push("Password is required.");
          } else if (this.password !== this.passwordCheck) {
            this.errors.push("Password is incorrect.");
          }
        } else {
          this.$router.replace(this.$route.query.redirect || "/");
        }
      });
    }
  }
};
</script>

<style scoped>
form {
  padding: 10%;
}
li {
  list-style: none;
}
</style>
