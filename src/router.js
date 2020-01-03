import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

function loadView(view) {
    return () =>
        import ( /* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`);
}

export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            name: "Home",
            component: loadView("Home")
        },
        {
            path: "/our-work",
            name: "OurWork",
            component: loadView("OurWork")
        },
        {
            path: "/about-us",
            name: "AboutUs",
            component: loadView("AboutUs")
        },
        {
            path: "/blog",
            name: "Blog",
            component: loadView("Blog")
        },
        {
            path: "/contact-us",
            name: "ContactUs",
            component: loadView("ContactUs")
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