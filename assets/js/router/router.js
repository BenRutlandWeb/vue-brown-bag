export default {
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/Home.js")
    },
    {
      path: "/about",
      name: "About",
      component: () => import("../views/About.js")
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("../views/Contact.js")
    },
    {
      path: "*",
      name: "404",
      component: () => import("../views/404.js")
    }
  ]
};
