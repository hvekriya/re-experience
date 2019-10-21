import Vue from "vue";
import Router from "vue-router";
import auth from "@/auth";
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
      path: "/blog",
      name: "Blog",
      component: loadView("Blog")
    },
    {
      path: "/project/:uid",
      name: "Project",
      component: loadView("Project"),
      beforeEnter: requireAuth
    },
    {
      path: "/blog/post/:uid",
      name: "Post",
      component: loadView("Post")
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
      path: "/login",
      name: "Login",
      component: loadView("Login")
    },
    {
      path: "/not-found",
      name: "not-found",
      component: loadView("NotFound")
    },
    {
      path: "/preview",
      name: "Preview",
      component: loadView("Preview")
    },
    {
      path: "*",
      redirect: {
        name: "not-found"
      }
    }
  ]
});

function requireAuth(to, from, next) {
  if (!auth.loggedIn() && to.path === "/project/nca") {
    next({
      path: "/login",
      query: { redirect: to.fullPath }
    });
  } else {
    next();
  }
}
