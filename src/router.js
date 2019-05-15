import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

function loadView(view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: loadView("Home")
    },
    {
      path: "/project/:uid",
      name: "Project",
      component: loadView("Project")
    },
    {
      path: "/experience",
      name: "Experience",
      component: loadView("Experience")
    },
    {
      path: "/skills",
      name: "Skills",
      component: loadView("Skills")
    },
    {
      path: "/not-found",
      name: "not-found",
      component: loadView("NotFound")
    },
    {
      path: "*",
      redirect: {
        name: "not-found"
      }
    }
  ]
});
