import Vue from "vue";
import PrismicVue from "prismic-vue";
import linkResolver from "./prismic/link-resolver";
import htmlSerializer from "./prismic/html-serializer";
import App from "./App.vue";

import VueSessionStorage from "vue-sessionstorage";
Vue.use(VueSessionStorage);

import router from "./router";
import "./registerServiceWorker";
import moment from "moment";

const accessToken = process.env.VUE_APP_PRISMIC;

Vue.config.productionTip = false;

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver,
  htmlSerializer,
  apiOptions: {
    accessToken
  }
});

Vue.filter("readMore", function(text, length, suffix) {
  let newText = text
    .map(a => a.text)
    .filter(b => b)
    .join(" ");
  return newText.substring(0, length) + suffix;
});

Vue.filter("truncate", function(value) {
  if (value.length > 20) {
    value = value.substring(0, 17) + "...";
  }
  return value;
});

Vue.filter("formatDate", function(date) {
  return moment(date).format("MMMM Do YYYY");
});

Vue.prototype.$scrollToTop = () => window.scrollTo(0, 0);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
