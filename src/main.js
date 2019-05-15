import Vue from "vue";
import PrismicVue from "prismic-vue";
import linkResolver from "./prismic/link-resolver";
import htmlSerializer from "./prismic/html-serializer";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";

const accessToken =
  process.env.VUE_APP_PRISMIC ||
  "MC5YTkxnS2hBQUFQT0tjMXV6.77-977-977-9fO-_vWQK77-9I1rvv71WNe-_ve-_vX7vv71aSu-_ve-_vRcs77-9awVBFlnvv71WHg";

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

Vue.prototype.$scrollToTop = () => window.scrollTo(0, 0);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
